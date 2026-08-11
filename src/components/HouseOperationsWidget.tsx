import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/HouseOperations.styles';

interface HouseOperationsWidgetProps {
  onClick: () => void;
}

const formatUtility = (val: string | number | undefined, decimals: number = 1) => {
  if (!val || val === 'unknown' || val === 'unavailable') return '--';
  const num = parseFloat(String(val));
  return isNaN(num) ? '--' : num.toFixed(decimals);
};

export function HouseOperationsWidget({ onClick }: HouseOperationsWidgetProps) {
  // --- GARBAGE LOGIC ---
  const blackDays = useEntity('sensor.days_to_black_cart_2');
  const blueDays = useEntity('sensor.days_to_blue_cart_2');
  const greenDays = useEntity('sensor.days_to_green_cart_2');

  const numBlack = !isNaN(Number(blackDays.state)) ? Number(blackDays.state) : 999;
  const numBlue = !isNaN(Number(blueDays.state)) ? Number(blueDays.state) : 999;
  const numGreen = !isNaN(Number(greenDays.state)) ? Number(greenDays.state) : 999;

  const allCarts = [
    { name: 'Waste', icon: 'mdi:trash-can', days: numBlack, color: '#9e9e9e' },
    { name: 'Recycle', icon: 'mdi:recycle', days: numBlue, color: '#2196f3' },
    { name: 'Organic', icon: 'mdi:leaf', days: numGreen, color: '#4caf50' },
  ];

  allCarts.sort((a, b) => a.days - b.days);
  const upcoming = allCarts.slice(0, 2);

  // --- UTILITIES LOGIC ---
  const electricity = useEntity('sensor.energy_monitor_energy_today');
  const water = useEntity('sensor.house_water_daily');
  const gas = useEntity('sensor.house_gas_daily');

  const elecLive = useEntity('sensor.energy_monitor_power_minute_average');
  const waterLive = useEntity('sensor.house_water_flow_rate');
  const gasLive = useEntity('sensor.house_gas_flow_rate');

  const isElecActive = Number(elecLive.state) > 10;
  const isWaterActive = Number(waterLive.state) > 0.5;
  const isGasActive = Number(gasLive.state) > 0.1;

  // This size stays the same for the top utilities row
  const iconSize = '1.2rem';

  return (
    <div onClick={onClick} style={styles.containerStyle} className='glass-card'>
      <style>{`
        @keyframes utility-pulse {
          0% { transform: scale(1); filter: drop-shadow(0 0 0px transparent); }
          50% { transform: scale(1.2); filter: drop-shadow(0 0 8px currentColor); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0px transparent); }
        }
      `}</style>

      {/* UTILITIES SECTION */}
      <div>
        <div style={styles.sectionTitleStyle}>Usage Today</div>
        <div style={styles.utilitiesRowStyle}>
          {/* ELECTRICITY */}
          <div style={styles.utilityItemStyle}>
            <Icon
              icon='mdi:flash'
              style={{
                fontSize: iconSize,
                color: '#FFD700',
                animation: isElecActive ? 'utility-pulse 2s infinite ease-in-out' : 'none',
              }}
            />
            <div style={styles.utilityValueStyle}>
              {formatUtility(electricity?.state, 1)}
              <span style={styles.utilityUnitStyle}>kWh</span>
            </div>
          </div>

          {/* WATER */}
          <div style={styles.utilityItemStyle}>
            <Icon
              icon='mdi:water'
              style={{
                fontSize: iconSize,
                color: '#00d4ff',
                animation: isWaterActive ? 'utility-pulse 2s infinite ease-in-out' : 'none',
              }}
            />
            <div style={styles.utilityValueStyle}>
              {formatUtility(water?.state, 0)}
              <span style={styles.utilityUnitStyle}>L</span>
            </div>
          </div>

          {/* GAS */}
          <div style={styles.utilityItemStyle}>
            <Icon
              icon='mdi:fire'
              style={{
                fontSize: iconSize,
                color: '#ff5722',
                animation: isGasActive ? 'utility-pulse 2s infinite ease-in-out' : 'none',
              }}
            />
            <div style={styles.utilityValueStyle}>
              {formatUtility(gas?.state, 2)}
              <span style={styles.utilityUnitStyle}>m³</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.dividerStyle} />

      {/* GARBAGE SECTION (Horizontal Pills) */}
      <div style={styles.garbageRowStyle}>
        {upcoming.map(cart => {
          const isUrgent = cart.days <= 1;
          const timeText = cart.days === 0 ? 'Today' : cart.days === 1 ? 'Tmrw' : `${cart.days}d`;

          return (
            <div key={cart.name} style={styles.getGarbagePillStyle(cart.color, isUrgent)}>
              <Icon icon={cart.icon} style={{ fontSize: '1.4rem', color: isUrgent ? '#fff' : cart.color }} />
              <span style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 800 }}>
                {cart.name} <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>• {timeText}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
