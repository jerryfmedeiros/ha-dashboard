// Shared helpers for turning raw Home Assistant states into display strings.
// HA reports 'unknown' / 'unavailable' for sensors that are offline or not yet
// seeded, so anything numeric must be guarded before Number()/toFixed().

export const UNAVAILABLE_STATES = ['unknown', 'unavailable', 'none', ''];

export const isUnavailable = (val: unknown): boolean =>
  val === undefined || val === null || UNAVAILABLE_STATES.includes(String(val).toLowerCase());

/** Numeric state → fixed-decimal string, or `fallback` when offline/non-numeric. */
export const formatNumber = (val: string | number | undefined | null, decimals = 1, fallback = '--'): string => {
  if (isUnavailable(val)) return fallback;
  const num = Number(val);
  return isNaN(num) ? fallback : num.toFixed(decimals);
};

/** Numeric state scaled by a divisor (e.g. mL → L), or `fallback` when offline. */
export const formatScaled = (val: string | number | undefined | null, divisor: number, decimals = 1, fallback = '--'): string => {
  if (isUnavailable(val)) return fallback;
  const num = Number(val);
  return isNaN(num) ? fallback : (num / divisor).toFixed(decimals);
};

/** Numeric state with a unit suffix appended only when the value is real. */
export const formatWithUnit = (val: string | number | undefined | null, unit: string, decimals = 0, fallback = '--'): string => {
  const formatted = formatNumber(val, decimals, fallback);
  return formatted === fallback ? fallback : `${formatted}${unit}`;
};
