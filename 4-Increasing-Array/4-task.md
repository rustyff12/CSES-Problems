# Increasing Array

**Time limit**: 1.00 s
**Memory limit**: 512 MB

You are given an array of `n` integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element.

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

#### Space complexity: `O(1)`

- This was a little bit of a "hack my way to a soulution".

- I initially solved it the way a person would with a pencil.

- Firstly create a variable called `isSorted` to keep track of if the array was increasing in order

- There was then a while loop checking for that condition.

- The stoping condition or halting condition was `if i === arr.length - 1` and `if current >= prev`

- If a array element is smaller than the previous element I mutate the current element by increasing it by 1.

- Then reset `i` to be `1` thus starting the loop again

#### Solution 2

#### Time complexity: `O(n)`

#### Space complexity: `O(1)`

- This was more straightforward.

- It loops through the array from start to finish, starting at the second element

- It creates a variable `difference` that takes the `prev` element minus the `current` element.

- If the difference is greater than `0` it means that the `current` is smaller, so we then add the `difference` to the `current` and increase it in place

- We keep track of the total `moves` and return them at the end

### Python

#### Time complexity: `O(n)`

#### Space complexity: `O(1)`

- This Python solution is essentially equivalent to the second JS solution in logic.

- It uses a single pass through the array (starting at the second element).

- For each element, it compares it to the previous one. If it’s smaller, it calculates the difference.

- That difference represents how much we need to increase the current element to match the previous one — so we add that to a `count` variable that tracks the total number of moves.

- It also mutates the list in place by increasing the current element so it meets the increasing requirement.

- The use of a simple loop with a counter and in-place mutation makes this solution both readable and efficient.
