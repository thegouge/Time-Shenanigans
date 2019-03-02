function calculate(input) {
  var result = "";

  try {
    input.match(/\d/)[0];
  } catch (error) {
    alert("Invalid input!");
  }

  input = input.split(" ");
  input.forEach((string) => {
    if (string.length > 1) {
      string = toSeconds(string);
    }

    result = result + string;
  });

  result = eval(result);

  notate(result);
}
