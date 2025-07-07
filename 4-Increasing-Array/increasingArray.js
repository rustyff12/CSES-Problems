const test1 = [3, 2, 5, 1, 7];
const test2 = [1, 2, 4, 6, 4, 2];
const test3 = [1, 2, 4, 6, 7, 8];

function increasingArray(arr) {
  let moves = 0;
  let isSorted = false;

  while (!isSorted) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      const prev = arr[i - 1];

      if (i === arr.length - 1) {
        if (current >= prev) {
          isSorted = true;
        } else {
          arr[i] = arr[i] + 1;
          moves++;
        }
      }
      if (current < prev) {
        arr[i] = arr[i] + 1;
        moves++;

        i = 1;
      }
    }
  }

  return moves;
}

// console.log(increasingArray(test1)); // 5
// console.log(increasingArray(test2)); // 6
// console.log(increasingArray(test3)); // 0

function altIncreasingArray(arr) {
  let moves = 0;
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const prev = arr[i - 1];
    const difference = prev - current;
    if (difference > 0) {
      arr[i] = arr[i] + difference;
      moves += difference;
    }
  }
  return moves;
}

// console.log(altIncreasingArray(test1)); // 5
// console.log("===========");
// console.log(altIncreasingArray(test2)); // 6
// console.log("===========");
// console.log(altIncreasingArray(test3)); // 0

function increasingArrayAlt(arr) {
  let moves = 0;
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < prev) {
      moves += prev - arr[i];
    } else {
      prev = arr[i];
    }
  }
  return moves;
}

console.log(increasingArrayAlt(test1)); // 5
console.log("===========");
console.log(increasingArrayAlt(test2)); // 6
console.log("===========");
console.log(increasingArrayAlt(test3)); // 0
