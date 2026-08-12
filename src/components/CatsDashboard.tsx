import React, { useState, useEffect, useRef } from 'react';
import { CameraCard } from '@hakit/components';
import { useEntity } from '@hakit/core';
import type { HassEntityWithService } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/CatsDashboard.styles';
import { BigMetric, GlassCard } from './MetricUi';
import { formatScaled, formatWithUnit } from '../utils/format';
import { accent, alpha, danger, fill, ink, success, violet, warning } from '../styles/tokens';

// ==========================================
// TYPES & HELPER COMPONENTS
// ==========================================
type CameraEntity = 'camera.feeding_area_camera' | 'camera.litter_box_area_camera';

const SliderRowCompact = ({
  icon,
  entityObj,
  onDispense,
}: {
  icon: string;
  entityObj: HassEntityWithService<'number'> | undefined;
  onDispense: () => void;
}) => {
  const [dragValue, setDragValue] = useState<number | null>(null);
  if (!entityObj) return null;
  const displayValue = dragValue !== null ? dragValue : entityObj.state || 1;

  const handleCommit = (e: React.SyntheticEvent<HTMLInputElement>) => {
    // HA's number.set_value takes the value as a string, not a number.
    entityObj.service.setValue({ serviceData: { value: e.currentTarget.value } });
    setDragValue(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: fill.hairline,
        padding: '4px 10px',
        borderRadius: '10px',
        marginTop: '4px',
      }}
    >
      <Icon icon={icon} style={{ fontSize: '1rem', opacity: 0.5 }} />
      <input
        type='range'
        min={1}
        max={10}
        step={1}
        value={displayValue}
        onChange={e => setDragValue(Number(e.target.value))}
        onMouseUp={handleCommit}
        onTouchEnd={handleCommit}
        style={{ flex: 1, height: '3px', cursor: 'pointer' }}
      />
      <span style={{ fontSize: '0.65rem', minWidth: '30px', fontWeight: 800 }}>{displayValue}pt</span>
      <div
        onClick={onDispense}
        style={{ cursor: 'pointer', padding: '4px', borderRadius: '6px', background: alpha(success, 0.2), display: 'flex' }}
      >
        <Icon icon='mdi:bowl-mix' style={{ color: success, fontSize: '1rem' }} />
      </div>
    </div>
  );
};

