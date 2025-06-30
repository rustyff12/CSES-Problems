const test1 = [2, 3, 1, 5];

function missingNum(arr) {
  const sorted = arr.sort((a, b) => a - b);

  let res = 0;

  for (let i = 0; i <= sorted.length - 1; i++) {
    if (i > 0) {
      const current = sorted[i];
      const previous = sorted[i - 1];

      if (current - previous > 1) {
        res = i + 1;
      }
    }
  }
  return res;
}

console.log(missingNum(test1));

function altMissingNum(arr, num) {
  const sumOfN = Array(num + 1)
    .fill(0)
    .map((_, i) => i)
    .reduce((a, b) => a + b, 0);

  const sumArr = arr.reduce((a, b) => a + b, 0);

  return sumOfN - sumArr;
}

console.log(altMissingNum(test1, 5));
