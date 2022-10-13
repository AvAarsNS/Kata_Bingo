# Kata Kata_Bingo

End to end 

Scenario 1: bingo on the first horizontal line

card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'I16', 'N31', 'G46', 'O61']

Bingo? TRUE

Atomic behaviors:
Extract number from letter/number combi

✔B1 --> 1
✔IOO15 --> 15

Extract letter from letter/number combi

🍚 B1 --> B
🍜 IOO15 --> I

Determine if one of the numbers is on the card

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

Atomic behavior - Number range by letter
🍗- B --> 1-15
🍕 - I --> 16-30
🥞 - N --> 31-45
🍟- G --> 46-60
🧀- O --> 61-75
🥐- Z --> not in range

Atomic behavior - Does the number belong to the range
🍘- G61 --> false
🍙- I18 --> true
🍚- N37 --> true

Determine bingo on a horizontal line

Scenario 2: bingo on the first vertical line

card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'B3', 'B5', 'B7', 'B9']

Bingo? TRUE

Scenario 3: bingo on the first diagonal line

card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'I18', 'G52', 'O69']

Bingo? TRUE

Scenario x: no bingo

card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'I16', 'N31', 'G46']

Bingo? FALSE
