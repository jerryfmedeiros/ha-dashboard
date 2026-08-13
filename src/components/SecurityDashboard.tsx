import { useEffect, useState } from 'react';
import { CameraCard } from '@hakit/components';
import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import { GlassCard, BigMetric } from '../components/MetricUi';
import * as styles from '../styles/SecurityDashboard.styles';
import { accent, alpha, danger, fill, ink, muted, shade, success, warning } from '../styles/tokens';
import { PinPad } from './PinPad';

const SECURITY_CAMERAS = [
  { entity: 'camera.reolink_video_doorbell_camera_fluent', label: 'Doorbell' },
  { entity: 'camera.back_door_fluent', label: 'Back Door' },
  { entity: 'camera.front_yard_fluent', label: 'Front Yard' },
  { entity: 'camera.back_yard_fluent', label: 'Back Yard' },
] as const;

type SecurityCamera = (typeof SECURITY_CAMERAS)[number]['entity'];

/** How long to wait for HA to report 'disarmed' before calling the PIN wrong. */
const DISARM_TIMEOUT_MS = 3000;

export function SecurityDashboard() {
  const alarm = useEntity('alarm_control_panel.house');
  // No hand-written service interface / `as unknown as` cast here. That cast is
  // what allowed `alarmDisarm({ code })` to compile — hakit expects the payload
  // under `serviceData`, so the code was never actually sent and every disarm
  // silently failed.
  const alarmService = alarm.service;
  const state = alarm.state || 'disarmed';

  // Perimeter Entities
  const frontLock = useEntity('lock.front_door');
  const frontDoor = useEntity('binary_sensor.main_entrance_door_sensor_contact_door');
  const backLock = useEntity('lock.back_door');
  const backDoor = useEntity('binary_sensor.backyard_door_sensor_contact_door');
  const sorentoLock = useEntity('lock.sorento_uma_ex_v6_premium_door_lock');
  const garageCover = useEntity('cover.garage_door');
  const manDoor = useEntity('binary_sensor.garage_man_door_sensor_contact_door');

  // Modal States
  const [expandedCamera, setExpandedCamera] = useState<SecurityCamera | null>(null);
  const [showAlarmModal, setShowAlarmModal] = useState(false);

  // Status Logic
  const isTriggered = state === 'triggered';
  const isArmed = state.includes('armed');
  const isArming = state === 'arming' || state === 'pending';
  const statusColor = isTriggered ? danger : isArmed ? success : accent;

  const getStatusText = () => {
    if (isTriggered) return 'ALARM TRIGGERED';
    if (isArming) return 'ARMING...';
    if (isArmed) return state.replace('_', ' ').toUpperCase();
    return 'DISARMED';
  };

  const getStatusIcon = () => {
    if (isTriggered) return 'mdi:shield-alert';
    if (isArmed) return 'mdi:shield-check';
    return 'mdi:shield-off';
  };

  // Disarm flow. The service call is fire-and-forget — HA reports a bad code by
  // simply not changing state — so we submit, then watch `alarm.state` and treat
  // "still armed after DISARM_TIMEOUT_MS" as a rejected PIN. window.prompt gave
  // no feedback at all: a wrong code looked identical to a correct one.
  const [showPinPad, setShowPinPad] = useState(false);
  const [pinPending, setPinPending] = useState(false);
  const [pinError, setPinError] = useState<string | null>(null);

  const disarmed = state === 'disarmed';

  // Success is *derived*, not synced: once a submitted code lands and the panel
  // reports disarmed, the pad simply stops rendering. Gated on `pinPending` so
  // opening the pad while already disarmed still works. Only the failure path
  // needs a timer, and its setState happens in the timeout callback rather than
  // the effect body.
  const pinPadOpen = showPinPad && !(pinPending && disarmed);

  useEffect(() => {
    if (!pinPending || disarmed) return;
    const id = setTimeout(() => {
      setPinPending(false);
      setPinError('Incorrect PIN');
    }, DISARM_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [pinPending, disarmed]);

  const openPinPad = () => {
    setPinPending(false);
    setPinError(null);
    setShowPinPad(true);
  };

  const handlePinSubmit = (code: string) => {
    setPinError(null);
    setPinPending(true);
    alarmService.alarmDisarm({ serviceData: { code } });
  };

  return (
    <div style={styles.dashboardWrapperStyle}>
      <div style={styles.headerWrapperStyle}>
        <div style={styles.perimeterStatusStyle}>Perimeter Status</div>
        <div style={styles.mainTitleStyle}>Security Overview</div>
      </div>

      <div style={styles.macroLayoutStyle}>
        {/* CAMERA GRID */}
        <div style={{ ...styles.cameraGridStyle, flex: 1.8 }}>
          {SECURITY_CAMERAS.map(cam => (
            <div
              key={cam.entity}
              style={{ ...styles.cameraWrapperStyle, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setExpandedCamera(cam.entity)}
            >
              {/* THE FIX: Click catcher overlay ensures the div's onClick fires */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 10 }} />

              <CameraCard hideName entity={cam.entity} view='motion' hideFooter hideViewControls style={styles.cameraCardStyle} />

              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '8px',
                  zIndex: 11,
                  backgroundColor: shade.dark,
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  color: ink.primary,
                }}
              >
                {cam.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* DATA COLUMN */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
          <div onClick={() => setShowAlarmModal(true)} style={{ cursor: 'pointer' }}>
            <GlassCard title='Alarm System' statusColor={isTriggered ? alpha(danger, 0.4) : fill.hairline}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${statusColor}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon icon={getStatusIcon()} style={{ fontSize: '1.8rem', color: statusColor }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: ink.primary }}>{getStatusText()}</span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, color: ink.muted }}>TAP TO MANAGE PERIMETER</span>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard title='House Perimeter'>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon={frontLock.state === 'locked' ? 'mdi:lock' : 'mdi:lock-open-variant'}
                label='Front Lock'
                value={frontLock.state}
                color={frontLock.state === 'locked' ? success : warning}
              />
              <BigMetric
                icon='mdi:door'
                label='Front Door'
                value={frontDoor.state === 'on' ? 'Open' : 'Closed'}
                color={frontDoor.state === 'on' ? danger : muted}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon={backLock.state === 'locked' ? 'mdi:lock' : 'mdi:lock-open-variant'}
                label='Back Lock'
                value={backLock.state}
                color={backLock.state === 'locked' ? success : warning}
              />
              <BigMetric
                icon='mdi:door'
                label='Back Door'
                value={backDoor.state === 'on' ? 'Open' : 'Closed'}
                color={backDoor.state === 'on' ? danger : muted}
              />
            </div>
          </GlassCard>

          <GlassCard title='Garage & Auto'>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon='mdi:car'
                label='Sorento'
                value={sorentoLock.state === 'locked' ? 'Locked' : 'Unlocked'}
                color={sorentoLock.state === 'locked' ? success : warning}
              />
              <BigMetric
                icon='mdi:garage'
                label='Garage'
                value={garageCover.state}
                color={garageCover.state === 'closed' ? muted : warning}
              />
              <BigMetric
                icon='mdi:door'
                label='Man Door'
                value={manDoor.state === 'on' ? 'Open' : 'Closed'}
                color={manDoor.state === 'on' ? danger : muted}
              />
            </div>
          </GlassCard>
        </div>
      </div>

      {/* FULLSCREEN CAMERA MODAL */}
      {expandedCamera && (
        <div style={{ ...styles.modalOverlayStyle, zIndex: 999 }} onClick={() => setExpandedCamera(null)}>
          <div style={styles.modalContentStyle} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButtonStyle} onClick={() => setExpandedCamera(null)}>
              <Icon icon='mdi:close' style={{ fontSize: '1.5rem' }} />
            </button>
            <CameraCard
              entity={expandedCamera}
              view='live'
              hideFooter
              hideViewControls
              hideName
              style={{ width: '100%', height: '100%', borderRadius: '24px', border: 'none' }}
            />
          </div>
        </div>
      )}

      {/* ALARM CONTROL MODAL */}
      {showAlarmModal && (
        <div style={{ ...styles.modalOverlayStyle, zIndex: 999 }} onClick={() => setShowAlarmModal(false)}>
          <div style={styles.alarmModalContentStyle} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButtonStyle} onClick={() => setShowAlarmModal(false)}>
              <Icon icon='mdi:close' style={{ fontSize: '1.5rem' }} />
            </button>
            <div style={styles.alarmModalHeaderStyle}>Alarmo Controls</div>
            <div style={{ textAlign: 'center', marginBottom: '16px', color: statusColor, fontWeight: 800, fontSize: '0.85rem' }}>
              CURRENT STATUS: {getStatusText()}
            </div>
            <button
              style={styles.alarmButtonStyle('arm')}
              onClick={() => {
                alarmService.alarmArmHome();
                setShowAlarmModal(false);
              }}
            >
              <Icon icon='mdi:shield-home' style={{ fontSize: '1.5rem' }} /> Arm Home
            </button>
            <button
              style={styles.alarmButtonStyle('arm')}
              onClick={() => {
                alarmService.alarmArmAway();
                setShowAlarmModal(false);
              }}
            >
              <Icon icon='mdi:shield-lock' style={{ fontSize: '1.5rem' }} /> Arm Away
            </button>
            <button style={styles.alarmButtonStyle('disarm')} onClick={openPinPad}>
              <Icon icon='mdi:shield-off' style={{ fontSize: '1.5rem' }} /> Disarm System
            </button>
          </div>
        </div>
      )}

      {/* PIN ENTRY — sits above the alarm modal so cancelling returns to it. */}
      {pinPadOpen && (
        <div
          style={{ ...styles.modalOverlayStyle, zIndex: 1000 }}
          onClick={() => {
            if (!pinPending) setShowPinPad(false);
          }}
        >
          <div style={styles.pinPadContentStyle} onClick={e => e.stopPropagation()}>
            <PinPad
              title='Disarm System'
              subtitle={getStatusText()}
              error={pinError}
              pending={pinPending}
              onSubmit={handlePinSubmit}
              onCancel={() => {
                setShowPinPad(false);
                setPinError(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
