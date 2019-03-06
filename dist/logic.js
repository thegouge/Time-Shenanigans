"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatInput(input) {
    if (typeof input === "string") {
    }
    else if (typeof input === "number") {
    }
    return input;
}
function convertToSeconds(inputString) {
    var letterMatch = inputString.match(/\d{1,}[hms]/g);
    if (letterMatch) {
        return letterMatch
            .map(function (timePartial) {
            var partialEnd = timePartial.length - 1;
            var number = parseInt(timePartial.substring(0, partialEnd));
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
            .reduce(function (acc, curr) { return acc + curr; }, 0);
    }
    else {
        return parseInt(inputString);
    }
}
exports.convertToSeconds = convertToSeconds;
function convertToMinutes(seconds) {
    return seconds / 60 + "m";
}
function convertToHours(seconds) {
    return seconds / 3600 + "h";
}
function notate(inputSeconds) {
    var seconds = inputSeconds;
    var hours = 0;
    var minutes = 0;
    while (seconds >= 60) {
        seconds -= 60;
        minutes++;
    }
    while (minutes >= 60) {
        minutes -= 60;
        hours++;
    }
    return hours + "h" + minutes + "m" + seconds + "s";
}
exports.notate = notate;
