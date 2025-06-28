const test1 = 3;
const test2 = 4;
const test3 = 37;

function collatz(currentNumber) {
  let result = "";
  let foundOne = false;
  while (foundOne === false) {
    if (currentNumber === 1) {
      foundOne = true;
      result += `${currentNumber}`;
    } else if (currentNumber % 2 === 0) {
      result += `${currentNumber} `;
      currentNumber /= 2;
    } else {
      result += `${currentNumber} `;
      currentNumber = currentNumber * 3 + 1;
    }
  }

  return result;
}

console.log(collatz(test1)); // 3 10 5 16 8 4 2 1
console.log(collatz(test2)); // 4 2 1
console.log(collatz(test3)); // 37 112 56 28 14 7 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
