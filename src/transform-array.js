const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('is not array!')
    }
    // console.log(arr);
    let result = [...arr];
    shift = 0

    arr.forEach((el, index, theArray) => {
        if (el == '--discard-prev' && index != 0) {
            result[index + shift - 1] = '--';
        } else if (el == '--double-prev' && index != 0) {
            result.splice(index + shift - 1, 0, result[index + shift - 1]);
            shift++;
        } else if (el == '--discard-next' && index != arr.length - 1) {
            result[index + 1] = '--';
        } else if (el == '--double-next' && index != arr.length - 1) {
            result.splice(index + shift + 1, 0, result[index + shift + 1]);
            shift++;
        } 
    });
    return result.filter(elem => !String(elem).includes('--') );
};


