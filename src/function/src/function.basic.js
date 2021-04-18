function autoIncrement(base, max, incremantNb) {
  if (base >= max) return 0;
  return base + incremantNb;
}

module.exports = {
  autoIncrement,
};
