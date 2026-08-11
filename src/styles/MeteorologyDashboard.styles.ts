import React from 'react';

export const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  padding: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  backgroundColor: 'transparent',
};

export const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '0.5rem',
  flexShrink: 0,
};

export const mainGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  flex: 1,
  minHeight: 0,
  overflow: 'hidden',
};

export const sectionHeaderStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 900,
  color: 'rgba(255,255,255,0.4)',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '0.2rem',
  marginTop: '0.2rem',
};

export const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.4rem',
};

export const cardGrid3ColStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.4rem',
};

export const sparklineFixedStyle: React.CSSProperties = {
  width: '100%',
  height: '55px',
  marginTop: '4px',
  position: 'relative',
};

// Barometric tendency readout that sits above the pressure sparkline.
export const tendencyRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: '6px',
  paddingTop: '5px',
  borderTop: '1px solid rgba(255,255,255,0.05)',
};

export const tendencyLabelStyle: React.CSSProperties = {
  fontSize: '0.55rem',
  fontWeight: 900,
  letterSpacing: '0.5px',
};

export const tendencyDeltaStyle: React.CSSProperties = {
  marginLeft: 'auto',
  fontSize: '0.55rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.35)',
};

export const scrollableColumnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  height: '100%',
  overflow: 'hidden',
};
