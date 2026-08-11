import { useEffect, useState } from 'react';
import { useHass } from '@hakit/core';
import { Icon } from '@iconify/react';

// Sits at the foot of the sidebar on every dashboard. The point is to make a
// dead link visually distinct from healthy data: without it, stale values and
// "all clear" look identical, which is the wrong failure mode for the
// smoke/leak badges.
//
// IMPORTANT: hakit's `connectionStatus` is NOT a connectivity signal. Reading
// handleSuspendResume.js, it only ever emits 'connected'/'disconnected' once at
// init, then 'pending-suspension'/'suspended'/'connected' around page
// visibility. Nothing listens to the socket's own disconnect event, so after
// startup it will happily keep reporting 'connected' through a total network
// outage. It is used here purely to know when a suspension is deliberate.
//
// Real connectivity is therefore established two ways:
//
//  1. `connection.connected` — literally `socket.readyState === OPEN`. Polled,
//     because nothing pushes us this change. Catches a genuinely closed socket.
//
//  2. An active ping. Neither hakit nor home-assistant-js-websocket sends a
//     heartbeat, so a half-open socket (tablet WiFi drops, DevTools offline)
//     stays OPEN for minutes while no data flows. Only a round-trip catches it.

const SOCKET_CHECK_MS = 3_000;
const PING_INTERVAL_MS = 10_000;
const PING_TIMEOUT_MS = 5_000;

type Presentation = {
  icon: string;
  label: string;
  color: string;
  /** Faults pulse, expand, and show how long they have been failing. */
  isFault?: boolean;
};

const PRESENTATION: Record<string, Presentation> = {
  connected: { icon: 'mdi:lan-connect', label: 'LIVE', color: '#4caf50' },
  syncing: { icon: 'mdi:sync', label: 'SYNC', color: '#03a9f4' },
  pending: { icon: 'mdi:lan-pending', label: 'CONN', color: '#ff9800' },
  'pending-suspension': { icon: 'mdi:pause-circle-outline', label: 'IDLE', color: '#71717a' },
  suspended: { icon: 'mdi:pause-circle-outline', label: 'IDLE', color: '#71717a' },
  disconnected: { icon: 'mdi:lan-disconnect', label: 'OFFLINE', color: '#f44336', isFault: true },
  // Socket claims to be open but pings are not coming back.
  stale: { icon: 'mdi:lan-disconnect', label: 'NO DATA', color: '#f44336', isFault: true },
};

