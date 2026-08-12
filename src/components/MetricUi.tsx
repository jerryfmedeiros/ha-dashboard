import React from 'react';
import { Icon } from '@iconify/react';
import { accent, alpha, danger, fill, ink, night, shade, warning } from '../styles/tokens';

// Explicitly define what a sensor value can be
type DisplayValue = string | number | undefined | null;

export const SafeValue = ({ value, fallback = '--' }: { value: DisplayValue; fallback?: string }) => <span>{value ?? fallback}</span>;
export const GlassCard = ({
  title,
  children,
  statusColor,
  nightMode,
}: {
  title: string;
  children: React.ReactNode;
  statusColor?: string;
  nightMode?: boolean;
}) => (
  <div
    style={{
      backgroundColor: nightMode ? night.dim : fill.card,
      borderRadius: '16px',
      padding: '12px',
      border: `1px solid ${statusColor || (nightMode ? alpha(danger, 0.2) : fill.hairline)}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box', // Prevents padding from cutting off the right side
      width: '100%',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        fontSize: '0.65rem',
        fontWeight: 800,
        color: nightMode ? danger : ink.muted,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

export const BigMetric = ({
  icon,
  label,
  value,
  unit,
  color = ink.primary,
  nightMode,
  onClick,
  iconStyle,
}: {
  icon: string;
  label: string;
  value: DisplayValue;
  unit?: string;
  color?: string;
  nightMode?: boolean;
  onClick?: () => void;
  iconStyle?: React.CSSProperties;
}) => (
  <div
    onClick={onClick}
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8px 4px',
      backgroundColor: nightMode ? night.wash : shade.inset,
      borderRadius: '10px',
      border: nightMode ? '1px solid rgba(255, 68, 68, 0.1)' : `1px solid ${fill.faint}`,
      minWidth: 0,
      gap: '1px',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all 0.2s ease',
    }}
  >
    <Icon icon={icon} style={{ fontSize: '1.2rem', color: nightMode ? danger : color, marginBottom: '1px', ...iconStyle }} />
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
      <span style={{ fontSize: '1.1rem', fontWeight: 900, color: nightMode ? danger : ink.primary, lineHeight: 1 }}>
        <SafeValue value={value} />
      </span>
      {unit && (
        <span
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            color: nightMode ? alpha(danger, 0.6) : ink.half,
            textTransform: 'lowercase',
          }}
        >
          {unit}
        </span>
      )}
    </div>
    <span
      style={{
        fontSize: '0.55rem',
        fontWeight: 800,
        color: nightMode ? alpha(danger, 0.4) : ink.faint,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
    >
      {label}
    </span>
  </div>
);

export const RoomCard = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) => (
  <div
    style={{
      backgroundColor: fill.card,
      borderRadius: '16px',
      padding: '10px',
      border: `1px solid ${fill.hairline}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
      <span style={{ fontSize: '0.7rem', fontWeight: 900, color: ink.primary, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {title}
      </span>
      {icon && <Icon icon={icon} style={{ fontSize: '0.9rem', color: ink.ghost }} />}
    </div>
    {children}
  </div>
);

export const CompactSensor = ({
  value,
  unit,
  icon,
  color = accent,
}: {
  value: DisplayValue;
  unit: string;
  icon: string;
  color?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: shade.inset,
      padding: '2px 6px',
      borderRadius: '6px',
    }}
  >
    <Icon icon={icon} style={{ fontSize: '0.8rem', color: color }} />
    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: ink.primary }}>
      <SafeValue value={value} />
      <span style={{ fontSize: '0.5rem', opacity: 0.5, marginLeft: '1px' }}>{unit}</span>
    </span>
  </div>
);

export const GlassRow = ({
  children,
  isActive,
  activeColor = warning,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  activeColor?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '4px 10px',
      backgroundColor: isActive ? fill.hairline : shade.inset,
      borderRadius: '12px',
      // Was `activeColor + '40'` / `${activeColor}10` — hex alpha suffixes that
      // silently break on any non-6-digit colour. alpha() is equivalent
      // (0x40 ≈ 0.25, 0x10 ≈ 0.06) and works for every token.
      border: `1px solid ${isActive ? alpha(activeColor, 0.25) : fill.faint}`,
      boxShadow: isActive ? `0 0 15px ${alpha(activeColor, 0.06)}` : 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      width: '100%',
    }}
  >
    {isActive && (
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: '3px',
          backgroundColor: activeColor,
          borderRadius: '0 4px 4px 0',
          boxShadow: `0 0 10px ${activeColor}`,
        }}
      />
    )}
    <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
  </div>
);
export const SensorGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap', // This is the secret sauce
      gap: '6px',
      marginBottom: '4px',
      width: '100%',
    }}
  >
    {children}
  </div>
);
