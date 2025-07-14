# Two Knights

**Time limit**: 1.00 s
**Memory limit**: 512 MB

Your task is to count, for `k=1,2,...,n`, the number of ways two knights can be placed on a `k * k` chessboard so that they do not attack each other.

## Input

The only input line contains an integer `n`.

## Output

Print `n` integers: the results for each `k` from 1 to `n`.

## Constraints

- `1 ≤ n ≤ 1000`

## Example

**Input**:

- `8`

**Output**:

- `0`
- `6`
- `28`
- `96`
- `252`
- `550`
- `1056`
- `1848`

## Solution explanation

#### Board combinations

- First, we calculate the number of positions on the board where 2 knights can be placed.

- Here is a visual representation for a `2 * 2` board:
  **Example placements for `2 * 2`**

```
// Grid
["A", "B"]
["C", "D"]

// A & B
["k1", "k2"]
["  ", "  "]

// A & C
["k1", "  "]
["k2", "  "]

// A & D
["k1", "  "]
["  ", "k2"]

// B & C
["  ", "k1"]
["k2", "  "]

// B & D
["  ", "k1"]
["  ", "k2"]

// C & D
["  ", "  "]
["k1", "k2"]
```

- We want **combinations** rather than **permutations**.
  Starting from `A`, pair it with `B`, `C`, and `D`.
  Then from `B`, pair it with `C` and `D`, and so on, without repeating pairs like `B + A`.

- The unique pairs are:

  - `A + B`
  - `A + C`
  - `A + D`
  - `B + C`
  - `B + D`
  - `C + D`

- The formula behind this is: for board size `k`, number of squares is `k^2`.
  The total number of unique 2-knight placements is:

```
(k^2 * (k^2 - 1)) / 2
```

- Each `2×3` or `3×2` rectangle contains exactly 2 pairs of attacking knight positions.

- Since a `2 * 2` board is too small for a knight to move, it has no attacking positions, so all combinations are safe.

- A `1 * 1` board cannot fit two knights, so the output is `0`.

- On a `k * k` board, the number of attacking knight pairs is:

```
4 * (k - 1) * (k - 2)
```

- To find the **non-attacking** or **safe** positions, subtract the attacking pairs from total combinations:

```
(k^2 * (k^2 - 1)) / 2 - 4 * (k - 1) * (k - 2)
```

---

### JavaScript solution

#### Time complexity: `O(n)`

#### Space complexity: `O(n)`

- Check if `k <= 1`; if so, return `0`.

- Loop from `1` to `k`.

- Print the result of total combinations minus attacking moves for each board size.

---

### Python solution

#### Time complexity: `O(n)`

#### Space complexity: `O(n)`

- Same principle as JavaScript.

- Uses variables `total_combinations` and `attacking_moves` instead of helper functions.

- Early print of `0` for `i == 1`.
