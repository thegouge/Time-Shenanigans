function input(button) {
    if (output.innerHTML === "0") { output.innerHTML = '' }
    switch (button) {
        case "1":
            output.innerHTML += button;
            break;

        case "2":
            output.innerHTML += button;
            break;

        case "3":
            output.innerHTML += button;
            break;

        case "4":
            output.innerHTML += button;
            break;

        case "5":
            output.innerHTML += button;
            break;

        case "6":
            output.innerHTML += button;
            break;

        case "7":
            output.innerHTML += button;
            break;

        case "8":
            output.innerHTML += button;
            break;

        case "9":
            output.innerHTML += button;
            break;

        case "0":
            output.innerHTML += button;
            break;

        case "c":
            output.innerHTML = "";
            break;

        case "h":
            output.innerHTML += "h";
            break;

        case "m":
            output.innerHTML += "m";
            break;

        case "s":
            output.innerHTML += "s";
            break;

        case "x":
            output.innerHTML += " * ";
            break;

        case "d":
            output.innerHTML += " / ";
            break;

        case "pl":
            output.innerHTML += " + ";
            break;

        case "min":
            output.innerHTML += " - ";
            break;

        case "del":
            if(output.innerHTML.slice(-1) == " ") {
                output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 2);
            }
            output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
            break;

        case "equals":
            calculate(output.innerHTML);
            break;
    }

    if(output.innerHTML == '') {output.innerHTML = "0"}

    document.getElementById('output').innerHTML = output.innerHTML;
}