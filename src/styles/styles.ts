// styles.ts
import React from 'react';
import { fill, ink, shade } from './tokens';

export const timeStyles = `
  /* --- THE GLASS EFFECT --- */
  background-color: ${fill.soft} !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  border-radius: 24px !important;
  border: 1px solid ${fill.card} !important;
  border-top: 1px solid ${fill.strong} !important;
  box-shadow:0 8px 32px ${shade.medium} !important;

  /* --- ORIGINAL SIZING (slightly adjusted for the curve) --- */
  padding: 16px !important; 
  min-height: unset !important;
  h1, h2, .time, .date { line-height: 1 !important; margin: 0 !important; }
  h1, .time { font-size: 1.4rem !important; }
  h2, .date { font-size: 0.8rem !important; }
`;
export const headerFabStyles = `
  border-radius: 12px !important; 
  background-color: var(--ha-custom-colors-fab-bg) !important; 
  border: 1px solid var(--ha-custom-colors-fab-border) !important; 
  svg { color: white !important; }
`;
// Add this to styles.ts
export const lockButtonStyles = `
  background-color: var(--ha-custom-colors-slider-track-bg) !important;
  border: 1px solid ${fill.hairline} !important;
  .title { font-size: 0.85rem !important; font-weight: bold !important; }
  .description { font-size: 0.75rem !important; }
`;

export const roomGridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  width: '100%',
};

export const roomCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem',
  gap: '1rem',
  flex: 1,
  minWidth: '280px',
  borderRadius: '24px',
};

export const roomTitleStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 900,
  color: ink.half, // Muted but bold
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  margin: '0 0 0.5rem 0',
};

export const recessedPlateStyle: React.CSSProperties = {
  backgroundColor: shade.deep,
  border: `1px solid ${fill.faint}`,
  borderRadius: '16px',
  boxSizing: 'border-box',
};
