import {convertToSeconds, notate} from "./logic";
import * as math from "mathjs";

exports.evaluateTimeExpression = (inputExpression: string) => {
  if (!/\d[hms]/.test(inputExpression)) {
    console.log(
      "invalid string input for 'evaluateTimeExpression', expecting '*h*m*s' format"
    );
    return;
  }

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
