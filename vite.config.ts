import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();
const VITE_FOLDER_NAME = process.env.VITE_FOLDER_NAME;

// Check if the environment variable is set
if (typeof VITE_FOLDER_NAME === 'undefined' || VITE_FOLDER_NAME === '') {
  console.error(
    'VITE_FOLDER_NAME environment variable is not set, update your .env file with a value naming your dashboard, eg "VITE_FOLDER_NAME=ha-dashboard"'
  );
  process.exit(1);
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const massToken = env.VITE_MASS_TOKEN;

  // Derive the MASS host from VITE_HA_URL so the dev proxy uses the same IP
  // rather than relying on homeassistant.local mDNS resolution, which can be flaky.
  let massProxyTarget = 'http://homeassistant.local:8095';
  try {
    const haUrl = new URL(env.VITE_HA_URL);
    massProxyTarget = `http://${haUrl.hostname}:8095`;
  } catch {
    // VITE_HA_URL missing or malformed — keep the mDNS default above.
  }

  return {
    base: `/local/${VITE_FOLDER_NAME}/`,
    plugins: [react()],
    server: {
      proxy: {
        '/app/d5369777_music_assistant': {
          target: massProxyTarget,
          changeOrigin: true,
          rewrite: path => path.replace('/app/d5369777_music_assistant', ''),
          headers: massToken ? { Authorization: `Bearer ${massToken}` } : {},
        },
      },
    },
    build: {
      assetsDir: 'assets',
    },
  };
});
