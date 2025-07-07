# Increasing Array

**Time limit**: 1.00 s
**Memory limit**: 512 MB

You are given an array of n integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element.

On each move, you may increase the value of any element by one. What is the minimum number of moves required?

## Input

The first input line contains an integer n: the size of the array.

Then, the second line contains n integers x<sub>1</sub>
, x<sub>2</sub> ,...., x<sub>n</sub>: the contents of the array.

## Output

Print the minimum number of moves.

- `1 ≤ n ≤ 2 · 10^5`
- `1 ≤ x_i ≤ 10^9`

## Example

**Input**:

- `5`

- `3 2 5 1 7`

**Output**:

- `5`

## Solution explanation

### js

I have more than one solution for js.

#### Solution 1

#### Time complexity: `O(n * m)`

- This was a little bit of a "hack my way to a soulution".

- I initially solved it the way a person would with a pencil.

- I created a variable called `isSorted` to keep track of if the array was increasing in order

- There was then a while loop checking for that condition.

- The stoping condition or halting condition was `if i === arr.length - 1` and `if current >= prev`

- If a array element is smaller than the previous element I mutate the current element by increasing it by 1.

- I then reset `i` to be `1` thus starting the loop again

#### Space complexity: `O(1)`

### Python

#### Time complexity: `__`

#### Space complexity: `__`
