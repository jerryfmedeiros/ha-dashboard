import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    // .js/.jsx routed through typescript-eslint too, so config files and any
    // future plain-JS modules are linted with JSX-aware unused-var detection.
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // `interface ProcessEnv extends CustomEnv {}` in .d.ts is a declaration
      // merge into NodeJS.ProcessEnv — it has to stay an interface, so an
      // empty body with a single extends is legitimate here.
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
    },
  },
]);
