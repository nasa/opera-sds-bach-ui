const toByteString = (value) => {
  if (!Number.isInteger(value)) return `${String(value)}`;

  if (value < 1024) {
    return `${String(value)} bytes`;
  }
  if (value < 1024 * 1024) {
    return `${String(Math.round(value / 1024))} KB`;
  }
  if (value < 1024 * 1024 * 1024) {
    return `${String(Math.round(value / 1024 / 1024))} MB`;
  }
  if (value < 1024 * 1024 * 1024 * 1024) {
    return `${String(Math.round(value / 1024 / 1024 / 1024))} GB`;
  }
  if (value < 1024 * 1024 * 1024 * 1024 * 1024) {
    return `${String(Math.round(value / 1024 / 1024 / 1024 / 1024))} TB`;
  }
  return `${String(Math.round(value / 1024 / 1024 / 1024 / 1024 / 1024))} PB`;
};

export { toByteString };
