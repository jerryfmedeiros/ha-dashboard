import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/MainDashboard.styles';

interface CustomClimateCardProps {
  onClick: () => void;
}

export const CustomClimateCard = ({ onClick }: CustomClimateCardProps) => {
  const climate = useEntity('climate.nest_learning_thermostat_4th_gen');
  const { current_temperature, temperature, target_temp_low, target_temp_high, hvac_action } = climate.attributes;
  const currentTemp = current_temperature;
  const targetTemp = temperature;
  const targetLow = target_temp_low;
  const targetHigh = target_temp_high;
  const mode = climate.state;

  const isHeating = hvac_action === 'heating';
  const isCooling = hvac_action === 'cooling';

  const setMode = (e: React.MouseEvent, newMode: string) => {
    e.stopPropagation(); // ✋ This stops the popup from opening when clicking buttons
    climate.service.setHvacMode({ serviceData: { hvac_mode: newMode } });
  };

  const renderTargetTemp = () => {
    if (mode === 'heat_cool') {
      return (
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ color: '#ff5722' }}>{targetLow?.toFixed(0) ?? '--'}°</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>-</span>
          <span style={{ color: '#03a9f4' }}>{targetHigh?.toFixed(0) ?? '--'}°</span>
        </span>
      );
    }
    return `${targetTemp?.toFixed(0) ?? '--'}°`;
  };

  return (
    <div
      onClick={onClick}
      className='glass-card'
      style={{
        ...styles.climateContainerStyle,
        boxShadow: isHeating ? '0 0 20px rgba(255, 87, 34, 0.15)' : isCooling ? '0 0 20px rgba(3, 169, 244, 0.15)' : 'none',
        border: isHeating
          ? '1px solid rgba(255, 87, 34, 0.3)'
          : isCooling
            ? '1px solid rgba(3, 169, 244, 0.3)'
            : '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.5s ease',
      }}
    >
      <style>{`
        @keyframes climate-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div style={styles.climateHeaderStyle}>
        <div
          style={{
            ...styles.climateIconWrapperStyle,
            backgroundColor: isHeating ? 'rgba(255, 87, 34, 0.2)' : isCooling ? 'rgba(3, 169, 244, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            animation: isHeating || isCooling ? 'climate-pulse 3s infinite ease-in-out' : 'none',
          }}
        >
          <Icon
            icon={isHeating ? 'mdi:fire' : isCooling ? 'mdi:snowflake' : 'mdi:nest-thermostat'}
            style={{
              fontSize: '1.8rem',
              color: isHeating ? '#ff5722' : isCooling ? '#03a9f4' : '#fff',
              transition: 'color 0.5s ease',
            }}
          />
        </div>
        <div>
          <div style={styles.climateTitleStyle}>Nest Thermostat</div>

          {/* UPDATED: Split the values into a highly readable flex row */}
          <div style={styles.climateStatusContainerStyle}>
            <span
              style={{
                ...styles.climateCurrentValueStyle,
                color: isHeating ? '#ff5722' : isCooling ? '#03a9f4' : '#fff',
                transition: 'color 0.5s ease',
              }}
            >
              {currentTemp?.toFixed(0)}°
            </span>
            <span style={styles.climateTargetLabelStyle}>Target</span>
            <span style={styles.climateTargetValueStyle}>{renderTargetTemp()}</span>
          </div>
        </div>
      </div>

      <div style={styles.climateControlRowStyle}>
        {['off', 'heat', 'cool', 'heat_cool'].map(m => {
          const isActive = mode === m;
          const icons: Record<string, string> = { off: 'mdi:power', heat: 'mdi:fire', cool: 'mdi:snowflake', heat_cool: 'mdi:autorenew' };
          const colors: Record<string, string> = { off: '#fff', heat: '#ff5722', cool: '#03a9f4', heat_cool: '#4caf50' };

          return (
            <div key={m} onClick={e => setMode(e, m)} style={styles.getClimateButtonStyle(isActive, colors[m])}>
              <Icon icon={icons[m]} style={{ fontSize: '1.2rem' }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
