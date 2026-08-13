import { useState } from 'react';
import { Icon } from '@iconify/react';
import { accent, alpha, danger, fill, ink, shade } from '../styles/tokens';

/**
 * Touch-first numeric PIN entry.
 *
 * Replaces `window.prompt()`, which on a wall tablet opens a native dialog with
 * no on-screen keypad — effectively unusable — and blocks the render loop while
 * open. A full QWERTY (react-simple-keyboard, used for Media search) is the
 * wrong shape for a numeric code.
 */

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

type Props = {
  title: string;
  subtitle?: string;
  /** Shown in red above the pad; caller clears it on the next attempt. */
  error?: string | null;
  /** Disables input while a submitted code is being checked. */
  pending?: boolean;
  maxLength?: number;
  onSubmit: (code: string) => void;
  onCancel: () => void;
};

export function PinPad({ title, subtitle, error, pending, maxLength = 8, onSubmit, onCancel }: Props) {
  const [code, setCode] = useState('');

  const press = (digit: string) => {
    if (pending || code.length >= maxLength) return;
    setCode(c => c + digit);
  };

  const back = () => {
    if (pending) return;
    setCode(c => c.slice(0, -1));
  };

  const submit = () => {
    if (pending || !code) return;
    onSubmit(code);
    setCode('');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>{title}</div>
      {subtitle && <div style={styles.subtitle}>{subtitle}</div>}

      {/* Masked entry — dots rather than digits, readable across a room. */}
      <div style={{ ...styles.display, borderColor: error ? alpha(danger, 0.6) : fill.edge }}>
        {code.length === 0 ? (
          <span style={styles.placeholder}>ENTER PIN</span>
        ) : (
          <div style={styles.dots}>
            {Array.from({ length: code.length }).map((_, i) => (
              <span key={i} style={styles.dot} />
            ))}
          </div>
        )}
      </div>

      <div style={{ ...styles.message, color: error ? danger : 'transparent' }}>{error || ' '}</div>

      <div style={styles.grid}>
        {KEYS.map(k => (
          <button key={k} type='button' onClick={() => press(k)} disabled={pending} style={styles.key}>
            {k}
          </button>
        ))}

        <button type='button' onClick={back} disabled={pending} style={{ ...styles.key, ...styles.keyMuted }} aria-label='Backspace'>
          <Icon icon='mdi:backspace-outline' style={{ fontSize: '1.4rem' }} />
        </button>

        <button type='button' onClick={() => press('0')} disabled={pending} style={styles.key}>
          0
        </button>

        <button
          type='button'
          onClick={submit}
          disabled={pending || !code}
          aria-label='Confirm'
          style={{
            ...styles.key,
            backgroundColor: code && !pending ? alpha(accent, 0.2) : fill.faint,
            borderColor: code && !pending ? alpha(accent, 0.5) : fill.hairline,
            color: code && !pending ? accent : ink.ghost,
          }}
        >
          {pending ? <Icon icon='mdi:loading' style={{ fontSize: '1.4rem' }} /> : <Icon icon='mdi:check' style={{ fontSize: '1.5rem' }} />}
        </button>
      </div>

      <button type='button' onClick={onCancel} style={styles.cancel}>
        Cancel
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    width: '100%',
  },
  title: { fontSize: '1rem', fontWeight: 900, color: ink.primary, letterSpacing: '0.5px' },
  subtitle: { fontSize: '0.65rem', fontWeight: 700, color: ink.muted, textTransform: 'uppercase' },
  display: {
    width: '100%',
    height: '54px',
    borderRadius: '12px',
    backgroundColor: shade.inset,
    border: `1px solid ${fill.edge}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6px',
    boxSizing: 'border-box',
  },
  placeholder: { fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2px', color: ink.ghost },
  dots: { display: 'flex', gap: '10px' },
  dot: { width: '12px', height: '12px', borderRadius: '50%', backgroundColor: accent, display: 'block' },
  message: { fontSize: '0.65rem', fontWeight: 800, minHeight: '1rem', textTransform: 'uppercase' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    width: '100%',
  },
  key: {
    height: '64px',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: ink.primary,
    backgroundColor: fill.hairline,
    border: `1px solid ${fill.edge}`,
    borderRadius: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.15s ease',
  },
  keyMuted: { color: ink.muted, backgroundColor: fill.faint },
  cancel: {
    marginTop: '10px',
    padding: '10px 20px',
    width: '100%',
    fontSize: '0.75rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: ink.muted,
    backgroundColor: 'transparent',
    border: `1px solid ${fill.hairline}`,
    borderRadius: '12px',
    cursor: 'pointer',
  },
};
