import { useState, useMemo } from 'react';
import { useEntity, useHistory } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { Icon } from '@iconify/react';
import { GlassCard, BigMetric } from './MetricUi.tsx';
import * as styles from '../styles/MeteorologyDashboard.styles';
import { accent, alpha, cool, danger, frost, heat, ink, night, success, sun, violet, warning } from '../styles/tokens';

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

// WHO UV index exposure bands. A bare number is not actionable; the band is.
const getUvBand = (uv: number) => {
  if (uv < 3) return { label: 'LOW', color: success };
  if (uv < 6) return { label: 'MODERATE', color: sun };
  if (uv < 8) return { label: 'HIGH', color: warning };
  if (uv < 11) return { label: 'VERY HIGH', color: danger };
  return { label: 'EXTREME', color: violet };
};

// Standard 3-hour barometric tendency. Direction matters far more than the
// absolute reading — falling pressure is what precedes deteriorating weather.
const PRESSURE_WINDOW_MS = 3 * 60 * 60 * 1000;

const getPressureTendency = (delta: number) => {
  if (delta <= -2) return { label: 'FALLING FAST', icon: 'mdi:chevron-double-down', color: danger };
  if (delta <= -0.5) return { label: 'FALLING', icon: 'mdi:chevron-down', color: warning };
  if (delta >= 2) return { label: 'RISING FAST', icon: 'mdi:chevron-double-up', color: success };
  if (delta >= 0.5) return { label: 'RISING', icon: 'mdi:chevron-up', color: '#8bc34a' };
  return { label: 'STEADY', icon: 'mdi:minus', color: '#90a4ae' };
};

