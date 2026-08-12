import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { Icon } from '@iconify/react';
import { alpha, danger, ink, shade, warning } from '../styles/tokens';

export const CoverStatus = ({ entity: entityId }: { entity: EntityName }) => {
  const entity = useEntity(entityId);
  if (!entity) return null;

  const state = entity.state.toLowerCase();

  // Default to closed styling
  let icon = 'mdi:garage';
  let color = ink.muted;
  let borderColor = 'transparent';
  let bgColor = shade.inset;

  if (state === 'open') {
    icon = 'mdi:garage-open';
    color = danger; // Red to warn you it's exposed
    borderColor = alpha(danger, 0.3);
    bgColor = alpha(danger, 0.1);
  } else if (state === 'opening') {
    icon = 'mdi:arrow-up-bold-box-outline';
    color = warning; // Amber for movement
    borderColor = alpha(warning, 0.3);
    bgColor = alpha(warning, 0.1);
  } else if (state === 'closing') {
    icon = 'mdi:arrow-down-bold-box-outline';
    color = warning; // Amber for movement
    borderColor = alpha(warning, 0.3);
    bgColor = alpha(warning, 0.1);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: bgColor,
        padding: '4px 10px',
        borderRadius: '8px',
        border: `1px solid ${borderColor}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Icon icon={icon} style={{ fontSize: '1rem', color }} />
      <span
        style={{
          fontSize: '0.65rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: color,
        }}
      >
        {state}
      </span>
    </div>
  );
};
