import { useEffect, useRef, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';

// 1. YOUR CONFIGURATION
const DASHBOARD_RULES = [
  {
    entityId: 'binary_sensor.litter_box_occupancy_sensor',
    targetView: 'cats',
    timeoutMs: 120000,
  },
  {
    entityId: 'binary_sensor.feeding_area_presence_sensor_occupancy',
    targetView: 'cats',
    timeoutMs: 120000,
  },
];

// ---------------------------------------------------------
// CONTROLLER LOGIC
// ---------------------------------------------------------

interface ControllerProps {
  activeView: string; // Matched to your App.tsx
  setActiveView: Dispatch<SetStateAction<string>>;
}

export function AutoDashboardController({ activeView, setActiveView }: ControllerProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Which rules are currently firing. Several rules can share one targetView
  // (both cat sensors point at 'cats'), so we only leave a view once EVERY
  // rule for it has cleared — otherwise one sensor going quiet would drag the
  // user away while the other is still active.
  const activeRulesRef = useRef<Set<string>>(new Set());

  // If the user manually clicks the sidebar to go to a different dashboard,
  // kill the timeout so we don't yank them back to the Overview randomly.
  useEffect(() => {
    const isAutoTriggeredView = DASHBOARD_RULES.some(rule => rule.targetView === activeView);
    if (!isAutoTriggeredView && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [activeView]);

  // Fired whenever any Watcher says "I just triggered!"
  const handleTrigger = useCallback(
    (entityId: string, targetView: string, timeoutMs: number) => {
      activeRulesRef.current.add(entityId);
      setActiveView(targetView);

      // Reset the central timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveView('overview');
      }, timeoutMs);
    },
    [setActiveView]
  );

  // Fired whenever any Watcher says "I just cleared!"
  const handleClear = useCallback(
    (entityId: string, targetView: string) => {
      activeRulesRef.current.delete(entityId);

      // Another sensor may still be holding this view open (e.g. the cat left
      // the litter box but is still at the feeder) — stay put if so.
      const stillHeld = DASHBOARD_RULES.some(rule => rule.targetView === targetView && activeRulesRef.current.has(rule.entityId));
      if (stillHeld) return;

      // Only return to overview if we are currently looking at the view that was triggered
      setActiveView(currentView => {
        if (currentView === targetView) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
          return 'overview';
        }
        return currentView;
      });
    },
    [setActiveView]
  );

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {DASHBOARD_RULES.map(rule => (
        <EntityWatcher
          key={rule.entityId}
          entityId={rule.entityId as EntityName}
          triggerState='on'
          onTrigger={() => handleTrigger(rule.entityId, rule.targetView, rule.timeoutMs)}
          onClear={() => handleClear(rule.entityId, rule.targetView)}
        />
      ))}
    </>
  );
}

// ---------------------------------------------------------
// INVISIBLE WATCHER COMPONENT
// ---------------------------------------------------------

interface WatcherProps {
  entityId: EntityName;
  triggerState: string;
  onTrigger: () => void;
  onClear: () => void;
}

function EntityWatcher({ entityId, triggerState, onTrigger, onClear }: WatcherProps) {
  const entity = useEntity(entityId);
  const prevState = useRef(entity?.state);

  useEffect(() => {
    const currentState = entity?.state;

    // Rising Edge
    if (prevState.current !== triggerState && currentState === triggerState) {
      onTrigger();
    }

    // Falling Edge
    if (prevState.current === triggerState && currentState !== triggerState) {
      onClear();
    }

    prevState.current = currentState;
  }, [entity?.state, triggerState, onTrigger, onClear]);

  return null;
}
