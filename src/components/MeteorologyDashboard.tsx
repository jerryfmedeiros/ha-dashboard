import { useState, useMemo } from 'react';
import { useEntity, useHistory } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { GlassCard, BigMetric } from './MetricUi.tsx';
import * as styles from '../styles/MeteorologyDashboard.styles';

const formatRawValue = (value: string | undefined | null, decimals = 1) => {
  if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return undefined;
  const num = Number(value);
  if (isNaN(num)) return value;
  return Number(num.toFixed(decimals)).toLocaleString();
};

const getCardinalDirection = (degree: number) => {
  const val = Math.floor(degree / 22.5 + 0.5);
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return arr[val % 16];
};

// --- SPARKLINE CHART COMPONENT ---
const SparklineChart = ({ entityId, color }: { entityId: EntityName; color: string }) => {
  const historyData = useHistory(entityId, { hoursToShow: 12, significantChangesOnly: true });

  const chartData = useMemo(() => {
    if (!historyData || historyData.loading || !historyData.entityHistory) return null;
    return (historyData.entityHistory as any[])
      .map(entry => ({ value: Number(entry.state ?? entry.s) }))
      .filter(entry => !isNaN(entry.value));
  }, [historyData]);

  if (!chartData || chartData.length === 0) {
    return (
      <div
        style={{
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.5rem',
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        {historyData.loading ? 'Gathering history...' : 'No trend data'}
      </div>
    );
  }

  const values = chartData.map(d => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);

  const gradientId = `spark-${entityId.replace(/\./g, '-')}`;

  return (
    <div style={{ width: '100%', height: '55px', marginTop: '4px', opacity: 1, position: 'relative' }}>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart data={chartData} margin={{ top: 5, right: 2, left: 2, bottom: 5 }}>
          <defs>
            <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={color} stopOpacity={0.5} />
              <stop offset='100%' stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* YAxis handles the scaling/domain, hide it so it doesn't draw ticks/lines */}
          <YAxis hide domain={[min - (max - min) * 0.1, max + (max - min) * 0.1]} />

          <Area
            type='monotone'
            dataKey='value'
            stroke={color}
            strokeWidth={2}
            fillOpacity={1}
            fill={`url(#${gradientId})`}
            isAnimationActive={true}
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export function MeteorologyDashboard() {
  const [windMode, setWindMode] = useState<'degree' | 'cardinal'>('degree');

  // Weather Station Sensors (GW3000B Hub)
  const temp = useEntity('sensor.gw3000b_outdoor_temperature');
  const feelsLike = useEntity('sensor.gw3000b_feels_like_temperature');
  const humidity = useEntity('sensor.gw3000b_humidity');
  const dewPoint = useEntity('sensor.gw3000b_dewpoint');
  const absPressure = useEntity('sensor.gw3000b_absolute_pressure');
  const windSpeed = useEntity('sensor.gw3000b_wind_speed');
  const windDir = useEntity('sensor.gw3000b_wind_direction');
  const dailyRain = useEntity('sensor.gw3000b_daily_rain');
  const rain24h = useEntity('sensor.gw3000b_24h_rain');
  const rainRate = useEntity('sensor.gw3000b_rain_rate');

  // Solar Sensors
  const solarLux = useEntity('sensor.gw3000b_solar_lux');
  const solarRadiation = useEntity('sensor.gw3000b_solar_radiation');
  const uvIndex = useEntity('sensor.gw3000b_uv_index');

  // Alerts
  const weatherWarnings = useEntity('sensor.calgary_warnings');
  const hasAlert = weatherWarnings.state !== '0' && weatherWarnings.state !== 'unknown' && weatherWarnings.state !== 'unavailable';

  // Dynamic Styles
  const isRaining = Number(rainRate.state) > 0;
  const isWindy = Number(windSpeed.state) > 30;

  return (
    <div style={styles.containerStyle}>
      <style>{`
        @keyframes sway {
          0% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
          100% { transform: rotate(-10deg); }
        }
        @keyframes pulse-rain {
          0% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.2); }
          50% { box-shadow: 0 0 20px rgba(0, 188, 212, 0.6); }
          100% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.2); }
        }
        @keyframes alert-pulse {
          0% { opacity: 1; box-shadow: 0 0 10px rgba(255, 0, 0, 0.2); }
          50% { opacity: 0.8; box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); }
          100% { opacity: 1; box-shadow: 0 0 10px rgba(255, 0, 0, 0.2); }
        }
      `}</style>

      <div style={styles.headerStyle}>
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            Meteorological Station
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#03a9f4', textTransform: 'uppercase', lineHeight: 1 }}>
            Weather & Sky
          </div>
        </div>
      </div>

      {/* WEATHER ALERT BANNER */}
      {hasAlert && (
        <div
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            border: '1px solid rgba(255, 68, 68, 0.5)',
            borderRadius: '12px',
            padding: '8px 16px',
            marginBottom: '12px',
            color: '#ff4444',
            fontWeight: 800,
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'alert-pulse 2s infinite',
          }}
        >
          ⚠️ ACTIVE WEATHER WARNING FOR CALGARY
          {weatherWarnings.attributes?.title && ` - ${weatherWarnings.attributes.title}`}
        </div>
      )}

      <div style={styles.mainGridStyle}>
        {/* COLUMN 1: CURRENT CONDITIONS & SKY */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Current Conditions</div>
          <GlassCard title='Atmosphere'>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:thermometer' label='Temp' value={formatRawValue(temp.state, 1)} unit='°C' color='#ff9800' />
              <BigMetric
                icon='mdi:account-question'
                label='Feels Like'
                value={formatRawValue(feelsLike.state, 1)}
                unit='°C'
                color='#ff5722'
              />
              <BigMetric icon='mdi:water-percent' label='Humidity' value={formatRawValue(humidity.state, 0)} unit='%' color='#03a9f4' />
              <BigMetric
                icon='mdi:thermometer-water'
                label='Dew Point'
                value={formatRawValue(dewPoint.state, 1)}
                unit='°C'
                color='#00bcd4'
              />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 2: WIND & PRESSURE */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Wind Dynamics</div>
          <GlassCard title='Wind Speed & Direction'>
            <div style={styles.cardGridStyle}>
              <BigMetric
                icon='mdi:weather-windy'
                iconStyle={isWindy ? { animation: 'sway 0.5s infinite ease-in-out' } : undefined}
                label='Speed'
                value={formatRawValue(windSpeed.state, 1)}
                unit='km/h'
                color='#4caf50'
              />
              <BigMetric
                icon='mdi:navigation'
                iconStyle={{
                  transform: `rotate(${Number(windDir.state) || 0}deg)`,
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                label='Direction'
                value={windMode === 'cardinal' ? getCardinalDirection(Number(windDir.state) || 0) : formatRawValue(windDir.state, 0)}
                unit={windMode === 'degree' ? '°' : undefined}
                color='#cddc39'
                onClick={() => setWindMode(prev => (prev === 'degree' ? 'cardinal' : 'degree'))}
              />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Barometric Pressure</div>
          <GlassCard title='Pressure Trend'>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={styles.cardGridStyle}>
                <BigMetric
                  icon='mdi:gauge-empty'
                  label='Absolute'
                  value={formatRawValue(absPressure.state, 1)}
                  unit='hPa'
                  color='#455a64'
                />
              </div>
              <SparklineChart entityId='sensor.gw3000b_absolute_pressure' color='#455a64' />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 3: PRECIPITATION & SOLAR */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Precipitation Tracking</div>
          <div style={isRaining ? { animation: 'pulse-rain 2s infinite', borderRadius: '16px' } : undefined}>
            <GlassCard title='Rain Accumulation'>
              <div style={styles.cardGridStyle}>
                <BigMetric icon='mdi:weather-rainy' label='Daily' value={formatRawValue(dailyRain.state, 1)} unit='mm' color='#2196f3' />
                <BigMetric icon='mdi:history' label='24h Rain' value={formatRawValue(rain24h.state, 1)} unit='mm' color='#3f51b5' />
                <BigMetric
                  icon='mdi:weather-pouring'
                  label='Rain Rate'
                  value={formatRawValue(rainRate.state, 1)}
                  unit='mm/h'
                  color='#00bcd4'
                />
              </div>
            </GlassCard>
          </div>

          <div style={styles.sectionHeaderStyle}>Solar & Light</div>
          <GlassCard title='Radiation'>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:sun-wireless' label='UV Index' value={formatRawValue(uvIndex.state, 0)} color='#ffeb3b' />
              <BigMetric
                icon='mdi:solar-power'
                label='Irradiance'
                value={formatRawValue(solarRadiation.state, 0)}
                unit='W/m²'
                color='#ff9800'
              />
              <BigMetric icon='mdi:brightness-5' label='Illuminance' value={formatRawValue(solarLux.state, 0)} unit='lx' color='#ffc107' />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
