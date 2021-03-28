const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    if (arr.filter(elem => Array.isArray(elem)).length == 0) return 1;

    let depthArray = arr.filter(elem => Array.isArray(elem)).map(subArray => this.calculateDepth(subArray))
    let result = Math.max(...depthArray) + 1;
    return result;
  }
};