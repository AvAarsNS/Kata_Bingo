const { checkIfNumberIsOnCard, extractNumberFromString, checkWhatRangeBelongsToLetter, checkIfNumberIsInRangeOfLetter, extractLetterFromString, isMyNumberInThisBingoRow } = require('../src/template');

describe('When checking whether a number is on a card, we first want to extract the number from the letter/number combination ', () => {
    it('B1 --> 1', () => {
        expect(extractNumberFromString("B1")).toEqual(1);    
    });
    it('IOO15 --> 15', () => {
        expect(extractNumberFromString("IOO15")).toEqual(15);
    });
});

describe('When checking whether a number is on a card, we want to extract the letter from the letter/number combination ', () => {
    it('B1 --> B', () => {
        expect(extractLetterFromString("B1")).toEqual('B');
    });
    it('I15 --> I', () => {
        expect(extractLetterFromString("I15")).toEqual('I');
    });
});

describe('We have to check what is the range per letter', () => {
    it('B contains 1 to 15', () => {
        const letter = 'B'
        expect(checkWhatRangeBelongsToLetter(letter)).toEqual([1, 15]);
    });
    it('I contains 16 to 30', () => {
        const letter = 'I'
        expect(checkWhatRangeBelongsToLetter(letter)).toEqual([16, 30]);
    });
    it('N contains 31 to 45', () => {
        const letter = 'N'
        expect(checkWhatRangeBelongsToLetter(letter)).toEqual([31, 45]);
    });
    it('G contains 46 to 60', () => {
        const letter = 'G'
        expect(checkWhatRangeBelongsToLetter(letter)).toEqual([46, 60]);
    });
    it('O contains 61 to 75', () => {
        const letter = 'O'
        expect(checkWhatRangeBelongsToLetter(letter)).toEqual([61, 75]);
    });
    it('Z --> not in range', () => {
        const letter = 'Z'
        expect(checkWhatRangeBelongsToLetter(letter)).toEqual('not in range');
    });
});

describe('We want to check if a number is part of a bingo row', () => {
    it(`number = 1
    bingoRow = [1, 2]
    output = true`, () => {
        const bingoRow = [1,2]
        const number = 1
        expect(isMyNumberInThisBingoRow(bingoRow, number)).toEqual(true);
        });
    it(`number = 4
    bingoRow = [1, 2]
    output = false`, () => {
        const bingoRow = [1, 2]
        const number = 4
        expect(isMyNumberInThisBingoRow(bingoRow, number)).toEqual(false);
    });
    it(`number = 4
    bingoRow = [1, 2, 40]
    output = false`, () => {
        const bingoRow = [1, 2, 40]
        const number = 4
        expect(isMyNumberInThisBingoRow(bingoRow, number)).toEqual(false);
    });
});

describe('We have to check if the number is in the range of the letter', () => {
    it('G61 --> ❌', () => {
        const number = 'G61'
        expect(checkIfNumberIsInRangeOfLetter(number)).toEqual(false);
    });
    it('I18 --> ✔', () => {
        const number = 'I18'
        expect(checkIfNumberIsInRangeOfLetter(number)).toEqual(true);
    });
    it('N37 --> ✔', () => {
        const number = 'N37'
        expect(checkIfNumberIsInRangeOfLetter(number)).toEqual(true);
    });
});

describe('We have to check if a number is present on the card', () => {
    const card = [
        ['B', 'I', 'N', 'G', 'O'],
        [1, 16, 31, 46, 61],
        [3, 18, 33, 48, 63],
        [5, 20, 'FREE SPACE', 50, 65],
        [7, 22, 37, 52, 67],
        [9, 24, 39, 54, 69]
    ]
    it('B1 --> true', () => {
        const number = 'B1'
        expect(checkIfNumberIsOnCard(card, number)).toEqual(true);        
    });
    it('I16 --> true', () => {
        const number = 'I16'
        expect(checkIfNumberIsOnCard(card, number)).toEqual(true);
    });
    it('O61 --> true', () => {
        const number = 'O61'
        expect(checkIfNumberIsOnCard(card, number)).toEqual(true);
    });
    // it('I20 --> true', () => {
    //     const number = 'I20'
    //     expect(checkIfNumberIsOnCard(card, number)).toEqual(true);
    // });
}); 