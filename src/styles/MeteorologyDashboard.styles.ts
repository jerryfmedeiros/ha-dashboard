import React from 'react';

export const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  padding: '1.5rem',
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
  marginBottom: '1rem',
  flexShrink: 0,
};

export const mainGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto auto 1fr',
  gap: '1rem',
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  paddingRight: '4px',
};

export const sectionHeaderStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 900,
  color: 'rgba(255,255,255,0.4)',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '0.5rem',
};

export const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.75rem',
};

export const fullWidthCardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.75rem',
};

export const scrollableColumnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  overflowY: 'auto',
  height: '100%',
  paddingRight: '4px',
};