const formatOutage = (ms: number) => {
  const secs = Math.floor(ms / 1000);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m`;
  return `${Math.floor(mins / 60)}h${mins % 60}m`;
};

export function ConnectionStatus() {
  const connectionStatus = useHass(s => s.connectionStatus);
  const ready = useHass(s => s.ready);
  const connection = useHass(s => s.connection);

  // 'ok' | 'closed' (socket really shut) | 'stale' (open but unresponsive)
  const [link, setLink] = useState<'ok' | 'closed' | 'stale'>('ok');

  const isSuspended = connectionStatus === 'suspended' || connectionStatus === 'pending-suspension';

  useEffect(() => {
    // A deliberately suspended socket is not a fault — don't probe it.
    if (isSuspended || !connection) return;

    let cancelled = false;
    let lastPing = 0;
    let inFlight = false;

    const tick = async () => {
      if (cancelled) return;

      // Cheap synchronous check first. This is what catches a genuinely closed
      // socket, which connectionStatus never reports.
      if (!connection.connected) {
        setLink('closed');
        return;
      }

      // Socket claims OPEN. Only a round-trip can prove data still flows.
      const now = Date.now();
      if (inFlight || now - lastPing < PING_INTERVAL_MS) return;
      lastPing = now;
      inFlight = true;
      try {
        await Promise.race([
          connection.ping(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('ping timeout')), PING_TIMEOUT_MS)),
        ]);
        if (!cancelled) setLink('ok');
      } catch {
        if (!cancelled) setLink(connection.connected ? 'stale' : 'closed');
      } finally {
        inFlight = false;
      }
    };

    void tick();
    const id = setInterval(() => void tick(), SOCKET_CHECK_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [isSuspended, connection]);

  // connectionStatus only describes the suspend/resume lifecycle — it does not
  // report real connectivity — so the link probe wins whenever it sees trouble.
  let key: string = connectionStatus;
  if (isSuspended) {
    key = connectionStatus;
  } else if (link === 'closed') {
    key = 'disconnected';
  } else if (link === 'stale') {
    key = 'stale';
  } else if (connectionStatus === 'connected' && !ready) {
    key = 'syncing';
  }
  const view = PRESENTATION[key] ?? PRESENTATION.pending;

  // The outage start is captured in the effect closure, and only the interval
  // callback writes state — keeping render pure and avoiding a synchronous
  // setState in the effect body. The timer runs only while faulted, so the
  // healthy path never re-renders on a schedule.
  const [outage, setOutage] = useState<string | null>(null);

  useEffect(() => {
    if (!view.isFault) return;
    const start = Date.now();
    const id = setInterval(() => setOutage(formatOutage(Date.now() - start)), 1000);
    return () => clearInterval(id);
  }, [view.isFault]);

  // `outage` is intentionally not cleared on recovery (that would mean a
  // synchronous setState in the effect body), so gate on the live fault flag.
  const outageLabel = view.isFault ? outage : null;

  return (
    <div
      role='status'
      aria-live='polite'
      aria-label={`Home Assistant connection: ${view.label}`}
      title={`Home Assistant: ${view.label} (socket ${link}, lifecycle ${connectionStatus})${outageLabel ? ` for ${outageLabel}` : ''}`}
      style={{
        marginTop: 'auto',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px',
        // Healthy state is deliberately tiny so it costs almost no sidebar
        // height on a small tablet; only a fault expands into a full badge.
        padding: view.isFault ? '5px 2px' : '0',
        borderRadius: '10px',
        width: view.isFault ? '44px' : '14px',
        height: view.isFault ? 'auto' : '14px',
        boxSizing: 'border-box',
        backgroundColor: view.isFault ? 'rgba(244, 67, 54, 0.15)' : 'transparent',
        border: view.isFault ? '1px solid rgba(244, 67, 54, 0.45)' : 'none',
        animation: view.isFault ? 'conn-fault-pulse 1.6s ease-in-out infinite' : undefined,
        // Deliberately no CSS transition anywhere on this element. Chrome stalls
        // transitions in background tabs, which left the badge rendering at its
        // pre-fault width and with a transparent background — i.e. the fault
        // state silently failed to appear. A fault must snap in, not animate.
      }}
    >
      <style>{`
        @keyframes conn-fault-pulse {
          0%, 100% { box-shadow: 0 0 4px rgba(244, 67, 54, 0.25); }
          50% { box-shadow: 0 0 14px rgba(244, 67, 54, 0.7); }
        }
        @keyframes conn-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {view.isFault ? (
        <>
          <Icon icon={view.icon} style={{ fontSize: '15px', color: view.color }} />
          <span style={{ fontSize: '0.4rem', fontWeight: 800, letterSpacing: '0.3px', color: view.color }}>{view.label}</span>
          {outageLabel && <span style={{ fontSize: '0.4rem', fontWeight: 700, color: view.color, opacity: 0.75 }}>{outageLabel}</span>}
        </>
      ) : (
        // Healthy / transitional: a bare dot. Detail lives in the tooltip.
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: view.color,
            opacity: key === 'connected' ? 0.55 : 0.9,
            animation: key === 'syncing' ? 'conn-spin 1.2s linear infinite' : undefined,
            boxShadow: key === 'connected' ? 'none' : `0 0 6px ${view.color}`,
          }}
        />
      )}
    </div>
  );
}
