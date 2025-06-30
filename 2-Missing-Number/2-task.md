# Missing Number

**Time limit**: 1.00 s
**Memory limit**: 512 MB

You are given all numbers between `1,2,...,n` except one. Your task is to find the missing number.

## Input

- The first input line contains an integer `n`.

- The second line contains `n-1` numbers. Each number is distinct and between `1` and `n` (inclusive).

## Output

Print the missing number.

## Constraints

`2 ≤ n ≤ 2 · 10^5`

## Example

**Input**:
`5`
`2 3 1 5`

**Output**:
4

## Solution explanation

### js

#### First solve

My initial solve was as follows:

- First I create a variable called `sorted` that uses the built in js `Array.prototype.sort()` method

- I then loop through the sorted array and do a simple comparison checking for if the `current` number minus the `previous` is greater than `1`

- The length of the array is always `n - 1` and as there are no duplicate numbers we can asssume that any number that is greater than `1` in the the comparison of `current - previous > 1` will be the missing number

I then realised that actual it is as simple as the sum on `1` to `N` minus the sum of the actual array given
