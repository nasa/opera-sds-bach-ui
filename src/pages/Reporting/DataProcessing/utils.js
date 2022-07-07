const toByteString = (value) => {
  if (!Number.isInteger(value)) return `${String(value)}`;

  if (value < 1024) {
    return `${String(value.toFixed(2))} bytes`;
  }
  if (value < 1024 * 1024) {
    return `${String(Number(value / 1024).toFixed(2))} KB`;
  }
  if (value < 1024 * 1024 * 1024) {
    return `${String(Number(value / 1024 / 1024).toFixed(2))} MB`;
  }
  if (value < 1024 * 1024 * 1024 * 1024) {
    return `${String(Number(value / 1024 / 1024 / 1024).toFixed(2))} GB`;
  }
  if (value < 1024 * 1024 * 1024 * 1024 * 1024) {
    return `${String(Number(value / 1024 / 1024 / 1024 / 1024).toFixed(2))} TB`;
  }
  return `${String(Number(value / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2))} PB`;
};

export { toByteString };
