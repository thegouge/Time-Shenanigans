function toSeconds(string) {
    var hours = 0, minutes = 0, seconds = 0;
    var match = string.match(/[hms]/g);
    string = string.split(/[hms]/g);
    string.splice(-1, 1);

    for (var i = 0; i < match.length; i++) {
        if(match[i] == "h") {
            hours = string[i];
        } else if (match[i] == "m") {
            minutes = string[i];
        } else if (match[i] == "s") {
            seconds = string[i];
        }
    }

    minutes = parseInt(minutes) + hours * 60;
    seconds = parseInt(seconds) + minutes * 60;

    return seconds;
}

function notate(seconds) {
    var hours = 0;
    var minutes = 0;

    while (seconds > 60) {
        seconds -= 60;
        minutes++;
    }

    while (minutes > 60) {
        minutes -= 60;
        hours++;
    }

    var result = `${hours}h${minutes}m${seconds}s`;
    output.innerHTML = result;
}