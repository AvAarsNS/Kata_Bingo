# Kata Kata_Bingo
## Description of the kata
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
## Atomic behaviours
Translate number to letter
- 1 -> A :heavy_check_mark:
- 2 -> B :heavy_check_mark:
- 26 -> Z :heavy_check_mark:
Translate list of numbers to letters
- [1] -> [A] :heavy_check_mark:
- [1,2] -> [A,B] :heavy_check_mark:
- [1,2,3,4,5,21,22,23,24,25] -> [A,B,C,D,E,F,G,U,V,W,X,Y] :heavy_check_mark:
Find letter in list of letters
- A in [A] -> true :heavy_check_mark:
- A in [] -> false :heavy_check_mark:
- A in [B] -> false :heavy_check_mark:
Find all letters of bingo in a list of letters
- [B,I,N,G,O]  -> true nonpm:heavy_check_mark:
- [B,U,N,G,O] -> false
- [] -> false
- [Y,I,N,G,O,S,T,D,H,F]  -> false
- [F,B,I,N,G,O,S,T,D,H]  -> true

## Guard clauses
- Number is always between 1 and 26 (inclusive)
- Numbers in list are unique









