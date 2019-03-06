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
exports.evaluateTimeExpression = function (inputExpression) {
    if (!/\d[hms]/.test(inputExpression)) {
        console.log("invalid string input for 'evaluateTimeExpression', expecting '*h*m*s' format");
        return;
    }
    var formattedTimes = inputExpression.replace(/([hms])([\/*+-])(\d)/, "$1 $2 $3");
    var expressionInSeconds = formattedTimes
        .split(" ")
        .map(function (time) {
        return /[\/*+-]/.test(time) ? time : logic_1.convertToSeconds(time);
    })
        .join(" ");
    return logic_1.notate(math.eval(expressionInSeconds));
};
