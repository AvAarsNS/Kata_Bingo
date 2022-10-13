# Kata Kata_Bingo
## Description of the kata
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
## Atomic behaviours
Translate number to letter
- 1 -> A ✔
- 2 -> B ✔
- 26 -> Z ✔

Translate list of numbers to letters
- [1] -> [A] ✔
- [1,2] -> [A,B] ✔
- [1,2,3,4,5,21,22,23,24,25] -> [A,B,C,D,E,F,G,U,V,W,X,Y] ✔

Find letter in list of letters
- A in [A] -> true ✔
- A in [] -> false ✔
- A in [B] -> false ✔

Find all letters of bingo in a list of letters
- [B,I,N,G,O]  -> true ✔
- [B,U,N,G,O] -> false ✔
- [] -> false ✔
- [Y,I,N,G,O,S,T,D,H,F]  -> false ✔
- [F,B,I,N,G,O,S,T,D,H]  -> true ✔

E2E testcases
- [1,2,3,4,5,6,7,8,9,10] -> LOSE ✔
- [1,2,3,9,4,7,5,14,6,15] -> WIN ✔

## Guard clauses
- Number is always between 1 and 26 (inclusive)
- Numbers in list are unique









