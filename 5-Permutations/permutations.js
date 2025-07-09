const test1 = 5;
const test2 = 3;
const test3 = 4;
const test4 = 1;
const test5 = 2;

function permutations(num) {
  if (num === 1) {
    return [1];
  }

  if (num < 4) {
    return "NO SOLUTION";
  }
  let even = [];
  let odds = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odds.push(i);
    }
  }

  return even.concat(odds);
}

console.log(permutations(test1)); // [2, 4, 1, 3, 5]
console.log(permutations(test2)); // NO SOLUTION
console.log(permutations(test3)); // [2, 4, 1, 3]
console.log(permutations(test4)); // [1]
console.log(permutations(test5)); // NO SOLUTION
