/**
 * Single source of truth for colour in the dashboard.
 *
 * Before this file there were five separate `THEME` objects (theme.ts,
 * MainDashboard, SecurityDashboard, CommandCenter, MediaDashboard) that
 * disagreed with each other — three different accents, five different card
 * backgrounds — plus ~250 hardcoded hex values and ~280 inline rgba() literals.
 *
 * Rules of thumb:
 *  - Reach for a semantic token (`accent`, `danger`, `textMuted`) first.
 *  - Use the neutral ramps (`fill`, `shade`, `ink`) for surfaces, borders and
 *    text where the role is "some amount of light/dark on the dark base".
 *  - Use `alpha(color, n)` for tinted glows instead of writing a new rgba().
 */

// ---------------------------------------------------------------------------
// PRIMITIVES
// ---------------------------------------------------------------------------

/** App background — the darkest surface everything else sits on. */
export const appBg = '#0d0f14';

/** Brand accent. Was split across #03a9f4 / #3b82f6 / #00d1ff; #03a9f4 won. */
export const accent = '#03a9f4';

// Status. Collapsed from 3 reds / 4 ambers / 3 greens down to one each.
export const danger = '#f44336';
export const warning = '#ff9800';
export const success = '#4caf50';
/** Heating / "hot" indication, distinct from `warning`. */
export const heat = '#ff5722';
/** Cool / cold indication (dew point, chill). */
export const cool = '#00bcd4';

/** Neutral grey for inert or unavailable states. */
export const muted = '#8e8e93';
/** Dimmed grey for inactive controls — nav icons, suspended states. */
export const inactive = '#71717a';

// Domain hues. These carry meaning that `warning`/`success` would erase, so
// they stay distinct rather than folding into the status palette.
/** Electricity / energy. */
export const gold = '#FFD700';
/** Sunlight, daylight, the sun marker on the celestial arch. */
export const sun = '#ffeb3b';
/** Moonlight and cold-but-not-alarming readings (wind chill). */
export const frost = '#90caf9';
/** Filter life, astronomy "next dark" — a deliberately non-status hue. */
export const violet = '#9c27b0';
/** Muted blue-grey body text inside cards. */
export const slate = '#b0bec5';

// ---------------------------------------------------------------------------
// NEUTRAL RAMPS
// ---------------------------------------------------------------------------

/**
 * White-on-dark overlays: raised surfaces and hairlines.
 * Steps are named by role but ordered by opacity, so picking the "next one up"
 * is obvious. Every step here is a value that actually occurs in the app.
 */
export const fill = {
  /** Barely-there wash — nav rails, alternate rows. */
  faint: 'rgba(255, 255, 255, 0.02)',
  /** Standard card background. */
  card: 'rgba(255, 255, 255, 0.03)',
  /** Slightly lifted panel. */
  subtle: 'rgba(255, 255, 255, 0.04)',
  /** Hairline borders and dividers — the most-used value in the app. */
  hairline: 'rgba(255, 255, 255, 0.05)',
  /** Soft raised surface. */
  soft: 'rgba(255, 255, 255, 0.06)',
  /** Crisper card edge. */
  edge: 'rgba(255, 255, 255, 0.08)',
  /** Hover / pressed states. */
  hover: 'rgba(255, 255, 255, 0.1)',
  /** Emphasised border. */
  strong: 'rgba(255, 255, 255, 0.12)',
  /** Brightest overlay — selected chips. */
  bright: 'rgba(255, 255, 255, 0.15)',
};

/** Black-on-dark overlays: insets and scrims. */
export const shade = {
  /** Inset wells inside cards (metric tiles). */
  inset: 'rgba(0, 0, 0, 0.2)',
  /** Deeper inset / panel. */
  deep: 'rgba(0, 0, 0, 0.25)',
  /** Dim overlay. */
  dim: 'rgba(0, 0, 0, 0.3)',
  /** Medium overlay — image captions. */
  medium: 'rgba(0, 0, 0, 0.4)',
  /** Heavy overlay — pill backgrounds over video. */
  heavy: 'rgba(0, 0, 0, 0.5)',
  /** Dark overlay. */
  dark: 'rgba(0, 0, 0, 0.6)',
  /** Modal backdrop. */
  scrim: 'rgba(0, 0, 0, 0.85)',
};

/** Text opacity ramp. */
export const ink = {
  primary: '#ffffff',
  /** Near-primary emphasis. */
  strong: 'rgba(255, 255, 255, 0.7)',
  /** Secondary copy. */
  secondary: 'rgba(255, 255, 255, 0.6)',
  /** Mid-weight labels. */
  half: 'rgba(255, 255, 255, 0.5)',
  /** Section headers and labels. */
  muted: 'rgba(255, 255, 255, 0.4)',
  /** De-emphasised metric labels. */
  faint: 'rgba(255, 255, 255, 0.3)',
  /** Placeholder / empty-state text. */
  ghost: 'rgba(255, 255, 255, 0.2)',
};

/**
 * AstroPanel's red-light mode is a deliberately separate palette — red light
 * preserves night vision at the telescope. It must NOT be folded into `danger`,
 * which carries the opposite meaning.
 */
export const night = {
  text: '#ff4d4d',
  dim: 'rgba(255, 0, 0, 0.03)',
  wash: 'rgba(255, 0, 0, 0.05)',
  fill: 'rgba(255, 0, 0, 0.1)',
  border: 'rgba(255, 0, 0, 0.2)',
};

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

/**
 * Tint any token with an alpha channel: `alpha(accent, 0.15)`.
 * Replaces both hand-written rgba() glows and the `color + '40'` hex-suffix
 * trick that was scattered through the components.
 */
export const alpha = (color: string, a: number): string => {
  const hex = color.trim();
  if (!hex.startsWith('#')) return hex;
  const raw = hex.slice(1);
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map(c => c + c)
          .join('')
      : raw.slice(0, 6);
  const n = parseInt(full, 16);
  if (isNaN(n)) return hex;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};
