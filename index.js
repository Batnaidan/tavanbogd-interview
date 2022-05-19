const inquirer = require("inquirer");
const questions = require("./questions");
function convertStringToNumberArray(input) {
  return input.split(" ").map((x) => Number(x));
}

inquirer.prompt(questions).then((answers) => {
  exercise1(answers.input1);
  exercise2(answers.input2, answers.input3);
});

// Exercise 1
function exercise1(input) {
  const [x] = convertStringToNumberArray(input);

  if (x <= 1 || x >= 2 * Math.pow(10, 9)) {
    return console.log("Invalid input");
  }

  let count = 0;

  let xQuarter = x / 4;

  if (xQuarter % 1 == 0) {
    // If all sides are equal decrement
    count = xQuarter - 1;
  } else {
    count = Math.floor(xQuarter);
  }

  console.log("Exercise 1 output: ", count);
}

// Exercise 2
function exercise2(input1, input2) {
  const [x] = convertStringToNumberArray(input1);
  const colorStock = convertStringToNumberArray(input2);

  if (x <= 1 || x >= 200000) {
    return console.log("Invalid input");
  }

  let lowestStockIndex = 0;
  let count = 0;

  for (let i = 0; i < colorStock.length; i++) {
    if (colorStock[i] <= colorStock[lowestStockIndex]) {
      lowestStockIndex = i;
    }
  }

  let i = lowestStockIndex == colorStock.length - 1 ? 0 : lowestStockIndex + 1;

  for (; i < colorStock.length; ) {
    if (colorStock[i] === 0) {
      console.log("Exercise 2 output: ", count);
      return;
    }

    if (colorStock[i] !== 0) {
      colorStock[i]--;
      count++;
    }

    // if i reached end of array, loop back to start
    if (i === colorStock.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }
}
