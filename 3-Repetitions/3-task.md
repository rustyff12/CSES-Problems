# Repetitions

**Time limit**: 1.00 s
**Memory limit**: 512 MB

You are given a DNA sequence: a string consisting of characters `A`, `C`, `G`, and `T`. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.

## Input

The only input line contains a string of n characters.

## Output

Print one integer: the length of the longest repetition.
Constraints

`1 ≤ n ≤ 10^6`

## Example

**Input**:
`ATTCGGGA`

**Output**:
3

## Solution explanation

### js

#### Time complexity: O(n)

#### Space complexity: O(1)

- First check if the string length is `0` or `1`. If this is the case there is a quick retutn

- Create two variables `maxLength` and `currentLength`

- Start the loop at an index of 1. Starting at an index of 0 will mean when we check for `str[i -1]` it will be out of bounds

- If the current character (`str[i]`) is the same as the previous (`str[i - 1]`) this would mean that the streak is continuing, so therefore we increase the variable `currentLength`

- If not, then we reset the `currentLength` to `1`

- Outside of the if else statement we take the max between `maxLength` and `currentLength` this will update our `maxLength` every loop and also handle edge cases like when the very last character is different

### Python

#### Time complexity: `O(n)`

#### Space complexity: `O(1)`

- First check if the string length is `0` or `1`. Return `0` or `1` immediately in those cases.

- Initialize `max_length` and `current_length` to `1` to begin counting from the first character.

- Use a variable `current_char` to keep track of the character currently being repeated.

- Loop through the string starting from the second character (`str[1:]`):

  - If the character matches `current_char`, increment `current_length`.

    - If `current_length` is greater than `max_length`, update `max_length`.

  - If it doesn't match, reset `current_char` to the new character and set `current_length` to `1`.

- After the loop, `max_length` will contain the length of the longest repetition and is returned as the result.
