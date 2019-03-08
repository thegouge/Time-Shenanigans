import {
  convertToSeconds,
  convertToHours,
  convertToMinutes,
  notate
} from "./logic";
import * as math from "mathjs";

function checkIfNotFormatted(input: string) {
  if (!/\d[hms]/.test(input)) {
    console.log(
      "invalid string input for 'evaluateTimeExpression', expecting '*h*m*s' format"
    );
    return true;
  }
  return false;
}

exports.evaluateTimeExpression = (inputExpression: string) => {
  if (checkIfNotFormatted(inputExpression)) return;

  const formattedTimes = inputExpression.replace(
    /([hms])([\/*+-])(\d)/,
    "$1 $2 $3"
  );

  const expressionInSeconds = formattedTimes
    .split(" ")
    .map((time: string) => {
      return /[\/*+-]/.test(time) ? time : convertToSeconds(time);
    })
    .join(" ");

  return notate(math.eval(expressionInSeconds));
};

exports.resolveToSeconds = (inputExpression: string) => {
  if (checkIfNotFormatted(inputExpression)) return;
  return convertToSeconds(inputExpression) + "s";
};

exports.resolveToMinutes = (inputExpression: string) => {
  if (checkIfNotFormatted(inputExpression)) return;
  return convertToMinutes(inputExpression) + "m";
};

exports.resolveToHours = (inputExpression: string) => {
  if (checkIfNotFormatted(inputExpression)) return;
  return convertToHours(inputExpression) + "h";
};