// --- SPARKLINE CHART COMPONENT ---
// `showTendency` reuses this component's existing history fetch to derive the
// 3h barometric trend, rather than issuing a second useHistory for the same
// entity.
const SparklineChart = ({
  entityId,
  color,
  showTendency,
  height = 55,
}: {
  entityId: EntityName;
  color: string;
  showTendency?: boolean;
  /**
   * Explicit pixel height. Recharts' ResponsiveContainer cannot measure inside
   * a flex parent without a definite height — it silently renders nothing — so
   * this is deliberately a fixed number rather than a flex-grow.
   */
  height?: number;
}) => {
  const historyData = useHistory(entityId, { hoursToShow: 12, significantChangesOnly: true });

  const chartData = useMemo(() => {
    if (!historyData || historyData.loading || !historyData.entityHistory) return null;
    // HA history rows arrive either expanded ({ state, last_updated }) or
    // minified ({ s, lu }). Timestamps are seconds since epoch.
    return (
      historyData.entityHistory as ReadonlyArray<{
        state?: string | number;
        s?: string | number;
        last_updated?: number;
        lu?: number;
      }>
    )
      .map(entry => ({ value: Number(entry.state ?? entry.s), t: (entry.last_updated ?? entry.lu ?? 0) * 1000 }))
      .filter(entry => !isNaN(entry.value));
  }, [historyData]);

  // Change across the last 3h of the series (falls back to the whole window if
  // history is shorter than that).
  const tendency = useMemo(() => {
    if (!showTendency || !chartData || chartData.length < 2) return null;
    const latest = chartData[chartData.length - 1];
    const cutoff = latest.t - PRESSURE_WINDOW_MS;
    const baseline = chartData.find(d => d.t >= cutoff) ?? chartData[0];
    const delta = latest.value - baseline.value;
    return { delta, ...getPressureTendency(delta) };
  }, [showTendency, chartData]);

  if (!chartData || chartData.length === 0) {
    return (
      <div
        style={{
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.5rem',
          color: ink.ghost,
        }}
      >
        {historyData.loading ? 'Gathering history...' : 'No trend data'}
      </div>
    );
  }

  const values = chartData.map(d => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);

  // A flat series (common for pressure over 12h) gives max - min === 0, which
  // would produce a zero-width domain and render nothing. Fall back to a small
  // absolute pad so the line still draws, centred.
  const spread = max - min;
  const pad = spread > 0 ? spread * 0.1 : Math.max(Math.abs(max) * 0.001, 0.5);

  const gradientId = `spark-${entityId.replace(/\./g, '-')}`;

  return (
    <div style={{ width: '100%' }}>
      {tendency && (
        <div style={styles.tendencyRowStyle}>
          <Icon icon={tendency.icon} style={{ fontSize: '1rem', color: tendency.color }} />
          <span style={{ ...styles.tendencyLabelStyle, color: tendency.color }}>{tendency.label}</span>
          <span style={styles.tendencyDeltaStyle}>
            {tendency.delta >= 0 ? '+' : ''}
            {tendency.delta.toFixed(1)} hPa/3h
          </span>
        </div>
      )}
      <div style={{ ...styles.sparklineFixedStyle, height: `${height}px` }}>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={chartData} margin={{ top: 5, right: 2, left: 2, bottom: 5 }}>
            <defs>
              <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor={color} stopOpacity={0.5} />
                <stop offset='100%' stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* YAxis handles the scaling/domain, hide it so it doesn't draw ticks/lines */}
            <YAxis hide domain={[min - pad, max + pad]} />

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
  const windChill = useEntity('sensor.gw3000b_windchill');
  const vpd = useEntity('sensor.gw3000b_vapour_pressure_deficit');

  // Pressure. Relative (sea-level corrected) is the one that compares to a
  // forecast; absolute is kept as a secondary reading.
  const relPressure = useEntity('sensor.gw3000b_relative_pressure');
  const absPressure = useEntity('sensor.gw3000b_absolute_pressure');

  const windSpeed = useEntity('sensor.gw3000b_wind_speed');
  const windGust = useEntity('sensor.gw3000b_wind_gust');
  const maxGust = useEntity('sensor.gw3000b_max_daily_gust');
  const windDir = useEntity('sensor.gw3000b_wind_direction');

  const hourlyRain = useEntity('sensor.gw3000b_hourly_rain');
  const dailyRain = useEntity('sensor.gw3000b_daily_rain');
  const rain24h = useEntity('sensor.gw3000b_24h_rain');
  const rainRate = useEntity('sensor.gw3000b_rain_rate');

  // Solar Sensors
  const solarLux = useEntity('sensor.gw3000b_solar_lux');
  const solarRadiation = useEntity('sensor.gw3000b_solar_radiation');
  const uvIndex = useEntity('sensor.gw3000b_uv_index');
  const uvBand = getUvBand(Number(uvIndex.state) || 0);

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
          0% { box-shadow: 0 0 5px ${alpha(cool, 0.2)}; }
          50% { box-shadow: 0 0 20px ${alpha(cool, 0.6)}; }
          100% { box-shadow: 0 0 5px ${alpha(cool, 0.2)}; }
        }
        /* Namespaced: 'alert-pulse' is already taken by MainDashboard.styles.ts
           with a different body, and @keyframes are global. */
        @keyframes weather-alert-pulse {
          0% { opacity: 1; box-shadow: 0 0 10px ${night.border}; }
          50% { opacity: 0.8; box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); }
          100% { opacity: 1; box-shadow: 0 0 10px ${night.border}; }
        }
      `}</style>

      <div style={styles.headerStyle}>
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: ink.muted, textTransform: 'uppercase' }}>Meteorological Station</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: accent, textTransform: 'uppercase', lineHeight: 1 }}>Weather & Sky</div>
        </div>
      </div>

      {/* WEATHER ALERT BANNER */}
      {hasAlert && (
        <div
          style={{
            backgroundColor: night.fill,
            border: '1px solid rgba(255, 68, 68, 0.5)',
            borderRadius: '12px',
            padding: '8px 16px',
            marginBottom: '12px',
            color: danger,
            fontWeight: 800,
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'weather-alert-pulse 2s infinite',
          }}
        >
          ⚠️ ACTIVE WEATHER WARNING FOR CALGARY
          {weatherWarnings.attributes?.title && ` - ${weatherWarnings.attributes.title}`}
        </div>
      )}

      <div style={styles.mainGridStyle}>
        {/* COLUMN 1: AIR */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Current Conditions</div>
          <GlassCard title='Atmosphere'>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:thermometer' label='Temp' value={formatRawValue(temp.state, 1)} unit='°C' color={warning} />
              <BigMetric icon='mdi:account-question' label='Feels Like' value={formatRawValue(feelsLike.state, 1)} unit='°C' color={heat} />
              <BigMetric icon='mdi:water-percent' label='Humidity' value={formatRawValue(humidity.state, 0)} unit='%' color={accent} />
              <BigMetric icon='mdi:thermometer-water' label='Dew Point' value={formatRawValue(dewPoint.state, 1)} unit='°C' color={cool} />
            </div>
            <SparklineChart entityId='sensor.gw3000b_outdoor_temperature' color={warning} height={140} />
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Comfort</div>
          <GlassCard title='Derived'>
            <div style={styles.cardGridStyle}>
              <BigMetric
                icon='mdi:snowflake-thermometer'
                label='Wind Chill'
                value={formatRawValue(windChill.state, 1)}
                unit='°C'
                color={frost}
              />
              {/* Sensor reports hPa — do not relabel this kPa. */}
              <BigMetric icon='mdi:leaf' label='VPD' value={formatRawValue(vpd.state, 2)} unit='hPa' color='#8bc34a' />
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
                color={success}
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
              <BigMetric icon='mdi:weather-dust' label='Gust' value={formatRawValue(windGust.state, 1)} unit='km/h' color='#ffb300' />
              <BigMetric icon='mdi:speedometer' label='Max Today' value={formatRawValue(maxGust.state, 1)} unit='km/h' color='#ff7043' />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Barometric Pressure</div>
          <GlassCard title='Pressure Trend'>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={styles.cardGridStyle}>
                <BigMetric icon='mdi:gauge' label='Sea Level' value={formatRawValue(relPressure.state, 1)} unit='hPa' color='#78909c' />
                <BigMetric
                  icon='mdi:gauge-empty'
                  label='Absolute'
                  value={formatRawValue(absPressure.state, 1)}
                  unit='hPa'
                  color='#455a64'
                />
              </div>
              {/* Trend is derived from sea-level pressure — the reading that is
                  actually comparable to a forecast. */}
              <SparklineChart entityId='sensor.gw3000b_relative_pressure' color='#78909c' showTendency height={140} />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 3: PRECIPITATION & SOLAR */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Precipitation Tracking</div>
          <div style={isRaining ? { animation: 'pulse-rain 2s infinite', borderRadius: '16px' } : undefined}>
            <GlassCard title='Rain Accumulation'>
              <div style={styles.cardGridStyle}>
                {/* 2dp: at 1dp any light drizzle reads as a flat 0.0 */}
                <BigMetric
                  icon='mdi:weather-pouring'
                  label='Rain Rate'
                  value={formatRawValue(rainRate.state, 2)}
                  unit='mm/h'
                  color={cool}
                />
                <BigMetric
                  icon='mdi:clock-outline'
                  label='Past Hour'
                  value={formatRawValue(hourlyRain.state, 1)}
                  unit='mm'
                  color='#26c6da'
                />
                <BigMetric icon='mdi:weather-rainy' label='Daily' value={formatRawValue(dailyRain.state, 1)} unit='mm' color='#2196f3' />
                <BigMetric icon='mdi:history' label='24h Rain' value={formatRawValue(rain24h.state, 1)} unit='mm' color='#3f51b5' />
              </div>
            </GlassCard>
          </div>

          <div style={styles.sectionHeaderStyle}>Solar & Light</div>
          <GlassCard title='Radiation'>
            <div style={styles.cardGridStyle}>
              {/* Colour + band make the UV number actionable at a glance. */}
              <BigMetric
                icon='mdi:sun-wireless'
                label={`UV · ${uvBand.label}`}
                value={formatRawValue(uvIndex.state, 0)}
                color={uvBand.color}
              />
              <BigMetric
                icon='mdi:solar-power'
                label='Irradiance'
                value={formatRawValue(solarRadiation.state, 0)}
                unit='W/m²'
                color={warning}
              />
              <BigMetric icon='mdi:brightness-5' label='Illuminance' value={formatRawValue(solarLux.state, 0)} unit='lx' color={warning} />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
