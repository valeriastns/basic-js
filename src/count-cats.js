const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (!arr) {
    return 0;
  }
  let currentCount = 0;
  let catsEars = "^^";
  for (let y = 0; y <= arr.length; y++) {
    if(!arr[y]) {
      continue;
    }
    for (let x = 0; x <= arr[y].length; x++) {
      if (catsEars === arr[y][x]) {
        currentCount++;
      }
    }
  }
  return currentCount;
};
