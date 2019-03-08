"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var logic_1 = require("./logic");
var math = __importStar(require("mathjs"));
function checkIfNotFormatted(input) {
    if (!/\d[hms]/.test(input)) {
        console.log("invalid string input for 'evaluateTimeExpression', expecting '*h*m*s' format");
        return true;
    }
    return false;
}
exports.evaluateTimeExpression = function (inputExpression) {
    if (checkIfNotFormatted(inputExpression))
        return;
    var formattedTimes = inputExpression.replace(/([hms])([\/*+-])(\d)/, "$1 $2 $3");
    var expressionInSeconds = formattedTimes
        .split(" ")
        .map(function (time) {
        return /[\/*+-]/.test(time) ? time : logic_1.convertToSeconds(time);
    })
        .join(" ");
    return logic_1.notate(math.eval(expressionInSeconds));
};
exports.resolveToSeconds = function (inputExpression) {
    if (checkIfNotFormatted(inputExpression))
        return;
    return logic_1.convertToSeconds(inputExpression) + "s";
};
exports.resolveToMinutes = function (inputExpression) {
    if (checkIfNotFormatted(inputExpression))
        return;
    return logic_1.convertToMinutes(inputExpression) + "m";
};
exports.resolveToHours = function (inputExpression) {
    if (checkIfNotFormatted(inputExpression))
        return;
    return logic_1.convertToHours(inputExpression) + "h";
};
