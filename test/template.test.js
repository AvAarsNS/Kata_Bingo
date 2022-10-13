const {
    translateNumberToLetter,
    translateListOfNumbersToLetters,
    isLetterInList,
    isBingoInList
} = require('../src/template');
describe('This is a testsuite for the BINGO kata', () => {
    describe('We want to translate numbers to letters', () => {
        it('1 -> A', () => {
            expect(translateNumberToLetter(1)).toEqual('A');
        });
        it('2 -> B', () => {
            expect(translateNumberToLetter(2)).toEqual('B');
        });
        it('26 -> Z', () => {
            expect(translateNumberToLetter(26)).toEqual('Z');
        });
    });
    describe('We want to translate a list of numbers to letters', () => {
        it('[1] -> [A]', () => {
            expect(translateListOfNumbersToLetters([1])).toEqual(['A']);
        });
        it('[1,2] -> [A,B]', () => {
            expect(translateListOfNumbersToLetters([1,2])).toEqual(['A','B']);
        });
        it('[1,2,3,4,5,21,22,23,24,25] -> [A,B,C,D,E,F,G,U,V,W,X,Y]', () => {
            expect(translateListOfNumbersToLetters([1,2,3,4,5,21,22,23,24,25])).toEqual(['A','B','C','D','E','U','V','W','X','Y']);
        });
    });
    describe('We want to find a letter in a list of letters', () => {
        it('A in [A] -> true', () => {
            expect(isLetterInList('A', ['A'])).toEqual(true);
        });
        it('A in [] -> false', () => {
            expect(isLetterInList('A', [])).toEqual(false);
        });
        it('A in [B] -> false', () => {
            expect(isLetterInList('A', ['B'])).toEqual(false);
        });
    });
    describe('We want to find BINGO in the list of letters', () =>{
        it('[B,I,N,G,O] => true', () => {
            expect(isBingoInList(['B','I','N','G','O'])).toEqual(true);
        });
        it('[B,U,N,G,O] => false', () => {
            expect(isBingoInList(['B','U','N','G','O'])).toEqual(false);
        });
        it('[] => false', () => {
            expect(isBingoInList([])).toEqual(false);
        });
        it('[Y,I,N,G,O,S,T,D,H,F] => false', () => {
            expect(isBingoInList(['Y','I','N','G','O','S','T','D','H','F'])).toEqual(false);
        });
        it('[F,B,I,N,G,O,S,T,D,H] => true', () => {
            expect(isBingoInList([,'F','B','I','N','G','O','S','T','D','H'])).toEqual(true);
        });
    });
});




