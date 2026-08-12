// theme.ts — hakit ThemeProvider config, derived from the shared tokens.
import { accent, appBg, cool, danger, fill, heat, ink, shade, success, warning, alpha } from './tokens';

export const appTheme = {
  hue: 220, // Keeps your cool blueish base
  lightness: 54,
  saturation: 60,
  darkMode: true,
  customColors: {
    // --- APP BACKGROUND ---
    appBg,
    modalOverlay: shade.scrim,

    // --- MODERN GLASS CARDS ---
    roomCardBg: 'rgba(28, 28, 32, 0.65)',
    roomCardBorder: fill.edge,
    cardBoxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', // Soft ambient shadow

    // --- TYPOGRAPHY & ACCENTS ---
    roomCardTitle: accent,
    secondaryText: '#a0a0a8', // Soft grey for subtext
    accentColor: accent,

    // --- CONTROLS & TOGGLES ---
    sliderTrackBg: fill.hairline,
    toggleOn: success,
    toggleOff: fill.hover,
    fabBg: 'rgba(32, 41, 54, 0.8)', // Translucent floating action button
    fabBorder: fill.hover,

    // --- GARBAGE WIDGET COLORS ---
    garbageBg: 'var(--ha-S300)',
    garbageCardBg: 'var(--ha-300-a3-contrast)',
    binWaste: '#9e9e9e',
    binRecycle: '#0A84FF',
    binOrganic: success,
  },
};

// Exporting these as raw arrays because Hakit's ControlSlider requires [R, G, B]
export const sliderColors = {
  on: [214, 153, 85] as [number, number, number],
  off: [35, 35, 35] as [number, number, number],
};

/**
 * Shared dashboard palette. Previously each dashboard's styles file declared
 * its own conflicting `THEME`; they now all point here.
 */
export const THEME = {
  bg: 'transparent',
  card: fill.card,
  cardAlt: fill.faint,
  border: fill.hairline,
  borderStrong: fill.edge,
  hover: fill.hover,
  inset: shade.inset,
  insetDeep: shade.deep,

  text: ink.primary,
  textMain: ink.primary,
  textSub: ink.muted,
  header: ink.muted,
  muted: ink.muted,

  accent,
  activeGlow: alpha(accent, 0.15),
  warning,
  danger,
  success,
  heat,
  cool,
  // Not `as const`: consumers spread these into style objects and override
  // individual properties, which literal types would reject.
};

// Re-exported so a styles file can pull everything from one place.
export { accent, appBg, danger, warning, success, heat, cool, muted, fill, shade, ink, alpha } from './tokens';
