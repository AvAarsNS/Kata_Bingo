const {
    translateNumberToLetter,
    translateListOfNumbersToLetters,
    isLetterInList,
    isBingoInList,
    bingoResult
} = require('../src/template');
describe(`This is a testsuite for the BINGO kata,
where we have to find all letters of BINGO in a list of 10 numbers,
each representing one letter of the alphabet.
`, () => {
    describe('We want to translate numbers to letters', () => {
        it('1 represents A', () => {
            expect(translateNumberToLetter(1)).toEqual('A');
        });
        it('2 represents B', () => {
            expect(translateNumberToLetter(2)).toEqual('B');
        });
        it('26 represents Z\n', () => {
            expect(translateNumberToLetter(26)).toEqual('Z');
        });
    });
    describe('We want to translate a list of numbers to letters', () => {
        it('[1] becomes [A]', () => {
            expect(translateListOfNumbersToLetters([1])).toEqual(['A']);
        });
        it('[1,2] becomes [A,B]', () => {
            expect(translateListOfNumbersToLetters([1,2])).toEqual(['A','B']);
        });
        it('[1,2,3,4,5,21,22,23,24,25] becomes [A,B,C,D,E,F,G,U,V,W,X,Y]\n', () => {
            expect(translateListOfNumbersToLetters([1,2,3,4,5,21,22,23,24,25])).toEqual(['A','B','C','D','E','U','V','W','X','Y']);
        });
    });
    describe('We want to find a specific letter in a list of letters', () => {
        it('A is in the list [A]', () => {
            expect(isLetterInList('A', ['A'])).toEqual(true);
        });
        it('A is NOT in an empty list', () => {
            expect(isLetterInList('A', [])).toEqual(false);
        });
        it('A is NOT in the list [B]\n', () => {
            expect(isLetterInList('A', ['B'])).toEqual(false);
        });
    });
    describe('We want to find all letters of BINGO in a list of letters', () =>{
        it('The list [B,I,N,G,O] contains all letters of BINGO', () => {
            expect(isBingoInList(['B','I','N','G','O'])).toEqual(true);
        });
        it('The list [B,U,N,G,O] does not contain the I, so it does NOT contain all letters of BINGO', () => {
            expect(isBingoInList(['B','U','N','G','O'])).toEqual(false);
        });
        it('An empty list does NOT contain any letters of BINGO', () => {
            expect(isBingoInList([])).toEqual(false);
        });
        it('The list [Y,I,N,G,O,S,T,D,H,F] contains 10 letters, but does not contain the B, so it does NOT contain all letters of BINGO', () => {
            expect(isBingoInList(['Y','I','N','G','O','S','T','D','H','F'])).toEqual(false);
        });
        it('The list [F,B,I,N,G,O,S,T,D,H] contains 10 letters and contains all letters of BINGO\n', () => {
            expect(isBingoInList([,'F','B','I','N','G','O','S','T','D','H'])).toEqual(true);
        });
    });
    describe('Finally, we want to play the full game of bingo, where we have a list of 10 numbers, and we know if we WIN or LOSE', () => {
        it('If we have the list [1,2,3,4,5,6,7,8,9,10], we LOSE the game 😖', () => {
            expect(bingoResult([1,2,3,4,5,6,7,8,9,10])).toEqual('LOSE');
        });
        it('If we have the list [1,2,3,9,4,7,5,14,6,15], we WIN the game 🎉', () => {
            expect(bingoResult([1,2,3,9,4,7,5,14,6,15])).toEqual('WIN');
        });
    });
});




