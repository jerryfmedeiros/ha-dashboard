import { useEntity } from '@hakit/core';
import { GlassCard, BigMetric } from './MetricUi.tsx';
import * as styles from '../styles/MeteorologyDashboard.styles';

const formatValue = (value: string | undefined | null, decimals = 1, unit = '') => {
  if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return '--';
  const num = Number(value);
  if (isNaN(num)) return value;

  // Format with commas for large numbers like illuminance
  if (unit === 'lx') {
    return `${Math.round(num).toLocaleString()} lx`;
  }

  const formattedNum = Number(num.toFixed(decimals));
  // Add space before unit unless it's a degree or percentage
  const space = unit && !unit.startsWith('°') && !unit.startsWith('%') ? ' ' : '';
  return `${formattedNum}${space}${unit}`;
};

export function MeteorologyDashboard() {
  // Weather Station Sensors
  const temp = useEntity('sensor.my_weather_station_temperature');
  const feelsLike = useEntity('sensor.my_weather_station_feels_like');
  const humidity = useEntity('sensor.my_weather_station_humidity');
  const dewPoint = useEntity('sensor.my_weather_station_dew_point');
  const absPressure = useEntity('sensor.my_weather_station_absolute_pressure');
  const relPressure = useEntity('sensor.my_weather_station_relative_pressure');
  const windSpeed = useEntity('sensor.my_weather_station_wind_speed');
  const windGust = useEntity('sensor.my_weather_station_wind_gust');
  const maxGust = useEntity('sensor.my_weather_station_max_gust');
  const windDir = useEntity('sensor.my_weather_station_wind_direction');
  const uvIndex = useEntity('sensor.my_weather_station_uv_index');
  const illuminance = useEntity('sensor.my_weather_station_illuminance');
  const irradiance = useEntity('sensor.my_weather_station_irradiance');

  const dailyRain = useEntity('sensor.my_weather_station_daily_rain');
  const weeklyRain = useEntity('sensor.my_weather_station_weekly_rain');
  const monthlyRain = useEntity('sensor.my_weather_station_monthly_rain');
  const yearlyRain = useEntity('sensor.my_weather_station_yearly_rain');
  const eventRain = useEntity('sensor.my_weather_station_event_rain');
  const precipIntensity = useEntity('sensor.my_weather_station_precipitation_intensity');
  const lastRain = useEntity('sensor.my_weather_station_last_rain');

  // Sky Thermal Cam Sensors
  const skyCondition = useEntity('sensor.sky_thermal_cam_sky_condition');
  const skyAvgTemp = useEntity('sensor.sky_thermal_cam_sky_average_temp');
  const skyCenterTemp = useEntity('sensor.sky_thermal_cam_sky_center_temp');
  const skyMaxTemp = useEntity('sensor.sky_thermal_cam_sky_max_temp');
  const skyMinTemp = useEntity('sensor.sky_thermal_cam_sky_min_temp');
  const skyAmbientTemp = useEntity('sensor.sky_thermal_cam_ambient_temperature');
  const skyAmbientHum = useEntity('sensor.sky_thermal_cam_ambient_humidity');
  const skyRainSensor = useEntity('sensor.sky_thermal_cam_rain_sensor');
  const skyRainNumeric = useEntity('sensor.sky_thermal_cam_rain_numeric');
  const skyBrightness = useEntity('sensor.sky_thermal_cam_sky_brightness');
  const skyAnemometerWind = useEntity('sensor.sky_thermal_cam_anemometer_wind_speed');

  return (
    <div style={styles.containerStyle}>
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

      <div style={styles.mainGridStyle}>
        {/* COLUMN 1: CURRENT CONDITIONS & SKY */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Current Conditions</div>
          <GlassCard title="Atmosphere">
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:thermometer" label="Temp" value={formatValue(temp.state, 1, '°C')} color="#ff9800" />
              <BigMetric icon="mdi:account-question" label="Feels Like" value={formatValue(feelsLike.state, 1, '°C')} color="#ff5722" />
              <BigMetric icon="mdi:water-percent" label="Humidity" value={formatValue(humidity.state, 0, '%')} color="#03a9f4" />
              <BigMetric icon="mdi:thermometer-water" label="Dew Point" value={formatValue(dewPoint.state, 1, '°C')} color="#00bcd4" />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Sky Thermal Analysis</div>
          <GlassCard title={skyCondition.state?.replace('_', ' ') || 'Sky Status'}>
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:clouds" label="Sky Avg" value={formatValue(skyAvgTemp.state, 1, '°C')} color="#9c27b0" />
              <BigMetric icon="mdi:target" label="Sky Center" value={formatValue(skyCenterTemp.state, 1, '°C')} color="#673ab7" />
              <BigMetric icon="mdi:brightness-6" label="Brightness" value={formatValue(skyBrightness.state, 0)} color="#ffeb3b" />
              <BigMetric icon="mdi:thermometer-chevron-up" label="Sky Max" value={formatValue(skyMaxTemp.state, 1, '°C')} color="#f44336" />
              <BigMetric icon="mdi:thermometer-chevron-down" label="Sky Min" value={formatValue(skyMinTemp.state, 1, '°C')} color="#3f51b5" />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 2: WIND & PRESSURE */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Wind Dynamics</div>
          <GlassCard title="Wind Speed & Direction">
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:weather-windy" label="Speed" value={formatValue(windSpeed.state, 1, 'km/h')} color="#4caf50" />
              <BigMetric icon="mdi:wind-power" label="Gust" value={formatValue(windGust.state, 1, 'km/h')} color="#8bc34a" />
              <BigMetric icon="mdi:compass-outline" label="Direction" value={formatValue(windDir.state, 0, '°')} color="#cddc39" />
              <BigMetric icon="mdi:speedometer" label="Max Gust" value={formatValue(maxGust.state, 1, 'km/h')} color="#4caf50" />
              <BigMetric icon="mdi:weather-windy-variant" label="Sky Wind" value={formatValue(skyAnemometerWind.state, 1, 'km/h')} color="#81c784" />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Barometric Pressure</div>
          <GlassCard title="Pressure Readings">
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:gauge" label="Relative" value={formatValue(relPressure.state, 1, 'hPa')} color="#607d8b" />
              <BigMetric icon="mdi:gauge-empty" label="Absolute" value={formatValue(absPressure.state, 1, 'hPa')} color="#455a64" />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Solar & Light</div>
          <GlassCard title="Radiation">
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:sun-wireless" label="UV Index" value={formatValue(uvIndex.state, 0)} color="#ffeb3b" />
              <BigMetric icon="mdi:brightness-5" label="Illuminance" value={formatValue(illuminance.state, 0, 'lx')} color="#ffc107" />
              <BigMetric icon="mdi:solar-power" label="Irradiance" value={formatValue(irradiance.state, 0, 'W/m²')} color="#ff9800" />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 3: PRECIPITATION */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Precipitation Tracking</div>
          <GlassCard title={`Rain Status: ${skyRainSensor.state}`}>
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:weather-rainy" label="Daily" value={formatValue(dailyRain.state, 1, 'mm')} color="#2196f3" />
              <BigMetric icon="mdi:weather-pouring" label="Intensity" value={formatValue(precipIntensity.state, 1, 'mm/h')} color="#00bcd4" />
              <BigMetric icon="mdi:numeric" label="Sky Rain" value={formatValue(skyRainNumeric.state, 1, 'mm')} color="#03a9f4" />
              <BigMetric icon="mdi:calendar-week" label="Weekly" value={formatValue(weeklyRain.state, 1, 'mm')} color="#03a9f4" />
              <BigMetric icon="mdi:calendar-star" label="Event" value={formatValue(eventRain.state, 1, 'mm')} color="#4caf50" />
              <BigMetric icon="mdi:calendar-month" label="Monthly" value={formatValue(monthlyRain.state, 1, 'mm')} color="#3f51b5" />
              <BigMetric icon="mdi:calendar-range" label="Yearly" value={formatValue(yearlyRain.state, 1, 'mm')} color="#673ab7" />
              <BigMetric icon="mdi:history" label="Last Rain" value={lastRain.state === 'unknown' ? '--' : lastRain.state} color="#9e9e9e" />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Station Internals</div>
          <GlassCard title="Indoor & Sky Sensors">
            <div style={styles.cardGridStyle}>
              <BigMetric icon="mdi:home-thermometer" label="Sky Amb T" value={formatValue(skyAmbientTemp.state, 1, '°C')} color="#ff5722" />
              <BigMetric icon="mdi:home-water" label="Sky Amb H" value={formatValue(skyAmbientHum.state, 0, '%')} color="#03a9f4" />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
