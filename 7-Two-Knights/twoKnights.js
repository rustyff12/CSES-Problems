function boardCombinations(k) {
  return (k * k * (k * k - 1)) / 2;
}

function moves(k) {
  if (k < 3) {
    return 0;
  }
  return 4 * (k - 1) * (k - 2);
}

function twoKnoights(k) {
  if (k <= 1) {
    return 0;
  }
  for (let i = 1; i <= k; i++) {
    const current = boardCombinations(i) - moves(i);
    console.log(current);
  }
  return "Finished";
}

console.log(twoKnoights(8));
// console.log(twoKnoights(1));
// console.log(twoKnoights(2));
// console.log(twoKnoights(3));
// console.log(twoKnoights(4));
