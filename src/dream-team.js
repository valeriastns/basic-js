const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  if (members == [] || !members || !Array.isArray(members)) {
    return false;
  }
  return members
    .filter(el => typeof el === 'string' || el instanceof String)
    .map(el => el.replace(' ', '').trim().toUpperCase())
    .map((el) => Array.from(el).shift())
    .sort().join('')
};
