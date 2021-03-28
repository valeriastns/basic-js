const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    let addition = '';

    if (options.addition !== undefined) {
        addition = Array(options.additionRepeatTimes)
            .fill(String(options.addition))
            .join(options.additionSeparator || '|');
    }

    console.log(addition);

    return Array(options.repeatTimes)
        .fill(String(str) + addition)
        .join(options.separator || '+');
}
