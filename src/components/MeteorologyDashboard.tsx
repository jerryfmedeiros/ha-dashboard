import { useEntity } from '@hakit/core';
import { GlassCard, BigMetric } from './MetricUi.tsx';
import * as styles from '../styles/MeteorologyDashboard.styles';

const formatRawValue = (value: string | undefined | null, decimals = 1) => {
  if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return undefined;
  const num = Number(value);
  if (isNaN(num)) return value;
  return Number(num.toFixed(decimals)).toLocaleString();
};

export function MeteorologyDashboard() {
  // Weather Station Sensors
  const temp = useEntity('sensor.my_weather_station_temperature');
  const feelsLike = useEntity('sensor.my_weather_station_feels_like');
  const humidity = useEntity('sensor.my_weather_station_humidity');
  const dewPoint = useEntity('sensor.my_weather_station_dew_point');
  const relPressure = useEntity('sensor.my_weather_station_relative_pressure');
  const absPressure = useEntity('sensor.my_weather_station_absolute_pressure');
  const windSpeed = useEntity('sensor.my_weather_station_wind_speed');
  const windGust = useEntity('sensor.my_weather_station_wind_gust');
  const maxGust = useEntity('sensor.my_weather_station_max_gust');
  const windDir = useEntity('sensor.my_weather_station_wind_direction');
  const uvIndex = useEntity('sensor.my_weather_station_uv_index');
  const illuminance = useEntity('sensor.my_weather_station_illuminance');
  const irradiance = useEntity('sensor.my_weather_station_irradiance');

  const dailyRain = useEntity('sensor.my_weather_station_daily_rain');
  const eventRain = useEntity('sensor.my_weather_station_event_rain');
  const precipIntensity = useEntity('sensor.my_weather_station_precipitation_intensity');

  // Sky Thermal Cam Sensors
  const skyCondition = useEntity('sensor.sky_thermal_cam_sky_condition');
  const skyRainSensor = useEntity('binary_sensor.sky_thermal_cam_rain_sensor');
  const skyRainNumeric = useEntity('sensor.sky_thermal_cam_rain_numeric');
  const skyBrightness = useEntity('sensor.sky_thermal_cam_sky_brightness');
  const skyIlluminance = useEntity('sensor.sky_thermal_cam_illuminance');

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

          <div style={styles.sectionHeaderStyle}>Sky Analysis</div>
          <GlassCard title={skyCondition.state?.replace('_', ' ') || 'Sky Status'}>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:brightness-6' label='Brightness' value={formatRawValue(skyBrightness.state, 0)} color='#ffeb3b' />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 2: WIND & PRESSURE */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Wind Dynamics</div>
          <GlassCard title='Wind Speed & Direction'>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:weather-windy' label='Speed' value={formatRawValue(windSpeed.state, 1)} unit='km/h' color='#4caf50' />
              <BigMetric icon='mdi:wind-power' label='Gust' value={formatRawValue(windGust.state, 1)} unit='km/h' color='#8bc34a' />
              <BigMetric icon='mdi:speedometer' label='Max Gust' value={formatRawValue(maxGust.state, 1)} unit='km/h' color='#4caf50' />
              <BigMetric icon='mdi:compass-outline' label='Direction' value={formatRawValue(windDir.state, 0)} unit='°' color='#cddc39' />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Barometric Pressure</div>
          <GlassCard title='Pressure Readings'>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:gauge' label='Relative' value={formatRawValue(relPressure.state, 1)} unit='hPa' color='#607d8b' />
              <BigMetric icon='mdi:gauge-empty' label='Absolute' value={formatRawValue(absPressure.state, 1)} unit='hPa' color='#455a64' />
            </div>
          </GlassCard>
        </div>

        {/* COLUMN 3: PRECIPITATION & SOLAR */}
        <div style={styles.scrollableColumnStyle}>
          <div style={styles.sectionHeaderStyle}>Precipitation Tracking</div>
          <GlassCard title={`Rain Status: ${skyRainSensor.state}`}>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:weather-rainy' label='Daily' value={formatRawValue(dailyRain.state, 1)} unit='mm' color='#2196f3' />
              <BigMetric
                icon='mdi:weather-pouring'
                label='Intensity'
                value={formatRawValue(precipIntensity.state, 1)}
                unit='mm/h'
                color='#00bcd4'
              />
              <BigMetric icon='mdi:numeric' label='Sky Rain' value={formatRawValue(skyRainNumeric.state, 1)} unit='mm' color='#03a9f4' />
              <BigMetric icon='mdi:calendar-star' label='Event' value={formatRawValue(eventRain.state, 1)} unit='mm' color='#4caf50' />
            </div>
          </GlassCard>

          <div style={styles.sectionHeaderStyle}>Solar & Light</div>
          <GlassCard title='Radiation'>
            <div style={styles.cardGridStyle}>
              <BigMetric icon='mdi:sun-wireless' label='UV Index' value={formatRawValue(uvIndex.state, 0)} color='#ffeb3b' />
              <BigMetric
                icon='mdi:solar-power'
                label='Irradiance'
                value={formatRawValue(irradiance.state, 0)}
                unit='W/m²'
                color='#ff9800'
              />
              <BigMetric
                icon='mdi:brightness-5'
                label='Station Lux'
                value={formatRawValue(illuminance.state, 0)}
                unit='lx'
                color='#ffc107'
              />
              <BigMetric
                icon='mdi:lightbulb-on'
                label='Sky Lux'
                value={formatRawValue(skyIlluminance.state, 0)}
                unit='lx'
                color='#ffc107'
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
