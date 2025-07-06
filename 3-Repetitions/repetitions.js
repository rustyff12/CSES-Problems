const test1 = "ATTCGGGA";

function maxRepetitions(str) {
  if (str.length === 0) {
    return 0;
  } else if (str.length === 1) {
    return 1;
  }

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentLength++;
    } else {
      currentLength = 1;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log(maxRepetitions(test1));
