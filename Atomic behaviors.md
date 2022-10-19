# Kata Kata_Bingo

Atomic Behaviors

Extract number from letter/number combi
✔B1 --> 1
✔IOO15 --> 15

Extract letter from letter/number combi
🍚 B1 --> B
🍜 IOO15 --> I

Check whether element is part of an array
✔number = 1
array = [1, 2]
output = true

✔number = 4
array = [1, 2]
output = false

✔number = 4
array = [1, 2, 40]
output = false

Number range by letter
🍗- B --> 1-15
🍕- I --> 16-30
🥞- N --> 31-45
🍟- G --> 46-60
🧀- O --> 61-75
🥐- Z --> not in range

Does the number belong to the range
🍘- G61 --> false
🍙- I18 --> true
🍚- N37 --> true

Is the bingo card valid?

Given this card:
card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

✔- B1 --> true
✔- I16 --> true
✔- O61 --> true

🍕I20 --> true
🍕I21 --> false
🍕N52 --> true
🍕G68 --> false

Validate if the bingo card has a BINGO header

🍔[B, I] --> false
🍕[B, I, N, G, O] --> true
🍳[B, I, N, G, O, K] --> false

Validate if the bingo card has the correct amount of rows

Validate if the bingo row has the correct amount of numbers

Validate if FREE SPACE is positioned correctly

Validate if a column contains the numbers correlating to its letter

Validate the whole bingo card
**Given this card:
card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]
Outcome: true

Given this card:
card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 99, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]
Outcome: false

Given this card:
card = [
  ['X', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]
Outcome: false

Given this card:
card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54]
]
Outcome: false

Given this card:
card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'Not a free space', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]
Outcome: true

Given this card:
card = [
  ['B', 'I', 'N', 'G', 'O'],
  ['FREE SPACE', 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 40, 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]
Outcome: false