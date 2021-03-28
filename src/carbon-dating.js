const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // edge cases
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity.trim() === "") return false;
  if (isNaN(Number(sampleActivity))) return false;
  if (+sampleActivity <= 0 || +sampleActivity > 15) return false;

  return Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / +sampleActivity));
};
