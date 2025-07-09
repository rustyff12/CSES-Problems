# Permutations

**Time limit**: 1.00 s
**Memory limit**: 512 MB

A permutation of integers `1,2,...,n` is called beautiful if there are no adjacent elements whose difference is `1`.
Given `n`, construct a `beautiful` permutation if such a permutation exists.

## Input

The only input line contains an integer `n`.

## Output

Print a beautiful permutation of integers `1,2,...,n`. If there are several solutions, you may print any of them. If there are no solutions, print `NO SOLUTION`.

## Constraints

- `1 ≤ n ≤ 10^6`

## Example 1

**Input**:

- `5`

  **Output**:

- `[4, 2, 5, 3, 1]`

## Example 2

**Input**:

- `3`

  **Output**:

- `NO SOLUTION`

## Solution explanation

### js

#### Time complexity: `O(n)`

#### Space complexity: `O(n)`

- If the input is `1`, then the answer is `1`

- For inputs `2` and `3` there are no valid solutions

- If `n` is equal to or greater than 4 there are valid solutions.

- The amount of solutions per `n` is actually an unsolved problem, and there is no known formula other than brute forcing

- So the easiest way is to take the odd numbers from `1` to `n` and keep them in a variable `odd`

- Do the same for even numbers and keep them in a variable called `even`

- The difference betweeen odds and evens will always allow for a `beautiful permutation` as the difference is always at least `2`, which is greater than `1`

- Concatenate the answer at the end

### Python

#### Time complexity: `O(n)`

#### Space complexity: `O(n)`

- The solution for `python` is basically identical to `js`
