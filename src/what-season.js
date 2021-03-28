const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined || date == null) {
    return 'Unable to determine the time of year!';
  }

  if (!date instanceof Date || isNaN(date)) {
    throw new Error('incorrect data!')
  }
  let months = date.getMonth();
  return (months == 11 || months <= 1) ? 'winter' : (months >= 2 && months <= 4) ? 'spring' : (months >= 5 && months <= 7) ? 'summer' : 'autumn';
};
