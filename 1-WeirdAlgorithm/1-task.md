# 1. Weird Algorithm

### (Actually called the collatz conjecture)

**Time limit**: 1.00 s
**Memory limit**: 512 MB

Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. For example, the sequence for n=3 is as follows:7

`3 → 10 → 5 → 16 → 8 → 4 → 2 → 1`

Your task is to simulate the execution of the algorithm for a given value of `n`.

## Input

The only input line contains an integer `n`.

## Output

Print a line that contains all values of `n` during the algorithm.

Constraints

`1 ≤ n ≤ 10^6`

Example
Input:
3

Output:
3 10 5 16 8 4 2 1

---

## Solution explanation

- I solved the `Weird Algorithm` in both `javaScript` and `python`

- Java script uses an iterative approach where as in python I am using recursion.

- In both cases they ask the question `Is the number even or odd`. If it is `even` the number is added to the result string and then the number is multiplied by 2. If the number is `odd` then the number is once again added to the result string and the number is then multiplied by three and has one added (to make it now even otherwise we would infinitely grow the number).

- When the number is equally to `1` we stop otherwise we eneter an infinite loop of : `1 → 4 → 2 → 1`

- Using recursion is probably unecesssary, but I wanted to do separate style of solution

- As there is no known soloution to the Collatz conjecture/problem we cannot actually say what the time complexity is

- The same thing goes for the space complexity

- They both however grow linerally as the numnber of steps increases
