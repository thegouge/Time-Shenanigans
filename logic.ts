function formatInput(input: string | number) {
  if (typeof input === "string") {
  } else if (typeof input === "number") {
  }
  return input;
}

export function convertToSeconds(inputString: string) {
  const letterMatch = inputString.match(/\d{1,}[hms]/g);

  if (letterMatch) {
    return letterMatch
      .map((timePartial) => {
        const partialEnd = timePartial.length - 1;
        const number = parseInt(timePartial.substring(0, partialEnd));
        switch (timePartial[partialEnd]) {
          case "h":
            return number * 3600;

          case "m":
            return number * 60;

          case "s":
            return number;

          default:
            return 0;
        }
      })
      .reduce((acc, curr) => acc + curr, 0);
  } else {
    return parseInt(inputString);
  }
}

function convertToMinutes(input: string) {
  const seconds = convertToSeconds(input);
  return `${seconds / 60}m`;
}

function convertToHours(input: string) {
  const seconds = convertToSeconds(input);
  return `${seconds / 3600}h`;
}

export function notate(inputSeconds: number) {
  let seconds = inputSeconds;
  let hours = 0;
  let minutes = 0;

  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }

  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }

  const hourString = hours === 0 ? "" : `${hours}h`;
  const minuteString = minutes === 0 ? "" : `${minutes}m`;
  const secondString = seconds === 0 ? "" : `${seconds}s`;

  return hourString + minuteString + secondString || "0s";
}
