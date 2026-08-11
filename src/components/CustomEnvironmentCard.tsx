import { useState } from 'react';
import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/MainDashboard.styles';
import { CelestialArch } from './CelestialArch.tsx';

interface Flight {
  id: string;
  callsign: string;
  from: string;
  to: string;
  model: string; // Added model to the interface
}

const getCardinalDirection = (degree: number) => {
  const val = Math.floor(degree / 22.5 + 0.5);
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return arr[val % 16];
};

export const CustomEnvironmentCard = ({ onClick }: { onClick: () => void }) => {
  const [windMode, setWindMode] = useState<'degree' | 'cardinal'>('degree');

  const weather = useEntity('weather.openweathermap');
  const uv = useEntity('sensor.calgary_uv_index');
  const windDir = useEntity('sensor.gw3000b_wind_direction');
  const windSpeed = useEntity('sensor.gw3000b_wind_speed');
  const feelsLike = useEntity('sensor.openweathermap_apparent_temperature');

  const flightSensor = useEntity('sensor.current_flights_overhead');
  const activeFlights = (flightSensor.attributes.flights as Flight[]) || [];

  const zones = [
    {
      label: 'Outdoor',
      t: useEntity('sensor.indoor_outdoor_meter_6287_temperature'),
      h: useEntity('sensor.indoor_outdoor_meter_6287_humidity'),
    },
    {
      label: 'Indoor',
      t: useEntity('sensor.indoor_outdoor_meter_0d29_temperature'),
      h: useEntity('sensor.indoor_outdoor_meter_0d29_humidity'),
    },
    {
      label: 'Garage',
      t: useEntity('sensor.garage_meter_temperature'),
      h: useEntity('sensor.garage_meter_humidity'),
    },
    {
      label: 'Basement',
      t: useEntity('sensor.indoor_outdoor_meter_4f23_temperature'),
      h: useEntity('sensor.indoor_outdoor_meter_4f23_humidity'),
    },
  ];

  const getWeatherIcon = (state: string) => {
    const s = (state || '').toLowerCase();
    if (s.includes('cloudy') || s.includes('partly')) return 'mdi:weather-partly-cloudy';
    if (s.includes('rain') || s.includes('pour')) return 'mdi:weather-pouring';
    if (s.includes('snow')) return 'mdi:weather-snowy';
    return 'mdi:white-balance-sunny';
  };

  return (
    <div
      onClick={onClick}
      style={{ ...styles.envCardContainerStyle, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      className='glass-card'
    >
      <style>
        {`
          @keyframes ticker {
            0% { left: 100%; transform: translateX(0); }
            100% { left: 0; transform: translateX(-100%); }
          }
        `}
      </style>

      {/* 1. FLIGHT TICKER WITH MASK FADE */}
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: 0,
          width: '100%',
          height: '16px',
          pointerEvents: 'none',
          zIndex: 10,
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {activeFlights.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              whiteSpace: 'nowrap',
              animation: 'ticker 20s linear infinite',
            }}
          >
            {activeFlights.map(flight => (
              <div key={flight.id} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:airplane' style={{ fontSize: '11px', transform: 'rotate(90deg)', color: 'rgba(255, 255, 255, 0.6)' }} />
                <span style={{ marginLeft: '6px', fontSize: '9px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
                  {flight.callsign} ({flight.model}) {/* Added Model Here */}
                </span>
                <span style={{ marginLeft: '4px', fontSize: '9px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {flight.from} ➔ {flight.to}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. TOP ROW */}
      <div style={styles.envTopRowStyle}>
        <div style={styles.envWeatherGroupStyle}>
          <Icon
            icon={getWeatherIcon(weather.state)}
            style={{ fontSize: '48px', color: weather.state === 'sunny' ? '#ffeb3b' : '#03a9f4' }}
          />
          <div>
            <div style={styles.envTempStyle}>{Math.round(Number(weather.attributes.temperature))}°C</div>
            <div style={styles.envStateStyle}>{weather.state}</div>
          </div>
        </div>

        <CelestialArch />

        <div style={styles.envStatsContainerStyle}>
          <div style={{ ...styles.envStatRowStyle, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
            <Icon icon='mdi:sun-wireless' style={styles.envSmallIconStyle} />
            <span style={{ color: '#b0bec5' }}>UV:</span> <span style={styles.envStatValueStyle}>{uv.state}</span>
          </div>
          <div
            style={{
              ...styles.envStatRowStyle,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '4px',
              whiteSpace: 'nowrap',
            }}
            onClick={e => {
              e.stopPropagation(); // prevent opening the modal
              setWindMode(prev => (prev === 'degree' ? 'cardinal' : 'degree'));
            }}
          >
            <Icon
              icon='mdi:navigation'
              style={{
                ...styles.envSmallIconStyle,
                transform: `rotate(${Number(windDir.state) || 0}deg)`,
                transition: 'transform 0.5s ease',
              }}
            />
            <span style={{ color: '#b0bec5' }}>Wind:</span>
            <span style={styles.envStatValueStyle}>
              {Math.round(Number(windSpeed.state))}{' '}
              {windMode === 'cardinal' ? getCardinalDirection(Number(windDir.state) || 0) : `${Math.round(Number(windDir.state))}°`}
            </span>
          </div>
          <div style={{ ...styles.envStatRowStyle, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
            <Icon icon='mdi:thermometer-lines' style={styles.envSmallIconStyle} />
            <span style={{ color: '#b0bec5' }}>Feels:</span>{' '}
            <span style={styles.envStatValueStyle}>{Math.round(Number(feelsLike.state))}°</span>
          </div>
        </div>
      </div>

      {/* 3. DIVIDER */}
      <div style={styles.envDividerStyle} />

      {/* 4. BOTTOM ROW */}
      <div style={{ ...styles.envBottomGridStyle, flexGrow: 1 }}>
        {zones.map(zone => (
          <div key={zone.label} style={styles.envZoneItemStyle}>
            <span style={styles.envZoneLabelStyle}>{zone.label}</span>
            <span style={styles.envZoneValueStyle}>
              {zone.t.state || '--'}° <span style={styles.envZoneHumidityStyle}>{zone.h.state || '--'}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
