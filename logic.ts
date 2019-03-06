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

function convertToMinutes(seconds: number) {
  return `${seconds / 60}m`;
}

function convertToHours(seconds: number) {
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

  return `${hours}h${minutes}m${seconds}s`;
}
