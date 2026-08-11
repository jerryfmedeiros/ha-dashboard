// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes } from "@hakit/core";
declare module "@hakit/core" {
  export interface CustomSupportedServices<
    T extends ServiceFunctionTypes = "target",
  > {
    homeassistant: {
      // undefined
      savePersistentStates: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      stop: ServiceFunction<object, T, object>;
      // undefined
      restart: ServiceFunction<object, T, object>;
      // undefined
      checkConfig: ServiceFunction<object, T, object>;
      // undefined
      updateEntity: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
        }
      >;
      // undefined
      reloadCoreConfig: ServiceFunction<object, T, object>;
      // undefined
      setLocation: ServiceFunction<
        object,
        T,
        {
          //  @example 32.87336 @constraints  number: mode: box, min: -90, max: 90, step: any
          latitude: number;
          //  @example 117.22743 @constraints  number: mode: box, min: -180, max: 180, step: any
          longitude: number;
          //  @example 120 @constraints  number: mode: box, step: any
          elevation?: number;
        }
      >;
      // undefined
      reloadCustomTemplates: ServiceFunction<object, T, object>;
      // undefined
      reloadConfigEntry: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry:
          entry_id?: unknown;
        }
      >;
      // undefined
      reloadAll: ServiceFunction<object, T, object>;
    };
    persistentNotification: {
      // undefined
      create: ServiceFunction<
        object,
        T,
        {
          //  @example Please check your configuration.yaml.
          message: string;
          //  @example Test notification
          title?: string;
          //  @example 1234
          notification_id?: string;
        }
      >;
      // undefined
      dismiss: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          notification_id: string;
        }
      >;
      // undefined
      dismissAll: ServiceFunction<object, T, object>;
    };
    systemLog: {
      // undefined
      clear: ServiceFunction<object, T, object>;
      // undefined
      write: ServiceFunction<
        object,
        T,
        {
          //  @example Something went wrong
          message: string;
          //
          level?: "debug" | "info" | "warning" | "error" | "critical";
          //  @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // undefined
      setDefaultLevel: ServiceFunction<
        object,
        T,
        {
          //
          level?: "debug" | "info" | "warning" | "error" | "fatal" | "critical";
        }
      >;
      // undefined
      setLevel: ServiceFunction<object, T, object>;
    };
    frontend: {
      // undefined
      setTheme: ServiceFunction<
        object,
        T,
        {
          //  @example default
          name?: string;
          //  @example default
          name_dark?: string;
        }
      >;
      // undefined
      reloadThemes: ServiceFunction<object, T, object>;
    };
    recorder: {
      // undefined
      purge: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 365, unit_of_measurement: days, step: 1, mode: slider
          keep_days?: number;
          //  @constraints  boolean:
          repack?: boolean;
          //  @constraints  boolean:
          apply_filter?: boolean;
        }
      >;
      // undefined
      purgeEntities: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
          //  @example sun @constraints  object: multiple: false
          domains?: object;
          //  @example domain*.object_id* @constraints  object: multiple: false
          entity_globs?: object;
          //  @constraints  number: min: 0, max: 365, unit_of_measurement: days, step: 1, mode: slider
          keep_days?: number;
        }
      >;
      // undefined
      enable: ServiceFunction<object, T, object>;
      // undefined
      disable: ServiceFunction<object, T, object>;
      // undefined
      getStatistics: ServiceFunction<
        object,
        T,
        {
          //  @example 2025-01-01 00:00:00 @constraints  datetime:
          start_time: string;
          //  @example 2025-01-02 00:00:00 @constraints  datetime:
          end_time?: string;
          //  @example sensor.energy_consumption,sensor.temperature @constraints  statistic: multiple: true
          statistic_ids: unknown;
          //  @example hour
          period: "5minute" | "hour" | "day" | "week" | "month" | "year";
          //  @example mean,sum
          types:
            | "change"
            | "last_reset"
            | "max"
            | "mean"
            | "min"
            | "state"
            | "sum";
          //  @example [object Object] @constraints  object: multiple: false
          units?: object;
        }
      >;
    };
    mediaPlayer: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      volumeUp: ServiceFunction<object, T, object>;
      // undefined
      volumeDown: ServiceFunction<object, T, object>;
      // undefined
      mediaPlayPause: ServiceFunction<object, T, object>;
      // undefined
      mediaPlay: ServiceFunction<object, T, object>;
      // undefined
      mediaPause: ServiceFunction<object, T, object>;
      // undefined
      mediaStop: ServiceFunction<object, T, object>;
      // undefined
      mediaNextTrack: ServiceFunction<object, T, object>;
      // undefined
      mediaPreviousTrack: ServiceFunction<object, T, object>;
      // undefined
      clearPlaylist: ServiceFunction<object, T, object>;
      // undefined
      volumeSet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 1, step: 0.01, mode: slider
          volume_level: number;
        }
      >;
      // undefined
      volumeMute: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          is_volume_muted: boolean;
        }
      >;
      // undefined
      mediaSeek: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, step: 0.01, mode: box
          seek_position: number;
        }
      >;
      // undefined
      join: ServiceFunction<
        object,
        T,
        {
          //  @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // undefined
      selectSource: ServiceFunction<
        object,
        T,
        {
          //  @example video1 @constraints  state: attribute: source, multiple: false
          source: unknown;
        }
      >;
      // undefined
      selectSoundMode: ServiceFunction<
        object,
        T,
        {
          //  @example Music @constraints  state: attribute: sound_mode, multiple: false
          sound_mode?: unknown;
        }
      >;
      // undefined
      playMedia: ServiceFunction<
        object,
        T,
        {
          //  @example {'media_content_id': 'https://home-assistant.io/images/cast/splash.png', 'media_content_type': 'music'} @constraints  media: multiple: false
          media: unknown;
          //
          enqueue?: "play" | "next" | "add" | "replace";
          //  @example true @constraints  boolean:
          announce?: boolean;
        }
      >;
      // undefined
      browseMedia: ServiceFunction<
        object,
        T,
        {
          //  @example music
          media_content_type?: string;
          //  @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
        }
      >;
      // undefined
      searchMedia: ServiceFunction<
        object,
        T,
        {
          //  @example Beatles
          search_query: string;
          //  @example music
          media_content_type?: string;
          //  @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
          //  @example album,artist
          media_filter_classes?: string;
        }
      >;
      // undefined
      shuffleSet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          shuffle: boolean;
        }
      >;
      // undefined
      unjoin: ServiceFunction<object, T, object>;
      // undefined
      repeatSet: ServiceFunction<
        object,
        T,
        {
          //
          repeat: "off" | "all" | "one";
        }
      >;
    };
    ffmpeg: {
      // undefined
      start: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
      // undefined
      stop: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
      // undefined
      restart: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
    };
    hassio: {
      // undefined
      appStart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
        }
      >;
      // undefined
      appRestart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
        }
      >;
      // undefined
      appStop: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
        }
      >;
      // undefined
      appStdin: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  app:
          app: unknown;
          //  @constraints  object: multiple: false
          input: object;
        }
      >;
      // undefined
      addonStart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonRestart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonStop: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonStdin: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      hostReboot: ServiceFunction<object, T, object>;
      // undefined
      hostShutdown: ServiceFunction<object, T, object>;
      // undefined
      backupFull: ServiceFunction<
        object,
        T,
        {
          //  @example Backup 1
          name?: string;
          //  @example password
          password?: string;
          //  @constraints  boolean:
          compressed?: boolean;
          //  @example my_backup_mount @constraints  backup_location:
          location?: string;
          //  @constraints  boolean:
          homeassistant_exclude_database?: boolean;
        }
      >;
      // undefined
      backupPartial: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          homeassistant?: boolean;
          //  @constraints  boolean:
          homeassistant_exclude_database?: boolean;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          apps?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          addons?: object;
          //  @example homeassistant,share @constraints  object: multiple: false
          folders?: object;
          //  @example Partial backup 1
          name?: string;
          //  @example password
          password?: string;
          //  @constraints  boolean:
          compressed?: boolean;
          //  @example my_backup_mount @constraints  backup_location:
          location?: string;
        }
      >;
      // undefined
      restoreFull: ServiceFunction<
        object,
        T,
        {
          //
          slug: string;
          //  @example password
          password?: string;
        }
      >;
      // undefined
      restorePartial: ServiceFunction<
        object,
        T,
        {
          //
          slug: string;
          //  @constraints  boolean:
          homeassistant?: boolean;
          //  @example homeassistant,share @constraints  object: multiple: false
          folders?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          apps?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          addons?: object;
          //  @example password
          password?: string;
        }
      >;
      // undefined
      mountReload: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
        }
      >;
    };
    update: {
      // undefined
      install: ServiceFunction<
        object,
        T,
        {
          //  @example 1.0.0
          version?: string;
          //  @constraints  boolean:
          backup?: boolean;
        }
      >;
      // undefined
      skip: ServiceFunction<object, T, object>;
      // undefined
      clearSkipped: ServiceFunction<object, T, object>;
    };
    conversation: {
      // undefined
      process: ServiceFunction<
        object,
        T,
        {
          //  @example Turn all lights on
          text: string;
          //  @example NL
          language?: string;
          //  @example homeassistant @constraints  conversation_agent:
          agent_id?: string;
          //  @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // undefined
      reload: ServiceFunction<
        object,
        T,
        {
          //  @example NL
          language?: string;
          //  @example homeassistant @constraints  conversation_agent:
          agent_id?: string;
        }
      >;
    };
    tts: {
      // undefined
      speak: ServiceFunction<
        object,
        T,
        {
          //
          media_player_entity_id: string;
          //  @example My name is hanna
          message: string;
          //  @constraints  boolean:
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific @constraints  object: multiple: false
          options?: object;
        }
      >;
      // undefined
      clearCache: ServiceFunction<object, T, object>;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example My name is hanna
          message: string;
          //
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific
          options?: object;
        }
      >;
    };
    historyStats: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    counter: {
      // undefined
      increment: ServiceFunction<object, T, object>;
      // undefined
      decrement: ServiceFunction<object, T, object>;
      // undefined
      reset: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, mode: box, step: 1
          value: number;
        }
      >;
    };
    light: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @example [255, 100, 100] @constraints  color_rgb:
          rgb_color?: [number, number, number];
          //  @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_pct?: number;
          //  @constraints  number: min: -100, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_step_pct?: number;
          //  @constraints  state: attribute: effect, multiple: false
          effect?: unknown;
          //
          additional_fields?: object;
        }
      >;
      // undefined
      turnOff: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //
          additional_fields?: object;
        }
      >;
      // undefined
      toggle: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @example [255, 100, 100] @constraints  color_rgb:
          rgb_color?: [number, number, number];
          //  @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_pct?: number;
          //  @constraints  state: attribute: effect, multiple: false
          effect?: unknown;
          //
          additional_fields?: object;
        }
      >;
    };
    switch: {
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    backup: {
      // undefined
      createAutomatic: ServiceFunction<object, T, object>;
    };
    derivative: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    cloud: {
      // undefined
      remoteConnect: ServiceFunction<object, T, object>;
      // undefined
      remoteDisconnect: ServiceFunction<object, T, object>;
    };
    image: {
      // undefined
      snapshot: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/image_snapshot.jpg
          filename: string;
        }
      >;
    };
    waterHeater: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      setAwayMode: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          away_mode: boolean;
        }
      >;
      // undefined
      setTemperature: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 250, step: 0.5, mode: box, unit_of_measurement: °
          temperature: number;
          //  @example eco @constraints  state: hide_states: unavailable,unknown, multiple: false
          operation_mode?: unknown;
        }
      >;
      // undefined
      setOperationMode: ServiceFunction<
        object,
        T,
        {
          //  @example eco @constraints  state: hide_states: unavailable,unknown, multiple: false
          operation_mode: unknown;
        }
      >;
    };
    alarmControlPanel: {
      // undefined
      alarmDisarm: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmHome: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmAway: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmNight: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmVacation: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmArmCustomBypass: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      alarmTrigger: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
    };
    fan: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          percentage?: number;
          //  @example auto @constraints  state: attribute: preset_mode, multiple: false
          preset_mode?: unknown;
        }
      >;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      increaseSpeed: ServiceFunction<
        object,
        T,
        {
          //
          additional_fields?: object;
        }
      >;
      // undefined
      decreaseSpeed: ServiceFunction<
        object,
        T,
        {
          //
          additional_fields?: object;
        }
      >;
      // undefined
      oscillate: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          oscillating: boolean;
        }
      >;
      // undefined
      setDirection: ServiceFunction<
        object,
        T,
        {
          //
          direction: "forward" | "reverse";
        }
      >;
      // undefined
      setPercentage: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          percentage: number;
        }
      >;
      // undefined
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          //  @example auto @constraints  state: attribute: preset_mode, multiple: false
          preset_mode: unknown;
        }
      >;
    };
    valve: {
      // undefined
      openValve: ServiceFunction<object, T, object>;
      // undefined
      closeValve: ServiceFunction<object, T, object>;
      // undefined
      setValvePosition: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          position: number;
        }
      >;
      // undefined
      stopValve: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    camera: {
      // undefined
      enableMotionDetection: ServiceFunction<object, T, object>;
      // undefined
      disableMotionDetection: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      snapshot: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // undefined
      playStream: ServiceFunction<
        object,
        T,
        {
          //
          media_player: string;
          //
          format?: "hls";
        }
      >;
      // undefined
      record: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          //  @constraints  number: min: 1, max: 3600, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          lookback?: number;
        }
      >;
    };
    lawnMower: {
      // undefined
      startMowing: ServiceFunction<object, T, object>;
      // undefined
      pause: ServiceFunction<object, T, object>;
      // undefined
      dock: ServiceFunction<object, T, object>;
    };
    weather: {
      // undefined
      getForecasts: ServiceFunction<
        object,
        T,
        {
          //
          type: "daily" | "hourly" | "twice_daily";
        }
      >;
    };
    scene: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      apply: ServiceFunction<
        object,
        T,
        {
          //  @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80  @constraints  object: multiple: false
          entities: object;
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
        }
      >;
      // undefined
      create: ServiceFunction<
        object,
        T,
        {
          //  @example all_lights
          scene_id: string;
          //  @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200  @constraints  object: multiple: false
          entities?: object;
          //  @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // undefined
      delete: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
        }
      >;
    };
    number: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example 42
          value: string;
        }
      >;
    };
    select: {
      // undefined
      selectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectLast: ServiceFunction<object, T, object>;
      // undefined
      selectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectOption: ServiceFunction<
        object,
        T,
        {
          //  @example 'Item A' @constraints  state: hide_states: unavailable,unknown, multiple: false
          option: unknown;
        }
      >;
      // undefined
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
    };
    button: {
      // undefined
      press: ServiceFunction<object, T, object>;
    };
    vacuum: {
      // undefined
      start: ServiceFunction<object, T, object>;
      // undefined
      pause: ServiceFunction<object, T, object>;
      // undefined
      returnToBase: ServiceFunction<object, T, object>;
      // undefined
      cleanSpot: ServiceFunction<object, T, object>;
      // undefined
      cleanArea: ServiceFunction<
        object,
        T,
        {
          //  @constraints  area: multiple: true, reorder: true
          cleaning_area_id: unknown;
        }
      >;
      // undefined
      locate: ServiceFunction<object, T, object>;
      // undefined
      stop: ServiceFunction<object, T, object>;
      // undefined
      setFanSpeed: ServiceFunction<
        object,
        T,
        {
          //  @example low @constraints  state: attribute: fan_speed, multiple: false
          fan_speed: unknown;
        }
      >;
      // undefined
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //  @example set_dnd_timer
          command: string;
          //  @example { 'key': 'value' } @constraints  object: multiple: false
          params?: object;
        }
      >;
    };
    climate: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      setHvacMode: ServiceFunction<
        object,
        T,
        {
          //  @constraints  state: hide_states: unavailable,unknown, multiple: false
          hvac_mode?: unknown;
        }
      >;
      // undefined
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          //  @example away @constraints  state: attribute: preset_mode, multiple: false
          preset_mode: unknown;
        }
      >;
      // undefined
      setTemperature: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          temperature?: number;
          //
          temperature_range?: object;
          //  @constraints  state: hide_states: unavailable,unknown, multiple: false
          hvac_mode?: unknown;
        }
      >;
      // undefined
      setHumidity: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 30, max: 99, unit_of_measurement: %, step: 1, mode: slider
          humidity: number;
        }
      >;
      // undefined
      setFanMode: ServiceFunction<
        object,
        T,
        {
          //  @example low @constraints  state: attribute: fan_mode, multiple: false
          fan_mode: unknown;
        }
      >;
      // undefined
      setSwingMode: ServiceFunction<
        object,
        T,
        {
          //  @example on @constraints  state: attribute: swing_mode, multiple: false
          swing_mode: unknown;
        }
      >;
      // undefined
      setSwingHorizontalMode: ServiceFunction<
        object,
        T,
        {
          //  @example on @constraints  state: attribute: swing_horizontal_mode, multiple: false
          swing_horizontal_mode: unknown;
        }
      >;
    };
    humidifier: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      setMode: ServiceFunction<
        object,
        T,
        {
          //  @example away @constraints  state: attribute: mode, multiple: false
          mode: unknown;
        }
      >;
      // undefined
      setHumidity: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          humidity: number;
        }
      >;
    };
    cover: {
      // undefined
      openCover: ServiceFunction<object, T, object>;
      // undefined
      closeCover: ServiceFunction<object, T, object>;
      // undefined
      setCoverPosition: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          position: number;
        }
      >;
      // undefined
      stopCover: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      openCoverTilt: ServiceFunction<object, T, object>;
      // undefined
      closeCoverTilt: ServiceFunction<object, T, object>;
      // undefined
      stopCoverTilt: ServiceFunction<object, T, object>;
      // undefined
      setCoverTiltPosition: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          tilt_position: number;
        }
      >;
      // undefined
      toggleCoverTilt: ServiceFunction<object, T, object>;
    };
    notify: {
      // undefined
      sendMessage: ServiceFunction<
        object,
        T,
        {
          //
          message: string;
          //
          title?: string;
        }
      >;
      // undefined
      persistentNotification: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific @constraints  object: multiple: false
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_ipad_3 integration.
      mobileAppIpad3: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_jerry_s_iphone integration.
      mobileAppJerrySIphone: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_lenovo_cd_18781y integration.
      mobileAppLenovoCd18781Y: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the google_assistant_sdk service.
      googleAssistantSdk: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
    };
    lock: {
      // undefined
      unlock: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      lock: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      open: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          code?: string;
        }
      >;
    };
    remote: {
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @example BedroomTV
          activity?: string;
        }
      >;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 32756745
          device?: string;
          //  @example Play @constraints  object: multiple: false
          command: object;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          num_repeats?: number;
          //  @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds, mode: slider
          delay_secs?: number;
          //  @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds, mode: slider
          hold_secs?: number;
        }
      >;
      // undefined
      learnCommand: ServiceFunction<
        object,
        T,
        {
          //  @example television
          device?: string;
          //  @example Turn on @constraints  object: multiple: false
          command?: object;
          //
          command_type?: "ir" | "rf";
          //  @constraints  boolean:
          alternative?: boolean;
          //  @constraints  number: min: 0, max: 60, step: 5, unit_of_measurement: seconds, mode: slider
          timeout?: number;
        }
      >;
      // undefined
      deleteCommand: ServiceFunction<
        object,
        T,
        {
          //  @example television
          device?: string;
          //  @example Mute @constraints  object: multiple: false
          command: object;
        }
      >;
    };
    imageProcessing: {
      // undefined
      scan: ServiceFunction<object, T, object>;
    };
    logbook: {
      // undefined
      log: ServiceFunction<
        object,
        T,
        {
          //  @example Kitchen
          name: string;
          //  @example is being used
          message: string;
          //
          entity_id?: string;
          //  @example light
          domain?: string;
        }
      >;
    };
    inputButton: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      press: ServiceFunction<object, T, object>;
    };
    group: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      set: ServiceFunction<
        object,
        T,
        {
          //  @example test_group
          object_id: string;
          //  @example My test group
          name?: string;
          //  @example mdi:camera @constraints  icon:
          icon?: string;
          //  @example domain.entity_id1, domain.entity_id2
          entities?: string;
          //  @example domain.entity_id1, domain.entity_id2
          add_entities?: string;
          //  @example domain.entity_id1, domain.entity_id2
          remove_entities?: string;
          //  @constraints  boolean:
          all?: boolean;
        }
      >;
      // undefined
      remove: ServiceFunction<
        object,
        T,
        {
          //  @example test_group @constraints  object: multiple: false
          object_id: object;
        }
      >;
    };
    zone: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    timer: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      start: ServiceFunction<
        object,
        T,
        {
          //  @example 00:01:00 or 60 @constraints  duration: enable_second: true
          duration?: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
      // undefined
      pause: ServiceFunction<object, T, object>;
      // undefined
      cancel: ServiceFunction<object, T, object>;
      // undefined
      finish: ServiceFunction<object, T, object>;
      // undefined
      change: ServiceFunction<
        object,
        T,
        {
          //  @example 00:01:00, 60 or -60 @constraints  duration: allow_negative: true, enable_second: true
          duration: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
    };
    inputNumber: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, step: 0.001, mode: box
          value: number;
        }
      >;
      // undefined
      increment: ServiceFunction<object, T, object>;
      // undefined
      decrement: ServiceFunction<object, T, object>;
    };
    inputSelect: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      selectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectLast: ServiceFunction<object, T, object>;
      // undefined
      selectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectOption: ServiceFunction<
        object,
        T,
        {
          //  @example 'Item A' @constraints  state: hide_states: unavailable,unknown, multiple: false
          option: unknown;
        }
      >;
      // undefined
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      setOptions: ServiceFunction<
        object,
        T,
        {
          //  @example ['Item A', 'Item B', 'Item C']
          options: string;
        }
      >;
    };
    inputBoolean: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    person: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    deviceTracker: {
      // undefined
      see: ServiceFunction<
        object,
        T,
        {
          //  @example FF:FF:FF:FF:FF:FF
          mac?: string;
          //  @example phonedave
          dev_id?: string;
          //  @example Dave
          host_name?: string;
          //  @example home
          location_name?: string;
          //  @example [51.509802, -0.086692] @constraints  object: multiple: false
          gps?: object;
          //  @constraints  number: min: 0, mode: box, unit_of_measurement: m, step: 1
          gps_accuracy?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          battery?: number;
        }
      >;
    };
    text: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example Hello world!
          value: string;
        }
      >;
    };
    time: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example 22:15 @constraints  time:
          time: string;
        }
      >;
    };
    aiTask: {
      // undefined
      generateData: ServiceFunction<
        object,
        T,
        {
          //  @example home summary
          task_name: string;
          //  @example Generate a funny notification that the garage door was left open
          instructions: string;
          //
          entity_id?: string;
          //  @example { 'name': { 'selector': { 'text': }, 'description': 'Name of the user', 'required': 'True' } } }, 'age': { 'selector': { 'number': }, 'description': 'Age of the user' } } @constraints  object: multiple: false
          structure?: object;
          //  @constraints  media: accept: *, multiple: true
          attachments?: unknown;
        }
      >;
      // undefined
      generateImage: ServiceFunction<
        object,
        T,
        {
          //  @example picture of a dog
          task_name: string;
          //  @example Generate a high quality square image of a dog on transparent background
          instructions: string;
          //
          entity_id: string;
          //  @constraints  media: accept: *, multiple: true
          attachments?: unknown;
        }
      >;
    };
    date: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example 2022/11/01 @constraints  date:
          date: string;
        }
      >;
    };
    assistSatellite: {
      // undefined
      announce: ServiceFunction<
        object,
        T,
        {
          //  @example Time to wake up!
          message?: string;
          //  @constraints  media: accept: audio/*, multiple: false
          media_id?: unknown;
          //  @constraints  boolean:
          preannounce?: boolean;
          //  @constraints  media: accept: audio/*, multiple: false
          preannounce_media_id?: unknown;
        }
      >;
      // undefined
      startConversation: ServiceFunction<
        object,
        T,
        {
          //  @example You left the lights on in the living room. Turn them off?
          start_message?: string;
          //  @constraints  media: accept: audio/*, multiple: false
          start_media_id?: unknown;
          //
          extra_system_prompt?: string;
          //  @constraints  boolean:
          preannounce?: boolean;
          //  @constraints  media: accept: audio/*, multiple: false
          preannounce_media_id?: unknown;
        }
      >;
      // undefined
      askQuestion: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example What kind of music would you like to play?
          question?: string;
          //  @constraints  media: accept: audio/*, multiple: false
          question_media_id?: unknown;
          //  @constraints  boolean:
          preannounce?: boolean;
          //  @constraints  media: accept: audio/*, multiple: false
          preannounce_media_id?: unknown;
          //  @constraints  object: label_field: sentences, description_field: id, multiple: true, translation_key: answers, fields: [object Object]
          answers?: object;
        }
      >;
    };
    datetime: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example 2023-10-07T21:35:22 @constraints  datetime:
          datetime: string;
        }
      >;
    };
    siren: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @example fire
          tone?: string;
          //  @example 0.5 @constraints  number: min: 0, max: 1, step: 0.05, mode: slider
          volume_level?: number;
          //  @example 15
          duration?: string;
        }
      >;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    llmvision: {
      // Analyze an image with AI
      imageAnalyzer: ServiceFunction<
        object,
        T,
        {
          // Configuration to use @constraints  config_entry: integration: llmvision
          provider: unknown;
          // Model to use. Uncheck for default. @example gpt-4o-mini
          model?: string;
          // Model prompt @example Describe the image
          message: string;
          // Create a new event in the timeline for this detection. @example true @constraints  boolean:
          store_in_timeline?: boolean;
          // Use information stored in memory to provide additional context. Memory must be set up. @example true @constraints  boolean:
          use_memory?: boolean;
          // Local path to image @example /config/www/tmp/front_door.jpg
          image_file?: string;
          // Image or camera entity to analyze @example image.front_door_person
          image_entity?: string;
          // Include filename in the request @constraints  boolean:
          include_filename: boolean;
          // Width in pixels to downscale @example 1280 @constraints  number: min: 512, max: 1920, step: 1, mode: slider
          target_width?: number;
          // Maximum number of tokens to generate @example 3000 @constraints  number: step: 1, mode: box
          max_tokens?: number;
          // Generate a title. (Used for notifications and events) @constraints  boolean:
          generate_title?: boolean;
          // Save the key frame. This will save analyzed frames in /media/llmvision/snapshots so they can be used for notifications. The file path will be included in the response. @constraints  boolean:
          expose_images?: boolean;
          // Format of the response - text for natural language or json for structured data @example json
          response_format?: "text" | "json";
          // JSON schema defining the expected response structure (only used when response_format is json). To enable automatic title generation for timeline events, include a field in your schema for the title (e.g., 'title': {'type': 'string', 'description': 'Event title'}) and specify the field names below. @example {'type': 'object', 'properties': {'title': {'type': 'string', 'description': 'Event title'}, 'description': {'type': 'string', 'description': 'Event description'}, 'confidence': {'type': 'number', 'minimum': 0, 'maximum': 100}}, 'required': ['title', 'description', 'confidence'], 'additionalProperties': false}
          structure?: string;
          // Name of the field in your JSON schema that contains the event title (used for timeline). Leave empty to use fallback title 'Motion detected'. @example title
          title_field?: string;
          // Name of the field in your JSON schema that contains the event description (used for timeline). @example description
          description_field?: string;
        }
      >;
      // Analyze video with AI
      videoAnalyzer: ServiceFunction<
        object,
        T,
        {
          // Configuration to use @constraints  config_entry: integration: llmvision
          provider: unknown;
          // Model to use. Uncheck for default. @example gpt-4o-mini
          model?: string;
          // Model prompt @example Describe what happens in the video
          message: string;
          // Create a new event in the timeline for this detection. @example true @constraints  boolean:
          store_in_timeline?: boolean;
          // Use information stored in memory to provide additional context. Memory must be set up. @example true @constraints  boolean:
          use_memory?: boolean;
          // One or multiple local paths or URLs to video. Use a new line to separate multiple entries. @example /config/www/recordings/front_door.mp4
          video_file?: string;
          // Frigate Event ID @example 1712108310.968815-r28cdt
          event_id?: string;
          // How many frames to analyze. Picks frames with the most movement. @example 3 @constraints  number: min: 1, max: 10, step: 1, mode: slider
          max_frames?: number;
          // Include filename in the request @constraints  boolean:
          include_filename: boolean;
          // Width in pixels to downscale @example 1280 @constraints  number: min: 512, max: 1920, step: 1, mode: slider
          target_width?: number;
          // Maximum number of tokens to generate @example 3000 @constraints  number: step: 1, mode: box
          max_tokens?: number;
          // Generate a title. (Used for notifications and events) @constraints  boolean:
          generate_title?: boolean;
          // Save the key frame. This will save analyzed frames in /media/llmvision/snapshots so they can be used for notifications. The file path will be included in the response. @constraints  boolean:
          expose_images?: boolean;
          // Format of the response - text for natural language or json for structured data @example json
          response_format?: "text" | "json";
          // JSON schema defining the expected response structure (only used when response_format is json). To enable automatic title generation for timeline events, include a field in your schema for the title (e.g., 'title': {'type': 'string', 'description': 'Event title'}) and specify the field names below. @example {'type': 'object', 'properties': {'title': {'type': 'string', 'description': 'Event title'}, 'description': {'type': 'string', 'description': 'Event description'}, 'confidence': {'type': 'number', 'minimum': 0, 'maximum': 100}}, 'required': ['title', 'description', 'confidence'], 'additionalProperties': false}
          structure?: string;
          // Name of the field in your JSON schema that contains the event title (used for timeline). Leave empty to use fallback title 'Motion detected'. @example title
          title_field?: string;
          // Name of the field in your JSON schema that contains the event description (used for timeline). @example description
          description_field?: string;
        }
      >;
      // Analyze a live camera stream with AI
      streamAnalyzer: ServiceFunction<
        object,
        T,
        {
          // Configuration to use @constraints  config_entry: integration: llmvision
          provider: unknown;
          // Model to use. Uncheck for default. @example gpt-4o-mini
          model?: string;
          // Model prompt @example Describe what happens in the camera feed
          message: string;
          // Create a new event in the timeline for this detection. @example true @constraints  boolean:
          store_in_timeline?: boolean;
          // Use information stored in memory to provide additional context. Memory must be set up. @example true @constraints  boolean:
          use_memory?: boolean;
          // Camera entity to stream @example camera.front_door
          image_entity: string;
          // How long to record in seconds @example 5 @constraints  number: min: 1, max: 60, step: 1, mode: slider
          duration: number;
          // How many frames to analyze. Picks frames with the most movement. @example 3 @constraints  number: min: 1, max: 10, step: 1, mode: slider
          max_frames?: number;
          // Include camera name in request @constraints  boolean:
          include_filename: boolean;
          // Width in pixels to downscale @example 1280 @constraints  number: min: 512, max: 1920, step: 1, mode: slider
          target_width?: number;
          // Maximum number of tokens to generate @example 3000 @constraints  number: step: 1, mode: box
          max_tokens?: number;
          // Generate a title. (Used for notifications and events) @constraints  boolean:
          generate_title?: boolean;
          // Save the key frame. This will save analyzed frames in /media/llmvision/snapshots so they can be used for notifications. The file path will be included in the response. @constraints  boolean:
          expose_images?: boolean;
          // Format of the response - text for natural language or json for structured data @example json
          response_format?: "text" | "json";
          // JSON schema defining the expected response structure (only used when response_format is json). To enable automatic title generation for timeline events, include a field in your schema for the title (e.g., 'title': {'type': 'string', 'description': 'Event title'}) and specify the field names below. @example {'type': 'object', 'properties': {'title': {'type': 'string', 'description': 'Event title'}, 'description': {'type': 'string', 'description': 'Event description'}, 'confidence': {'type': 'number', 'minimum': 0, 'maximum': 100}}, 'required': ['title', 'description', 'confidence'], 'additionalProperties': false}
          structure?: string;
          // Name of the field in your JSON schema that contains the event title (used for timeline). Leave empty to use fallback title 'Motion detected'. @example title
          title_field?: string;
          // Name of the field in your JSON schema that contains the event description (used for timeline). @example description
          description_field?: string;
        }
      >;
      // Update sensors with data extracted from images (Beta)
      dataAnalyzer: ServiceFunction<
        object,
        T,
        {
          // Configuration to use @constraints  config_entry: integration: llmvision
          provider: unknown;
          // Model to use. Uncheck for default. @example gpt-4o-mini
          model?: string;
          // Describe what should be extracted from the image. Data types and available options will be recognized automatically based the provided sensor. @example How many cars are parked?
          message: string;
          // Create a new event in the timeline for this detection. @example true @constraints  boolean:
          store_in_timeline?: boolean;
          // Use information stored in memory to provide additional context. Memory must be set up. @example true @constraints  boolean:
          use_memory?: boolean;
          // The sensor to update
          sensor_entity: string;
          // Local path to image @example /config/www/tmp/front_door.jpg
          image_file?: string;
          // Image or camera entity to analyze @example image.front_door_person
          image_entity?: string;
          // Include filename in the request @constraints  boolean:
          include_filename: boolean;
          // Width in pixels to downscale @example 1280 @constraints  number: min: 512, max: 1920, step: 1, mode: slider
          target_width?: number;
          // Maximum number of tokens to generate @example 3000 @constraints  number: step: 1, mode: box
          max_tokens?: number;
          // Generate a title. (Used for notifications and events) @constraints  boolean:
          generate_title?: boolean;
          // Save the key frame. This will save analyzed frames in /media/llmvision/snapshots so they can be used for notifications. The file path will be included in the response. @constraints  boolean:
          expose_images?: boolean;
        }
      >;
      // Creates a new event in the LLM Vision Timeline
      createEvent: ServiceFunction<
        object,
        T,
        {
          // Event Title @example Car seen
          title: string;
          // Event Description @example A car was seen pulling into a driveway
          description: string;
          // Label to assign the event to @example Car
          label?:
            | "Alarm"
            | "Bicycle"
            | "Bird"
            | "Bus"
            | "Camera"
            | "Car"
            | "Cat"
            | "Dog"
            | "Door"
            | "Key"
            | "Light"
            | "Lock"
            | "Motorcycle"
            | "Package"
            | "Person"
            | "Plant"
            | "Sensor"
            | "Tree"
            | "Truck"
            | "Van";
          // Image of the event. Must be stored in '/media/llmvision/snapshots/' @example /media/llmvision/snapshots/example.jpg
          image_path?: string;
          // Camera that recorded the event. @example camera.front_door
          camera_entity?: string;
          // Time and date the event started. Set to now if left blank. Format: (YYYY-MM-DD HH:MM:SS) @example 2022-02-22 13:30:00 @constraints  datetime:
          start_time?: string;
          // Time and date the event ended. Set to one minute after start if left blank. Format: (YYYY-MM-DD HH:MM:SS) @example 2022-02-22 13:30:00 @constraints  datetime:
          end_time?: string;
        }
      >;
      // Get events from the LLM Vision Timeline
      getEvents: ServiceFunction<
        object,
        T,
        {
          // Only return events that overlap with this start datetime. @example 2026-03-16 08:00:00 @constraints  datetime:
          start?: string;
          // Only return events that overlap with this end datetime. @example 2026-03-16 20:00:00 @constraints  datetime:
          end?: string;
          // Only return events captured by the selected entities. @example image.front_door_person
          cameras?: string;
          // Comma-separated list of categories to include. @example people,vehicles,animals
          categories?:
            | "Person"
            | "Vehicle"
            | "Animal"
            | "Package"
            | "Entity"
            | "Nature";
          // Only return events matching one of the selected labels @example person,car,dog
          labels?:
            | "Alarm"
            | "Bicycle"
            | "Bird"
            | "Bus"
            | "Camera"
            | "Car"
            | "Cat"
            | "Dog"
            | "Door"
            | "Key"
            | "Light"
            | "Lock"
            | "Motorcycle"
            | "Package"
            | "Person"
            | "Plant"
            | "Sensor"
            | "Tree"
            | "Truck"
            | "Van";
          // Maximum number of events to return. @example 100 @constraints  number: min: 1, step: 1, mode: box
          limit?: number;
          // Include events with 'no activity' in the title. @example true @constraints  boolean:
          include_no_activity?: boolean;
        }
      >;
    };
    environmentCanada: {
      // undefined
      getAlerts: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: environment_canada
          config_entry_id: unknown;
        }
      >;
      // undefined
      setRadarType: ServiceFunction<
        object,
        T,
        {
          //  @example Rain
          radar_type: "Auto" | "Rain" | "Snow" | "Precipitation type";
        }
      >;
      // undefined
      getForecasts: ServiceFunction<object, T, object>;
    };
    inputText: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example This is an example text
          value: string;
        }
      >;
    };
    musicAssistant: {
      // undefined
      search: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: music_assistant
          config_entry_id: unknown;
          //  @example We Are The Champions
          name: string;
          //  @example playlist
          media_type?:
            | "artist"
            | "album"
            | "audiobook"
            | "playlist"
            | "podcast"
            | "track"
            | "radio";
          //  @example Queen
          artist?: string;
          //  @example News of the world
          album?: string;
          //
          search_options?: object;
        }
      >;
      // undefined
      getLibrary: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: music_assistant
          config_entry_id: unknown;
          //  @example playlist
          media_type:
            | "artist"
            | "album"
            | "audiobook"
            | "playlist"
            | "podcast"
            | "track"
            | "radio";
          //  @example true @constraints  boolean:
          favorite?: boolean;
          //  @example We Are The Champions
          search?: string;
          //
          pagination?: object;
          //  @example random
          order_by?:
            | "name"
            | "name_desc"
            | "sort_name"
            | "sort_name_desc"
            | "timestamp_added"
            | "timestamp_added_desc"
            | "last_played"
            | "last_played_desc"
            | "play_count"
            | "play_count_desc"
            | "year"
            | "year_desc"
            | "position"
            | "position_desc"
            | "artist_name"
            | "artist_name_desc"
            | "random"
            | "random_play_count";
          //  @example single
          album_type?: "album" | "single" | "compilation" | "ep" | "unknown";
          //  @example true @constraints  boolean:
          album_artists_only?: boolean;
        }
      >;
      // undefined
      playMedia: ServiceFunction<
        object,
        T,
        {
          //  @example spotify://playlist/aabbccddeeff @constraints  object: multiple: false
          media_id: object;
          //  @example playlist
          media_type?:
            | "artist"
            | "album"
            | "audiobook"
            | "folder"
            | "playlist"
            | "podcast"
            | "track"
            | "radio";
          //  @example Queen
          artist?: string;
          //  @example News of the world
          album?: string;
          //
          enqueue?: "play" | "replace" | "next" | "replace_next" | "add";
          //  @constraints  boolean:
          radio_mode?: boolean;
          //  @example john
          username?: string;
        }
      >;
      // undefined
      playAnnouncement: ServiceFunction<
        object,
        T,
        {
          //  @example http://someremotesite.com/doorbell.mp3
          url: string;
          //  @example true @constraints  boolean:
          use_pre_announce?: boolean;
          //  @example http://someremotesite.com/chime.mp3
          pre_announce_url?: string;
          //  @example 75 @constraints  number: min: 1, max: 100, step: 1, mode: slider
          announce_volume?: number;
        }
      >;
      // undefined
      transferQueue: ServiceFunction<
        object,
        T,
        {
          //
          source_player?: string;
          //  @example true @constraints  boolean:
          auto_play?: boolean;
        }
      >;
      // undefined
      getQueue: ServiceFunction<object, T, object>;
    };
    schedule: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      getSchedule: ServiceFunction<object, T, object>;
    };
    mqtt: {
      // undefined
      publish: ServiceFunction<
        object,
        T,
        {
          //  @example /homeassistant/hello
          topic: string;
          //  @example The temperature is {{ states('sensor.temperature') }} @constraints  template:
          payload?: unknown;
          //
          publish_options?: object;
        }
      >;
      // undefined
      dump: ServiceFunction<
        object,
        T,
        {
          //  @example OpenZWave/#
          topic?: string;
          //  @constraints  number: min: 1, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
        }
      >;
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    utilityMeter: {
      // undefined
      reset: ServiceFunction<object, T, object>;
      // undefined
      calibrate: ServiceFunction<
        object,
        T,
        {
          //  @example 100
          value: string;
        }
      >;
    };
    matter: {
      // undefined
      waterHeaterBoost: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 60, max: 14400, step: 60, mode: box
          duration: number;
          //  @constraints  boolean:
          emergency_boost?: boolean;
          //  @constraints  number: min: 30, max: 65, step: 1, mode: slider
          temporary_setpoint?: number;
        }
      >;
      // undefined
      setLockUser: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 1, max: 255, step: 1, mode: box
          user_index?: number;
          //
          user_name?: string;
          //
          user_type?:
            | "unrestricted_user"
            | "year_day_schedule_user"
            | "week_day_schedule_user"
            | "programming_user"
            | "non_access_user"
            | "forced_user"
            | "disposable_user"
            | "expiring_user"
            | "schedule_restricted_user"
            | "remote_only_user";
          //
          credential_rule?: "single" | "dual" | "tri";
        }
      >;
      // undefined
      clearLockUser: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 1, max: 65534, step: 1, mode: box
          user_index: number;
        }
      >;
      // undefined
      getLockInfo: ServiceFunction<object, T, object>;
      // undefined
      getLockUsers: ServiceFunction<object, T, object>;
      // undefined
      setLockCredential: ServiceFunction<
        object,
        T,
        {
          //
          credential_type:
            | "pin"
            | "rfid"
            | "fingerprint"
            | "finger_vein"
            | "face";
          //
          credential_data: string;
          //  @constraints  number: min: 0, max: 65534, step: 1, mode: box
          credential_index?: number;
          //  @constraints  number: min: 1, max: 65534, step: 1, mode: box
          user_index?: number;
          //
          user_status?: "occupied_enabled" | "occupied_disabled";
          //
          user_type?:
            | "unrestricted_user"
            | "year_day_schedule_user"
            | "week_day_schedule_user"
            | "programming_user"
            | "non_access_user"
            | "forced_user"
            | "disposable_user"
            | "expiring_user"
            | "schedule_restricted_user"
            | "remote_only_user";
        }
      >;
      // undefined
      clearLockCredential: ServiceFunction<
        object,
        T,
        {
          //
          credential_type:
            | "pin"
            | "rfid"
            | "fingerprint"
            | "finger_vein"
            | "face";
          //  @constraints  number: min: 0, max: 65534, step: 1, mode: box
          credential_index: number;
        }
      >;
      // undefined
      getLockCredentialStatus: ServiceFunction<
        object,
        T,
        {
          //
          credential_type:
            | "programming_pin"
            | "pin"
            | "rfid"
            | "fingerprint"
            | "finger_vein"
            | "face"
            | "aliro_credential_issuer_key"
            | "aliro_evictable_endpoint_key"
            | "aliro_non_evictable_endpoint_key";
          //  @constraints  number: min: 0, max: 65534, step: 1, mode: box
          credential_index: number;
        }
      >;
    };
    file: {
      // undefined
      readFile: ServiceFunction<
        object,
        T,
        {
          //  @example www/my_file.json
          file_name?: string;
          //  @example JSON
          file_encoding?: "JSON" | "YAML";
        }
      >;
    };
    cast: {
      // undefined
      showLovelaceView: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example lovelace-cast
          dashboard_path?: string;
          //  @example downstairs
          view_path: string;
        }
      >;
    };
    reolink: {
      // undefined
      playChime: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          //
          ringtone:
            | "citybird"
            | "originaltune"
            | "pianokey"
            | "loop"
            | "attraction"
            | "hophop"
            | "goodday"
            | "operetta"
            | "moonlight"
            | "waybackhome";
        }
      >;
      // undefined
      ptzMove: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 1, max: 64, step: 1, mode: slider
          speed: number;
        }
      >;
    };
    tuya: {
      // undefined
      getFeederMealPlan: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
        }
      >;
      // undefined
      setFeederMealPlan: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          //  @constraints  object: translation_key: set_feeder_meal_plan, description_field: portion, multiple: true, fields: [object Object]
          meal_plan: object;
        }
      >;
    };
    sonoff: {
      // Sends a command to a device.
      sendCommand: ServiceFunction<
        object,
        T,
        {
          // Device ID to send command to. @example 1000123456
          device?: object;
          // A single command to send. @example switch
          cmd?: object;
        }
      >;
    };
    inputDatetime: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setDatetime: ServiceFunction<
        object,
        T,
        {
          //  @example '2019-04-20'
          date?: string;
          //  @example '05:04:20' @constraints  time:
          time?: string;
          //  @example '2019-04-20 05:04:20'
          datetime?: string;
          //  @constraints  number: min: 0, max: 9223372036854776000, mode: box, step: 1
          timestamp?: number;
        }
      >;
    };
    scentAssistant: {
      // Set the spray schedule for a scent diffuser. Configure which days, time range, and spray/pause durations.
      setSchedule: ServiceFunction<
        object,
        T,
        {
          // List of weekdays: mon, tue, wed, thu, fri, sat, sun, or all @example [mon, wed, fri]
          days: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun" | "all";
          // Time to start spraying (HH:MM) @example 08:00 @constraints  time:
          start_time?: string;
          // Time to stop spraying (HH:MM) @example 20:00 @constraints  time:
          end_time?: string;
          // How long each spray lasts in seconds @example 15 @constraints  number: min: 5, max: 600, unit_of_measurement: seconds, step: 1, mode: slider
          work_seconds?: number;
          // Pause between sprays in seconds @example 60 @constraints  number: min: 5, max: 3600, unit_of_measurement: seconds, step: 1, mode: slider
          pause_seconds?: number;
          // Enable or disable this schedule slot @constraints  boolean:
          enabled?: boolean;
        }
      >;
    };
    calendar: {
      // undefined
      createEvent: ServiceFunction<
        object,
        T,
        {
          //  @example Department Party
          summary: string;
          //  @example Meeting to provide technical review for 'Phoenix' design.
          description?: string;
          //  @example 2022-03-22 20:00:00 @constraints  datetime:
          start_date_time?: string;
          //  @example 2022-03-22 22:00:00 @constraints  datetime:
          end_date_time?: string;
          //  @example 2022-03-22 @constraints  date:
          start_date?: string;
          //  @example 2022-03-23 @constraints  date:
          end_date?: string;
          //  @example {'days': 2} or {'weeks': 2}
          in?: object;
          //  @example Conference Room - F123, Bldg. 002
          location?: string;
        }
      >;
      // undefined
      getEvents: ServiceFunction<
        object,
        T,
        {
          //  @example 2022-03-22 20:00:00 @constraints  datetime:
          start_date_time?: string;
          //  @example 2022-03-22 22:00:00 @constraints  datetime:
          end_date_time?: string;
          //  @constraints  duration: enable_second: true
          duration?: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
    };
    wasteCollectionSchedule: {
      // Fetch data from all sources.
      fetchData: ServiceFunction<object, T, object>;
    };
    synologyDsm: {
      // undefined
      reboot: ServiceFunction<
        object,
        T,
        {
          //  @example 1NDVC86409
          serial?: string;
        }
      >;
      // undefined
      shutdown: ServiceFunction<
        object,
        T,
        {
          //  @example 1NDVC86409
          serial?: string;
        }
      >;
    };
    shoppingList: {
      // undefined
      addItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      removeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      completeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      incompleteItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      completeAll: ServiceFunction<object, T, object>;
      // undefined
      incompleteAll: ServiceFunction<object, T, object>;
      // undefined
      clearCompletedItems: ServiceFunction<object, T, object>;
      // undefined
      sort: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          reverse?: boolean;
        }
      >;
    };
    googleAssistantSdk: {
      // undefined
      sendTextCommand: ServiceFunction<
        object,
        T,
        {
          //  @example turn off kitchen TV
          command?: string;
          //  @example media_player.living_room_speaker
          media_player?: string;
        }
      >;
    };
    googleSheets: {
      // undefined
      appendSheet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: google_sheets
          config_entry: unknown;
          //  @example Sheet1
          worksheet?: string;
          //  @constraints  boolean:
          add_created_column?: boolean;
          //  @example {'hello': world, 'cool': True, 'count': 5} @constraints  object: multiple: false
          data: object;
        }
      >;
      // undefined
      getSheet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: google_sheets
          config_entry: unknown;
          //  @example Sheet1
          worksheet?: string;
          //  @example 2 @constraints  number: step: 1, mode: box
          rows: number;
        }
      >;
    };
    spotifyplus: {
      // Add one or more items to the end of the user's current Spotify Player playback queue.
      addPlayerQueueItems: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A list of Spotify track or episode URIs to add to the queue (spotify:track:6zd8T1PBe9JFHmuVnurdRp, spotify:track:1kWUud3vY5ij5r62zxpTRy); values can be track or episode URIs.  All URIs must be of the same type - you cannot mix and match tracks and episodes.  An unlimited number of items can be added in one request, but the more items the longer it will take. @example spotify:track:6zd8T1PBe9JFHmuVnurdRp
          uris: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          verify_device_id?: boolean;
          // Time delay (in seconds) to wait AFTER issuing the final add request (if necessary). This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.15; value range is 0 - 10. @example 0.15 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Check if one or more albums (or the currently playing album) exists in the current user's 'Your Library' favorites.
      checkAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX
          ids?: string;
        }
      >;
      // Check if one or more artists (or the currently playing artists) is followed in the current user's 'Your Library' favorites.
      checkArtistsFollowing: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track artist uri id value is used. @example 2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk
          ids?: string;
        }
      >;
      // Check if one or more audiobooks (or the currently playing audiobook) exists in the current user's 'Your Library' favorites.
      checkAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 40 id's may be specified.  If omitted, the currently playing audiobook uri id value is used. @example 3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe
          ids?: string;
        }
      >;
      // Check if one or more episodes (or the currently playing episode) exists in the current user's 'Your Library' favorites.
      checkEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 40 id's may be specified.  If omitted, the currently playing episode uri id value is used. @example 3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4
          ids?: string;
        }
      >;
      // Check if one or more playlists (or the currently playing playlist) is followed in the current user's 'Your Library' favorites.
      checkPlaylistFollowers: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify playlist id's (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  A maximum of 40 id's may be specified.  If omitted, the currently playing playlist uri id value is used. @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id?: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility.
          user_ids?: string;
        }
      >;
      // Check if one or more shows (or the currently playing show) exists in the current user's 'Your Library' favorites.
      checkShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk
          ids?: string;
        }
      >;
      // Check if one or more tracks (or the currently playing track) exists in the current user's 'Your Library' favorites.
      checkTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 40 id's may be specified.  If omitted, the currently playing context uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK
          ids?: string;
        }
      >;
      // Check if one or more items (or the currently playing item) exists in the current user's 'Your Library' favorites. Accepts Spotify URIs for tracks, albums, artists, episodes, shows, audiobooks, artists, users, and playlists.
      checkUserFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify item uri's (e.g. `spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:track:1kWUud3vY5ij5r62zxpTRy`).  A maximum of 40 uri's may be specified.  If omitted, the currently playing item uri value is used. @example spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:album:6vc9OTcyd3hyzabCmsdnwE,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris?: string;
        }
      >;
      // Check to see if the current user is following one or more users.
      checkUsersFollowing: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify user ID's to check (e.g. `smedjan, 7piUznRWxNyKpaPvmOSdiZ`).  A maximum of 50 ID's can be specified. @example smedjan, 7piUznRWxNyKpaPvmOSdiZ
          ids: string;
        }
      >;
      // Add the current user as a follower of one or more artists.
      followArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track artist uri id value is used. @example 2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk
          ids?: string;
        }
      >;
      // Add the current user as a follower of a playlist.
      followPlaylist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify playlist id's (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  A maximum of 40 id's may be specified.  If omitted, the currently playing playlist uri id value is used. @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id?: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          public?: boolean;
        }
      >;
      // Add the current user as a follower of one or more users.
      followUsers: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of the Spotify user IDs (e.g. 'smedjan,3758dfdsfjk435hjk6k79lm0n3c4').  A maximum of 50 IDs can be sent in one request. @example smedjan,3758dfdsfjk435hjk6k79lm0n3c4
          ids: string;
        }
      >;
      // Get Spotify catalog information for a single album.
      getAlbum: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the album.  If omitted, the currently playing album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE
          album_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get a list of the albums saved in the current Spotify user's 'Your Library'.
      getAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get a list of new album releases featured in Spotify.
      getAlbumNewReleases: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          country?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information about an album's tracks.
      getAlbumTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the album (e.g. `6vc9OTcyd3hyzabCmsdnwE`). If null, the currently playing album uri id value is used; a Spotify Free or Premium account is required to correctly read the currently playing context. @example 6vc9OTcyd3hyzabCmsdnwE
          album_id?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information for a single artist.
      getArtist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
        }
      >;
      // Get Spotify catalog information about an artist's albums.
      getArtistAlbums: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
          // A comma-separated list of keywords that will be used to filter the response.  If not supplied, only `album` types will be returned. Valid values are `album`, `single`, `appears_on`, `compilation`. @example album
          include_groups?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get artist about information from the Spotify Artist Biography page for the specified Spotify artist ID.
      getArtistInfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
        }
      >;
      // Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
      getArtistRelatedArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information about an artist's top tracks by country.
      getArtistTopTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the artist.  If omitted, the currently playing artist uri id value is used. @example 6APm8EjxOHSYM5B4i3vT3q
          artist_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get the current user's followed artists.
      getArtistsFollowed: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The last artist ID retrieved from the previous request, or null for the first request. @example 6APm8EjxOHSYM5B4i3vT3q
          after?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single audiobook.
      getAudiobook: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the audiobook (e.g. `74aydHJKgYz3AIq3jjBSv1`). If null, the currently playing audiobook uri id value is used. @example 74aydHJKgYz3AIq3jjBSv1
          audiobook_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get Spotify catalog information about an audiobook's chapters.
      getAudiobookChapters: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the audiobook (e.g. `74aydHJKgYz3AIq3jjBSv1`). If null, the currently playing audiobook uri id value is used. @example 74aydHJKgYz3AIq3jjBSv1
          audiobook_id?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a list of the audiobooks saved in the current Spotify user's 'Your Library'.
      getAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get a sorted list of ALL categories used to tag items in Spotify.
      getBrowseCategorysList: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          country?: string;
          // The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore.  For example `es_MX`, meaning `Spanish (Mexico)`.  Provide this parameter if you want the results returned in a particular language (where available).  Note that if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). @example es_MX
          locale?: string;
          // True to return real-time information from the spotify web api and update the cache; otherwise, False to just return the cached value. @example False @constraints  boolean:
          refresh?: boolean;
        }
      >;
      // Get a list of Spotify playlists tagged with a particular category.
      getCategoryPlaylists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Spotify category ID (not name) for the category. @example dinner
          category_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          country?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single audiobook chapter identified by its unique Spotify ID.
      getChapter: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the chapter.  If omitted, the currently playing chapter uri id value is used. @example 3V0yw9UDrYAfkhAvTrvt9Y
          chapter_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Gets the contents of an image url and transfers the contents to the local file system.
      getCoverImageFile: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The cover image url whose contents are to be retrieved. @example https://i.scdn.co/image/ab67616d0000b27316c019c87a927829804caf0b
          image_url: string;
          // Fully-qualified path to store the downloaded image to. @example /config/www/images/cover_file_image.jpg
          output_path: string;
        }
      >;
      // Get information about the current playback state, including track or episode, and progress. If the Spotify Web API reports nothing as playing, then the device-specific playback state is returned (if one exists).
      getDevicePlaybackState: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  This could be an id, name, a default device indicator (e.g. '*'), or null to utilize the active player device. @example Sonos 01
          device_id?: string;
        }
      >;
      // Get Spotify catalog information for a single episode identified by its unique Spotify ID.
      getEpisode: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the episode.  If omitted, the currently playing episode uri id value is used. @example 26c0zVyOv1lzfYpBXdh1zC
          episode_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get a list of the episodes saved in the current Spotify user's 'Your Library'.
      getEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get a list of Spotify featured playlists.
      getFeaturedPlaylists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          country?: string;
          // The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore.  For example `es_MX`, meaning `Spanish (Mexico)`.  Provide this parameter if you want the results returned in a particular language (where available).  Note that if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). @example es_MX
          locale?: string;
          // A timestamp in ISO 8601 format (yyyy-MM-ddTHH:mm:ss). Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. @example 2023-10-23T09:00:00
          timestamp?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Gets the Id portion of a Spotify URI value.
      getIdFromUri: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Spotify URI value to parse. Example: `spotify:track:6vc9OTcyd3hyzabCmsdnwE`. @example spotify:track:6vc9OTcyd3hyzabCmsdnwE
          uri: string;
        }
      >;
      // Get color palette RGB values from the specified image source.
      getImagePaletteColors: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The image source to extract color palette information from.  If the prefix of the value is `http:` or `https:`, then the image is downloaded from the url.  This can also point to a filename on the local file system.  If null, the currently playing Spotify track image url is used.  Example = `http://mydomain/image1.jpg`, `c:/image1.jpg` @example https://i.scdn.co/image/ab67616d0000b273b3f691a43c5d139895f8cc3d
          image_source?: string;
          // The size of the palette (max number of colors).  Default is 10.  Range is 1 to 256. @example 10 @constraints  number: min: 1, max: 256, mode: box, step: 1
          color_count?: number;
          // Controls the processing time and quality of the palette generation.  A lower value (e.g. 1) results in higher quality but takes more processing time, while a higher value (e.g. 5) is faster but may result in a lower-quality palette.  Default is 3; Range is 1 to 10. @example 3 @constraints  number: min: 1, max: 10, mode: box, step: 1
          color_quality?: number;
          // Removes colors that are too dark based on their brightness value.  Range is 0 to 765.  Default is None. @example 200 @constraints  number: min: 0, max: 765, mode: box, step: 1
          brightness_filter_low?: number;
          // Removes colors that are too light based on their brightness value.  Range is 0 to 765.  Default is None. @example 600 @constraints  number: min: 0, max: 765, mode: box, step: 1
          brightness_filter_high?: number;
          // Remove colors that are too close to each other for the specified hue.  This keeps the colors looking fairly distinct.  Range is 0 to 360.  Default is None. @example 20 @constraints  number: min: 0, max: 360, mode: box, step: 1
          hue_distance_filter?: number;
        }
      >;
      // Get vibrant color palette values from the specified image source.
      getImageVibrantColors: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The image source to extract color palette information from.  If the prefix of the value is `http:` or `https:`, then the image is downloaded from the url.  This can also point to a filename on the local file system.  If null, the currently playing Spotify track image url is used.  Example = `http://mydomain/image1.jpg`, `c:/image1.jpg` @example https://i.scdn.co/image/ab67616d0000b2733deaee5f76ab2da15dd8db86
          image_source?: string;
          // The number of colors in the initial palette from which swatches will be generated.  Default is 64; Range is 1 to 256. @example 64 @constraints  number: min: 1, max: 256, mode: box, step: 1
          color_count?: number;
          // Controls the processing time and quality of the palette generation.  A lower value (e.g. 1) results in higher quality but takes more processing time, while a higher value (e.g. 5) is faster but may result in a lower-quality palette.  Default is 5; Range is 1 to 10. @example 5 @constraints  number: min: 1, max: 10, mode: box, step: 1
          color_quality?: number;
        }
      >;
      // Get information about a user's available Spotify Connect player devices.  Some device models are not supported and will not be listed in the API response.
      getPlayerDevices: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // True to return real-time information from the spotify web api and update the cache; otherwise, False to just return the cached value. @example True @constraints  boolean:
          refresh?: boolean;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get information about the user's current playback state, including track or episode, progress, and active device.
      getPlayerPlaybackState: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'. @example episode
          additional_types?: string;
        }
      >;
      // Get information about the content that was last playing on the Spotify Player, including context, item (track / episode), progress, and active device.
      getPlayerLastPlayedInfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
      // Get the object currently being played on the user's Spotify account.
      getPlayerNowPlaying: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'. @example episode
          additional_types?: string;
        }
      >;
      // Get the list of objects that make up the user's playback queue.
      getPlayerQueueInfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
      // Get tracks from the current user's recently played tracks; currently doesn't support podcast episodes, and only 50 items may be returned due to spotify limits.
      getPlayerRecentTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // Returns all items after (but not including) this cursor position, which is a Unix timestamp in milliseconds.  If `after` is specified, `before` must not be specified.  Use with limit to get the next set of items.  Default is `0` (the first item). @example 1706218456821 @constraints  number: min: 0, max: 99999999999999, mode: box, step: 1
          after?: number;
          // Returns all items before (but not including) this cursor position, which is a Unix timestamp in milliseconds.  If `before` is specified, `after` must not be specified.  Use with limit to get the next set of items.  Default is `0` (the first item). @example 1706218467821 @constraints  number: min: 0, max: 99999999999999, mode: box, step: 1
          before?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a playlist owned by a Spotify user.
      getPlaylist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist.  If omitted, the currently playing playlist uri id value is used. @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // A comma-separated list of fields to return from the Spotify Web API. All fields are returned if omitted. Limiting fields results can improve performance. @example description,id,name,public,snapshot_id,type,uri,items(limit,next,offset,previous,total,items(item(id,name,track_number,type,uri,album(id,images,name,total_tracks,type,uri,artists(id,name,type,uri)))))
          fields?: string;
          // A comma-separated list of item types that your client supports besides the default track type. Valid types are 'track' and 'episode'. @example episode
          additional_types?: string;
          // True to return only the basic fields of the playlist - the items collection will NOT be included in the returned object. otherwise, False (or omitted, default) to include the items collection in the returned object.  If True, the `fields` argument will be overridden to specify the fields to return. @example False @constraints  boolean:
          exclude_items?: boolean;
        }
      >;
      // Get the current image associated with a specific playlist.
      getPlaylistCoverImage: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE).  If null, the currently playing playlist uri id value is used. @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id?: string;
        }
      >;
      // Get a list of the playlists owned or followed by the current Spotify user.
      getPlaylistFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get full details of the items of a playlist owned by a Spotify user.
      getPlaylistItems: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE).  If null, the currently playing playlist uri id value is used. @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // Filters for the query; a comma-separated list of the fields to return. If omitted, all fields are returned. For example, specify 'items(track(name,uri))' to get just the playlist's track names and URIs. @example items(item(name,uri,album(name,uri)))
          fields?: string;
          // A comma-separated list of item types that your client supports besides the default track type.  Valid types are 'track' and 'episode'. @example track
          additional_types?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a list of the playlists owned or followed by a Spotify user.
      getPlaylistsForUser: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The user's Spotify user ID (e.g. `smedjan`). @example smedjan
          user_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single show identified by its unique Spotify ID.
      getShow: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the show.  If omitted, the currently playing show uri id value is used. @example 5CfCWKI5pZ28U0uOzXkDHe
          show_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get Spotify catalog information about a show's episodes.
      getShowEpisodes: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the show.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE
          show_id?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get a list of the shows saved in the current Spotify user's 'Your Library'.
      getShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
          // True (default) to exclude audiobook shows from the returned list, leaving only podcast shows; otherwise, False to include all results returned by the Spotify Web API. @example True @constraints  boolean:
          exclude_audiobooks?: boolean;
        }
      >;
      // Get information about a specific Spotify Connect player device, and (optionally) activate the device if it requires it.
      getSpotifyConnectDevice: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If an '*' is specified, then the SpotifyPlus default device is used. @example Bose-ST10-1
          device_value: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          verify_user_context?: boolean;
          // Maximum time to wait (in seconds) for the device to become active in the Spotify Connect device list.  This value is only used if a Connect command has to be issued to activate the device. Default is 5; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          verify_timeout?: number;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          refresh_device_list?: boolean;
          // True to activate the device if necessary; otherwise, False. @example True @constraints  boolean:
          activate_device?: boolean;
          // Time delay (in seconds) to wait AFTER issuing any command to the device.  This delay will give the spotify zeroconf api time to process the change before another command is issued.  Default is 0.25; value range is 0 - 10. @example 0.25 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Get information about all available Spotify Connect player (both static and dynamic) devices.
      getSpotifyConnectDevices: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // True (default) to return real-time information from the spotify zeroconf api and update the cache; otherwise, False to just return the cached value. @example True @constraints  boolean:
          refresh?: boolean;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get Spotify catalog information for a single track identified by its unique Spotify ID.
      getTrack: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID for the track.  If omitted, the currently playing track uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy
          track_id?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
        }
      >;
      // Get audio feature information for a single track identified by its unique Spotify ID.
      getTrackAudioFeatures: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the track.  Example = `1kWUud3vY5ij5r62zxpTRy`.  If null, the currently playing track uri id value is used. @example 7ouMYWpwJ422jRcDASZB7P
          track_id?: string;
        }
      >;
      // Get a list of the tracks saved in the current Spotify user's 'Your Library'.
      getTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
          // Filter returned entries by an artist name.  Value can be the full name of the artist (e.g. 'Jeremy Camp'), or a partial name (e.g. 'Camp').
          filter_artist?: string;
          // Filter returned entries by an album name.  Value can be the full name of the album (e.g. 'Carried Me'), or a partial name (e.g. 'Carried').
          filter_album?: string;
        }
      >;
      // Get track recommendations for specified criteria.
      getTrackRecommendations: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The maximum number of items to return in a page of items. Default is 20, Range is 1 to 50. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // A comma separated list of Spotify IDs for seed artists (e.g. 4NHQUGzhtTLFvgF5SZesLK).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedGenres and seedTracks are not set.
          seed_artists?: string;
          // A comma separated list of any genres in the set of available genre seeds (e.g. rock,hard-rock,rock-n-roll).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedArtists and seedTracks are not set. @example rock,hard-rock,rock-n-roll
          seed_genres?: string;
          // A comma separated list of Spotify IDs for a seed track (e.g. 0c6xIDDpzE81m2q797ordA).  Up to 5 seed values may be provided in any combination of seedArtists, seedTracks and seedGenres; only required if seedArtists and seedGenres are not set.
          seed_tracks?: string;
          // Restrict results to only those tracks whose acousticness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_acousticness?: number;
          // Restrict results to only those tracks whose acousticness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_acousticness?: number;
          // Restrict results to only those tracks whose acousticness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_acousticness?: number;
          // Restrict results to only those tracks whose danceability level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_danceability?: number;
          // Restrict results to only those tracks whose danceability level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_danceability?: number;
          // Restrict results to only those tracks whose acousticness is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_danceability?: number;
          // Restrict results to only those tracks whose duration is greater than the specified value in milliseconds. @constraints  number: mode: box, step: 1
          min_duration_ms?: number;
          // Restrict results to only those tracks whose duration is less than the specified value in milliseconds. @constraints  number: mode: box, step: 1
          max_duration_ms?: number;
          // Restrict results to only those tracks whose duration is equal to the specified value in milliseconds. @constraints  number: mode: box, step: 1
          target_duration_ms?: number;
          // Restrict results to only those tracks whose energy level is greater than the specified value.  Range is `0` - `1`. @example 0.975 @constraints  number: mode: box, step: 1
          min_energy?: number;
          // Restrict results to only those tracks whose energy level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_energy?: number;
          // Restrict results to only those tracks whose energy level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_energy?: number;
          // Restrict results to only those tracks whose instrumentalness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_instrumentalness?: number;
          // Restrict results to only those tracks whose instrumentalness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_instrumentalness?: number;
          // Restrict results to only those tracks whose instrumentalness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_instrumentalness?: number;
          // Restrict results to only those tracks whose key level is greater than the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          min_key?: number;
          // Restrict results to only those tracks whose key level is less than the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          max_key?: number;
          // Restrict results to only those tracks whose key level is equal to the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          target_key?: number;
          // Restrict results to only those tracks whose liveness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_liveness?: number;
          // Restrict results to only those tracks whose liveness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_liveness?: number;
          // Restrict results to only those tracks whose liveness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_liveness?: number;
          // Restrict results to only those tracks whose loudness level is greater than the specified value. @example -9.201 @constraints  number: mode: box, step: 1
          min_loudness?: number;
          // Restrict results to only those tracks whose loudness level is less than the specified value. @constraints  number: mode: box, step: 1
          max_loudness?: number;
          // Restrict results to only those tracks whose loudness level is equal to the specified value. @constraints  number: mode: box, step: 1
          target_loudness?: number;
          // Restrict results to only those tracks whose mode level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_mode?: number;
          // Restrict results to only those tracks whose mode level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_mode?: number;
          // Restrict results to only those tracks whose mode level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_mode?: number;
          // Restrict results to only those tracks whose popularity level is greater than the specified value.  Range is `0` - `100`. @constraints  number: mode: box, step: 1
          min_popularity?: number;
          // Restrict results to only those tracks whose popularity level is less than the specified value.  Range is `0` - `100`. @constraints  number: mode: box, step: 1
          max_popularity?: number;
          // Restrict results to only those tracks whose popularity level is equal to the specified value.  Range is `0` - `100`. @constraints  number: mode: box, step: 1
          target_popularity?: number;
          // Restrict results to only those tracks whose speechiness level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_speechiness?: number;
          // Restrict results to only those tracks whose speechiness level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_speechiness?: number;
          // Restrict results to only those tracks whose speechiness level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_speechiness?: number;
          // Restrict results to only those tracks with a tempo greater than the specified number of beats per minute. @constraints  number: mode: box, step: 1
          min_tempo?: number;
          // Restrict results to only those tracks with a tempo less than the specified number of beats per minute. @constraints  number: mode: box, step: 1
          max_tempo?: number;
          // Restrict results to only those tracks with a tempo equal to the specified number of beats per minute. @constraints  number: mode: box, step: 1
          target_tempo?: number;
          // Restrict results to only those tracks whose time signature is greater than the specified value.  Range is `0` - `11`. @example 4 @constraints  number: mode: box, step: 1
          min_time_signature?: number;
          // Restrict results to only those tracks whose time signature is less than the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          max_time_signature?: number;
          // Restrict results to only those tracks whose time signature is equal to the specified value.  Range is `0` - `11`. @constraints  number: mode: box, step: 1
          target_time_signature?: number;
          // Restrict results to only those tracks whose valence level is greater than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          min_valence?: number;
          // Restrict results to only those tracks whose valence level is less than the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          max_valence?: number;
          // Restrict results to only those tracks whose valence level is equal to the specified value.  Range is `0` - `1`. @constraints  number: mode: box, step: 1
          target_valence?: number;
        }
      >;
      // Get audio features for multiple tracks based on their Spotify IDs.
      getTracksAudioFeatures: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of the Spotify track IDs. Maximum of 100 IDs.  Example = `7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B`. @example 7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B
          ids: string;
        }
      >;
      // Get the current user's top artists based on calculated affinity.
      getUsersTopArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Over what time frame the affinities are computed. Valid values are `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), and `short_term` (approximately last 4 weeks). @example long_term
          time_range?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Get the current user's top tracks based on calculated affinity.
      getUsersTopTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Over what time frame the affinities are computed. Valid values are `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), and `short_term` (approximately last 4 weeks). @example long_term
          time_range?: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 20, Range is 1 to 50.  See the limit_total argument for automatic paging option. @example 20 @constraints  number: min: 1, max: 50, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // True to sort result items by name prior to returning to the caller; otherwise, False to return results in the order that the Spotify Web API returned them. @example True @constraints  boolean:
          sort_result?: boolean;
        }
      >;
      // Pause media play for the specified Spotify Connect device.
      playerMediaPause: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Start playing one or more tracks of the specified context on a Spotify Connect device.
      playerMediaPlayContext: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Spotify URI of the context to play (e.g. `spotify:album:6vc9OTcyd3hyzabCmsdnwE`).  Valid contexts are albums, artists & playlists. @example spotify:album:6vc9OTcyd3hyzabCmsdnwE
          context_uri: string;
          // Indicates from what Uri in the context playback should start (e.g. `1kWUud3vY5ij5r62zxpTRy`.  Only available when contextUri corresponds to an artist, album or playlist.  The offsetPosition argument will be used if this value is null. @example spotify:track:1kWUud3vY5ij5r62zxpTRy
          offset_uri?: string;
          // Indicates from what position in the context playback should start.  The value is zero-based, and can't be negative.  Only available when contextUri corresponds to an album or playlist. @example 3 @constraints  number: min: 0, max: 11000, mode: box, step: 1
          offset_position?: number;
          // The position (in milliseconds) to seek to; must be a positive number.  Passing in a position that is greater than the length of the track will cause the player to start playing the next track. @constraints  number: min: 0, max: 999999999, mode: box, step: 1
          position_ms?: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // True to enable player shuffle mode; False to disable player shuffle mode; None to use current player shuffle mode. Default is None. @example True @constraints  boolean:
          shuffle?: boolean;
          // True to play the most current episode of a podcast show, starting at the beginning; otherwise, False to resume playing of the podcast episode that was previously played. Default is False. This argument is only considered for 'show' contexts. @example False @constraints  boolean:
          play_show_latest_episode?: boolean;
        }
      >;
      // Start playing track favorites on the specified Spotify Connect device.
      playerMediaPlayTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // True to enable player shuffle mode; False to disable player shuffle mode; None to use current player shuffle mode. Default is None. @example True @constraints  boolean:
          shuffle?: boolean;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          resolve_device_id?: boolean;
          // The maximum number of items to retrieve from favorites.  Default is 200. @example 200 @constraints  number: mode: box, step: 1
          limit_total?: number;
          // Filter returned entries by an artist name.  Value can be the full name of the artist (e.g. 'Jeremy Camp'), or a partial name (e.g. 'Camp').
          filter_artist?: string;
          // Filter returned entries by an album name.  Value can be the full name of the album (e.g. 'Carried Me'), or a partial name (e.g. 'Carried').
          filter_album?: string;
        }
      >;
      // Start playing one or more tracks on the specified Spotify Connect device.
      playerMediaPlayTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track URIs to play; can be track or episode URIs.  A maximum of 50 items can be specified. @example spotify:track:6zd8T1PBe9JFHmuVnurdRp,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris: string;
          // The position (in milliseconds) to seek to; must be a positive number.  Passing in a position that is greater than the length of the track will cause the player to start playing the next track. @constraints  number: min: 0, max: 999999999, mode: box, step: 1
          position_ms?: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // True to enable player shuffle mode; False to disable player shuffle mode; None to use current player shuffle mode. Default is None. @example True @constraints  boolean:
          shuffle?: boolean;
        }
      >;
      // Resume media play for the specified Spotify Connect device.
      playerMediaResume: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Seeks to the given absolute or relative position in the user's currently playing track for the specified Spotify Connect device.
      playerMediaSeek: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The absolute position in milliseconds to seek to; must be a positive number or zero if the `relativePositionMS` argument is specified. Passing in a position that is greater than the length of the track will cause the player to start playing the next song. Example = `25000` to start playing at the 25 second mark. @example 25000 @constraints  number: min: 0, max: 999999999, mode: box, step: 1
          position_ms?: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // The relative position in milliseconds to seek to; can be a positive or negative number, or zero if the `positionMS` argument is specified. Example = `-10000` to seek behind by 10 seconds; `10000` to seek ahead by 10 seconds. @example 10000 @constraints  number: min: -999999999, max: 999999999, mode: box, step: 1
          relative_position_ms?: number;
        }
      >;
      // Skips to next track in the user's queue for the specified Spotify Connect device.
      playerMediaSkipNext: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Skips to previous track in the user's queue for the specified Spotify Connect device.
      playerMediaSkipPrevious: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Set repeat mode for the specified Spotify Connect device.
      playerSetRepeatMode: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The repeat mode state to set; `track` will repeat the current track; `context` will repeat the current context; `off` will turn repeat off.  Default is 'off'. @example off
          state: "off" | "track" | "context";
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Set shuffle mode for the specified Spotify Connect device.
      playerSetShuffleMode: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // True to set player shuffle mode to on; otherwise, False for no shuffle. @example True @constraints  boolean:
          state: boolean;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Set volume level for the specified Spotify Connect device.
      playerSetVolumeLevel: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The volume level to set, expressed as a percentage value (e.g. 25).  Must be a value from 0 (muted) to 100 (max volume) inclusive. @example 25 @constraints  number: min: 0, max: 100, mode: box, step: 1
          volume_level: number;
          // The id or name of the Spotify Connect Player device this command is targeting.  If not supplied, the user's currently active device is the target.  If no device is active (or an '*' is specified), then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // Time delay (in seconds) to wait AFTER issuing the command to the player.  This delay will give the spotify web api time to process the change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Transfer playback to a new Spotify Connect device and optionally begin playback.
      playerTransferPlayback: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The id or name of the Spotify Connect Player device on which playback should be started/transferred.  If no device is specified, then the SpotifyPlus default device is activated. @example 0d1841b0976bae2a3a310dd74c0f337465899bc8
          device_id?: string;
          // True (default) to start playback on the new device; otherise, False to keep the current playback state on the existing device. @example True @constraints  boolean:
          play?: boolean;
          // Time delay (in seconds) to wait AFTER issuing the final Connect command (if necessary). This delay will give the spotify web api time to process the device list change before another command is issued.  Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
          // DEPRECATED - no longer used, but left here to maintain compatibility. @constraints  boolean:
          refresh_device_list?: boolean;
          // True to issue a Spotify Connect Disconnect call prior to transfer, which will force the device to reconnect to Spotify Connect; otherwise, False to not disconnect. Default is True. @example True @constraints  boolean:
          force_activate_device?: boolean;
          // The player device identifier where play is being transferred from; only used to stop play on restricted devices prior to transferring playback. @example Office
          device_id_from?: string;
        }
      >;
      // Replace the image used to represent a specific playlist.
      playlistCoverImageAdd: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5v5ETK9WFXAnGQ3MRubKuE). @example 5v5ETK9WFXAnGQ3MRubKuE
          playlist_id: string;
          // The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size. @example www/images/spotify_playlist_default_image.png
          image_path: string;
        }
      >;
      // Change a playlists details (name, description, and public / private state).
      playlistChange: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. `5AC9ZXA7nJ7oGWO911FuDG`). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
          // The updated name for the playlist (e.g. `My Updated Playlist`).  This name does not need to be unique; a user may have several playlists with the same name. @example My Updated Playlist
          name: string;
          // The playlist description, as displayed in Spotify Clients and in the Web API. @example A Playlist updated by the SpotifyPlus integration
          description: string;
          // If true, the playlist will be public; if false, it will be private. @example False @constraints  boolean:
          public: boolean;
          // If true, the playlist will be collaborative (other users can modify it).  To create a collaborative playlist you must also set the public argument to false. @example False @constraints  boolean:
          collaborative: boolean;
          // The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.  Omit this parameter if you do not wish to update the existing playlist image. @example www/images/spotify_playlist_default_image.png
          image_path?: string;
        }
      >;
      // Create an empty playlist for a Spotify user.  The playlist will remain empty until you add tracks.
      playlistCreate: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // DEPRECATED - no longer used, but left here to maintain compatibility.
          user_id?: string;
          // The name for the new playlist (e.g. `My New Playlist`).  This name does not need to be unique; a user may have several playlists with the same name. @example My New Playlist
          name: string;
          // The playlist description, as displayed in Spotify Clients and in the Web API. @example A Playlist created by the SpotifyPlus integration
          description: string;
          // If true, the playlist will be public; if false, it will be private. @example False @constraints  boolean:
          public: boolean;
          // If true, the playlist will be collaborative (other users can modify it).  To create a collaborative playlist you must also set the public argument to false. @example False @constraints  boolean:
          collaborative: boolean;
          // The fully-qualified path of the image to be uploaded (e.g. `www/images/spotify_playlist_default_image.png`).  The image must be in PNG or JPEG format, and cannot exceed 256KB in Base64 encoded size.  Omit this parameter if you do not wish to add a playlist image. @example www/images/spotify_playlist_default_image.png
          image_path?: string;
        }
      >;
      // Add one or more items to a user's playlist.  Items are added in the order they are listed in the `uris` argument.
      playlistItemsAdd: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
          // A comma-separated list of Spotify URIs to add; can be track or episode URIs (e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh).  A maximum of 100 items can be specified in one request.  If nothing is specified, then the track (or episode) uri currently playing is used. @example spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:episode:512ojhOuo1ktJprKbVcKyQ
          uris?: string;
          // The position to insert the items, a zero-based index.  For example, to insert the items in the first position use a value of 0; to insert the items in the third position use a value of 2.  Omit the parameter to append the items to the end of the playlist. @example 0 @constraints  number: min: 0, max: 9999, mode: box, step: 1
          position?: number;
        }
      >;
      // Removes (clears) all items from a user's playlist.
      playlistItemsClear: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
        }
      >;
      // Remove one or more items from a user's playlist.
      playlistItemsRemove: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 5AC9ZXA7nJ7oGWO911FuDG). @example 5AC9ZXA7nJ7oGWO911FuDG
          playlist_id: string;
          // A comma-separated list of Spotify URIs to remove; can be track or episode URIs (e.g. spotify:track:4iV5W9uYEdYUVa79Axb7Rh).  A maximum of 100 items can be specified in one request.  If nothing is specified, then the track (or episode) uri currently playing is used. @example spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:episode:512ojhOuo1ktJprKbVcKyQ
          uris?: string;
          // The playlist's snapshot ID against which you want to make the changes (e.g. `MzgsMWVkNDY3MTQ5YjVjYWE0MzAyNjkyZWMyOThjNjE3YWMwOTY0ZmJjYg==`).  The API will validate that the specified items exist and make the changes, even if more recent changes have been made to the playlist.  If omitted, the current playlist is updated.
          snapshot_id?: string;
        }
      >;
      // Reorder items in a user's playlist.
      playlistItemsReorder: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. 4yptcTKnXjCu3V92tVVafS). @example 4yptcTKnXjCu3V92tVVafS
          playlist_id: string;
          // The position of the first item to be reordered.  This is a one-offset integer (NOT zero-offset). @example 2 @constraints  number: min: 1, max: 99999, mode: box, step: 1
          range_start: number;
          // The position where the items should be inserted.  To reorder the items to the end of the playlist, simply set `insertBefore` to the position after the last item.  This is a one-offset integer (NOT zero-offset). @example 1 @constraints  number: min: 1, max: 99999, mode: box, step: 1
          insert_before: number;
          // The amount of items to be reordered; defaults to 1 if not set.  The range of items to be reordered begins from the `rangeStart` position, and includes the `rangeLength` subsequent items. @example 1 @constraints  number: min: 1, max: 99999, mode: box, step: 1
          range_length?: number;
          // The playlist's snapshot ID against which you want to make the changes (e.g. `MzgsMWVkNDY3MTQ5YjVjYWE0MzAyNjkyZWMyOThjNjE3YWMwOTY0ZmJjYg==`).  The API will validate that the specified items exist and make the changes, even if more recent changes have been made to the playlist.  If omitted, the current playlist is updated.
          snapshot_id?: string;
        }
      >;
      // Replace one or more items in a user's playlist. Replacing items in a playlist will overwrite its existing items. This service can also be used to clear a playlist.
      playlistItemsReplace: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The Spotify ID of the playlist (e.g. `3cEYpjA9oz9GiPac4AsH4n`). @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id: string;
          // A comma-separated list of Spotify URIs to replace; can be track or episode URIs (e.g. `spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:episode:26c0zVyOv1lzfYpBXdh1zC`). A maximum of 100 items can be specified in one request.
          uris?: string;
        }
      >;
      // Remove one or more albums from the current user's 'Your Library'.
      removeAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX
          ids?: string;
        }
      >;
      // Remove one or more audiobooks from the current user's 'Your Library'.
      removeAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 40 id's may be specified.  If omitted, the currently playing audiobook uri id value is used. @example 3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe
          ids?: string;
        }
      >;
      // Remove one or more episodes from the current user's 'Your Library'.
      removeEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 40 id's may be specified.  If omitted, the currently playing episode uri id value is used. @example 3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4
          ids?: string;
        }
      >;
      // Remove one or more shows from the current user's 'Your Library'.
      removeShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk
          ids?: string;
        }
      >;
      // Remove one or more tracks from the current user's 'Your Library'.
      removeTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 40 id's may be specified.  If omitted, the currently playing context uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK
          ids?: string;
        }
      >;
      // Remove one or more items from the current user's 'Your Library'. Accepts Spotify URIs for tracks, albums, artists, episodes, shows, audiobooks, users, and playlists.
      removeUserFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify item uri's (e.g. `spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:track:1kWUud3vY5ij5r62zxpTRy`).  A maximum of 40 uri's may be specified.  If omitted, the currently playing item uri value is used. @example spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:album:6vc9OTcyd3hyzabCmsdnwE,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris?: string;
        }
      >;
      // Save one or more albums to the current user's 'Your Library'.
      saveAlbumFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify album id's (e.g. `6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track album uri id value is used. @example 6vc9OTcyd3hyzabCmsdnwE,382ObEPsp2rxGrnsizN5TX
          ids?: string;
        }
      >;
      // Save one or more audiobooks to the current user's 'Your Library'.
      saveAudiobookFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify audiobook id's (e.g. `3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe`).  A maximum of 40 id's may be specified.  If omitted, the currently playing audiobook uri id value is used. @example 3PFyizE2tGCSRLusl2Qizf,7iHfbu1YPACw6oZPAFJtqe
          ids?: string;
        }
      >;
      // Save one or more episodes to the current user's 'Your Library'.
      saveEpisodeFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify episode id's (e.g. `3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4`).  A maximum of 40 id's may be specified.  If omitted, the currently playing episode uri id value is used. @example 3F97boSWlXi8OzuhWClZHQ,1hPX5WJY6ja6yopgVPBqm4
          ids?: string;
        }
      >;
      // Save one or more shows to the current user's 'Your Library'.
      saveShowFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify show id's (e.g. `6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing show uri id value is used. @example 6kAsbP8pxwaU2kPibKTuHE,4rOoJ6Egrf8K2IrywzwOMk
          ids?: string;
        }
      >;
      // Save one or more tracks to the current user's 'Your Library'.
      saveTrackFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify track id's (e.g. `1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK`).  A maximum of 40 id's may be specified.  If omitted, the currently playing context uri id value is used. @example 1kWUud3vY5ij5r62zxpTRy,4eoYKv2kDwJS7gRGh5q6SK
          ids?: string;
        }
      >;
      // Save one or more items to the current user's 'Your Library'. Accepts Spotify URIs for tracks, albums, artists, episodes, shows, audiobooks, users, and playlists.
      saveUserFavorites: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify item uri's (e.g. `spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:track:1kWUud3vY5ij5r62zxpTRy`).  A maximum of 40 uri's may be specified.  If omitted, the currently playing item uri value is used. @example spotify:artist:6APm8EjxOHSYM5B4i3vT3q,spotify:album:6vc9OTcyd3hyzabCmsdnwE,spotify:track:1kWUud3vY5ij5r62zxpTRy
          uris?: string;
        }
      >;
      // Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
      searchAll: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Welcome to the New
          criteria: string;
          // A comma-separated list of item types to search across.  Search results include hits from all the specified item types.  For example, 'album,track' returns both albums and tracks matching criteria argument.  Allowed values are 'album', 'artist', 'playlist', 'track', 'show', 'episode', 'audiobook'.  Default is 'track'. @example album,artist,track,playlist
          criteria_type?: string;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request, per criteria type. Paging is automatically used to retrieve all available items up to the maximum number specified per type. Default is 20. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Albums that match a keyword string.
      searchAlbums: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Welcome to the New
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Artists that match a keyword string.
      searchArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example MercyMe
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Audiobooks that match a keyword string.
      searchAudiobooks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example The Elfstones of Shannara
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Episodes that match a keyword string.
      searchEpisodes: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Armchair Anonymous
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Playlists that match a keyword string.
      searchPlaylists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Daily Mix
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Show (aka Podcasts) that match a keyword string.
      searchShows: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Dax Shepard
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Get Spotify catalog information about Tracks that match a keyword string.
      searchTracks: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // The criteria to search for. @example Dear Younger Me
          criteria: string;
          // The maximum number of items to return in a page of items when manual paging is used.  Default is 5, Range is 1 to 10.  See the limit_total argument for automatic paging option. @example 10 @constraints  number: min: 1, max: 10, mode: box, step: 1
          limit?: number;
          // The page index offset of the first item to return.  Use with limit to get the next set of items.  Default is 0 (the first item). @constraints  number: min: 1, max: 10000, mode: box, step: 1
          offset?: number;
          // An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.  The country associated with the Spotify user account will take priority over this parameter. @example ES
          market?: string;
          // If 'audio' is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.  Allowed values are 'audio'. @example audio
          include_external?: string;
          // The maximum number of items to return for the request.  If specified, this argument overrides the limit and offset argument values and paging is automatically used to retrieve all available items up to the specified limit total. @example 20 @constraints  number: mode: box, step: 1
          limit_total?: number;
        }
      >;
      // Triggers a scan interval sequence, which will update HA State values from content currently being played on the user's Spotify account.
      triggerScanInterval: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
        }
      >;
      // Remove the current user as a follower of one or more artists.
      unfollowArtists: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify artist id's (e.g. `2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk`).  A maximum of 40 id's may be specified.  If omitted, the currently playing track artist uri id value is used. @example 2CIMQHirSU0MQqyYHq0eOx,1IQ2e1buppatiN1bxUVkrk
          ids?: string;
        }
      >;
      // Remove the current user as a follower of a playlist.
      unfollowPlaylist: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify playlist id's (e.g. `3cEYpjA9oz9GiPac4AsH4n`).  A maximum of 40 id's may be specified.  If omitted, the currently playing playlist uri id value is used. @example 3cEYpjA9oz9GiPac4AsH4n
          playlist_id?: string;
        }
      >;
      // Remove the current user as a follower of one or more users.
      unfollowUsers: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // A comma-separated list of Spotify user IDs (e.g. `smedjan,3758dfdsfjk435hjk6k79lm0n3c4`).  A maximum of 40 IDs can be sent in one request. @example smedjan,3758dfdsfjk435hjk6k79lm0n3c4
          ids: string;
        }
      >;
      // Calls the `addUser` Spotify Zeroconf API endpoint to issue a call to SpConnectionLoginBlob.  If successful, the associated device id is added to the Spotify Connect active device list for the specified user account.  This will also issue a `resetUsers` call prior to the `addUser` call.
      zeroconfDeviceConnect: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81'). @example 192.168.1.81
          host_ipv4_address: string;
          // Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200). @example 8200 @constraints  number: min: 1, max: 65535, mode: box, step: 1
          host_ip_port: number;
          // Spotify Connect Zeroconf API CPath property value (e.g. '/zc'). @example /zc
          cpath: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0'). @example 1.0
          version?: string;
          // True if the host device utilizes HTTPS Secure Sockets Layer (SSL) support; otherwise, False to utilize HTTP.  Default is False (HTTP). @example False @constraints  boolean:
          use_ssl?: boolean;
          // Spotify user name to login with (e.g. 'yourusername@mail.com').  This MUST match the account name (or one of them) that was used to configure Spotify Connect on the manufacturer device. If not specified, the integration options Spotify Connect username value will be used. @example yourusername@mail.com
          username?: string;
          // Spotify Connect user password to login with. If not specified, the integration options Spotify Connect password value will be used. @example yourpassword
          password?: string;
          // Spotify Connect login id to login with (e.g. '31l77fd87g8h9j00k89f07jf87ge').  This is also known as the canonical user id value.  This MUST be the value that relates to the `username` argument. If not specified, the integration options Spotify Connect loginId value will be used. @example 31l77y75hfnhk79f7gk6jkk878mg
          loginid?: string;
          // True if a Disconnect should be made prior to the Connect call.  This will ensure that the active user is logged out, which must be done if switching user accounts; otherwise, False to not issue a Disconnect call.  Default is False. @example False @constraints  boolean:
          pre_disconnect?: boolean;
          // True to ensure that the device id is present in the Spotify Connect device list before issuing a call to Connect; Connect will not be called if the device id is already in the list; otherwise, False to always call Connect to add the device.  Default is False. @example False @constraints  boolean:
          verify_device_list_entry?: boolean;
          // Time delay (in seconds) to wait AFTER issuing a command to the device. This delay will give the spotify zeroconf api time to process the change before another command is issued. Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Calls the `resetUsers` Spotify Zeroconf API endpoint to issue a call to SpConnectionLogout. The currently logged in user (if any) will be logged out of Spotify Connect, and the device id removed from the active Spotify Connect device list.
      zeroconfDeviceDisconnect: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81'). @example 192.168.1.81
          host_ipv4_address: string;
          // Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200). @example 8200 @constraints  number: min: 1, max: 65535, mode: box, step: 1
          host_ip_port: number;
          // Spotify Connect Zeroconf API CPath property value (e.g. '/zc'). @example /zc
          cpath: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0'). @example 1.0
          version?: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. False). @example False @constraints  boolean:
          use_ssl?: boolean;
          // Time delay (in seconds) to wait AFTER issuing a command to the device. This delay will give the spotify zeroconf api time to process the change before another command is issued. Default is 0.50; value range is 0 - 10. @example 0.50 @constraints  number: min: 0, max: 10, mode: box, step: 1
          delay?: number;
        }
      >;
      // Calls the `getInfo` Spotify Zeroconf API endpoint to return information about the device.
      zeroconfDeviceGetinfo: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // IPV4 address at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. '192.168.1.81'). @example 192.168.1.81
          host_ipv4_address: string;
          // Port number at which the Spotify Connect Zeroconf API can be reached on the Spotify Connect device (e.g. 8200). @example 8200 @constraints  number: min: 1, max: 65535, mode: box, step: 1
          host_ip_port: number;
          // Spotify Connect Zeroconf API CPath property value (e.g. '/zc'). @example /zc
          cpath: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. '1.0'). @example 1.0
          version?: string;
          // Spotify Connect Zeroconf API version number that the device supports (e.g. False). @example False @constraints  boolean:
          use_ssl?: boolean;
        }
      >;
      // Discover Spotify Connect devices on the local network via the ZeroConf (aka MDNS) service, and return details about each device.
      zeroconfDiscoverDevices: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus device that will make the request to the ZeroConf service. @example media_player.spotifyplus_username
          entity_id: string;
          // Maximum amount of time to wait (in seconds) for the discovery to complete.  Default is 5, range is 1 thru 10. @example 5 @constraints  number: min: 1, max: 10, mode: box, step: 1
          timeout?: number;
        }
      >;
      // Set level used for volume step services.
      volumeSetStep: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Level percentage to adjust the volume by, expressed as a floating point number from 0.01 - 1.0.  Default is 0.10 (e.g. 10 percent), range is 0.01 to 1.00. @constraints  number: min: 0.01, max: 1, mode: box, step: 1
          level?: number;
          // Level percentage to adjust the volume by. Default is 10, range is 1 to 100 (e.g. percent). level argument is ignored if this argument is specified. @example 5 @constraints  number: min: 1, max: 100, mode: box, step: 1
          level_percent?: number;
        }
      >;
      // List Home Assistant application credential mappings to determine which configuration entitys use which credential.
      listApplicationCredentialMappings: ServiceFunction<
        object,
        T,
        {
          // Limit entries displayed to the specified domain name (e.g. 'spotifyplus', 'spotify', etc). @example spotifyplus
          filter_domain?: string;
          // True (default) to limit entries displayed to those that have Application Credentials defined; otherwise, False to include all entries. @example true @constraints  boolean:
          filter_credentials_only?: boolean;
          // True to list entities that are children of the domain; otherwise, False (default) to exclude domain entity details. @example false @constraints  boolean:
          list_domain_entities?: boolean;
        }
      >;
      // Forces Spotify Authorization token to expire within 10 seconds; used to test token refresh processing.
      testTokenExpire: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the SpotifyPlus service account that will make the request to the Spotify Web API. @example media_player.spotifyplus_username
          entity_id: string;
          // Reason code of why the token is being expired. 0 = simple expiration test where expire_at = current time minus 10 seconds. 1 = spotify invalid_grant test - will force an `invalid_grant` exception scenario when token is refreshed. @example 0 @constraints  number: min: 0, max: 10, mode: box, step: 1
          reason?: number;
        }
      >;
    };
    bhyve: {
      // Update a program's configuration. Provide at least one of start_times, frequency or budget
      updateProgram: ServiceFunction<
        object,
        T,
        {
          // Program switch @example switch.front_yard_program
          entity_id?: object;
          // List of watering start times in HH:MM format @example ['06:00', '18:00']
          start_times?: object;
          // Frequency configuration. `type` is required (known values: days, interval) @example {'type': 'days', 'days': [1, 3, 5], 'interval': 1, 'interval_hours': 0}
          frequency?: object;
          // Watering budget as a percentage (0-200). Scales run times up or down @example 50
          budget?: object;
        }
      >;
      // Enable rain delay for a zone
      enableRainDelay: ServiceFunction<
        object,
        T,
        {
          // Zone @example valve.backyard_zone
          entity_id?: object;
          // Number of hours of rain delay @example 24
          hours?: object;
        }
      >;
      // Disable rain delay for a zone
      disableRainDelay: ServiceFunction<
        object,
        T,
        {
          // Zone @example valve.backyard_zone
          entity_id?: object;
        }
      >;
      // Start watering a zone
      startWatering: ServiceFunction<
        object,
        T,
        {
          // Zone @example valve.backyard_zone
          entity_id?: object;
          // Number of minutes to water the zone @example 15
          minutes?: object;
        }
      >;
      // Stop watering a zone
      stopWatering: ServiceFunction<
        object,
        T,
        {
          // Zone @example valve.backyard_zone
          entity_id?: object;
        }
      >;
      // Set the manual preset runtime for a device entity
      setManualPresetRuntime: ServiceFunction<
        object,
        T,
        {
          // Zone @example valve.backyard_zone
          entity_id?: object;
          // Number of minutes to set the preset runtime @example 15
          minutes?: object;
        }
      >;
      // Set the smart watering soil moisture level for a zone
      setSmartWateringSoilMoisture: ServiceFunction<
        object,
        T,
        {
          // Zone @example valve.backyard_zone
          entity_id?: object;
          // Moisture level between 0 - 100 (percent) @example 50
          percentage?: object;
        }
      >;
      // Begin watering a program
      startProgram: ServiceFunction<
        object,
        T,
        {
          // Program @example valve.backyard_zone
          entity_id?: object;
        }
      >;
    };
    template: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    openweathermap: {
      // undefined
      getMinuteForecast: ServiceFunction<object, T, object>;
    };
    todo: {
      // undefined
      addItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
          //  @example 2023-11-17 @constraints  date:
          due_date?: string;
          //  @example 2023-11-17 13:30:00 @constraints  datetime:
          due_datetime?: string;
          //  @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // undefined
      updateItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
          //  @example Something else
          rename?: string;
          //  @example needs_action
          status?: "needs_action" | "completed";
          //  @example 2023-11-17 @constraints  date:
          due_date?: string;
          //  @example 2023-11-17 13:30:00 @constraints  datetime:
          due_datetime?: string;
          //  @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // undefined
      removeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
        }
      >;
      // undefined
      getItems: ServiceFunction<
        object,
        T,
        {
          //  @example needs_action
          status?: "needs_action" | "completed";
        }
      >;
      // undefined
      removeCompletedItems: ServiceFunction<object, T, object>;
    };
    esphome: {
      // Performs the action wipe_devices_from_gdo_memory of the node ratgdov25i-e5f7cc
      ratgdov25IE5F7CcWipeDevicesFromGdoMemory: ServiceFunction<
        object,
        T,
        {
          //  @example Example text
          devices_to_wipe: string;
        }
      >;
    };
    script: {
      //
      startupOffice: ServiceFunction<object, T, object>;
      //
      shutdownOffice: ServiceFunction<object, T, object>;
      // Turn off all lights, Lock the doors, and arm the alarm
      away: ServiceFunction<object, T, object>;
      //
      openDisarm: ServiceFunction<object, T, object>;
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    alarmo: {
      // undefined
      arm: ServiceFunction<
        object,
        T,
        {
          //  @example alarm_control_panel.alarm
          entity_id: string;
          //  @example 1234
          code?: string;
          //  @example away
          mode?: "away" | "night" | "home" | "vacation" | "custom";
          //  @constraints  boolean:
          skip_delay?: boolean;
          //  @constraints  boolean:
          force?: boolean;
        }
      >;
      // undefined
      disarm: ServiceFunction<
        object,
        T,
        {
          //  @example alarm_control_panel.alarm
          entity_id: string;
          //  @example 1234
          code?: string;
        }
      >;
      // undefined
      skipDelay: ServiceFunction<
        object,
        T,
        {
          //  @example alarm_control_panel.alarm
          entity_id: string;
        }
      >;
      // undefined
      enableUser: ServiceFunction<
        object,
        T,
        {
          //  @example Frank
          name: string;
        }
      >;
      // undefined
      disableUser: ServiceFunction<
        object,
        T,
        {
          //  @example Frank
          name: string;
        }
      >;
    };
    fullyKiosk: {
      // undefined
      loadUrl: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          //  @example https://home-assistant.io
          url: string;
        }
      >;
      // undefined
      startApplication: ServiceFunction<
        object,
        T,
        {
          //  @example de.ozerov.fully
          application: string;
          //
          device_id: string;
        }
      >;
      // undefined
      setConfig: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          //  @example motionSensitivity
          key: string;
          //  @example 90
          value: string;
        }
      >;
    };
    bambuLab: {
      // Send an arbitrary gcode command to the 3D printer
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // The command to send to the printer. Must have a trailing new line. @example M104 S200
          command: string;
        }
      >;
      // Print sliced 3MF file stored on the SD card
      printProjectFile: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // Filename on SD card @example cache/filename.3mf
          filepath: string;
          //  @constraints  number: mode: box, min: 1, max: 100, step: 1
          plate: number;
          //  @constraints  boolean:
          timelapse: boolean;
          //  @constraints  boolean:
          bed_leveling: boolean;
          //  @constraints  boolean:
          flow_cali: boolean;
          //  @constraints  boolean:
          vibration_cali: boolean;
          //  @constraints  boolean:
          layer_inspect: boolean;
          //  @constraints  boolean:
          use_ams: boolean;
          // https://community.home-assistant.io/t/bambu-lab-x1-x1c-mqtt/489510/738 @example 2,-1,0
          ams_mapping: string;
        }
      >;
      // Skip objects currently being printed
      skipObjects: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // Object IDs are available from printable objects entity attributes @example 409,1463
          objects: string;
        }
      >;
      // Move the printhead or bed
      moveAxis: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // The axis to move. X/P/H printers, X and Y move the printhead, Z moves the bed. A1, X moves the printhead, Y the bed, Z moves the gantry. @example X
          axis: "X" | "Y" | "Z" | "Home";
          // The distance (in mm) to move the axis A negative distance moves Z up, X left, Y forward. @example 10 @constraints  number: min: -100, max: 100, step: 1, mode: slider
          distance?: number;
        }
      >;
      // Unload the filament currently loaded into the extruder
      unloadFilament: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
        }
      >;
      // Load a new filament into the extruder passed an AMS tray or an External spool entity
      loadFilament: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          // Target nozzle temperature once the filament is loaded. By default uses the midpoint between min and max temperature of the chosen filament. @example 220 @constraints  number: min: 0, max: 250, step: 1, mode: slider
          temperature?: number;
        }
      >;
      // Retry loading external filament
      retryLoadFilament: ServiceFunction<object, T, object>;
      // Once loading external filament is done, use this action to signal that to the printer.
      doneLoadFilament: ServiceFunction<object, T, object>;
      // Perform an extrusion or extraction of the loaded filament
      extrudeRetract: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // The type of extrude action to perform @example Extrude
          type: "Extrude" | "Retract";
          // Perform extrusion or retraction if nozzle temperature is below 170ºC. @constraints  boolean:
          force?: boolean;
        }
      >;
      // Sets filament details on an AMS tray or an External spool entity
      setFilament: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          // Bambu's filament ID. E.g. GFL96 is Generic PLA Silk @example GFL96
          tray_info_idx: string;
          // RGBA value for the color. E.g. FF0000FF is opaque red. @example FF0000FF
          tray_color: string;
          // Type of filament. E.g. 'PLA' or 'PETG' @example PLA
          tray_type: string;
          // The minimum temperature that it is recommended to print this filament at. @example 220 @constraints  number: min: 160, max: 300, step: 1, mode: slider
          nozzle_temp_min: number;
          // The maximum temperature that it is recommended to print this filament at. @example 220 @constraints  number: min: 160, max: 300, step: 1, mode: slider
          nozzle_temp_max: number;
        }
      >;
      // Gets a json string with details about all known filaments
      getFilamentData: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
        }
      >;
      // Triggers the AMS to attempt to re-read the RFID tag on the current spool.
      readRfid: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
        }
      >;
      // Starts AMS filament drying.
      startFilamentDrying: ServiceFunction<
        object,
        T,
        {
          //
          device_id: string;
          // AMS 2 max is 65C. AMS HT max is 85C. @example 45 @constraints  number: min: 45, max: 85, step: 1, mode: slider
          temp: number;
          //  @constraints  boolean:
          rotate_tray: boolean;
          //  @constraints  number: min: 1, max: 24, step: 1, mode: slider
          duration: number;
        }
      >;
      // Stops AMS filament drying.
      stopFilamentDrying: ServiceFunction<
        object,
        T,
        {
          // Select the AMS 2 or AMS HT device to stop drying on.
          device_id: string;
        }
      >;
    };
    automation: {
      // undefined
      trigger: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          skip_condition?: boolean;
        }
      >;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          stop_actions?: boolean;
        }
      >;
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    switchbot: {
      // undefined
      addPassword: ServiceFunction<
        object,
        T,
        {
          //  @example c2d01328efd261f586e56d914e3af07e
          device_id: string;
          //  @example 123456
          password: string;
        }
      >;
    };
    dreameVacuum: {
      // undefined
      vacuumRequestMap: ServiceFunction<object, T, object>;
      // undefined
      vacuumSelectMap: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id: number;
        }
      >;
      // undefined
      vacuumDeleteMap: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
        }
      >;
      // undefined
      vacuumSaveTemporaryMap: ServiceFunction<object, T, object>;
      // undefined
      vacuumDiscardTemporaryMap: ServiceFunction<object, T, object>;
      // undefined
      vacuumReplaceTemporaryMap: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
        }
      >;
      // undefined
      vacuumCleanZone: ServiceFunction<
        object,
        T,
        {
          //  @example [819,-263,4424,2105] or [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          zone: object;
          //  @example [1,2] or 1 @constraints  number: min: 1, max: 3, step: 1, mode: slider
          repeats?: number;
          //  @example [0,3] or 0 @constraints  number: min: 0, max: 3, step: 1, mode: slider
          suction_level?: number;
          //  @example [1,3] or 1 @constraints  number: min: 1, max: 3, step: 1, mode: slider
          water_volume?: number;
        }
      >;
      // undefined
      vacuumCleanSegment: ServiceFunction<
        object,
        T,
        {
          //  @example [3,2] or 3 @constraints  object: multiple: false
          segments: object;
          //  @example [1,2] or 1 @constraints  number: min: 1, max: 3, step: 1, mode: slider
          repeats?: number;
          //  @example [0,3] or 0 @constraints  number: min: 0, max: 3, step: 1, mode: slider
          suction_level?: number;
          //  @example [1,3] or 1 @constraints  number: min: 1, max: 3, step: 1, mode: slider
          water_volume?: number;
        }
      >;
      // undefined
      vacuumCleanSpot: ServiceFunction<
        object,
        T,
        {
          //  @example [819,-263] or [[819,-263],[819,-263]] @constraints  object: multiple: false
          points: object;
          //  @example [1,2] or 1 @constraints  number: min: 1, max: 3, step: 1, mode: slider
          repeats?: number;
          //  @example [0,3] or 0 @constraints  number: min: 0, max: 3, step: 1, mode: slider
          suction_level?: number;
          //  @example [1,3] or 1 @constraints  number: min: 1, max: 3, step: 1, mode: slider
          water_volume?: number;
        }
      >;
      // undefined
      vacuumGoto: ServiceFunction<
        object,
        T,
        {
          //  @example 819 @constraints  number: mode: box, step: 1
          x: number;
          //  @example -263 @constraints  number: mode: box, step: 1
          y: number;
        }
      >;
      // undefined
      vacuumFollowPath: ServiceFunction<
        object,
        T,
        {
          //  @example [819,-263] or [[819,-263],[900,-463]] @constraints  object: multiple: false
          points?: object;
        }
      >;
      // undefined
      vacuumStartShortcut: ServiceFunction<
        object,
        T,
        {
          //  @example 32 @constraints  number: min: 32, max: 128, mode: box, step: 1
          shortcut_id: number;
        }
      >;
      // undefined
      vacuumSetRestrictedZone: ServiceFunction<
        object,
        T,
        {
          //  @example [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          walls?: object;
          //  @example [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          zones?: object;
          //  @example [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          no_mops?: object;
        }
      >;
      // undefined
      vacuumSetCarpetArea: ServiceFunction<
        object,
        T,
        {
          //  @example [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          carpets?: object;
          //  @example [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          deleted_carpets?: object;
        }
      >;
      // undefined
      vacuumSetCarpetType: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetVirtualThreshold: ServiceFunction<
        object,
        T,
        {
          //  @example [[819,-263,4424,2105],[-2001,-3050,-542,515]] @constraints  object: multiple: false
          virtual_thresholds?: object;
        }
      >;
      // undefined
      vacuumSetThreshold: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetPredefinedPoints: ServiceFunction<
        object,
        T,
        {
          //  @example [819,-263] or [[819,-263],[900,-463]] @constraints  object: multiple: false
          points?: object;
        }
      >;
      // undefined
      vacuumRemoteControlMoveStep: ServiceFunction<
        object,
        T,
        {
          //  @example 64 @constraints  number: min: -360, max: 360, mode: box, step: 1
          rotation: number;
          //  @example 100 @constraints  number: min: -600, max: 600, mode: box, step: 1
          velocity: number;
        }
      >;
      // undefined
      vacuumInstallVoicePack: ServiceFunction<
        object,
        T,
        {
          //  @example DE
          lang_id: string;
          //  @example http://awsde0.fds.api.xiaomi.com/dreame-product/dreame.vacuum.p2009/voices/package/deyu.tar.gz
          url: string;
          //  @example d25986c1f608c0897475707e77d856f9
          md5: string;
          //  @example 4067845 @constraints  number: mode: box, step: 1
          size: number;
        }
      >;
      // undefined
      vacuumRenameMap: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id: number;
          //  @example Ground Floor
          map_name: string;
        }
      >;
      // undefined
      vacuumRestoreMap: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 1, max: 4, mode: box, step: 1
          recovery_map_index: number;
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
        }
      >;
      // undefined
      vacuumRestoreMapFromFile: ServiceFunction<
        object,
        T,
        {
          //  @example http://192.168.1.10/local/2023-11-04-1724223415-423528451_284320462.1156.mb.tbz2
          file_url: string;
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
        }
      >;
      // undefined
      vacuumBackupMap: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
        }
      >;
      // undefined
      vacuumMergeSegments: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
          //  @example [3,2] @constraints  object: multiple: false
          segments: object;
        }
      >;
      // undefined
      vacuumSplitSegments: ServiceFunction<
        object,
        T,
        {
          //  @example 14 @constraints  number: mode: box, step: 1
          map_id?: number;
          //  @example 3 @constraints  number: min: 1, max: 60, mode: box, step: 1
          segment: number;
          //  @example [819,-263,4424,2105] @constraints  object: multiple: false
          line: object;
        }
      >;
      // undefined
      vacuumRenameSegment: ServiceFunction<
        object,
        T,
        {
          //  @example 3 @constraints  number: min: 1, max: 60, mode: box, step: 1
          segment_id: number;
          //  @example Playroom
          segment_name: string;
        }
      >;
      // undefined
      vacuumSetCleaningSequence: ServiceFunction<
        object,
        T,
        {
          //  @example [5,3,2,1,4] or [] @constraints  object: multiple: false
          cleaning_sequence: object;
        }
      >;
      // undefined
      vacuumSetCustomCleaning: ServiceFunction<
        object,
        T,
        {
          //  @example [1,2,3,4,5] @constraints  object: multiple: false
          segment_id: object;
          //  @example [0,0,2,3,1] @constraints  object: multiple: false
          suction_level: object;
          //  @example [1,1,2,3,1] @constraints  object: multiple: false
          water_volume?: object;
          //  @example [16,10,32,8,1] @constraints  object: multiple: false
          wetness_level?: object;
          //  @example [2,2,0,1,0] @constraints  object: multiple: false
          cleaning_mode?: object;
          //  @example [2,2,1,3,1] @constraints  object: multiple: false
          repeats: object;
          //  @example [0,0,1,0,1] @constraints  object: multiple: false
          mop_temperature: object;
          //  @example [2,0,0,2,0] @constraints  object: multiple: false
          mop_pressure: object;
        }
      >;
      // undefined
      vacuumSetCustomCarpetCleaning: ServiceFunction<
        object,
        T,
        {
          //  @example [1,2] or 3 @constraints  object: multiple: false
          id: object;
          //  @example [0,1] or 1 @constraints  number: min: 0, max: 1, step: 1, mode: slider
          type: number;
          //  @example [0,3] or 5 @constraints  number: min: 0, max: 6, step: 1, mode: slider
          carpet_cleaning?: number;
          //  @example ['carpet_boost'] or 'clean_carpets_first' or '-1' or [] @constraints  object: multiple: false
          carpet_preferences?: object;
        }
      >;
      // undefined
      vacuumSetSegmentType: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetHiddenSegments: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetFloorMaterial: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetLowLyingArea: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetFurniture: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetCurtain: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetMopType: ServiceFunction<object, T, object>;
      // undefined
      vacuumResetConsumable: ServiceFunction<
        object,
        T,
        {
          //
          consumable:
            | "main_brush"
            | "side_brush"
            | "filter"
            | "tank_filter"
            | "sensor"
            | "mop_pad"
            | "silver_ion"
            | "detergent"
            | "squeegee"
            | "onboard_dirty_water_tank"
            | "dirty_water_tank"
            | "deodorizer"
            | "wheel"
            | "scale_inhibitor"
            | "fluffing_roller"
            | "roller_mop_filter"
            | "water_outlet_filter";
        }
      >;
      // undefined
      vacuumRenameShortcut: ServiceFunction<
        object,
        T,
        {
          //  @example 32 @constraints  number: mode: box, step: 1
          shortcut_id: number;
          //  @example Mopping after sweeping
          shortcut_name: string;
        }
      >;
      // undefined
      vacuumDeleteShortcut: ServiceFunction<
        object,
        T,
        {
          //  @example 34 @constraints  number: mode: box, step: 1
          shortcut_id: number;
        }
      >;
      // undefined
      vacuumSetObstacleIgnore: ServiceFunction<
        object,
        T,
        {
          //  @example 819 @constraints  number: mode: box, step: 1
          x: number;
          //  @example -263 @constraints  number: mode: box, step: 1
          y: number;
          //  @example false @constraints  boolean:
          obstacle_ignored: boolean;
        }
      >;
      // undefined
      vacuumSetRouterPosition: ServiceFunction<
        object,
        T,
        {
          //  @example 819 @constraints  number: mode: box, step: 1
          x: number;
          //  @example -263 @constraints  number: mode: box, step: 1
          y: number;
        }
      >;
      // undefined
      vacuumSetWalls: ServiceFunction<object, T, object>;
      // undefined
      vacuumSetProperty: ServiceFunction<object, T, object>;
      // undefined
      vacuumCallAction: ServiceFunction<object, T, object>;
      // undefined
      selectSelectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectSelectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectSelectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectSelectLast: ServiceFunction<object, T, object>;
      // undefined
      update: ServiceFunction<object, T, object>;
    };
    emporiaVue: {
      // undefined
      setChargerCurrent: ServiceFunction<
        object,
        T,
        {
          //  @example 6 @constraints  number: min: 6, max: 48, step: 1, mode: slider
          current: number;
        }
      >;
    };
    zha: {
      // undefined
      permit: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 254, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee?: string;
          //  @example 00:0a:bf:00:01:10:23:35
          source_ieee?: string;
          //  @example 1234-5678-1234-5678-AABB-CCDD-AABB-CCDD-EEFF
          install_code?: string;
          //  @example Z:000D6FFFFED4163B$I:52797BF4A5084DAA8E1712B61741CA024051
          qr_code?: string;
        }
      >;
      // undefined
      remove: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
        }
      >;
      // undefined
      setZigbeeClusterAttribute: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 1, max: 65535, mode: box, step: 1
          endpoint_id: number;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          cluster_id: number;
          //
          cluster_type?: "in" | "out";
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          attribute: number;
          //  @example 1
          value: string;
          //  @example 252
          manufacturer?: string;
        }
      >;
      // undefined
      issueZigbeeClusterCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          endpoint_id: number;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          cluster_id: number;
          //
          cluster_type?: "in" | "out";
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          command: number;
          //
          command_type: "client" | "server";
          //  @example [arg1, arg2, argN] @constraints  object: multiple: false
          args?: object;
          //  @constraints  object: multiple: false
          params?: object;
          //  @example 252
          manufacturer?: string;
        }
      >;
      // undefined
      issueZigbeeGroupCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 546
          group: string;
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          cluster_id: number;
          //
          cluster_type?: "in" | "out";
          //  @constraints  number: min: 1, max: 65535, step: 1, mode: slider
          command: number;
          //  @example [arg1, arg2, argN] @constraints  object: multiple: false
          args?: object;
          //  @example 252
          manufacturer?: string;
        }
      >;
      // undefined
      warningDeviceSquawk: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 0, max: 1, mode: box, step: 1
          mode?: number;
          //  @constraints  number: min: 0, max: 1, mode: box, step: 1
          strobe?: number;
          //  @constraints  number: min: 0, max: 3, mode: box, step: 1
          level?: number;
        }
      >;
      // undefined
      warningDeviceWarn: ServiceFunction<
        object,
        T,
        {
          //  @example 00:0d:6f:00:05:7d:2d:34
          ieee: string;
          //  @constraints  number: min: 0, max: 6, mode: box, step: 1
          mode?: number;
          //  @constraints  number: min: 0, max: 1, mode: box, step: 1
          strobe?: number;
          //  @constraints  number: min: 0, max: 3, mode: box, step: 1
          level?: number;
          //  @constraints  number: min: 0, max: 65535, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @constraints  number: min: 0, max: 100, step: 10, mode: slider
          duty_cycle?: number;
          //  @constraints  number: min: 0, max: 3, mode: box, step: 1
          intensity?: number;
        }
      >;
      // undefined
      setLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
          //  @example 1234
          user_code: string;
        }
      >;
      // undefined
      enableLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
        }
      >;
      // undefined
      disableLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
        }
      >;
      // undefined
      clearLockUserCode: ServiceFunction<
        object,
        T,
        {
          //  @example 1
          code_slot: string;
        }
      >;
    };
    massQueue: {
      // undefined
      getQueueItems: ServiceFunction<
        object,
        T,
        {
          // Limit on the number of items in queue to return @example 500 @constraints  number: min: 1, max: 1000, step: 1, mode: slider
          limit?: number;
          // Location in queue to start where zero equals the first item in queue, not the current item. @example 50 @constraints  number: min: 1, max: 1000, step: 1, mode: slider
          offset?: number;
          // Number of items to pull before current active item in queue. @example 5 @constraints  number: min: 1, max: 1000, step: 1, mode: slider
          limit_before?: number;
          // Number of items to pull after current active item in queue. @example 50 @constraints  number: min: 1, max: 1000, step: 1, mode: slider
          limit_after?: number;
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      moveQueueItemDown: ServiceFunction<
        object,
        T,
        {
          //
          queue_item_id: string;
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      moveQueueItemNext: ServiceFunction<
        object,
        T,
        {
          //
          queue_item_id: string;
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      moveQueueItemUp: ServiceFunction<
        object,
        T,
        {
          //
          queue_item_id: string;
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      playQueueItem: ServiceFunction<
        object,
        T,
        {
          //
          queue_item_id: string;
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      removeQueueItem: ServiceFunction<
        object,
        T,
        {
          //
          queue_item_id: string;
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      sendCommand: ServiceFunction<
        object,
        T,
        {
          // Command to send to Music Assistant
          command: string;
          // Command data to send @constraints  object: multiple: false
          data?: object;
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
        }
      >;
      // undefined
      unfavoriteCurrentItem: ServiceFunction<
        object,
        T,
        {
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      getRecommendations: ServiceFunction<
        object,
        T,
        {
          // Music Assistant Media Player Entity
          entity: string;
          // Limit recommendations to the specified providers.
          providers?: string;
        }
      >;
      // undefined
      getGroupVolume: ServiceFunction<
        object,
        T,
        {
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      setGroupVolume: ServiceFunction<
        object,
        T,
        {
          // Music Assistant Media Player Entity
          entity: string;
          // Volume level to set the player to. @constraints  number: min: 1, max: 100, step: 1, unit_of_measurement: %, mode: slider
          volume_level: number;
        }
      >;
      // undefined
      clearQueueFromHere: ServiceFunction<
        object,
        T,
        {
          // Music Assistant Media Player Entity
          entity: string;
        }
      >;
      // undefined
      getPlaylistTracks: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the playlist @example library://playlist/12
          uri: string;
          //  @constraints  number: min: 0, max: 1000, step: 1, mode: box
          page?: number;
        }
      >;
      // undefined
      getAlbumTracks: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the album @example library://album/12
          uri: string;
          //  @constraints  number: min: 0, max: 1000, step: 1, mode: box
          page?: number;
        }
      >;
      // undefined
      getArtistTracks: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the artist @example library://artist/12
          uri: string;
          //  @constraints  number: min: 0, max: 1000, step: 1, mode: box
          page?: number;
        }
      >;
      // undefined
      getPodcastEpisodes: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the podcast @example library://podcast/12
          uri: string;
        }
      >;
      // undefined
      getAlbum: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the Album @example library://album/12
          uri: string;
        }
      >;
      // undefined
      getArtist: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the artist @example library://artist/12
          uri: string;
        }
      >;
      // undefined
      getPlaylist: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the playlist @example library://playlist/12
          uri: string;
        }
      >;
      // undefined
      getPodcast: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          // URI for the podcast @example library://podcast/12
          uri: string;
        }
      >;
      // undefined
      removePlaylistTracks: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: mass_queue
          config_entry_id: unknown;
          //
          playlist_id: string;
          //
          positions_to_remove: string;
        }
      >;
    };
    kiaUvo: {
      // undefined
      update: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      forceUpdate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      lock: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      unlock: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      stopClimate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      startClimate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //  @example 5 @constraints  number: min: 1, max: 30, step: 1, unit_of_measurement: minutes, mode: slider
          duration?: number;
          //  @constraints  boolean:
          climate: boolean;
          //  @example 21.5 @constraints  number: min: 16, max: 85, step: 0.5, mode: box, unit_of_measurement: Degrees
          temperature: number;
          //  @constraints  boolean:
          defrost?: boolean;
          //
          heating: "0" | "4" | "1" | "2" | "3";
          //  @example 1
          steering_wheel?: "0" | "1" | "2";
          //
          flseat?: "0" | "1" | "3" | "4" | "5" | "6" | "7" | "8";
          //
          frseat?: "0" | "1" | "3" | "4" | "5" | "6" | "7" | "8";
          //
          rlseat?: "0" | "1" | "3" | "4" | "5" | "6" | "7" | "8";
          //
          rrseat?: "0" | "1" | "3" | "4" | "5" | "6" | "7" | "8";
        }
      >;
      // undefined
      startCharge: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      stopCharge: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      setChargeLimits: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //  @example 50 @constraints  number: min: 50, max: 100, step: 10, unit_of_measurement: %, mode: slider
          dc_limit?: number;
          //  @example 50 @constraints  number: min: 50, max: 100, step: 10, unit_of_measurement: %, mode: slider
          ac_limit?: number;
        }
      >;
      // undefined
      setChargingCurrent: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //
          level: "1" | "2" | "3";
        }
      >;
      // Open Charge Port
      openChargePort: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      closeChargePort: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      scheduleChargingAndClimate: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //  @constraints  boolean:
          charging_enabled?: boolean;
          //  @constraints  boolean:
          first_departure_enabled?: boolean;
          //  @example ['0', '1']
          first_departure_days?: "0" | "1" | "2" | "3" | "4" | "5" | "6";
          //  @constraints  time:
          first_departure_time?: string;
          //  @constraints  boolean:
          second_departure_enabled?: boolean;
          //  @example ['0', '1']
          second_departure_days?: "0" | "1" | "2" | "3" | "4" | "5" | "6";
          //  @constraints  time:
          second_departure_time?: string;
          //  @constraints  time:
          off_peak_start_time?: string;
          //  @constraints  time:
          off_peak_end_time?: string;
          //  @constraints  boolean:
          off_peak_charge_only_enabled?: boolean;
          //  @constraints  boolean:
          climate_enabled?: boolean;
          //  @example 21.5 @constraints  number: min: 17, max: 85, step: 0.5, mode: box, unit_of_measurement: Degrees
          temperature?: number;
          //  @example 0
          temperature_unit?: "0" | "1";
          //  @constraints  boolean:
          defrost?: boolean;
        }
      >;
      // undefined
      startHazardLights: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      startHazardLightsAndHorn: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      startValetMode: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      stopValetMode: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
        }
      >;
      // undefined
      setWindows: ServiceFunction<
        object,
        T,
        {
          //
          device_id?: string;
          //
          flwindow: "0" | "1" | "2";
          //
          frwindow: "0" | "1" | "2";
          //
          rrwindow: "0" | "1" | "2";
          //
          rlwindow: "0" | "1" | "2";
        }
      >;
      // undefined
      setNavigation: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: -90, max: 90, step: 0.001, mode: box
          latitude: number;
          //  @constraints  number: min: -180, max: 180, step: 0.001, mode: box
          longitude: number;
          //
          name: string;
          //
          address?: string;
          //
          zip_code?: string;
          //
          place_id?: string;
        }
      >;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | "update.home_assistant_supervisor_update"
      | "update.home_assistant_core_update"
      | "update.home_assistant_operating_system_update"
      | "update.matter_server_update"
      | "update.samba_share_update"
      | "update.file_editor_update"
      | "update.studio_code_server_update"
      | "update.mosquitto_broker_update"
      | "update.music_assistant_update"
      | "update.go2rtc_update"
      | "update.ads_b_multi_portal_feeder_update"
      | "update.advanced_ssh_web_terminal_update"
      | "update.esphome_device_builder_update"
      | "update.rtlamr2mqtt_update"
      | "update.twingate_connector_update"
      | "conversation.home_assistant"
      | "sensor.dishwasher_vibration_count"
      | "sensor.ozzy_visits_today"
      | "sensor.ozzy_visits_this_month"
      | "sensor.dolores_visits_this_month"
      | "sensor.dolores_visits_today"
      | "counter.dolores_litter_visits"
      | "counter.ozzy_litter_visits"
      | "counter.litter_box_waste_cycles"
      | "counter.dolores_food_visits"
      | "counter.dolores_water_visits"
      | "counter.ozzy_food_visits"
      | "counter.ozzy_water_visits"
      | "counter.feeding_loop_index"
      | "counter.litter_box_2_waste_cycles"
      | "light.office_light"
      | "light.master_bedroom_light"
      | "light.backyard_entrance_light_switch"
      | "light.main_entrance_light_switch"
      | "light.bathroom_light_switch"
      | "sensor.litter_time_today"
      | "sensor.house_gas_flow_rate"
      | "sensor.house_water_flow_rate"
      | "event.backup_automatic_backup"
      | "sensor.backup_backup_manager_state"
      | "sensor.backup_next_scheduled_automatic_backup"
      | "sensor.backup_last_successful_automatic_backup"
      | "sensor.backup_last_attempted_automatic_backup"
      | "binary_sensor.remote_ui"
      | "stt.home_assistant_cloud"
      | "tts.home_assistant_cloud"
      | "scene.new_scene"
      | "scene.dark_2"
      | "binary_sensor.all_leak_sensors"
      | "binary_sensor.all_smoke_sensors"
      | "binary_sensor.basement_smoke_sensors"
      | "sensor.living_space_light"
      | "input_boolean.google_routine_trigger"
      | "input_number.ozzy_litter_minutes"
      | "input_number.dolores_litter_minutes"
      | "zone.home"
      | "input_boolean.washer_finished"
      | "input_boolean.dryer_finished"
      | "input_boolean.hub_siren_master"
      | "input_boolean.dishwasher_finished"
      | "input_boolean.delivery"
      | "input_boolean.thermostat_automation_lock"
      | "person.jerry_medeiros"
      | "input_text.last_litter_cat"
      | "input_text.last_feeding_activity"
      | "sensor.garage_mold_indicator"
      | "sensor.mold_indicator_basement"
      | "sun.sun"
      | "sensor.sun_next_dawn"
      | "sensor.sun_next_dusk"
      | "sensor.sun_next_midnight"
      | "sensor.sun_next_noon"
      | "sensor.sun_next_rising"
      | "sensor.sun_next_setting"
      | "sensor.sun_solar_elevation"
      | "button.nest_thermostat_identify"
      | "climate.nest_thermostat"
      | "sensor.nest_thermostat_temperature"
      | "switch.nest_thermostat"
      | "button.aqara_hub_light_identify"
      | "button.aqara_hub_light_identify_2"
      | "light.aqara_hub_light"
      | "number.aqara_hub_light_on_level"
      | "number.aqara_hub_light_power_on_level"
      | "select.aqara_hub_light_power_on_behavior"
      | "binary_sensor.backyard_entrace_door_lock_actuator_2"
      | "button.backyard_entrace_door_lock_identify"
      | "lock.back_door"
      | "select.back_door_operating_mode"
      | "sensor.backyard_entrace_door_lock_battery"
      | "sensor.backyard_entrace_door_lock_battery_voltage"
      | "sensor.backyard_entrace_door_lock_battery_type"
      | "binary_sensor.main_entrace_door_lock_actuator_2"
      | "button.main_entrace_door_lock_identify"
      | "lock.front_door"
      | "select.main_entrace_door_lock_operating_mode"
      | "sensor.main_entrace_door_lock_battery"
      | "sensor.main_entrace_door_lock_battery_voltage"
      | "sensor.main_entrace_door_lock_battery_type"
      | "button.hallway_light_switch_identify"
      | "light.hallway_light_switch"
      | "binary_sensor.main_entrance_door_sensor_contact_door"
      | "button.main_entrance_door_sensor_contact_identify"
      | "sensor.main_entrance_door_sensor_contact_battery"
      | "sensor.main_entrance_door_sensor_contact_battery_voltage"
      | "sensor.main_entrance_door_sensor_contact_battery_type"
      | "binary_sensor.backyard_door_sensor_contact_door"
      | "button.backyard_door_sensor_contact_identify"
      | "sensor.backyard_door_sensor_contact_battery"
      | "sensor.backyard_door_sensor_contact_battery_voltage"
      | "sensor.backyard_door_sensor_contact_battery_type"
      | "button.master_bedroom_actions_button_identify"
      | "event.master_bedroom_actions_button_button"
      | "sensor.master_bedroom_actions_button_battery"
      | "sensor.master_bedroom_actions_button_battery_voltage"
      | "sensor.master_bedroom_actions_button_battery_type"
      | "button.office_actions_button_identify"
      | "event.office_actions_button_button"
      | "sensor.office_actions_button_battery"
      | "sensor.office_actions_button_battery_voltage"
      | "sensor.office_actions_button_battery_type"
      | "binary_sensor.garage_man_door_sensor_contact_door"
      | "button.garage_man_door_sensor_contact_identify"
      | "sensor.garage_man_door_sensor_contact_battery"
      | "sensor.garage_man_door_sensor_contact_battery_voltage"
      | "sensor.garage_man_door_sensor_contact_battery_type"
      | "button.guest_room_light_switch_identify"
      | "light.guest_room_light_switch"
      | "select.r2489_clean_mode"
      | "sensor.r2489_operational_state"
      | "sensor.r2489_operational_error"
      | "vacuum.r2489"
      | "update.h6097_firmware"
      | "button.h6097_identify"
      | "light.h6097"
      | "number.h6097_on_level"
      | "number.h6097_power_on_level"
      | "number.h6097_on_transition_time"
      | "number.h6097_off_transition_time"
      | "number.h6097_on_off_transition_time"
      | "select.h6097_mode"
      | "select.h6097_power_on_behavior"
      | "button.nest_learning_thermostat_4th_gen_identify_1"
      | "climate.nest_learning_thermostat_4th_gen"
      | "select.nest_learning_thermostat_4th_gen_temperature_display_mode"
      | "sensor.nest_learning_thermostat_4th_gen_temperature"
      | "switch.nest_learning_thermostat_4th_gen"
      | "button.nest_learning_thermostat_4th_gen_identify_2"
      | "sensor.nest_learning_thermostat_4th_gen_temperature_2"
      | "button.nest_learning_thermostat_4th_gen_identify_3"
      | "sensor.nest_learning_thermostat_4th_gen_humidity"
      | "button.nest_learning_thermostat_4th_gen_identify_100"
      | "binary_sensor.office_battery_101"
      | "sensor.office_temperature_101"
      | "sensor.office_battery_type_101"
      | "binary_sensor.living_room_2_battery_102"
      | "sensor.living_room_2_temperature_102"
      | "sensor.living_room_2_battery_type_102"
      | "binary_sensor.bedroom_3_battery_103"
      | "sensor.bedroom_3_temperature_103"
      | "sensor.bedroom_3_battery_type_103"
      | "binary_sensor.basement_4_battery_104"
      | "sensor.basement_4_temperature_104"
      | "sensor.basement_4_battery_type_104"
      | "input_datetime.litter_start_time"
      | "input_datetime.feeding_start_time"
      | "calendar.black_cart_2"
      | "calendar.blue_cart_2"
      | "calendar.green_cart_2"
      | "sensor.days_to_black_cart_2"
      | "sensor.days_to_green_cart_2"
      | "sensor.days_to_blue_cart_2"
      | "sensor.collection_types_2"
      | "sensor.upcoming_waste_collection_2"
      | "camera.litter_box_area_camera"
      | "camera.feeding_area_camera"
      | "binary_sensor.ipad_3_focus"
      | "device_tracker.ipad_3"
      | "notify.ipad_3"
      | "sensor.ipad_3_activity"
      | "sensor.ipad_3_connection_type"
      | "sensor.ipad_3_geocoded_location"
      | "sensor.ipad_3_last_update_trigger"
      | "sensor.ipad_3_battery_level"
      | "sensor.ipad_3_battery_state"
      | "sensor.ipad_3_bssid"
      | "sensor.ipad_3_ssid"
      | "sensor.ipad_3_storage"
      | "sensor.ipad_3_app_version"
      | "sensor.ipad_3_location_permission"
      | "sensor.ipad_3_audio_output"
      | "sensor.ipad_3_pressure"
      | "binary_sensor.jerry_s_iphone_focus"
      | "binary_sensor.jerry_s_iphone_kiosk_mode"
      | "device_tracker.jerry_s_iphone"
      | "notify.jerry_s_iphone"
      | "sensor.jerry_s_iphone_distance"
      | "sensor.jerry_s_iphone_activity"
      | "sensor.jerry_s_iphone_floors_descended"
      | "sensor.jerry_s_iphone_steps"
      | "sensor.jerry_s_iphone_floors_ascended"
      | "sensor.jerry_s_iphone_average_active_pace"
      | "sensor.jerry_s_iphone_battery_level"
      | "sensor.jerry_s_iphone_connection_type"
      | "sensor.jerry_s_iphone_battery_state"
      | "sensor.jerry_s_iphone_bssid"
      | "sensor.jerry_s_iphone_storage"
      | "sensor.jerry_s_iphone_ssid"
      | "sensor.jerry_s_iphone_sim_1"
      | "sensor.jerry_s_iphone_sim_2"
      | "sensor.jerry_s_iphone_watch_battery_level"
      | "sensor.jerry_s_iphone_last_update_trigger"
      | "sensor.jerry_s_iphone_app_version"
      | "sensor.jerry_s_iphone_location_permission"
      | "sensor.jerry_s_iphone_audio_output"
      | "sensor.jerry_s_iphone_watch_battery_state"
      | "sensor.jerry_s_iphone_geocoded_location"
      | "sensor.jerry_s_iphone_kiosk_brightness"
      | "sensor.jerry_s_iphone_kiosk_volume"
      | "device_tracker.control_panel"
      | "notify.lenovo_cd_18781y"
      | "sensor.lenovo_cd_18781y_battery_level"
      | "sensor.lenovo_cd_18781y_battery_state"
      | "sensor.lenovo_cd_18781y_charger_type"
      | "switch.dreame_vacuum_pre_release"
      | "update.astroweather_update"
      | "update.button_card_update"
      | "update.aroma_link_update"
      | "update.bambu_lab_update"
      | "update.kia_uvo_hyundai_bluelink_update"
      | "update.flightradar24_update"
      | "update.spotcast_update"
      | "update.music_assistant_queue_actions_update"
      | "update.tv_remote_card_with_touchpad_and_haptic_feedback_update"
      | "update.waste_collection_schedule_update"
      | "update.dreame_vacuum_update"
      | "update.scent_assistant_update"
      | "update.meross_integration_update"
      | "update.node_red_companion_update"
      | "update.vehicle_status_card_update"
      | "update.hacs_update"
      | "update.orbit_bhyve_update"
      | "update.emporia_vue_update"
      | "update.spotify_lovelace_card_update"
      | "update.mini_graph_card_update"
      | "update.spotifyplus_card_update"
      | "update.slider_button_card_update"
      | "update.mushroom_update"
      | "update.tuya_local_update"
      | "update.vertical_stack_in_card_update"
      | "update.samsungtv_smart_update"
      | "update.sonoff_lan_update"
      | "update.spotifyplus_update"
      | "update.firemote_card_update"
      | "update.advanced_camera_card_update"
      | "update.webrtc_camera_update"
      | "update.bubble_card_update"
      | "update.iss_transit_finder_update"
      | "update.llm_vision_update"
      | "update.alarmo_update"
      | "update.neakasa_update"
      | "update.layout_card_update"
      | "update.local_tuya_update"
      | "update.card_mod_update"
      | "update.astroweather_card_update"
      | "media_player.tv_2"
      | "media_player.living_room_tv_chrome_cast"
      | "remote.living_room_tv"
      | "sensor.ozzy_food_visits_today"
      | "sensor.ozzy_water_visits_today"
      | "sensor.dolores_food_visits_today"
      | "sensor.dolores_water_visits_today"
      | "sensor.house_electricity_daily"
      | "sensor.house_gas_daily"
      | "sensor.house_water_daily"
      | "sensor.house_electricity_lifetime_total"
      | "sensor.house_electricity_mothly_total"
      | "sensor.house_water_monthly"
      | "sensor.house_electricity_cost_today"
      | "sensor.house_electricity_cost_month"
      | "sensor.house_water_cost_today"
      | "sensor.house_water_cost_monthly"
      | "sensor.house_gas_cost_today"
      | "sensor.house_gas_cost_month"
      | "sensor.house_gas_monthly"
      | "binary_sensor.astroweather_backyard_deep_sky_view"
      | "binary_sensor.astroweather_backyard_moon_rises_during_darkness"
      | "binary_sensor.astroweather_backyard_moon_sets_during_darkness"
      | "binary_sensor.astroweather_backyard_moon_always_up_during_darkness"
      | "binary_sensor.astroweather_backyard_moon_always_down_during_darkness"
      | "binary_sensor.back_yard_astroweather_backyard_gfs_supplementary_data"
      | "sensor.astroweather_backyard_forecast_length"
      | "sensor.astroweather_backyard_location_name"
      | "sensor.astroweather_backyard_latitude"
      | "sensor.astroweather_backyard_longitude"
      | "sensor.astroweather_backyard_elevation"
      | "sensor.astroweather_backyard_time_shift"
      | "sensor.astroweather_backyard_timestamp"
      | "sensor.astroweather_backyard_cloud_cover"
      | "sensor.astroweather_backyard_cloudless"
      | "sensor.astroweather_backyard_clouds_area"
      | "sensor.astroweather_backyard_clouds_area_high"
      | "sensor.astroweather_backyard_clouds_area_medium"
      | "sensor.astroweather_backyard_clouds_area_low"
      | "sensor.astroweather_backyard_fog_area"
      | "sensor.astroweather_backyard_fog_2m_area"
      | "sensor.astroweather_backyard_seeing_percentage"
      | "sensor.astroweather_backyard_seeing"
      | "sensor.astroweather_backyard_transparency"
      | "sensor.astroweather_backyard_transparency_plain"
      | "sensor.astroweather_backyard_lifted_index"
      | "sensor.astroweather_backyard_lifted_index_plain"
      | "sensor.astroweather_backyard_2m_relative_humidity"
      | "sensor.astroweather_backyard_calm_percentage"
      | "sensor.astroweather_backyard_10m_wind_direction"
      | "sensor.astroweather_backyard_10m_wind_speed"
      | "sensor.astroweather_backyard_2m_temperature"
      | "sensor.astroweather_backyard_2m_dewpoint"
      | "sensor.astroweather_backyard_precipitation_amount"
      | "sensor.astroweather_backyard_condition"
      | "sensor.astroweather_backyard_sun_altitude"
      | "sensor.astroweather_backyard_sun_azimuth"
      | "sensor.astroweather_backyard_sun_next_setting"
      | "sensor.astroweather_backyard_sun_next_setting_nautical"
      | "sensor.astroweather_backyard_sun_next_setting_astronomical"
      | "sensor.astroweather_backyard_sun_next_rising"
      | "sensor.astroweather_backyard_sun_next_rising_nautical"
      | "sensor.astroweather_backyard_sun_next_rising_astronomical"
      | "sensor.astroweather_backyard_sun_constellation"
      | "sensor.astroweather_backyard_moon_next_rising"
      | "sensor.astroweather_backyard_moon_next_setting"
      | "sensor.astroweather_backyard_moon_phase"
      | "sensor.astroweather_backyard_moon_icon"
      | "sensor.astroweather_backyard_moon_next_new_moon"
      | "sensor.astroweather_backyard_moon_next_full_moon"
      | "sensor.astroweather_backyard_moon_altitude"
      | "sensor.astroweather_backyard_moon_azimuth"
      | "sensor.astroweather_backyard_moon_distance"
      | "sensor.astroweather_backyard_moon_relative_distance"
      | "sensor.astroweather_backyard_moon_angular_size"
      | "sensor.astroweather_backyard_moon_relative_size"
      | "sensor.astroweather_backyard_moon_constellation"
      | "sensor.astroweather_backyard_moon_next_dark_night"
      | "sensor.astroweather_backyard_astronomical_night_duration"
      | "sensor.astroweather_backyard_deep_sky_darkness"
      | "sensor.astroweather_backyard_deepsky_forecast_today"
      | "sensor.astroweather_backyard_deepsky_forecast_today_plain"
      | "sensor.astroweather_backyard_deepsky_forecast_today_description"
      | "sensor.astroweather_backyard_deepsky_forecast_tomorrow"
      | "sensor.astroweather_backyard_deepsky_forecast_tomorrow_plain"
      | "sensor.astroweather_backyard_deepsky_forecast_tomorrow_description"
      | "sensor.astroweather_backyard_uptonight"
      | "weather.astroweather_backyard"
      | "binary_sensor.watering_connected"
      | "binary_sensor.smart_hose_fault"
      | "select.smart_hose_device_mode"
      | "sensor.smart_hose_state"
      | "sensor.smart_hose_next_watering"
      | "sensor.unnamed_zone_zone_history"
      | "sensor.unnamed_zone_zone_history_2"
      | "sensor.smart_hose_battery_level"
      | "switch.smart_hose_rain_delay"
      | "switch.smart_hose_left_side_smart_watering"
      | "switch.smart_hose_right_side_smart_watering"
      | "valve.smart_hose_left_side_zone"
      | "valve.smart_hose_right_side_zone"
      | "media_player.living_room_tv"
      | "media_player.bedroom_speaker"
      | "media_player.living_room_speaker"
      | "tts.google_en_com"
      | "sensor.calgary_current_condition"
      | "sensor.calgary_dew_point"
      | "sensor.calgary_high_temperature"
      | "sensor.calgary_humidex"
      | "sensor.calgary_humidity"
      | "sensor.calgary_icon_code"
      | "sensor.calgary_low_temperature"
      | "sensor.calgary_normal_high_temperature"
      | "sensor.calgary_normal_low_temperature"
      | "sensor.calgary_chance_of_precipitation"
      | "sensor.calgary_barometric_pressure"
      | "sensor.calgary_temperature"
      | "sensor.calgary_tendency"
      | "sensor.calgary_summary"
      | "sensor.calgary_observation_time"
      | "sensor.calgary_uv_index"
      | "sensor.calgary_visibility"
      | "sensor.calgary_wind_bearing"
      | "sensor.calgary_wind_chill"
      | "sensor.calgary_wind_direction"
      | "sensor.calgary_wind_gust"
      | "sensor.calgary_wind_speed"
      | "sensor.calgary_advisories"
      | "sensor.calgary_endings"
      | "sensor.calgary_statements"
      | "sensor.calgary_warnings"
      | "sensor.calgary_watches"
      | "sensor.calgary_aqhi"
      | "weather.calgary_forecast"
      | "ai_task.ollama_ai_task"
      | "binary_sensor.arris_tg4482a_wan_status"
      | "sensor.arris_tg4482a_external_ip"
      | "sensor.arris_tg4482a_download_speed"
      | "sensor.arris_tg4482a_upload_speed"
      | "light.pet_feeder_indicator"
      | "binary_sensor.pet_feeder_empty_food"
      | "binary_sensor.pet_feeder_problem"
      | "button.pet_feeder_quick_feed"
      | "switch.pet_feeder_slow_feed"
      | "number.pet_feeder_manual_feed"
      | "sensor.house_water_house_water_2_cost"
      | "sensor.house_gas_m3_cost_2"
      | "sensor.house_electricity_total_cost"
      | "button.smart_fountain_filter_reset"
      | "button.smart_fountain_pump_clean_reset"
      | "sensor.pet_feeder_last_amount"
      | "sensor.pet_feeder_feed_state"
      | "sensor.pet_feeder_battery_level"
      | "sensor.smart_fountain_filter_life"
      | "sensor.smart_fountain_pump_cleaning_due"
      | "sensor.smart_fountain_water_level"
      | "sensor.smart_fountain_water_consumption"
      | "binary_sensor.smart_fountain_problem"
      | "number.smart_fountain_filter_change_interval"
      | "number.smart_fountain_pump_clean_interval"
      | "select.smart_fountain_activation_mode"
      | "switch.google_routine_switch"
      | "binary_sensor.litter_box_occupied"
      | "binary_sensor.dryer_running"
      | "binary_sensor.washer_running"
      | "binary_sensor.ac_running"
      | "sensor.dolores_total_visits"
      | "sensor.dolores_total_minutes"
      | "sensor.ozzy_total_minutes"
      | "sensor.ozzy_total_visits"
      | "sensor.ozzy_total_food_visits"
      | "sensor.ozzy_total_water_visits"
      | "sensor.dolores_total_food_visits"
      | "sensor.dolores_total_water_visits"
      | "sensor.house_electricity_total"
      | "sensor.house_gas_m3"
      | "sensor.bubble_card_modules"
      | "sensor.dishwasher_status"
      | "sensor.current_flights_overhead"
      | "sensor.openweathermap_weather"
      | "sensor.openweathermap_dew_point_temperature"
      | "sensor.openweathermap_temperature"
      | "sensor.openweathermap_apparent_temperature"
      | "sensor.openweathermap_wind_speed"
      | "sensor.openweathermap_wind_gust_speed"
      | "sensor.openweathermap_wind_direction"
      | "sensor.openweathermap_humidity"
      | "sensor.openweathermap_pressure"
      | "sensor.openweathermap_cloud_coverage"
      | "sensor.openweathermap_rain_intensity"
      | "sensor.openweathermap_snow_intensity"
      | "sensor.openweathermap_precipitation_kind"
      | "sensor.openweathermap_uv_index"
      | "sensor.openweathermap_visibility"
      | "sensor.openweathermap_condition"
      | "sensor.openweathermap_weather_code"
      | "weather.openweathermap"
      | "infrared.universal_remote_ir_emitter"
      | "remote.universal_remote"
      | "radio_frequency.universal_remote"
      | "switch.smart_a5_wifi_power"
      | "switch.smart_a5_wifi_fan"
      | "sensor.smart_a5_wifi_status"
      | "sensor.smart_a5_wifi_connection"
      | "sensor.smart_a5_wifi_oil_remaining"
      | "sensor.smart_a5_wifi_diffusion_time_remaining"
      | "sensor.smart_a5_wifi_pause_time_remaining"
      | "sensor.smart_a5_wifi_battery"
      | "number.smart_a5_wifi_work_duration"
      | "number.smart_a5_wifi_pause_duration"
      | "number.smart_a5_wifi_momentary_duration"
      | "time.smart_a5_wifi_start_time"
      | "time.smart_a5_wifi_end_time"
      | "button.smart_a5_wifi_sync_time"
      | "button.smart_a5_wifi_diffuse_now"
      | "sensor.indi_allsky_certificate_expiry"
      | "sensor.sky_cloud_api_certificate_expiry"
      | "sensor.nas_certificate_expiry"
      | "sensor.home_assistant_certificate_expiry"
      | "sensor.indi_allsky_response_time"
      | "sensor.sky_cloud_api_response_time"
      | "sensor.nas_response_time"
      | "sensor.home_assistant_response_time"
      | "sensor.twingate_response_time"
      | "sensor.omada_response_time"
      | "sensor.indi_allsky_status"
      | "sensor.sky_cloud_api_status"
      | "sensor.nas_status"
      | "sensor.home_assistant_status"
      | "sensor.twingate_status"
      | "sensor.omada_status"
      | "sensor.indi_allsky_monitor_type"
      | "sensor.sky_cloud_api_monitor_type"
      | "sensor.nas_monitor_type"
      | "sensor.home_assistant_monitor_type"
      | "sensor.twingate_monitor_type"
      | "sensor.omada_monitor_type"
      | "sensor.indi_allsky_monitored_url"
      | "sensor.sky_cloud_api_monitored_url"
      | "sensor.nas_monitored_url"
      | "sensor.home_assistant_monitored_url"
      | "sensor.indi_allsky_uptime_1_day"
      | "sensor.sky_cloud_api_uptime_1_day"
      | "sensor.nas_uptime_1_day"
      | "sensor.home_assistant_uptime_1_day"
      | "sensor.twingate_uptime_1_day"
      | "sensor.omada_uptime_1_day"
      | "sensor.indi_allsky_uptime_30_days"
      | "sensor.sky_cloud_api_uptime_30_days"
      | "sensor.nas_uptime_30_days"
      | "sensor.home_assistant_uptime_30_days"
      | "sensor.twingate_uptime_30_days"
      | "sensor.omada_uptime_30_days"
      | "sensor.indi_allsky_uptime_365_days"
      | "sensor.sky_cloud_api_uptime_365_days"
      | "sensor.nas_uptime_365_days"
      | "sensor.home_assistant_uptime_365_days"
      | "sensor.twingate_uptime_365_days"
      | "sensor.omada_uptime_365_days"
      | "sensor.indi_allsky_response_time_o_1_day"
      | "sensor.sky_cloud_api_response_time_o_1_day"
      | "sensor.nas_response_time_o_1_day"
      | "sensor.home_assistant_response_time_o_1_day"
      | "sensor.twingate_response_time_o_1_day"
      | "sensor.omada_response_time_o_1_day"
      | "sensor.indi_allsky_response_time_o_30_days"
      | "sensor.sky_cloud_api_response_time_o_30_days"
      | "sensor.nas_response_time_o_30_days"
      | "sensor.home_assistant_response_time_o_30_days"
      | "sensor.twingate_response_time_o_30_days"
      | "sensor.omada_response_time_o_30_days"
      | "sensor.indi_allsky_response_time_o_365_days"
      | "sensor.sky_cloud_api_response_time_o_365_days"
      | "sensor.nas_response_time_o_365_days"
      | "sensor.home_assistant_response_time_o_365_days"
      | "sensor.twingate_response_time_o_365_days"
      | "sensor.omada_response_time_o_365_days"
      | "update.homeserver_local_uptime_kuma_version"
      | "sensor.iss_transit_finder_home_home_next_iss_sun_transit"
      | "sensor.iss_transit_finder_home_home_next_iss_moon_transit"
      | "binary_sensor.indi_allsky_moon_mode"
      | "binary_sensor.indi_allsky_night"
      | "sensor.moon_phase"
      | "todo.shopping_list"
      | "binary_sensor.kitchen_light_cloud_connection"
      | "light.kitchen_light"
      | "switch.kitchen_light_led"
      | "binary_sensor.living_room_light_cloud_connection"
      | "light.living_room_light"
      | "switch.living_room_light_led"
      | "binary_sensor.basement_2_cloud_connection"
      | "light.basement_2"
      | "switch.basement_2_led"
      | "binary_sensor.basement_bedroom_cloud_connection"
      | "light.basement_bedroom"
      | "sensor.basement_bedroom_signal_strength"
      | "switch.basement_bedroom_led"
      | "binary_sensor.island_light_cloud_connection"
      | "light.island_light"
      | "switch.island_light_led"
      | "binary_sensor.staircase_light_cloud_connection"
      | "light.staircase_light"
      | "switch.staircase_light_led"
      | "binary_sensor.basement_1_cloud_connection"
      | "light.basement_1"
      | "switch.basement_1_led"
      | "binary_sensor.unnamed_s505_cloud_connection_2"
      | "binary_sensor.unnamed_s505_overheated_2"
      | "number.unnamed_s505_turn_off_in_2"
      | "sensor.unnamed_s505_signal_level_2"
      | "sensor.unnamed_s505_auto_off_at_2"
      | "switch.main_entrance_light_switch"
      | "switch.unnamed_s505_auto_off_enabled_2"
      | "switch.unnamed_s505_auto_update_enabled_2"
      | "switch.unnamed_s505_led_2"
      | "binary_sensor.unnamed_s505_cloud_connection"
      | "binary_sensor.unnamed_s505_overheated"
      | "number.unnamed_s505_turn_off_in"
      | "sensor.unnamed_s505_signal_level"
      | "sensor.unnamed_s505_auto_off_at"
      | "switch.backyard_entrace_light_switch"
      | "switch.unnamed_s505_auto_off_enabled"
      | "switch.unnamed_s505_auto_update_enabled"
      | "switch.unnamed_s505_led"
      | "image.indi_allsky_indi_allsky_camera"
      | "lock.ratgdov25i_e5f7cc_lock_remotes"
      | "sensor.ratgdov25i_e5f7cc_openings"
      | "sensor.ratgdov25i_e5f7cc_paired_devices"
      | "sensor.ratgdov25i_e5f7cc_firmware_version"
      | "switch.ratgdov25i_e5f7cc_learn"
      | "number.ratgdov25i_e5f7cc_rolling_code_counter"
      | "number.ratgdov25i_e5f7cc_opening_duration"
      | "number.ratgdov25i_e5f7cc_closing_duration"
      | "number.ratgdov25i_e5f7cc_client_id"
      | "cover.garage_door"
      | "binary_sensor.garage_interior_motion_sensor"
      | "binary_sensor.ratgdov25i_e5f7cc_obstruction"
      | "binary_sensor.ratgdov25i_e5f7cc_button"
      | "binary_sensor.ratgdov25i_e5f7cc_motor"
      | "binary_sensor.ratgdov25i_e5f7cc_dry_contact_open"
      | "binary_sensor.ratgdov25i_e5f7cc_dry_contact_close"
      | "binary_sensor.ratgdov25i_e5f7cc_dry_contact_light"
      | "button.ratgdov25i_e5f7cc_restart"
      | "button.ratgdov25i_e5f7cc_safe_mode_boot"
      | "button.ratgdov25i_e5f7cc_query_status"
      | "button.ratgdov25i_e5f7cc_query_openings"
      | "button.ratgdov25i_e5f7cc_sync"
      | "button.ratgdov25i_e5f7cc_toggle_door"
      | "light.ratgdov25i_e5f7cc_light"
      | "button.office_desk_restart_desk_esp"
      | "button.office_desk_desk_go_to_seated"
      | "button.office_desk_desk_go_to_standing"
      | "sensor.office_desk_desk_height_cm"
      | "number.office_desk_desk_speed_limit"
      | "number.office_desk_desk_go_to_position"
      | "cover.office_desk_desk_control"
      | "device_tracker.flightradar24"
      | "sensor.flightradar24_current_in_area"
      | "sensor.flightradar24_entered_area"
      | "sensor.flightradar24_exited_area"
      | "sensor.flightradar24_airport_arrivals_on_time"
      | "sensor.flightradar24_airport_arrivals_delayed"
      | "sensor.flightradar24_airport_arrivals_delay_average"
      | "sensor.flightradar24_airport_arrivals_delay_index"
      | "sensor.flightradar24_airport_arrivals_canceled"
      | "sensor.flightradar24_airport_arrivals"
      | "sensor.flightradar24_airport_departures_on_time"
      | "sensor.flightradar24_airport_departures_delayed"
      | "sensor.flightradar24_airport_departures_delay_average"
      | "sensor.flightradar24_airport_departures_delay_index"
      | "sensor.flightradar24_airport_departures_canceled"
      | "sensor.flightradar24_airport_departures"
      | "sensor.flightradar24_additional_tracked_2"
      | "switch.flightradar24_api_data_fetching"
      | "switch.flightradar24_most_tracked"
      | "text.flightradar24_add_to_track"
      | "text.flightradar24_remove_from_track"
      | "text.flightradar24_airport_track"
      | "button.flightradar24_clear_additional_tracked"
      | "script.startup_office"
      | "script.shutdown_office"
      | "script.away"
      | "script.open_disarm"
      | "sensor.indi_allsky_exposure_date"
      | "sensor.indi_allsky_exposure"
      | "sensor.indi_allsky_camera_gain"
      | "sensor.indi_allsky_camera_binmode"
      | "sensor.indi_allsky_camera_temp"
      | "sensor.indi_allsky_sun_altitude"
      | "sensor.indi_allsky_moon_altitude"
      | "sensor.indi_allsky_moon_phase"
      | "sensor.indi_allsky_sqm"
      | "sensor.indi_allsky_stars"
      | "alarm_control_panel.house"
      | "sensor.indi_allsky_detections"
      | "sensor.indi_allsky_latitude"
      | "sensor.indi_allsky_longitude"
      | "sensor.indi_allsky_elevation"
      | "sensor.indi_allsky_k_p_index"
      | "sensor.indi_allsky_aurora_prediction"
      | "sensor.indi_allsky_solar_wind_bt_nt"
      | "sensor.indi_allsky_solar_wind_bz"
      | "sensor.indi_allsky_solar_wind_plasma_density_1_cm3"
      | "sensor.indi_allsky_solar_wind_plasma_speed_km_s"
      | "sensor.indi_allsky_solar_wind_plasma_temperature_k"
      | "sensor.indi_allsky_hemispheric_power_northern_gw"
      | "sensor.indi_allsky_hemispheric_power_southern_gw"
      | "sensor.indi_allsky_smoke_rating"
      | "sensor.indi_allsky_sidereal_time"
      | "sensor.indi_allsky_cpu_total"
      | "sensor.indi_allsky_memory_total"
      | "sensor.indi_allsky_filesystem"
      | "sensor.indi_allsky_thermal_cpu_thermal_0"
      | "sensor.indi_allsky_camera_temp_2"
      | "sensor.indi_allsky_future_use_1"
      | "sensor.indi_allsky_future_use_2"
      | "sensor.indi_allsky_future_use_3"
      | "sensor.indi_allsky_future_use_4"
      | "sensor.indi_allsky_future_use_5"
      | "sensor.indi_allsky_future_use_6"
      | "sensor.indi_allsky_future_use_7"
      | "sensor.indi_allsky_future_use_8"
      | "sensor.indi_allsky_future_use_9"
      | "sensor.indi_allsky_system_temp_10"
      | "sensor.indi_allsky_system_temp_11"
      | "sensor.indi_allsky_system_temp_12"
      | "sensor.indi_allsky_system_temp_13"
      | "sensor.indi_allsky_system_temp_14"
      | "sensor.indi_allsky_system_temp_15"
      | "sensor.indi_allsky_system_temp_16"
      | "sensor.indi_allsky_system_temp_17"
      | "sensor.indi_allsky_system_temp_18"
      | "sensor.indi_allsky_system_temp_19"
      | "sensor.indi_allsky_system_temp_20"
      | "sensor.indi_allsky_system_temp_21"
      | "sensor.indi_allsky_system_temp_22"
      | "sensor.indi_allsky_system_temp_23"
      | "sensor.indi_allsky_system_temp_24"
      | "sensor.indi_allsky_system_temp_25"
      | "sensor.indi_allsky_system_temp_26"
      | "sensor.indi_allsky_system_temp_27"
      | "sensor.indi_allsky_system_temp_28"
      | "sensor.indi_allsky_system_temp_29"
      | "sensor.indi_allsky_camera_temp_3"
      | "sensor.indi_allsky_dew_heater_level"
      | "sensor.indi_allsky_dew_point"
      | "sensor.indi_allsky_frost_point"
      | "sensor.indi_allsky_fan_level"
      | "media_player.everywhere"
      | "sensor.indi_allsky_heat_index"
      | "sensor.indi_allsky_wind_dir_degrees"
      | "sensor.indi_allsky_sqm_2"
      | "media_player.office_speaker"
      | "sensor.indi_allsky_future_use_8_2"
      | "sensor.indi_allsky_future_use_9_2"
      | "sensor.indi_allsky_user_slot_10"
      | "sensor.indi_allsky_user_slot_11"
      | "sensor.indi_allsky_user_slot_12"
      | "sensor.indi_allsky_user_slot_13"
      | "sensor.indi_allsky_user_slot_14"
      | "sensor.indi_allsky_user_slot_15"
      | "sensor.indi_allsky_user_slot_16"
      | "sensor.indi_allsky_user_slot_17"
      | "sensor.indi_allsky_user_slot_18"
      | "sensor.indi_allsky_user_slot_19"
      | "sensor.indi_allsky_user_slot_20"
      | "sensor.indi_allsky_user_slot_21"
      | "sensor.indi_allsky_user_slot_22"
      | "sensor.indi_allsky_user_slot_23"
      | "sensor.indi_allsky_user_slot_24"
      | "sensor.indi_allsky_user_slot_25"
      | "sensor.indi_allsky_user_slot_26"
      | "sensor.indi_allsky_user_slot_27"
      | "sensor.indi_allsky_user_slot_28"
      | "sensor.indi_allsky_user_slot_29"
      | "sensor.allsky_cloud_detector_status"
      | "sensor.allsky_cloud_detector_confidence"
      | "sensor.allsky_cloud_detector_detection_time"
      | "binary_sensor.rojeco_pet_feeder_feeding"
      | "binary_sensor.rojeco_pet_feeder_charging"
      | "light.hs01_smart_strip_lights"
      | "light.rojeco_pet_feeder_light"
      | "number.rojeco_pet_feeder_feed"
      | "select.merkury_six_smart_plug_power_on_behavior"
      | "select.smart_switch_power_on_behavior"
      | "select.smart_switch_indicator_light_mode"
      | "sensor.rojeco_pet_feeder_battery"
      | "sensor.rojeco_pet_feeder_last_amount"
      | "sensor.smart_pet_fountain_water_pump_duration"
      | "sensor.smart_pet_fountain_filter_duration"
      | "switch.office_left_monitor_plug"
      | "switch.office_right_monitor_plug"
      | "switch.office_computer_plug"
      | "switch.merkury_six_smart_plug_socket_4"
      | "switch.merkury_six_smart_plug_socket_5"
      | "switch.merkury_six_smart_plug_socket_6"
      | "switch.all_sky_plug"
      | "switch.humidifier_socket_1"
      | "switch.smart_switch_switch_1"
      | "switch.rojeco_pet_feeder_slow_feed"
      | "switch.smart_pet_fountain_filter_reset"
      | "switch.smart_pet_fountain_water_pump_reset"
      | "switch.smart_pet_fountain_power"
      | "automation.notify_garage_door_is_open"
      | "automation.waste_collection_popup_at_7pm"
      | "automation.notify_washer_finished_running"
      | "automation.notify_dryer_finished_running"
      | "automation.aqara_mini_switch_single_press"
      | "automation.start_office"
      | "automation.auto_clear_all_tuya_smoke_detectors"
      | "automation.litter_cleaning_counter"
      | "automation.smart_front_entrance_lights"
      | "automation.smart_back_entrance_lights"
      | "automation.alarm_disarm_on_door_unlock_3"
      | "automation.security_camera_warning_manual_trigger"
      | "automation.security_manual_siren_trigger_listener"
      | "automation.force_hub_siren_loop"
      | "automation.security_dynamic_entry_warning"
      | "automation.notify_dishwasher_cycle_finished"
      | "automation.pet_food_water_tracker_video_test_mode"
      | "automation.litter_box_identity_duration_tracker_switchbot_edition"
      | "automation.alarm_keypad_arm_disarm_sequence"
      | "automation.tv_media_light_sync"
      | "automation.utility_package_delivery_detection_ai_filtered"
      | "automation.thermostat_seasonal_mode_switch_with_lock"
      | "automation.office_desk_remote_control"
      | "automation.office_lighting_controller_3"
      | "automation.flight_entry_notification"
      | "sensor.sonoff_100294a1ea_action"
      | "sensor.sonoff_10029476ea_action"
      | "sensor.sonoff_100294607c_action"
      | "switch.bathroom_light_switch"
      | "switch.sonoff_10029476ea_1"
      | "switch.sonoff_100294607c_1"
      | "select.sonoff_100294a1ea_1"
      | "select.sonoff_10029476ea_1"
      | "select.sonoff_100294607c_1"
      | "binary_sensor.litter_box_occupancy_sensor"
      | "sensor.litter_box_luminance_sensor"
      | "sensor.litter_box_presence_sensor_battery_range"
      | "binary_sensor.feeding_area_presence_sensor_occupancy"
      | "sensor.feeding_area_presence_sensor_light_level"
      | "sensor.feeding_area_presence_sensor_battery_range"
      | "binary_sensor.basement_presence_sensor_occupancy"
      | "sensor.basement_presence_sensor_light_level"
      | "sensor.basement_presence_sensor_battery_range"
      | "sensor.indoor_outdoor_meter_4f23_battery"
      | "sensor.indoor_outdoor_meter_4f23_temperature"
      | "sensor.indoor_outdoor_meter_4f23_humidity"
      | "sensor.indoor_outdoor_meter_6287_battery"
      | "sensor.indoor_outdoor_meter_6287_temperature"
      | "sensor.indoor_outdoor_meter_6287_humidity"
      | "sensor.indoor_outdoor_meter_0d29_battery"
      | "sensor.indoor_outdoor_meter_0d29_temperature"
      | "sensor.indoor_outdoor_meter_0d29_humidity"
      | "binary_sensor.lenovo_starview_kiosk_mode"
      | "binary_sensor.lenovo_starview_plugged_in"
      | "binary_sensor.lenovo_starview_device_admin"
      | "button.lenovo_starview_restart_browser"
      | "button.lenovo_starview_restart_device"
      | "button.lenovo_starview_bring_to_foreground"
      | "button.lenovo_starview_send_to_background"
      | "button.lenovo_starview_load_start_url"
      | "button.lenovo_starview_clear_browser_cache"
      | "button.lenovo_starview_trigger_motion_activity"
      | "camera.lenovo_starview"
      | "image.lenovo_starview_screenshot"
      | "media_player.lenovo_starview"
      | "notify.lenovo_starview_overlay_message"
      | "notify.lenovo_starview_text_to_speech"
      | "number.lenovo_starview_screensaver_timer"
      | "number.lenovo_starview_screensaver_brightness"
      | "number.lenovo_starview_screen_off_timer"
      | "number.lenovo_starview_screen_brightness"
      | "sensor.lenovo_starview_battery"
      | "sensor.lenovo_starview_battery_temperature"
      | "sensor.lenovo_starview_current_page"
      | "sensor.lenovo_starview_screen_orientation"
      | "sensor.lenovo_starview_foreground_app"
      | "sensor.lenovo_starview_internal_storage_free_space"
      | "sensor.lenovo_starview_internal_storage_total_space"
      | "sensor.lenovo_starview_free_memory"
      | "sensor.lenovo_starview_total_memory"
      | "switch.lenovo_starview_screensaver"
      | "switch.lenovo_starview_maintenance_mode"
      | "switch.lenovo_starview_kiosk_lock"
      | "switch.lenovo_starview_motion_detection"
      | "switch.lenovo_starview_screen"
      | "binary_sensor.fire_tablet_kiosk_mode"
      | "binary_sensor.fire_tablet_plugged_in"
      | "binary_sensor.fire_tablet_device_admin"
      | "button.fire_tablet_restart_browser"
      | "button.fire_tablet_restart_device"
      | "button.fire_tablet_bring_to_foreground"
      | "button.fire_tablet_send_to_background"
      | "button.fire_tablet_load_start_url"
      | "button.fire_tablet_clear_browser_cache"
      | "button.fire_tablet_trigger_motion_activity"
      | "camera.fire_tablet"
      | "image.fire_tablet_screenshot"
      | "media_player.fire_tablet"
      | "notify.fire_tablet_overlay_message"
      | "notify.fire_tablet_text_to_speech"
      | "number.fire_tablet_screensaver_timer"
      | "number.fire_tablet_screensaver_brightness"
      | "number.fire_tablet_screen_off_timer"
      | "number.fire_tablet_screen_brightness"
      | "sensor.fire_tablet_battery"
      | "sensor.fire_tablet_battery_temperature"
      | "sensor.fire_tablet_current_page"
      | "sensor.fire_tablet_screen_orientation"
      | "sensor.fire_tablet_foreground_app"
      | "sensor.fire_tablet_internal_storage_free_space"
      | "sensor.fire_tablet_internal_storage_total_space"
      | "sensor.fire_tablet_free_memory"
      | "sensor.fire_tablet_total_memory"
      | "switch.fire_tablet_screensaver"
      | "switch.fire_tablet_maintenance_mode"
      | "switch.fire_tablet_kiosk_lock"
      | "switch.fire_tablet_motion_detection"
      | "switch.fire_tablet_screen"
      | "media_player.spotify_jerry_medeiros"
      | "sensor.io_series_6_7_44fc_duration"
      | "sensor.io_series_6_7_44fc_sector"
      | "sensor.io_series_6_7_44fc_number_of_sectors"
      | "sensor.io_series_6_7_44fc"
      | "sensor.io_series_6_7_44fc_pressure"
      | "sensor.io_series_6_7_44fc_brushing_mode"
      | "sensor.io_series_6_7_44fc_battery"
      | "binary_sensor.p2s_22e8aj5c0901243_recording_timelapse"
      | "binary_sensor.p2s_22e8aj5c0901243_extruder_filament_state"
      | "binary_sensor.p2s_22e8aj5c0901243_hms_errors"
      | "binary_sensor.p2s_22e8aj5c0901243_print_error"
      | "binary_sensor.p2s_22e8aj5c0901243_online"
      | "binary_sensor.p2s_22e8aj5c0901243_firmware_update"
      | "binary_sensor.p2s_22e8aj5c0901243_enclosure_door"
      | "binary_sensor.p2s_22e8aj5c0901243_developer_lan_mode"
      | "binary_sensor.p2s_22e8aj5c0901243_mqtt_encryption_firmware"
      | "binary_sensor.p2s_22e8aj5c0901243_hybrid_mqtt_blocks_control"
      | "binary_sensor.p2s_22e8aj5c0901243_ams_1_active"
      | "binary_sensor.p2s_22e8aj5c0901243_ams_1_drying"
      | "binary_sensor.p2s_22e8aj5c0901243_externalspool_active"
      | "image.p2s_22e8aj5c0901243_cover_image"
      | "image.p2s_22e8aj5c0901243_pick_image"
      | "light.p2s_22e8aj5c0901243_chamber_light"
      | "sensor.p2s_22e8aj5c0901243_externalspool_external_spool"
      | "sensor.p2s_22e8aj5c0901243_ams_1_humidity_index"
      | "sensor.p2s_22e8aj5c0901243_ams_1_humidity"
      | "sensor.p2s_22e8aj5c0901243_ams_1_temperature"
      | "sensor.p2s_22e8aj5c0901243_ams_1_remaining_drying_time"
      | "sensor.bambu_ams_drying_temperature"
      | "sensor.bambu_ams_drying_duration"
      | "sensor.bambu_ams_drying_filament"
      | "sensor.p2s_22e8aj5c0901243_ams_1_tray_1"
      | "sensor.p2s_22e8aj5c0901243_ams_1_tray_2"
      | "sensor.p2s_22e8aj5c0901243_ams_1_tray_3"
      | "sensor.p2s_22e8aj5c0901243_ams_1_tray_4"
      | "sensor.p2s_22e8aj5c0901243_mqtt_connection_mode"
      | "sensor.p2s_22e8aj5c0901243_wi_fi_signal"
      | "sensor.p2s_22e8aj5c0901243_bed_temperature"
      | "sensor.p2s_22e8aj5c0901243_bed_target_temperature"
      | "sensor.p2s_22e8aj5c0901243_chamber_temperature"
      | "sensor.p2s_22e8aj5c0901243_nozzle_temperature"
      | "sensor.p2s_22e8aj5c0901243_nozzle_target_temperature"
      | "sensor.p2s_22e8aj5c0901243_aux_fan_speed"
      | "sensor.p2s_22e8aj5c0901243_chamber_fan_speed"
      | "sensor.p2s_22e8aj5c0901243_cooling_fan_speed"
      | "sensor.p2s_22e8aj5c0901243_heatbreak_fan_speed"
      | "sensor.p2s_22e8aj5c0901243_model_download"
      | "sensor.p2s_22e8aj5c0901243_speed_profile"
      | "sensor.bambu_p2s_airduct_mode"
      | "sensor.p2s_22e8aj5c0901243_current_stage"
      | "sensor.p2s_print_progress"
      | "sensor.p2s_print_status"
      | "sensor.p2s_22e8aj5c0901243_printable_objects"
      | "sensor.p2s_22e8aj5c0901243_sd_card_status"
      | "sensor.p2s_22e8aj5c0901243_skipped_objects"
      | "sensor.p2s_22e8aj5c0901243_start_time"
      | "sensor.p2s_22e8aj5c0901243_remaining_time"
      | "sensor.p2s_22e8aj5c0901243_end_time"
      | "sensor.p2s_22e8aj5c0901243_total_usage"
      | "sensor.p2s_22e8aj5c0901243_current_layer"
      | "sensor.p2s_22e8aj5c0901243_total_layer_count"
      | "sensor.p2s_22e8aj5c0901243_gcode_filename"
      | "sensor.p2s_22e8aj5c0901243_gcode_file_downloaded"
      | "sensor.p2s_22e8aj5c0901243_task_name"
      | "sensor.p2s_22e8aj5c0901243_print_type"
      | "sensor.p2s_22e8aj5c0901243_printer_name"
      | "sensor.p2s_22e8aj5c0901243_print_length"
      | "sensor.p2s_22e8aj5c0901243_print_bed_type"
      | "sensor.p2s_22e8aj5c0901243_print_weight"
      | "sensor.p2s_22e8aj5c0901243_active_tray"
      | "sensor.p2s_22e8aj5c0901243_nozzle_size"
      | "sensor.p2s_22e8aj5c0901243_nozzle_type"
      | "sensor.p2s_22e8aj5c0901243_ip_address"
      | "sensor.p2s_22e8aj5c0901243_serial_number"
      | "switch.p2s_22e8aj5c0901243_enable_camera"
      | "camera.p2s_bambu_camera"
      | "media_player.living_room_tv_samsung"
      | "sensor.tv_tv_channel"
      | "sensor.tv_tv_channel_name"
      | "binary_sensor.nas_security_status"
      | "binary_sensor.nas_drive_2_exceeded_max_bad_sectors"
      | "binary_sensor.nas_drive_2_below_min_remaining_life"
      | "binary_sensor.nas_drive_1_exceeded_max_bad_sectors"
      | "binary_sensor.nas_drive_1_below_min_remaining_life"
      | "binary_sensor.nas_drive_3_exceeded_max_bad_sectors"
      | "binary_sensor.nas_drive_3_below_min_remaining_life"
      | "binary_sensor.nas_drive_4_exceeded_max_bad_sectors"
      | "binary_sensor.nas_drive_4_below_min_remaining_life"
      | "button.nas_reboot"
      | "button.nas_shutdown"
      | "select.nas_fan_speed_mode"
      | "sensor.nas_cpu_utilization_user"
      | "sensor.nas_cpu_utilization_total"
      | "sensor.nas_cpu_load_average_5_min"
      | "sensor.nas_cpu_load_average_15_min"
      | "sensor.nas_memory_usage_real"
      | "sensor.nas_memory_available_swap"
      | "sensor.nas_memory_available_real"
      | "sensor.nas_memory_total_swap"
      | "sensor.nas_memory_total_real"
      | "sensor.nas_upload_throughput"
      | "sensor.nas_download_throughput"
      | "sensor.nas_volume_1_status"
      | "sensor.nas_volume_1_used_space"
      | "sensor.nas_volume_1_volume_used"
      | "sensor.nas_volume_1_average_disk_temp"
      | "sensor.nas_drive_2_status"
      | "sensor.nas_drive_2_temperature"
      | "sensor.nas_drive_1_status"
      | "sensor.nas_drive_1_temperature"
      | "sensor.nas_drive_3_status"
      | "sensor.nas_drive_3_temperature"
      | "sensor.nas_drive_4_status"
      | "sensor.nas_drive_4_temperature"
      | "sensor.nas_temperature"
      | "switch.nas_surveillance_station_home_mode"
      | "update.nas_dsm_update"
      | "camera.front_door_2"
      | "camera.back_door_2"
      | "media_player.spotifyplus_jerry_medeiros"
      | "vacuum.x50_ultra"
      | "sensor.x50_ultra_cleaning_time"
      | "sensor.x50_ultra_mapping_time"
      | "sensor.x50_ultra_cleaned_area"
      | "sensor.x50_ultra_state"
      | "sensor.x50_ultra_status"
      | "sensor.x50_ultra_relocation_status"
      | "sensor.x50_ultra_task_status"
      | "sensor.x50_ultra_mop_pad"
      | "sensor.x50_ultra_dust_collection"
      | "sensor.x50_ultra_auto_empty_status"
      | "sensor.x50_ultra_self_wash_base_status"
      | "sensor.x50_ultra_low_water_warning"
      | "sensor.x50_ultra_drainage_status"
      | "sensor.x50_ultra_task_type"
      | "sensor.x50_ultra_stream_status"
      | "sensor.x50_ultra_error"
      | "sensor.x50_ultra_charging_status"
      | "sensor.x50_ultra_battery_level"
      | "sensor.x50_ultra_main_brush_left"
      | "sensor.x50_ultra_main_brush_time_left"
      | "sensor.x50_ultra_side_brush_left"
      | "sensor.x50_ultra_side_brush_time_left"
      | "sensor.x50_ultra_filter_left"
      | "sensor.x50_ultra_filter_time_left"
      | "sensor.x50_ultra_sensor_dirty_left"
      | "sensor.x50_ultra_sensor_dirty_time_left"
      | "sensor.x50_ultra_wheel_dirty_left"
      | "sensor.x50_ultra_wheel_dirty_time_left"
      | "sensor.x50_ultra_scale_inhibitor_left"
      | "sensor.x50_ultra_scale_inhibitor_time_left"
      | "sensor.x50_ultra_first_cleaning_date"
      | "sensor.x50_ultra_total_cleaning_time"
      | "sensor.x50_ultra_cleaning_count"
      | "sensor.x50_ultra_total_cleaned_area"
      | "sensor.x50_ultra_clean_water_tank_status"
      | "sensor.x50_ultra_dirty_water_tank_status"
      | "sensor.x50_ultra_dust_bag_status"
      | "sensor.x50_ultra_detergent_status"
      | "sensor.x50_ultra_station_drainage_status"
      | "sensor.x50_ultra_hot_water_status"
      | "sensor.x50_ultra_current_room"
      | "sensor.x50_ultra_cleaning_history"
      | "sensor.x50_ultra_cruising_history"
      | "sensor.x50_ultra_cleaning_progress"
      | "sensor.x50_ultra_drying_progress"
      | "sensor.x50_ultra_drying_left"
      | "sensor.x50_ultra_firmware_version"
      | "binary_sensor.x50_ultra_charging_state"
      | "binary_sensor.x50_ultra_lds_status"
      | "switch.x50_ultra_resume_cleaning"
      | "switch.x50_ultra_carpet_boost"
      | "switch.x50_ultra_obstacle_avoidance"
      | "switch.x50_ultra_customized_cleaning"
      | "switch.x50_ultra_child_lock"
      | "switch.x50_ultra_dnd"
      | "switch.x50_ultra_dnd_disable_resume_cleaning"
      | "switch.x50_ultra_dnd_disable_auto_empty"
      | "switch.x50_ultra_dnd_reduce_volume"
      | "switch.x50_ultra_multi_floor_map"
      | "switch.x50_ultra_self_clean"
      | "switch.x50_ultra_auto_water_refilling"
      | "switch.x50_ultra_intelligent_recognition"
      | "switch.x50_ultra_auto_drying"
      | "switch.x50_ultra_auto_add_detergent"
      | "switch.x50_ultra_auto_mount_mop"
      | "switch.x50_ultra_voice_assistant"
      | "switch.x50_ultra_ai_obstacle_detection"
      | "switch.x50_ultra_ai_obstacle_image_upload"
      | "switch.x50_ultra_ai_obstacle_picture"
      | "switch.x50_ultra_ai_pet_detection"
      | "switch.x50_ultra_ai_furniture_detection"
      | "switch.x50_ultra_ai_fluid_detection"
      | "switch.x50_ultra_fuzzy_obstacle_detection"
      | "switch.x50_ultra_pet_picture"
      | "switch.x50_ultra_pet_focused_detection"
      | "switch.x50_ultra_large_particles_boost"
      | "switch.x50_ultra_fill_light"
      | "switch.x50_ultra_collision_avoidance"
      | "switch.x50_ultra_stain_avoidance"
      | "switch.x50_ultra_floor_direction_cleaning"
      | "switch.x50_ultra_intensive_carpet_cleaning"
      | "switch.x50_ultra_side_reach"
      | "switch.x50_ultra_mop_extend"
      | "switch.x50_ultra_gap_cleaning_extension"
      | "switch.x50_ultra_mopping_under_furnitures"
      | "switch.x50_ultra_off_peak_charging"
      | "switch.x50_ultra_human_follow"
      | "switch.x50_ultra_max_suction_power"
      | "switch.x50_ultra_uv_sterilization"
      | "switch.x50_ultra_streaming_voice_prompt"
      | "switch.x50_ultra_clean_carpets_first"
      | "switch.x50_ultra_smart_mop_washing"
      | "switch.x50_ultra_silent_drying"
      | "switch.x50_ultra_hair_compression"
      | "switch.x50_ultra_side_brush_carpet_rotate"
      | "switch.x50_ultra_obstacle_crossing"
      | "switch.x50_ultra_dynamic_obstacle_cleaning"
      | "switch.x50_ultra_lds_state"
      | "switch.x50_ultra_camera_light_brightness_auto"
      | "button.x50_ultra_reset_main_brush"
      | "button.x50_ultra_reset_side_brush"
      | "button.x50_ultra_reset_filter"
      | "button.x50_ultra_reset_sensor"
      | "button.x50_ultra_reset_scale_inhibitor"
      | "button.x50_ultra_reset_wheel"
      | "button.x50_ultra_start_auto_empty"
      | "button.x50_ultra_clear_warning"
      | "button.x50_ultra_start_fast_mapping"
      | "button.x50_ultra_self_clean"
      | "button.x50_ultra_manual_drying"
      | "button.x50_ultra_water_tank_draining"
      | "button.x50_ultra_empty_water_tank"
      | "button.x50_ultra_base_station_self_repair"
      | "button.x50_ultra_base_station_cleaning"
      | "button.x50_ultra_start_recleaning"
      | "button.x50_ultra_reload_shortcuts"
      | "button.x50_ultra_backup_saved_map"
      | "number.x50_ultra_volume"
      | "number.x50_ultra_self_clean_area"
      | "number.x50_ultra_self_clean_time"
      | "number.x50_ultra_camera_light_brightness"
      | "number.x50_ultra_wetness_level"
      | "number.x50_ultra_room_1_wetness_level"
      | "number.x50_ultra_room_3_wetness_level"
      | "number.x50_ultra_room_4_wetness_level"
      | "number.x50_ultra_room_5_wetness_level"
      | "number.x50_ultra_room_6_wetness_level"
      | "number.x50_ultra_room_7_wetness_level"
      | "number.x50_ultra_room_8_wetness_level"
      | "number.x50_ultra_room_9_wetness_level"
      | "number.x50_ultra_room_10_wetness_level"
      | "select.x50_ultra_suction_level"
      | "select.x50_ultra_cleaning_mode"
      | "select.x50_ultra_carpet_cleaning"
      | "select.x50_ultra_drying_time"
      | "select.x50_ultra_voice_assistant_language"
      | "select.x50_ultra_mop_pad_humidity"
      | "select.x50_ultra_mop_extend_frequency"
      | "select.x50_ultra_self_clean_frequency"
      | "select.x50_ultra_auto_recleaning"
      | "select.x50_ultra_auto_rewashing"
      | "select.x50_ultra_cleaning_route"
      | "select.x50_ultra_cleangenius"
      | "select.x50_ultra_cleangenius_mode"
      | "select.x50_ultra_water_temperature"
      | "select.x50_ultra_auto_lds_coverage"
      | "select.x50_ultra_auto_empty_mode"
      | "select.x50_ultra_washing_mode"
      | "select.x50_ultra_map_rotation"
      | "select.x50_ultra_selected_map"
      | "select.x50_ultra_room_1_suction_level"
      | "select.x50_ultra_room_1_mop_pad_humidity"
      | "select.x50_ultra_room_1_cleaning_mode"
      | "select.x50_ultra_room_1_cleaning_times"
      | "select.x50_ultra_room_1_cleaning_route"
      | "select.x50_ultra_room_1_order"
      | "select.x50_ultra_room_1_floor_material"
      | "select.x50_ultra_room_1_floor_material_direction"
      | "select.x50_ultra_room_1_visibility"
      | "select.x50_ultra_room_1_name"
      | "select.x50_ultra_room_3_suction_level"
      | "select.x50_ultra_room_3_mop_pad_humidity"
      | "select.x50_ultra_room_3_cleaning_mode"
      | "select.x50_ultra_room_3_cleaning_times"
      | "select.x50_ultra_room_3_cleaning_route"
      | "select.x50_ultra_room_3_order"
      | "select.x50_ultra_room_3_floor_material"
      | "select.x50_ultra_room_3_floor_material_direction"
      | "select.x50_ultra_room_3_visibility"
      | "select.x50_ultra_room_3_name"
      | "select.x50_ultra_room_4_suction_level"
      | "select.x50_ultra_room_4_mop_pad_humidity"
      | "select.x50_ultra_room_4_cleaning_mode"
      | "select.x50_ultra_room_4_cleaning_times"
      | "select.x50_ultra_room_4_cleaning_route"
      | "select.x50_ultra_room_4_order"
      | "select.x50_ultra_room_4_floor_material"
      | "select.x50_ultra_room_4_floor_material_direction"
      | "select.x50_ultra_room_4_visibility"
      | "select.x50_ultra_room_4_name"
      | "select.x50_ultra_room_5_suction_level"
      | "select.x50_ultra_room_5_mop_pad_humidity"
      | "select.x50_ultra_room_5_cleaning_mode"
      | "select.x50_ultra_room_5_cleaning_times"
      | "select.x50_ultra_room_5_cleaning_route"
      | "select.x50_ultra_room_5_order"
      | "select.x50_ultra_room_5_floor_material"
      | "select.x50_ultra_room_5_floor_material_direction"
      | "select.x50_ultra_room_5_visibility"
      | "select.x50_ultra_room_5_name"
      | "select.x50_ultra_room_6_suction_level"
      | "select.x50_ultra_room_6_mop_pad_humidity"
      | "select.x50_ultra_room_6_cleaning_mode"
      | "select.x50_ultra_room_6_cleaning_times"
      | "select.x50_ultra_room_6_cleaning_route"
      | "select.x50_ultra_room_6_order"
      | "select.x50_ultra_room_6_floor_material"
      | "select.x50_ultra_room_6_floor_material_direction"
      | "select.x50_ultra_room_6_visibility"
      | "select.x50_ultra_room_6_name"
      | "select.x50_ultra_room_7_suction_level"
      | "select.x50_ultra_room_7_mop_pad_humidity"
      | "select.x50_ultra_room_7_cleaning_mode"
      | "select.x50_ultra_room_7_cleaning_times"
      | "select.x50_ultra_room_7_cleaning_route"
      | "select.x50_ultra_room_7_order"
      | "select.x50_ultra_room_7_floor_material"
      | "select.x50_ultra_room_7_floor_material_direction"
      | "select.x50_ultra_room_7_visibility"
      | "select.x50_ultra_room_7_name"
      | "select.x50_ultra_room_8_suction_level"
      | "select.x50_ultra_room_8_mop_pad_humidity"
      | "select.x50_ultra_room_8_cleaning_mode"
      | "select.x50_ultra_room_8_cleaning_times"
      | "select.x50_ultra_room_8_cleaning_route"
      | "select.x50_ultra_room_8_order"
      | "select.x50_ultra_room_8_floor_material"
      | "select.x50_ultra_room_8_floor_material_direction"
      | "select.x50_ultra_room_8_visibility"
      | "select.x50_ultra_room_8_name"
      | "select.x50_ultra_room_9_suction_level"
      | "select.x50_ultra_room_9_mop_pad_humidity"
      | "select.x50_ultra_room_9_cleaning_mode"
      | "select.x50_ultra_room_9_cleaning_times"
      | "select.x50_ultra_room_9_cleaning_route"
      | "select.x50_ultra_room_9_order"
      | "select.x50_ultra_room_9_floor_material"
      | "select.x50_ultra_room_9_floor_material_direction"
      | "select.x50_ultra_room_9_visibility"
      | "select.x50_ultra_room_9_name"
      | "select.x50_ultra_room_10_suction_level"
      | "select.x50_ultra_room_10_mop_pad_humidity"
      | "select.x50_ultra_room_10_cleaning_mode"
      | "select.x50_ultra_room_10_cleaning_times"
      | "select.x50_ultra_room_10_cleaning_route"
      | "select.x50_ultra_room_10_order"
      | "select.x50_ultra_room_10_floor_material"
      | "select.x50_ultra_room_10_floor_material_direction"
      | "select.x50_ultra_room_10_visibility"
      | "select.x50_ultra_room_10_name"
      | "camera.x50_ultra_map"
      | "camera.x50_ultra_map_1"
      | "time.x50_ultra_dnd_start"
      | "time.x50_ultra_dnd_end"
      | "time.x50_ultra_off_peak_charging_start"
      | "time.x50_ultra_off_peak_charging_end"
      | "sensor.litter_box_litter_level"
      | "sensor.jq01009g24410010174_last_stay_time"
      | "sensor.litter_last_usage"
      | "sensor.litter_box_device_status"
      | "sensor.cat_litter_state"
      | "sensor.litter_box_bin_state"
      | "sensor.jq01009g24410010174_cat_dolores"
      | "sensor.jq01009g24410010174_cat_ozzy"
      | "binary_sensor.litter_box_garbage_can_full"
      | "switch.jq01009g24410010174_auto_clean"
      | "switch.jq01009g24410010174_child_lock"
      | "switch.jq01009g24410010174_automatic_cover"
      | "switch.jq01009g24410010174_automatic_leveling"
      | "switch.jq01009g24410010174_silent_mode"
      | "switch.jq01009g24410010174_unstoppable_cycle"
      | "button.litter_clean"
      | "button.litter_level"
      | "sensor.jq01009g24410010959_cat_litter_level"
      | "sensor.jq01009g24410010959_last_usage"
      | "sensor.jq01009g24410010959_device_status"
      | "sensor.jq01009g24410010959_cat_litter_state"
      | "sensor.jq01009g24410010959_bin_state"
      | "sensor.jq01009g24410010959_cat_dolores"
      | "sensor.jq01009g24410010959_cat_ozzy"
      | "binary_sensor.jq01009g24410010959_garbage_can_full"
      | "switch.jq01009g24410010959_auto_clean"
      | "switch.jq01009g24410010959_child_lock"
      | "switch.jq01009g24410010959_automatic_cover"
      | "switch.jq01009g24410010959_automatic_leveling"
      | "switch.jq01009g24410010959_silent_mode"
      | "switch.jq01009g24410010959_unstoppable_cycle"
      | "button.jq01009g24410010959_clean"
      | "button.jq01009g24410010959_level"
      | "sensor.energy_monitor_power_minute_average"
      | "sensor.emporia_dryer_power"
      | "sensor.emporia_ac_power"
      | "sensor.emporia_washer_power"
      | "sensor.balance_power_minute_average"
      | "sensor.energy_monitor_energy_this_month"
      | "sensor.energy_monitor_energy_this_month_2"
      | "sensor.energy_monitor_energy_this_month_3"
      | "sensor.energy_monitor_energy_this_month_4"
      | "sensor.balance_energy_this_month"
      | "sensor.energy_monitor_energy_today"
      | "sensor.energy_monitor_energy_today_2"
      | "sensor.energy_monitor_energy_today_3"
      | "sensor.energy_monitor_energy_today_4"
      | "sensor.balance_energy_today"
      | "binary_sensor.reolink_video_doorbell_wifi_motion"
      | "binary_sensor.reolink_video_doorbell_wifi_person"
      | "binary_sensor.reolink_video_doorbell_wifi_vehicle"
      | "binary_sensor.reolink_video_doorbell_wifi_pet"
      | "binary_sensor.reolink_video_doorbell_wifi_visitor"
      | "binary_sensor.back_door_motion"
      | "binary_sensor.back_door_person"
      | "binary_sensor.back_door_vehicle"
      | "binary_sensor.back_door_pet"
      | "binary_sensor.back_door_visitor"
      | "binary_sensor.back_yard_motion"
      | "binary_sensor.back_yard_person"
      | "binary_sensor.back_yard_vehicle"
      | "binary_sensor.back_yard_animal"
      | "binary_sensor.back_yard_sleep_status"
      | "button.back_yard_driveway_security_camera_pre_siren"
      | "light.back_yard_floodlight"
      | "light.back_yard_status_led"
      | "light.cameras_status_led"
      | "number.back_yard_floodlight_turn_on_brightness"
      | "number.reolink_video_doorbell_wifi_volume"
      | "number.back_door_volume"
      | "number.back_yard_volume"
      | "number.front_door_speak_volume"
      | "number.back_door_speak_volume"
      | "number.front_door_doorbell_volume"
      | "number.back_door_doorbell_volume"
      | "number.reolink_video_doorbell_wifi_motion_sensitivity"
      | "number.back_door_motion_sensitivity"
      | "number.back_yard_pir_sensitivity"
      | "number.reolink_video_doorbell_wifi_ai_person_sensitivity"
      | "number.back_door_ai_person_sensitivity"
      | "number.back_yard_ai_person_sensitivity"
      | "number.reolink_video_doorbell_wifi_ai_vehicle_sensitivity"
      | "number.back_door_ai_vehicle_sensitivity"
      | "number.back_yard_ai_vehicle_sensitivity"
      | "number.reolink_video_doorbell_wifi_ai_pet_sensitivity"
      | "number.back_door_ai_pet_sensitivity"
      | "number.back_yard_ai_animal_sensitivity"
      | "number.reolink_video_doorbell_wifi_auto_quick_reply_time"
      | "number.back_door_auto_quick_reply_time"
      | "number.cameras_alarm_volume"
      | "number.cameras_message_volume"
      | "number.reolink_chime_volume"
      | "number.reolink_chime_silent_time"
      | "select.back_yard_floodlight_mode"
      | "select.reolink_video_doorbell_wifi_day_night_mode"
      | "select.back_door_day_night_mode"
      | "select.back_yard_day_night_mode"
      | "select.reolink_video_doorbell_wifi_play_quick_reply_message"
      | "select.back_door_play_quick_reply_message"
      | "select.reolink_video_doorbell_wifi_auto_quick_reply_message"
      | "select.back_door_auto_quick_reply_message"
      | "select.reolink_video_doorbell_wifi_hub_alarm_ringtone"
      | "select.back_door_hub_alarm_ringtone"
      | "select.back_yard_hub_alarm_ringtone"
      | "select.reolink_video_doorbell_wifi_hub_visitor_ringtone"
      | "select.back_door_hub_visitor_ringtone"
      | "select.reolink_video_doorbell_wifi_doorbell_led"
      | "select.back_door_doorbell_led"
      | "select.cameras_scene_mode"
      | "select.reolink_chime_motion_ringtone"
      | "select.reolink_chime_person_ringtone"
      | "select.reolink_chime_vehicle_ringtone"
      | "select.reolink_chime_visitor_ringtone"
      | "select.chime_pet_ringtone"
      | "sensor.back_yard_battery"
      | "sensor.reolink_video_doorbell_wifi_day_night_state"
      | "sensor.back_door_day_night_state"
      | "sensor.front_door_wi_fi_signal"
      | "siren.reolink_video_doorbell_wifi_siren"
      | "siren.back_door_siren"
      | "siren.back_yard_siren"
      | "siren.cameras_siren"
      | "switch.reolink_video_doorbell_wifi_infrared_lights_in_night_mode"
      | "switch.back_door_infrared_lights_in_night_mode"
      | "switch.back_yard_infrared_lights_in_night_mode"
      | "switch.reolink_video_doorbell_wifi_record_audio"
      | "switch.back_door_record_audio"
      | "switch.back_yard_record_audio"
      | "switch.reolink_video_doorbell_wifi_siren_on_event"
      | "switch.back_door_siren_on_event"
      | "switch.back_yard_siren_on_event"
      | "switch.back_yard_driveway_security_camera_pre_siren_on_event"
      | "switch.reolink_video_doorbell_wifi_email_on_event"
      | "switch.back_door_email_on_event"
      | "switch.back_yard_email_on_event"
      | "switch.reolink_video_doorbell_wifi_ftp_upload"
      | "switch.back_door_ftp_upload"
      | "switch.back_yard_ftp_upload"
      | "switch.reolink_video_doorbell_wifi_push_notifications"
      | "switch.back_door_push_notifications"
      | "switch.back_yard_push_notifications"
      | "switch.reolink_video_doorbell_wifi_record"
      | "switch.back_door_record"
      | "switch.back_yard_record"
      | "switch.reolink_video_doorbell_wifi_manual_record"
      | "switch.back_door_manual_record"
      | "switch.back_yard_manual_record"
      | "switch.reolink_video_doorbell_wifi_hub_ringtone_on_event"
      | "switch.back_door_hub_ringtone_on_event"
      | "switch.back_yard_hub_ringtone_on_event"
      | "switch.reolink_video_doorbell_wifi_doorbell_button_sound"
      | "switch.back_door_doorbell_button_sound"
      | "switch.reolink_video_doorbell_wifi_privacy_mode"
      | "switch.back_door_privacy_mode"
      | "switch.reolink_chime_led"
      | "update.reolink_video_doorbell_wifi_firmware"
      | "update.back_door_firmware"
      | "update.back_yard_firmware"
      | "update.cameras_firmware"
      | "camera.reolink_video_doorbell_camera_fluent"
      | "camera.back_door_fluent"
      | "camera.back_yard_fluent"
      | "binary_sensor.office_motion_occupancy"
      | "binary_sensor.office_motion"
      | "binary_sensor.basement_laundry_leak_sensor"
      | "binary_sensor.third_reality_inc_3rws18bz_opening"
      | "binary_sensor.backyard_entrance_sensor_occupancy"
      | "binary_sensor.backyard_entrance_sensor"
      | "binary_sensor.front_door_entrance_sensor_occupancy"
      | "binary_sensor.front_door_entrance_sensor"
      | "binary_sensor.kitchen_sink_leak_sensor"
      | "binary_sensor.third_reality_inc_3rws18bz_opening_2"
      | "binary_sensor.hall_way_smoke_sensor"
      | "binary_sensor.basement_smoke_detector"
      | "binary_sensor.dishwasher_vibration"
      | "binary_sensor.spare_1"
      | "binary_sensor.main_shuttoff_valve_sensor"
      | "binary_sensor.third_reality_inc_3rws18bz_opening_3"
      | "binary_sensor.water_tank_leak_sensor"
      | "binary_sensor.unk_manufacturer_unk_model_opening"
      | "binary_sensor.basement_smoke_detector_2"
      | "binary_sensor.garage_smoke_detector"
      | "binary_sensor.laundry_area_smoke_detector"
      | "binary_sensor.piano"
      | "button.bedroom_switch_identify"
      | "button.office_swich_identify"
      | "button.dinning_identify"
      | "button.office_motion_identify"
      | "button.bathroom_exhaust_identify"
      | "button.backyard_entrance_sensor_identify"
      | "button.front_door_entrance_sensor_identify"
      | "button.spare_1_identify"
      | "button.sonoff_dongle_e_r_identify"
      | "button.spare_2_identify"
      | "light.dinning_light"
      | "light.sonoff_dongle_e_r"
      | "number.dinning_on_level"
      | "number.dinning_none"
      | "number.dinning_none_2"
      | "number.office_motion_detection_interval"
      | "number.third_reality_inc_3rws18bz_siren_time"
      | "number.backyard_entrance_sensor_detection_interval"
      | "number.front_door_entrance_sensor_detection_interval"
      | "number.third_reality_inc_3rws18bz_siren_time_2"
      | "number.third_reality_inc_3rws18bz_siren_time_3"
      | "number.third_reality_inc_3rws18bz_siren_time_4"
      | "select.bedroom_switch_start_up_behavior"
      | "select.office_swich_start_up_behavior"
      | "select.dinning_none"
      | "select.dinning_none_2"
      | "select.office_motion_motion_sensitivity"
      | "select.bathroom_exhaust_start_up_behavior"
      | "select.backyard_entrance_sensor_motion_sensitivity"
      | "select.front_door_entrance_sensor_motion_sensitivity"
      | "select.sonoff_dongle_e_r_power_on_behavior"
      | "sensor.bedroom_switch_battery"
      | "sensor.office_swich_battery"
      | "sensor.dinning_device_temperature"
      | "sensor.dinning_summation_delivered"
      | "sensor.office_motion_lqi"
      | "sensor.office_motion_battery"
      | "sensor.office_motion_illuminance"
      | "sensor.bathroom_exhaust_lqi"
      | "sensor.bathroom_exhaust_battery"
      | "sensor.third_reality_inc_3rws18bz_battery"
      | "sensor.backyard_entrance_sensor_battery"
      | "sensor.backyard_entrance_sensor_illuminance"
      | "sensor.front_door_entrance_sensor_battery"
      | "sensor.front_door_entrance_sensor_illuminance"
      | "sensor.third_reality_inc_3rws18bz_battery_2"
      | "sensor.air_quality_meter_temperature"
      | "sensor.air_quality_meter_humidity"
      | "sensor.air_quality_meter_pm2_5"
      | "sensor.air_quality_meter_formaldehyde_concentration"
      | "sensor.air_quality_meter_carbon_dioxide"
      | "sensor.air_quality_meter_volatile_organic_compounds"
      | "sensor.office_air_quality_meter_temperature"
      | "sensor.office_air_quality_meter_humidity"
      | "sensor.office_air_quality_meter_pm2_5"
      | "sensor.office_air_quality_meter_formaldehyde_concentration"
      | "sensor.office_air_quality_meter_carbon_dioxide"
      | "sensor.office_air_quality_meter_volatile_organic_compounds"
      | "sensor.hall_way_smoke_sensor_battery"
      | "sensor.basement_smoke_detectro_battery"
      | "sensor.third_reality_inc_3rvs01031z_lqi"
      | "sensor.third_reality_inc_3rvs01031z_battery"
      | "sensor.spare_1_battery"
      | "sensor.spare_1_device_temperature"
      | "sensor.third_reality_inc_3rws18bz_battery_3"
      | "sensor.unk_manufacturer_unk_model_battery"
      | "sensor.tze284_rccxox8p_ts0601_battery"
      | "sensor.garage_smoke_sensor_rssi"
      | "sensor.garage_smoke_sensor_lqi"
      | "sensor.garage_smoke_sensor_battery"
      | "sensor.laundry_area_smoke_detector_battery"
      | "sensor.tz3000_famkxci2_ts0043_battery"
      | "sensor.tz3000_famkxci2_ts0043_battery_2"
      | "sensor.tz3000_famkxci2_ts0043_battery_3"
      | "sensor.tz3000_famkxci2_ts0043_battery_4"
      | "sensor.tz3000_famkxci2_ts0043_battery_5"
      | "sensor.tz3000_famkxci2_ts0043_battery_6"
      | "sensor.tz3000_famkxci2_ts0043_battery_7"
      | "sensor.tz3000_famkxci2_ts0043_battery_8"
      | "sensor.tz3000_famkxci2_ts0043_battery_9"
      | "sensor.spare_2_battery"
      | "sensor.spare_2_device_temperature"
      | "switch.bedroom_switch"
      | "switch.office_swich_switch"
      | "switch.office_motion_led_trigger_indicator"
      | "switch.bathroom_exhaust"
      | "switch.third_reality_inc_3rws18bz_enable_siren"
      | "switch.backyard_entrance_sensor_led_trigger_indicator"
      | "switch.front_door_entrance_sensor_led_trigger_indicator"
      | "switch.third_reality_inc_3rws18bz_enable_siren_2"
      | "switch.third_reality_inc_3rws18bz_enable_siren_3"
      | "switch.third_reality_inc_3rws18bz_enable_siren_4"
      | "update.bedroom_switch_firmware"
      | "update.office_swich_firmware"
      | "update.dinning_firmware"
      | "update.office_motion_firmware"
      | "update.bathroom_exhaust_firmware"
      | "update.third_reality_inc_3rws18bz_firmware"
      | "update.backyard_entrance_sensor_firmware"
      | "update.front_door_entrance_sensor_firmware"
      | "update.third_reality_inc_3rws18bz_firmware_2"
      | "update.air_quality_meter_firmware"
      | "update.office_air_quality_meter_firmware"
      | "update.hall_way_smoke_sensor_firmware"
      | "update.basement_smoke_detectro_firmware"
      | "update.third_reality_inc_3rvs01031z_firmware"
      | "update.spare_1_firmware"
      | "update.third_reality_inc_3rws18bz_firmware_3"
      | "update.unk_manufacturer_unk_model_firmware"
      | "update.tze284_rccxox8p_ts0601_firmware"
      | "update.garage_smoke_sensor_firmware"
      | "update.laundry_area_smoke_detector_firmware"
      | "update.tz3000_famkxci2_ts0043_firmware"
      | "update.tz3000_famkxci2_ts0043_firmware_2"
      | "update.sonoff_dongle_e_r_firmware"
      | "update.tz3000_famkxci2_ts0043_firmware_3"
      | "update.spare_2_firmware"
      | "automation.control_humidifier_based_on_humidity"
      | "automation.turn_on_christmas_lights_when_its_dark"
      | "automation.turn_off_christmas_lights"
      | "media_player.chromecast4952"
      | "media_player.basement_tv"
      | "media_player.basement_tv_2"
      | "remote.basement_tv"
      | "media_player.chromecast9104"
      | "binary_sensor.front_yard_motion"
      | "binary_sensor.front_yard_person"
      | "binary_sensor.front_yard_vehicle"
      | "binary_sensor.front_yard_animal"
      | "binary_sensor.front_yard_sleep_status"
      | "light.front_yard_floodlight"
      | "light.front_yard_status_led"
      | "number.front_yard_floodlight_turn_on_brightness"
      | "number.front_yard_volume"
      | "number.front_yard_pir_sensitivity"
      | "number.front_yard_ai_person_sensitivity"
      | "number.front_yard_ai_vehicle_sensitivity"
      | "number.front_yard_ai_animal_sensitivity"
      | "select.front_yard_floodlight_mode"
      | "select.front_yard_day_night_mode"
      | "select.front_yard_hub_alarm_ringtone"
      | "sensor.front_yard_battery"
      | "siren.front_yard_siren"
      | "switch.front_yard_infrared_lights_in_night_mode"
      | "switch.front_yard_record_audio"
      | "switch.front_yard_siren_on_event"
      | "switch.front_yard_email_on_event"
      | "switch.front_yard_ftp_upload"
      | "switch.front_yard_push_notifications"
      | "switch.front_yard_record"
      | "switch.front_yard_manual_record"
      | "switch.front_yard_hub_ringtone_on_event"
      | "update.front_yard_firmware"
      | "camera.front_yard_fluent"
      | "automation.new_automation"
      | "automation.notify_when_washer_finishes_history_stats"
      | "switch.unnamed_zone_zone"
      | "switch.unnamed_zone_zone_2"
      | "calendar.calgary_ab_2"
      | "binary_sensor.sorento_engine_2"
      | "binary_sensor.sorento_defrost_2"
      | "binary_sensor.sorento_back_window_heater"
      | "binary_sensor.sorento_front_left_door_2"
      | "binary_sensor.sorento_front_right_door_2"
      | "binary_sensor.sorento_back_left_door_2"
      | "binary_sensor.sorento_back_right_door_2"
      | "binary_sensor.sorento_trunk_2"
      | "binary_sensor.sorento_hood_2"
      | "binary_sensor.sorento_fuel_low_level_2"
      | "binary_sensor.sorento_tire_pressure_all_2"
      | "binary_sensor.sorento_tire_pressure_rear_left_2"
      | "binary_sensor.sorento_tire_pressure_front_left_2"
      | "binary_sensor.sorento_tire_pressure_front_right_2"
      | "binary_sensor.sorento_tire_pressure_rear_right_2"
      | "binary_sensor.sorento_air_conditioner_2"
      | "binary_sensor.sorento_uma_ex_v6_premium_accessory"
      | "binary_sensor.sorento_uma_ex_v6_premium_remote_ignition"
      | "binary_sensor.sorento_uma_ex_v6_premium_transmission_condition"
      | "binary_sensor.sorento_uma_ex_v6_premium_locked"
      | "sensor.sorento_odometer_2"
      | "sensor.sorento_last_service_2"
      | "sensor.sorento_next_service_2"
      | "sensor.sorento_car_battery_level_2"
      | "sensor.sorento_last_updated_at_2"
      | "sensor.sorento_fuel_driving_range"
      | "sensor.sorento_set_temperature_2"
      | "sensor.sorento_dtc_count_2"
      | "sensor.sorento_vehicle_identification_number"
      | "sensor.sorento_data_2"
      | "device_tracker.sorento_location_2"
      | "sensor.washer_run_time_in_last_40_min"
      | "sensor.dryer_run_time_in_last_40_min"
      | "automation.turn_off_office"
      | "button.living_room_tv_favorite_current_song"
      | "media_player.living_room_tv_3"
      | "button.office_speaker_favorite_current_song"
      | "button.basement_tv_favorite_current_song"
      | "media_player.basement_tv_3"
      | "button.living_room_speaker_favorite_current_song"
      | "button.everywhere_favorite_current_song"
      | "button.bedroom_speaker_favorite_current_song"
      | "automation.dryer_finished_running"
      | "sensor.presence_sensor_cff9_battery"
      | "ai_task.google_ai_task"
      | "conversation.google_ai_conversation"
      | "stt.google_ai_stt"
      | "tts.google_ai_tts"
      | "lock.sorento_uma_ex_v6_premium_door_lock"
      | "sensor.garage_meter_temperature"
      | "sensor.garage_meter_humidity"
      | "sensor.garage_meter_battery"
      | "automation.alarm_disarm_on_door_unlock"
      | "sensor.house_gas_last_seen_2"
      | "sensor.house_water_house_water_2"
      | "sensor.house_water_last_seen_2"
      | "sensor.house_gas_house_gas"
      | "sensor.house_gas_house_gas_cost"
      | "sensor.feeding_area_presence_sensor_battery"
      | "sensor.energy_monitor_energy_today_cost"
      | "device_tracker.telematic_273041_d3e8"
      | "sensor.telematic_273041_d3e8_estimated_distance"
      | "sensor.telematic_273041_d3e8_vendor"
      | "device_tracker.telematic_551909_28d9"
      | "sensor.telematic_551909_28d9_estimated_distance"
      | "device_tracker.telematic_281093_5ede"
      | "sensor.telematic_281093_5ede_estimated_distance"
      | "device_tracker.telematic_138566_39f6"
      | "sensor.telematic_138566_39f6_estimated_distance"
      | "device_tracker.telematic_730412_b3cb"
      | "sensor.telematic_730412_b3cb_estimated_distance"
      | "device_tracker.telematic_317608_e949"
      | "sensor.telematic_317608_e949_estimated_distance"
      | "device_tracker.telematic_293353_8d45"
      | "sensor.telematic_293353_8d45_estimated_distance"
      | "device_tracker.telematic_757993_276c"
      | "sensor.telematic_757993_276c_estimated_distance"
      | "device_tracker.telematic_175626_99e4"
      | "sensor.telematic_175626_99e4_estimated_distance"
      | "device_tracker.telematic_308292_e26e"
      | "sensor.telematic_308292_e26e_estimated_distance"
      | "device_tracker.telematic_761508_749e"
      | "sensor.telematic_761508_749e_estimated_distance"
      | "device_tracker.telematic_089306_e3b4"
      | "sensor.telematic_089306_e3b4_estimated_distance"
      | "device_tracker.telematic_294351_93c9"
      | "sensor.telematic_294351_93c9_estimated_distance"
      | "device_tracker.telematic_292041_fa92"
      | "sensor.telematic_292041_fa92_estimated_distance"
      | "device_tracker.telematic_309415_e976"
      | "sensor.telematic_309415_e976_estimated_distance"
      | "device_tracker.telematic_153284_870b"
      | "sensor.telematic_153284_870b_estimated_distance"
      | "device_tracker.telematic_649240_4037"
      | "sensor.telematic_649240_4037_estimated_distance"
      | "device_tracker.telematic_713335_7c10"
      | "sensor.telematic_713335_7c10_estimated_distance"
      | "device_tracker.telematic_068516_b336"
      | "sensor.telematic_068516_b336_estimated_distance"
      | "device_tracker.telematic_279253_096c"
      | "sensor.telematic_279253_096c_estimated_distance"
      | "device_tracker.telematic_642906_8231"
      | "sensor.telematic_642906_8231_estimated_distance"
      | "device_tracker.telematic_332771_18a4"
      | "sensor.telematic_332771_18a4_estimated_distance"
      | "device_tracker.rivian_sensor_2_03eb"
      | "sensor.rivian_sensor_2_03eb_estimated_distance"
      | "device_tracker.telematic_442356_8ec4"
      | "sensor.telematic_442356_8ec4_estimated_distance"
      | "device_tracker.rivian_phone_key_3198"
      | "sensor.rivian_phone_key_3198_estimated_distance"
      | "device_tracker.telematic_039103_fb3e"
      | "sensor.telematic_039103_fb3e_estimated_distance"
      | "device_tracker.telematic_164968_dd87"
      | "sensor.telematic_164968_dd87_estimated_distance"
      | "device_tracker.telematic_313334_11d9"
      | "sensor.telematic_313334_11d9_estimated_distance"
      | "device_tracker.lw_ivu"
      | "sensor.b9407f30_f5f8_466e_aff9_25556b57fe6d_4096_5_estimated_distance"
      | "device_tracker.telematic_562112_425e"
      | "sensor.telematic_562112_425e_estimated_distance"
      | "device_tracker.telematic_035184_cfe6"
      | "sensor.telematic_035184_cfe6_estimated_distance"
      | "device_tracker.telematic_166724_1adf"
      | "sensor.telematic_166724_1adf_estimated_distance"
      | "device_tracker.telematic_646360_e0bc"
      | "sensor.telematic_646360_e0bc_estimated_distance"
      | "device_tracker.telematic_324026_409c"
      | "sensor.telematic_324026_409c_estimated_distance"
      | "device_tracker.telematic_321998_8f21"
      | "sensor.telematic_321998_8f21_estimated_distance"
      | "device_tracker.telematic_313052_3e04"
      | "sensor.telematic_313052_3e04_estimated_distance"
      | "device_tracker.telematic_068755_dd0f"
      | "sensor.telematic_068755_dd0f_estimated_distance"
      | "device_tracker.telematic_023693_36ea"
      | "sensor.telematic_023693_36ea_estimated_distance"
      | "device_tracker.telematic_149068_34bb"
      | "sensor.telematic_149068_34bb_estimated_distance"
      | "device_tracker.telematic_149449_a733"
      | "sensor.telematic_149449_a733_estimated_distance"
      | "device_tracker.telematic_463485_6217"
      | "sensor.telematic_463485_6217_estimated_distance"
      | "device_tracker.telematic_506069_9fd1"
      | "sensor.telematic_506069_9fd1_estimated_distance"
      | "device_tracker.telematic_718755_25da"
      | "sensor.telematic_718755_25da_estimated_distance"
      | "device_tracker.telematic_424669_190f"
      | "sensor.telematic_424669_190f_estimated_distance"
      | "device_tracker.telematic_155313_0cb8"
      | "sensor.telematic_155313_0cb8_estimated_distance"
      | "device_tracker.telematic_280145_ad8d"
      | "sensor.telematic_280145_ad8d_estimated_distance"
      | "device_tracker.telematic_085908_d9ea"
      | "sensor.telematic_085908_d9ea_estimated_distance"
      | "device_tracker.telematic_084034_e8de"
      | "sensor.telematic_084034_e8de_estimated_distance"
      | "device_tracker.telematic_498226_be6c"
      | "sensor.telematic_498226_be6c_estimated_distance"
      | "device_tracker.telematic_715561_0ade"
      | "sensor.telematic_715561_0ade_estimated_distance"
      | "device_tracker.telematic_156246_f194"
      | "sensor.telematic_156246_f194_estimated_distance"
      | "device_tracker.telematic_437125_3d76"
      | "sensor.telematic_437125_3d76_estimated_distance"
      | "device_tracker.telematic_091138_73d7"
      | "sensor.telematic_091138_73d7_estimated_distance"
      | "device_tracker.telematic_260568_7c27"
      | "sensor.telematic_260568_7c27_estimated_distance"
      | "device_tracker.telematic_646311_8b21"
      | "sensor.telematic_646311_8b21_estimated_distance"
      | "device_tracker.telematic_035424_7eb5"
      | "sensor.telematic_035424_7eb5_estimated_distance"
      | "device_tracker.telematic_305231_42e5"
      | "sensor.telematic_305231_42e5_estimated_distance"
      | "device_tracker.telematic_025607_e5c8"
      | "sensor.telematic_025607_e5c8_estimated_distance"
      | "device_tracker.telematic_028833_9db7"
      | "sensor.telematic_028833_9db7_estimated_distance"
      | "device_tracker.telematic_444147_2655"
      | "sensor.telematic_444147_2655_estimated_distance"
      | "device_tracker.rivian_phone_key_6fc6"
      | "sensor.rivian_phone_key_6fc6_estimated_distance"
      | "device_tracker.telematic_744728_afe8"
      | "sensor.telematic_744728_afe8_estimated_distance"
      | "device_tracker.telematic_059465_7191"
      | "sensor.telematic_059465_7191_estimated_distance"
      | "device_tracker.telematic_550331_a2dc"
      | "sensor.telematic_550331_a2dc_estimated_distance"
      | "device_tracker.telematic_311718_5a60"
      | "sensor.telematic_311718_5a60_estimated_distance"
      | "device_tracker.telematic_322772_4a06"
      | "sensor.telematic_322772_4a06_estimated_distance"
      | "device_tracker.telematic_029211_3163"
      | "sensor.telematic_029211_3163_estimated_distance"
      | "device_tracker.telematic_099388_6434"
      | "sensor.telematic_099388_6434_estimated_distance"
      | "device_tracker.telematic_334751_4e7c"
      | "sensor.telematic_334751_4e7c_estimated_distance"
      | "device_tracker.telematic_115804_921e"
      | "sensor.telematic_115804_921e_estimated_distance"
      | "device_tracker.telematic_090759_ce3e"
      | "sensor.telematic_090759_ce3e_estimated_distance"
      | "device_tracker.telematic_544656_574d"
      | "sensor.telematic_544656_574d_estimated_distance"
      | "device_tracker.telematic_035119_7ef2"
      | "sensor.telematic_035119_7ef2_estimated_distance"
      | "device_tracker.telematic_083986_ed90"
      | "sensor.telematic_083986_ed90_estimated_distance"
      | "device_tracker.telematic_090890_8e31"
      | "sensor.telematic_090890_8e31_estimated_distance"
      | "device_tracker.telematic_121646_9566"
      | "sensor.telematic_121646_9566_estimated_distance"
      | "device_tracker.telematic_309662_93f6"
      | "sensor.telematic_309662_93f6_estimated_distance"
      | "device_tracker.telematic_129557_a296"
      | "sensor.telematic_129557_a296_estimated_distance"
      | "device_tracker.telematic_718102_6a83"
      | "sensor.telematic_718102_6a83_estimated_distance"
      | "device_tracker.telematic_462263_0920"
      | "sensor.telematic_462263_0920_estimated_distance"
      | "device_tracker.telematic_588273_9054"
      | "sensor.telematic_588273_9054_estimated_distance"
      | "device_tracker.telematic_450235_d355"
      | "sensor.telematic_450235_d355_estimated_distance"
      | "device_tracker.telematic_067542_7b24"
      | "sensor.telematic_067542_7b24_estimated_distance"
      | "sensor.basement_presence_sensor_battery"
      | "device_tracker.telematic_539458_b169"
      | "sensor.telematic_539458_b169_estimated_distance"
      | "binary_sensor.washer_machine_sensor_vibration_occupancy"
      | "button.washer_machine_sensor_vibration_identify"
      | "sensor.washer_machine_sensor_vibration_battery"
      | "sensor.washer_machine_sensor_vibration_battery_voltage"
      | "sensor.washer_machine_sensor_vibration_battery_type"
      | "device_tracker.telematic_330668_9c6e"
      | "sensor.telematic_330668_9c6e_estimated_distance"
      | "device_tracker.telematic_433736_947d"
      | "sensor.telematic_433736_947d_estimated_distance"
      | "device_tracker.telematic_333902_b9ba"
      | "sensor.telematic_333902_b9ba_estimated_distance"
      | "device_tracker.telematic_437182_4094"
      | "sensor.telematic_437182_4094_estimated_distance"
      | "device_tracker.telematic_082038_d973"
      | "sensor.telematic_082038_d973_estimated_distance"
      | "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_28364_2711"
      | "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_28364_2711_estimated_distance"
      | "device_tracker.telematic_641783_f833"
      | "sensor.telematic_641783_f833_estimated_distance"
      | "device_tracker.s8_dsp_1dbd"
      | "sensor.s8_dsp_1dbd_estimated_distance"
      | "device_tracker.telematic_111951_ded1"
      | "sensor.telematic_111951_ded1_estimated_distance"
      | "device_tracker.telematic_710943_5528"
      | "sensor.telematic_710943_5528_estimated_distance"
      | "device_tracker.telematic_296935_2d18"
      | "sensor.telematic_296935_2d18_estimated_distance"
      | "device_tracker.telematic_042693_65bf"
      | "sensor.telematic_042693_65bf_estimated_distance"
      | "device_tracker.telematic_710273_6ad9"
      | "sensor.telematic_710273_6ad9_estimated_distance"
      | "device_tracker.telematic_699880_8e18"
      | "sensor.telematic_699880_8e18_estimated_distance"
      | "device_tracker.telematic_276358_e8bb"
      | "sensor.telematic_276358_e8bb_estimated_distance"
      | "device_tracker.telematic_131058_cdb1"
      | "sensor.telematic_131058_cdb1_estimated_distance"
      | "device_tracker.telematic_280061_a117"
      | "sensor.telematic_280061_a117_estimated_distance"
      | "device_tracker.telematic_551305_f326"
      | "sensor.telematic_551305_f326_estimated_distance"
      | "device_tracker.telematic_307328_2717"
      | "sensor.telematic_307328_2717_estimated_distance"
      | "device_tracker.telematic_152997_f85d"
      | "sensor.telematic_152997_f85d_estimated_distance"
      | "device_tracker.telematic_055695_9164"
      | "sensor.telematic_055695_9164_estimated_distance"
      | "device_tracker.telematic_559035_a4c8"
      | "sensor.telematic_559035_a4c8_estimated_distance"
      | "device_tracker.telematic_712493_2ad1"
      | "sensor.telematic_712493_2ad1_estimated_distance"
      | "device_tracker.telematic_280343_d0f0"
      | "sensor.telematic_280343_d0f0_estimated_distance"
      | "device_tracker.telematic_023750_2f79"
      | "sensor.telematic_023750_2f79_estimated_distance"
      | "device_tracker.telematic_648929_93d2"
      | "sensor.telematic_648929_93d2_estimated_distance"
      | "device_tracker.telematic_082715_c5d6"
      | "sensor.telematic_082715_c5d6_estimated_distance"
      | "device_tracker.telematic_756334_5fa0"
      | "sensor.telematic_756334_5fa0_estimated_distance"
      | "device_tracker.telematic_551727_71c5"
      | "sensor.telematic_551727_71c5_estimated_distance"
      | "device_tracker.telematic_087995_eb03"
      | "sensor.telematic_087995_eb03_estimated_distance"
      | "device_tracker.telematic_321410_7451"
      | "sensor.telematic_321410_7451_estimated_distance"
      | "device_tracker.telematic_116349_38d7"
      | "sensor.telematic_116349_38d7_estimated_distance"
      | "device_tracker.telematic_021614_f89c"
      | "sensor.telematic_021614_f89c_estimated_distance"
      | "device_tracker.telematic_105821_b248"
      | "sensor.telematic_105821_b248_estimated_distance"
      | "device_tracker.telematic_275269_87ad"
      | "sensor.telematic_275269_87ad_estimated_distance"
      | "device_tracker.telematic_270468_d09d"
      | "sensor.telematic_270468_d09d_estimated_distance"
      | "device_tracker.telematic_501672_313f"
      | "sensor.telematic_501672_313f_estimated_distance"
      | "device_tracker.telematic_034575_aa04"
      | "sensor.telematic_034575_aa04_estimated_distance"
      | "device_tracker.telematic_153144_71f3"
      | "sensor.telematic_153144_71f3_estimated_distance"
      | "device_tracker.telematic_312492_d0ed"
      | "sensor.telematic_312492_d0ed_estimated_distance"
      | "device_tracker.telematic_313169_90f4"
      | "sensor.telematic_313169_90f4_estimated_distance"
      | "device_tracker.telematic_472221_ce2d"
      | "sensor.telematic_472221_ce2d_estimated_distance"
      | "device_tracker.telematic_176491_4653"
      | "sensor.telematic_176491_4653_estimated_distance"
      | "device_tracker.telematic_450987_67a3"
      | "sensor.telematic_450987_67a3_estimated_distance"
      | "device_tracker.telematic_276457_86ee"
      | "sensor.telematic_276457_86ee_estimated_distance"
      | "device_tracker.telematic_540126_8d6d"
      | "sensor.telematic_540126_8d6d_estimated_distance"
      | "device_tracker.telematic_308995_6036"
      | "sensor.telematic_308995_6036_estimated_distance"
      | "device_tracker.telematic_539144_b4f1"
      | "sensor.telematic_539144_b4f1_estimated_distance"
      | "device_tracker.telematic_546321_fdbf"
      | "sensor.telematic_546321_fdbf_estimated_distance"
      | "device_tracker.telematic_733945_1576"
      | "sensor.telematic_733945_1576_estimated_distance"
      | "device_tracker.telematic_298139_bd96"
      | "sensor.telematic_298139_bd96_estimated_distance"
      | "device_tracker.telematic_304903_8e74"
      | "sensor.telematic_304903_8e74_estimated_distance"
      | "device_tracker.telematic_140786_4ad9"
      | "sensor.telematic_140786_4ad9_estimated_distance"
      | "device_tracker.telematic_125407_b566"
      | "sensor.telematic_125407_b566_estimated_distance"
      | "device_tracker.telematic_550984_96d6"
      | "sensor.telematic_550984_96d6_estimated_distance"
      | "device_tracker.telematic_160289_085e"
      | "sensor.telematic_160289_085e_estimated_distance"
      | "device_tracker.telematic_164489_372d"
      | "sensor.telematic_164489_372d_estimated_distance"
      | "device_tracker.telematic_275137_9675"
      | "sensor.telematic_275137_9675_estimated_distance"
      | "device_tracker.telematic_303582_0e7c"
      | "sensor.telematic_303582_0e7c_estimated_distance"
      | "device_tracker.telematic_104923_247a"
      | "sensor.telematic_104923_247a_estimated_distance"
      | "device_tracker.telematic_648515_2ce5"
      | "sensor.telematic_648515_2ce5_estimated_distance"
      | "device_tracker.telematic_308334_a7d1"
      | "sensor.telematic_308334_a7d1_estimated_distance"
      | "device_tracker.telematic_707089_64c8"
      | "sensor.telematic_707089_64c8_estimated_distance"
      | "device_tracker.telematic_116810_a833"
      | "sensor.telematic_116810_a833_estimated_distance"
      | "device_tracker.telematic_539375_a5bf"
      | "sensor.telematic_539375_a5bf_estimated_distance"
      | "device_tracker.telematic_742896_7f49"
      | "sensor.telematic_742896_7f49_estimated_distance"
      | "device_tracker.telematic_308599_9cc5"
      | "sensor.telematic_308599_9cc5_estimated_distance"
      | "device_tracker.telematic_123600_5583"
      | "sensor.telematic_123600_5583_estimated_distance"
      | "device_tracker.telematic_085619_8bb1"
      | "sensor.telematic_085619_8bb1_estimated_distance"
      | "device_tracker.telematic_543823_a888"
      | "sensor.telematic_543823_a888_estimated_distance"
      | "device_tracker.telematic_088209_a8ba"
      | "sensor.telematic_088209_a8ba_estimated_distance"
      | "device_tracker.telematic_309696_78a9"
      | "sensor.telematic_309696_78a9_estimated_distance"
      | "device_tracker.telematic_336657_ca29"
      | "sensor.telematic_336657_ca29_estimated_distance"
      | "device_tracker.telematic_041372_a3cb"
      | "sensor.telematic_041372_a3cb_estimated_distance"
      | "device_tracker.telematic_095329_9b80"
      | "sensor.telematic_095329_9b80_estimated_distance"
      | "device_tracker.telematic_733754_f91f"
      | "sensor.telematic_733754_f91f_estimated_distance"
      | "device_tracker.telematic_169819_350d"
      | "sensor.telematic_169819_350d_estimated_distance"
      | "device_tracker.telematic_321469_222f"
      | "sensor.telematic_321469_222f_estimated_distance"
      | "device_tracker.telematic_133005_fc8c"
      | "sensor.telematic_133005_fc8c_estimated_distance"
      | "device_tracker.telematic_092961_dc1e"
      | "sensor.telematic_092961_dc1e_estimated_distance"
      | "device_tracker.telematic_647590_e01f"
      | "sensor.telematic_647590_e01f_estimated_distance"
      | "device_tracker.telematic_283222_6499"
      | "sensor.telematic_283222_6499_estimated_distance"
      | "device_tracker.telematic_551933_c464"
      | "sensor.telematic_551933_c464_estimated_distance"
      | "device_tracker.telematic_755849_7083"
      | "sensor.telematic_755849_7083_estimated_distance"
      | "device_tracker.telematic_151775_b6d8"
      | "sensor.telematic_151775_b6d8_estimated_distance"
      | "device_tracker.gvh5105_3326"
      | "sensor.gvh5105_3326_estimated_distance"
      | "device_tracker.telematic_647566_9ec1"
      | "sensor.telematic_647566_9ec1_estimated_distance"
      | "device_tracker.telematic_642955_fa7e"
      | "sensor.telematic_642955_fa7e_estimated_distance"
      | "device_tracker.telematic_709630_782d"
      | "sensor.telematic_709630_782d_estimated_distance"
      | "device_tracker.telematic_699328_a092"
      | "sensor.telematic_699328_a092_estimated_distance"
      | "device_tracker.telematic_135414_0c3f"
      | "sensor.telematic_135414_0c3f_estimated_distance"
      | "media_player.mass_living_room_speaker"
      | "media_player.mass_bedroom_speaker"
      | "media_player.mass_everywhere"
      | "media_player.mass_office_speaker"
      | "device_tracker.telematic_323127_b2fb"
      | "sensor.telematic_323127_b2fb_estimated_distance"
      | "device_tracker.telematic_313029_7527"
      | "sensor.telematic_313029_7527_estimated_distance"
      | "device_tracker.telematic_745535_d540"
      | "sensor.telematic_745535_d540_estimated_distance"
      | "device_tracker.telematic_745931_6837"
      | "sensor.telematic_745931_6837_estimated_distance"
      | "device_tracker.telematic_089355_fb7f"
      | "sensor.telematic_089355_fb7f_estimated_distance"
      | "device_tracker.telematic_445219_9d13"
      | "sensor.telematic_445219_9d13_estimated_distance"
      | "device_tracker.telematic_706883_65fc"
      | "sensor.telematic_706883_65fc_estimated_distance"
      | "device_tracker.telematic_054326_7272"
      | "sensor.telematic_054326_7272_estimated_distance"
      | "device_tracker.telematic_076139_193f"
      | "sensor.telematic_076139_193f_estimated_distance"
      | "device_tracker.telematic_033627_febf"
      | "sensor.telematic_033627_febf_estimated_distance"
      | "device_tracker.telematic_733457_5745"
      | "sensor.telematic_733457_5745_estimated_distance"
      | "device_tracker.telematic_293817_82db"
      | "sensor.telematic_293817_82db_estimated_distance"
      | "device_tracker.telematic_734182_f17d"
      | "sensor.telematic_734182_f17d_estimated_distance"
      | "device_tracker.telematic_148789_94aa"
      | "sensor.telematic_148789_94aa_estimated_distance"
      | "device_tracker.telematic_037263_bedf"
      | "sensor.telematic_037263_bedf_estimated_distance"
      | "device_tracker.telematic_545117_5a91"
      | "sensor.telematic_545117_5a91_estimated_distance"
      | "device_tracker.rivian_phone_key_c346"
      | "sensor.rivian_phone_key_c346_estimated_distance"
      | "device_tracker.telematic_646246_9577"
      | "sensor.telematic_646246_9577_estimated_distance"
      | "sensor.kia_sorrento_sorento_uma_ex_v6_premium_geocoded_location"
      | "device_tracker.telematic_037388_9178"
      | "sensor.telematic_037388_9178_estimated_distance"
      | "device_tracker.telematic_305611_08b7"
      | "sensor.telematic_305611_08b7_estimated_distance"
      | "device_tracker.telematic_154019_76f5"
      | "sensor.telematic_154019_76f5_estimated_distance"
      | "device_tracker.telematic_300588_70fa"
      | "sensor.telematic_300588_70fa_estimated_distance"
      | "device_tracker.telematic_108379_3f3c"
      | "sensor.telematic_108379_3f3c_estimated_distance"
      | "device_tracker.telematic_134078_c0eb"
      | "sensor.telematic_134078_c0eb_estimated_distance"
      | "device_tracker.telematic_730669_3b8a"
      | "sensor.telematic_730669_3b8a_estimated_distance"
      | "device_tracker.telematic_153193_ddb9"
      | "sensor.telematic_153193_ddb9_estimated_distance"
      | "device_tracker.telematic_053625_357f"
      | "sensor.telematic_053625_357f_estimated_distance"
      | "device_tracker.telematic_539193_d9df"
      | "sensor.telematic_539193_d9df_estimated_distance"
      | "device_tracker.telematic_313177_e476"
      | "sensor.telematic_313177_e476_estimated_distance"
      | "device_tracker.telematic_750782_1706"
      | "sensor.telematic_750782_1706_estimated_distance"
      | "device_tracker.telematic_038188_5987"
      | "sensor.telematic_038188_5987_estimated_distance"
      | "device_tracker.telematic_322442_59bd"
      | "sensor.telematic_322442_59bd_estimated_distance"
      | "device_tracker.telematic_123899_ec5b"
      | "sensor.telematic_123899_ec5b_estimated_distance"
      | "device_tracker.genx_000036033800_decd"
      | "sensor.genx_000036033800_decd_estimated_distance"
      | "device_tracker.telematic_558805_99b2"
      | "sensor.telematic_558805_99b2_estimated_distance"
      | "device_tracker.telematic_162632_dc6d"
      | "sensor.telematic_162632_dc6d_estimated_distance"
      | "device_tracker.rivian_phone_key_888c"
      | "sensor.rivian_phone_key_888c_estimated_distance"
      | "device_tracker.rivian_phone_key_bb6b"
      | "sensor.rivian_phone_key_bb6b_estimated_distance"
      | "device_tracker.telematic_707998_862a"
      | "sensor.telematic_707998_862a_estimated_distance"
      | "device_tracker.telematic_153912_13fe"
      | "sensor.telematic_153912_13fe_estimated_distance"
      | "device_tracker.telematic_690186_64c1"
      | "sensor.telematic_690186_64c1_estimated_distance"
      | "device_tracker.telematic_272332_67e2"
      | "sensor.telematic_272332_67e2_estimated_distance"
      | "device_tracker.telematic_646634_3434"
      | "sensor.telematic_646634_3434_estimated_distance"
      | "device_tracker.telematic_278115_c931"
      | "sensor.telematic_278115_c931_estimated_distance"
      | "device_tracker.telematic_312732_5c15"
      | "sensor.telematic_312732_5c15_estimated_distance"
      | "device_tracker.wsbc018415120s_a04f"
      | "sensor.wsbc018415120s_a04f_estimated_distance"
      | "sensor.flightradar24_most_tracked"
      | "sensor.flightradar24_additional_tracked"
      | "binary_sensor.dryer_machine_sensor_vibration_occupancy"
      | "button.dryer_machine_sensor_vibration_identify"
      | "sensor.dryer_machine_sensor_vibration_battery"
      | "sensor.dryer_machine_sensor_vibration_battery_voltage"
      | "sensor.dryer_machine_sensor_vibration_battery_type"
      | "button.kia_sorrento_sorento_uma_ex_v6_premium_force_refresh"
      | "switch.kia_sorrento_sorento_uma_ex_v6_premium_climate"
      | "device_tracker.rivian_phone_key_c017"
      | "sensor.rivian_phone_key_c017_estimated_distance"
      | "device_tracker.rivian_sensor_2_4ce8"
      | "sensor.rivian_sensor_2_4ce8_estimated_distance"
      | "device_tracker.pawscout_tag_0104"
      | "sensor.pawscout_tag_0104_estimated_distance"
      | "device_tracker.wsbc024007781v_4bf1"
      | "sensor.wsbc024007781v_4bf1_estimated_distance"
      | "device_tracker.rivian_sensor_2_983a"
      | "sensor.rivian_sensor_2_983a_estimated_distance"
      | "device_tracker.nexc1_9ea3"
      | "sensor.nexc1_9ea3_estimated_distance"
      | "device_tracker.genx_000036033932"
      | "sensor.genx_000036033932_estimated_distance"
      | "device_tracker.lw_ivu_2714"
      | "sensor.lw_ivu_2714_estimated_distance"
      | "button.lucianas_macbook_pro_favorite_current_song"
      | "media_player.lucianas_macbook_pro"
      | "device_tracker.appontrac_3b1a"
      | "sensor.appontrac_3b1a_estimated_distance"
      | "device_tracker.wsbc018427145t_085c"
      | "sensor.wsbc018427145t_085c_estimated_distance"
      | "device_tracker.wsbc001131093t_99af"
      | "sensor.wsbc001131093t_99af_estimated_distance"
      | "sensor.thermal_cam_certificate_expiry"
      | "sensor.thermal_cam_response_time"
      | "sensor.thermal_cam_status"
      | "sensor.thermal_cam_monitor_type"
      | "sensor.thermal_cam_monitored_url"
      | "sensor.thermal_cam_uptime_1_day"
      | "sensor.thermal_cam_uptime_30_days"
      | "sensor.thermal_cam_uptime_365_days"
      | "sensor.thermal_cam_response_time_o_1_day"
      | "sensor.thermal_cam_response_time_o_30_days"
      | "sensor.thermal_cam_response_time_o_365_days"
      | "device_tracker.rivian_phone_key_2f21"
      | "sensor.rivian_phone_key_2f21_estimated_distance"
      | "device_tracker.4_2928"
      | "sensor.4_2928_estimated_distance"
      | "device_tracker.tirelinc_280a"
      | "sensor.tirelinc_280a_estimated_distance"
      | "device_tracker.rivian_phone_key_addb"
      | "sensor.rivian_phone_key_addb_estimated_distance"
      | "device_tracker.0102000000_55b8"
      | "sensor.0102000000_55b8_estimated_distance"
      | "device_tracker.4_5d9a"
      | "sensor.4_5d9a_estimated_distance"
      | "device_tracker.4_4d87"
      | "sensor.4_4d87_estimated_distance"
      | "device_tracker.4_d85b"
      | "sensor.4_d85b_estimated_distance"
      | "sensor.gw3000b_indoor_humidity"
      | "sensor.gw3000b_humidity"
      | "sensor.gw3000b_vapour_pressure_deficit"
      | "sensor.gw3000b_wind_direction"
      | "sensor.gw3000b_wind_direction_10m_avg"
      | "sensor.gw3000b_solar_radiation"
      | "sensor.gw3000b_uv_index"
      | "binary_sensor.gw3000b_wh65_battery"
      | "sensor.gw3000b_solar_lux"
      | "sensor.gw3000b_outdoor_temperature"
      | "sensor.gw3000b_indoor_temperature"
      | "sensor.gw3000b_wind_speed"
      | "sensor.gw3000b_wind_gust"
      | "sensor.gw3000b_max_daily_gust"
      | "sensor.gw3000b_event_rain"
      | "sensor.gw3000b_hourly_rain"
      | "sensor.gw3000b_daily_rain"
      | "sensor.gw3000b_weekly_rain"
      | "sensor.gw3000b_monthly_rain"
      | "sensor.gw3000b_yearly_rain"
      | "sensor.gw3000b_total_rain"
      | "sensor.gw3000b_rain_rate"
      | "sensor.gw3000b_24h_rain"
      | "sensor.gw3000b_relative_pressure"
      | "sensor.gw3000b_absolute_pressure"
      | "sensor.gw3000b_windchill"
      | "sensor.gw3000b_dewpoint"
      | "sensor.gw3000b_indoor_dewpoint"
      | "sensor.gw3000b_feels_like_temperature"
      | "sensor.flightradar24_helicopters_in_area"
      | "sensor.kia_sorrento"
      | "device_tracker.wsbc018419375t_8756"
      | "sensor.wsbc018419375t_8756_estimated_distance"
      | "device_tracker.4_7978"
      | "sensor.4_7978_estimated_distance"
      | "device_tracker.rivian_phone_key_b7af"
      | "sensor.rivian_phone_key_b7af_estimated_distance"
      | "device_tracker.b4ma2213084036_6bdb"
      | "sensor.b4ma2213084036_6bdb_estimated_distance"
      | "device_tracker.4_d6d4"
      | "sensor.4_d6d4_estimated_distance"
      | "device_tracker.wsbc002000931t_e745"
      | "sensor.wsbc002000931t_e745_estimated_distance"
      | "device_tracker.rivian_phone_key_0cc9"
      | "sensor.rivian_phone_key_0cc9_estimated_distance"
      | "device_tracker.rivian_phone_key_aea4"
      | "sensor.rivian_phone_key_aea4_estimated_distance"
      | "device_tracker.wsbc018438338t_b546"
      | "sensor.wsbc018438338t_b546_estimated_distance"
      | "device_tracker.wsbc001037736v_c0ec"
      | "sensor.wsbc001037736v_c0ec_estimated_distance"
      | "device_tracker.rivian_sensor_1_c28f"
      | "sensor.rivian_sensor_1_c28f_estimated_distance"
      | "device_tracker.rivian_sensor_3_e7e3"
      | "sensor.rivian_sensor_3_e7e3_estimated_distance"
      | "device_tracker.rivian_sensor_4_81be"
      | "sensor.rivian_sensor_4_81be_estimated_distance"
      | "climate.garage_kia_sorrento_climate_control"
      | "media_player.chromecast8401"
      | "button.chromecast8401_favorite_current_song"
      | "media_player.chromecast8401_2"
      | "media_player.my_bedroom_tv"
      | "button.my_bedroom_tv_favorite_current_song"
      | "media_player.my_bedroom_tv_2"
      | "sensor.garage_kia_sorrento_last_scanned_at"
      | "device_tracker.rivian_phone_key_4ab1"
      | "sensor.rivian_phone_key_4ab1_estimated_distance"
      | "device_tracker.tirelinc_5742"
      | "sensor.tirelinc_5742_estimated_distance"
      | "device_tracker.nexc1_2bcf"
      | "sensor.nexc1_2bcf_estimated_distance"
      | "sensor.garage_kia_sorrento_location_last_updated";
  }
}
