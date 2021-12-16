export const getFirstValue = (value, delim = ',') => {
  if (!value) return '';
  if (Array.isArray(value)) return getFirstValue(value[0]);
  if (typeof value === 'string' && value.includes(delim)) return getFirstValue(value.split(delim));
  return value.name || value;
};
