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

function calculate(input) {
    var result = '';

    try{
        input.match(/\d/)[0];
    }
    catch (error) {
        alert('Invalid input!');
        document.getElementById('output').innerHTML = '0';
    }

    input = input.split(' ');
    input.forEach((string) => {

        if(string.length > 1) {
            string = toSeconds(string);
        }

        result = result + string;
    });

    result = eval(result);

    notate(result);
}

// document.getElementById('output').innerHTML = '0';