export function CatsDashboard() {
  // --- ENTITIES ---
  const feederEmpty = useEntity('binary_sensor.pet_feeder_empty_food');
  const feederPortion = useEntity('number.pet_feeder_manual_feed');
  const feedBtn = useEntity('button.pet_feeder_quick_feed');
  const fountainWater = useEntity('sensor.smart_fountain_water_level');
  const fountainFilter = useEntity('sensor.smart_fountain_filter_life');
  const fountainPump = useEntity('sensor.smart_fountain_pump_cleaning_due');

  const litterState = useEntity('sensor.cat_litter_state');
  const litterBin = useEntity('sensor.litter_box_bin_state');
  const litterCycles = useEntity('counter.litter_box_waste_cycles');

  const litterState2 = useEntity('sensor.jq01009g24410010959_cat_litter_state');
  const litterBin2 = useEntity('sensor.jq01009g24410010959_bin_state');
  const litterCycles2 = useEntity('counter.litter_box_2_waste_cycles');

  const cleanBtn = useEntity('button.litter_clean');
  const cleanBtn2 = useEntity('button.jq01009g24410010959_clean');
  const levelBtn = useEntity('button.litter_level');
  const levelBtn2 = useEntity('button.jq01009g24410010959_level');

  const occupancyLitter = useEntity('binary_sensor.litter_box_occupancy_sensor');
  const occupancyFeeding = useEntity('binary_sensor.feeding_area_presence_sensor_occupancy');

  const ozzyLitter = useEntity('sensor.ozzy_visits_today');
  const ozzyFood = useEntity('sensor.ozzy_food_visits_today');
  const ozzyWater = useEntity('sensor.ozzy_water_visits_today');
  const doloresLitter = useEntity('sensor.dolores_visits_today');
  const doloresFood = useEntity('sensor.dolores_food_visits_today');
  const doloresWater = useEntity('sensor.dolores_water_visits_today');

  const [popupCamera, setPopupCamera] = useState<CameraEntity | null>(null);

  const prevOccupancyFeeding = useRef(false);
  const prevOccupancyLitter = useRef(false);

  // Auto-expand cameras when motion is detected
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const isFeeding = occupancyFeeding?.state === 'on';
      const isLitter = occupancyLitter?.state === 'on';

      // RISING EDGES (Opening)
      if (isFeeding && !prevOccupancyFeeding.current) {
        setPopupCamera('camera.feeding_area_camera');
      } else if (isLitter && !prevOccupancyLitter.current) {
        setPopupCamera('camera.litter_box_area_camera');
      }

      // FALLING EDGES (Closing)
      if (!isFeeding && prevOccupancyFeeding.current) {
        setPopupCamera(curr => (curr === 'camera.feeding_area_camera' ? null : curr));
      }
      if (!isLitter && prevOccupancyLitter.current) {
        setPopupCamera(curr => (curr === 'camera.litter_box_area_camera' ? null : curr));
      }

      prevOccupancyFeeding.current = isFeeding;
      prevOccupancyLitter.current = isLitter;
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [occupancyFeeding?.state, occupancyLitter?.state]);

  return (
    <div style={{ ...styles.containerStyle, height: '100vh', overflow: 'hidden', padding: '8px 12px' }}>
      <div style={{ ...styles.headerContainerStyle, marginBottom: '6px' }}>
        <div style={styles.headerSubtitleStyle}>Feline Operations</div>
        <div style={styles.headerTitleStyle}>Cats Dashboard</div>
      </div>

      {/* CLICKABLE CAMERA ROW */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', height: '140px' }}>
        {/* Camera 01 - Feeding Area */}
        <div style={{ flex: 1, cursor: 'pointer', position: 'relative' }} onClick={() => setPopupCamera('camera.feeding_area_camera')}>
          {/* Click Catcher Overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
          <CameraCard
            entity='camera.feeding_area_camera'
            hideName
            hideFooter
            view='motion'
            style={{ width: '100%', height: '100%', borderRadius: '12px' }}
          />
        </div>

        {/* Camera 02 - Litter Area */}
        <div style={{ flex: 1, cursor: 'pointer', position: 'relative' }} onClick={() => setPopupCamera('camera.litter_box_area_camera')}>
          {/* Click Catcher Overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
          <CameraCard
            entity='camera.litter_box_area_camera'
            hideName
            hideFooter
            view='motion'
            style={{ width: '100%', height: '100%', borderRadius: '12px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.8fr', gap: '8px', alignItems: 'start' }}>
        {/* COL 1: FEEDING, WATER & PRESENCE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <GlassCard title='Feeding & Presence'>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '6px' }}>
              <BigMetric
                icon='mdi:tray-alert'
                label='Hopper'
                value={feederEmpty?.state === 'on' ? 'Empty' : 'OK'}
                color={feederEmpty?.state === 'on' ? danger : success}
              />
              <BigMetric icon='mdi:water-percent' label='Water' value={formatScaled(fountainWater?.state, 1000, 1)} color={accent} />
              <BigMetric icon='mdi:air-filter' label='Filter' value={formatWithUnit(fountainFilter?.state, 'd')} color={violet} />
              <BigMetric icon='mdi:water-pump' label='Pump' value={formatWithUnit(fountainPump?.state, 'd')} color={warning} />
            </div>

            <div
              style={{ display: 'flex', gap: '4px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6px', marginBottom: '4px' }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: fill.card,
                  padding: '4px 8px',
                  borderRadius: '6px',
                }}
              >
                <Icon icon='mdi:silverware' style={{ color: occupancyFeeding?.state === 'on' ? warning : ink.ghost, fontSize: '0.9rem' }} />
                <span style={{ fontSize: '0.6rem', fontWeight: 800 }}>{occupancyFeeding?.state === 'on' ? 'BUSY' : 'CLEAR'}</span>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: fill.card,
                  padding: '4px 8px',
                  borderRadius: '6px',
                }}
              >
                <Icon icon='mdi:toilet' style={{ color: occupancyLitter?.state === 'on' ? warning : ink.ghost, fontSize: '0.9rem' }} />
                <span style={{ fontSize: '0.6rem', fontWeight: 800 }}>{occupancyLitter?.state === 'on' ? 'BUSY' : 'CLEAR'}</span>
              </div>
            </div>

            <SliderRowCompact icon='mdi:scale-balance' entityObj={feederPortion} onDispense={() => feedBtn.service.press()} />
          </GlassCard>
        </div>

        {/* COL 2: LITTER STATION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <GlassCard title='Litter Station'>
            <div style={{ fontSize: '0.55rem', opacity: 0.4, marginBottom: '2px', fontWeight: 800 }}>BOX 01 - MAIN</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr 0.9fr', gap: '4px', marginBottom: '8px' }}>
              <BigMetric icon='mdi:star-four-points' label='State' value={litterState?.state || '--'} color={accent} />
              <BigMetric
                icon='mdi:delete'
                label='Bin'
                value={litterBin?.state || '--'}
                color={litterBin?.state === 'full' ? danger : ink.primary}
              />
              <BigMetric icon='mdi:cached' label='Cycles' value={litterCycles?.state || '0'} color={warning} />
            </div>

            <div style={{ fontSize: '0.55rem', opacity: 0.4, marginBottom: '2px', fontWeight: 800 }}>BOX 02 - JQ01</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr 0.9fr', gap: '4px', marginBottom: '8px' }}>
              <BigMetric icon='mdi:star-four-points' label='State' value={litterState2?.state || '--'} color={accent} />
              <BigMetric
                icon='mdi:delete'
                label='Bin'
                value={litterBin2?.state || '--'}
                color={litterBin2?.state === 'full' ? danger : ink.primary}
              />
              <BigMetric icon='mdi:cached' label='Cycles' value={litterCycles2?.state || '0'} color={warning} />
            </div>

            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => {
                  cleanBtn.service.press();
                  cleanBtn2.service.press();
                }}
                style={{
                  flex: 1,
                  background: alpha(accent, 0.12),
                  border: '1px solid rgba(3,169,244,0.2)',
                  color: accent,
                  padding: '8px',
                  borderRadius: '8px',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                }}
              >
                CLEAN ALL
              </button>
              <button
                onClick={() => {
                  levelBtn.service.press();
                  levelBtn2.service.press();
                }}
                style={{
                  flex: 1,
                  background: alpha(warning, 0.12),
                  border: '1px solid rgba(255,152,0,0.2)',
                  color: warning,
                  padding: '8px',
                  borderRadius: '8px',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                }}
              >
                LEVEL ALL
              </button>
            </div>
          </GlassCard>
        </div>

        {/* COL 3: CAT ACTIVITY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <GlassCard title='Activity (Today)'>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px', marginBottom: '6px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 900, color: warning, marginBottom: '4px' }}>OZZY</div>
              <div style={{ display: 'flex', gap: '3px' }}>
                <BigMetric icon='mdi:toilet' label='Litter' value={ozzyLitter?.state || '0'} color='#8d6e63' />
                <BigMetric icon='mdi:bowl' label='Food' value={ozzyFood?.state || '0'} color={success} />
                <BigMetric icon='mdi:water' label='Water' value={ozzyWater?.state || '0'} color={accent} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 900, color: '#e91e63', marginBottom: '4px' }}>DOLORES</div>
              <div style={{ display: 'flex', gap: '3px' }}>
                <BigMetric icon='mdi:toilet' label='Litter' value={doloresLitter?.state || '0'} color='#8d6e63' />
                <BigMetric icon='mdi:bowl' label='Food' value={doloresFood?.state || '0'} color={success} />
                <BigMetric icon='mdi:water' label='Water' value={doloresWater?.state || '0'} color={accent} />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* FULLSCREEN CAMERA MODAL */}
      {popupCamera && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setPopupCamera(null)}
        >
          <div style={{ width: '90%', aspectRatio: '16/9', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => setPopupCamera(null)}
            >
              <Icon icon='mdi:close' style={{ fontSize: '2rem' }} />
            </button>
            <CameraCard
              entity={popupCamera}
              view='live'
              hideName
              hideFooter
              style={{ width: '100%', height: '100%', borderRadius: '16px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
