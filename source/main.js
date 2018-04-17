var buttons = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('0'),
    document.getElementById('c'),
    document.getElementById('h'),
    document.getElementById('m'),
    document.getElementById('s'),
    document.getElementById('x'),
    document.getElementById('d'),
    document.getElementById('pl'),
    document.getElementById('min'),
    document.getElementById('del'),
    document.getElementById('equals')
    
];

var output = document.getElementById('output');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        input(button.id);
    });
});

function toSeconds(string) {
    var hours, minutes, seconds = [];

    console.log(string.match(/[hms]/));

    switch(string.match(/[hms]/)[0]) {
        case "h":
            hours = string.split('h');
            minutes = hours[1].split('m');
            seconds = minutes[1].split('s')[0];
            hours = hours[0];
            minutes = minutes[0];
            break;
        case "m":
            minutes = string.split('m');
            seconds = minutes[1].split('s')[0];
            minutes = minutes[0];
            hours = 0;
            break;
        case "s":
            hours = 0;
            minutes = 0;
            seconds = string.split('s');
            break;
    }

    minutes = parseInt(minutes) + hours*60;
    seconds = parseInt(seconds) + minutes*60;
    console.log(seconds);
}

function calculate(input) {

    try{
        input.match(/\d/)[0];
    }
    catch (error) {
        alert('Invalid input!');
        document.getElementById('output').innerHTML = '0';
    }

    input = input.split(' ');
    console.log(input);
    input.forEach((string) => {
        switch(string){
            case ('+'):
                console.log('Add!');
                break;

            case('-'):
                console.log('Subtract!');
                break;

            case('*'):
                console.log('multiply!');
                break;

            case('/'):
                console.log('divide!');
                break;

            default:
                toSeconds(string);
                break;
        }
    });
}

// document.getElementById('output').innerHTML = '0';