const { checkIfNumberIsOnCard, extractNumberFromString, checkWhatRangeBelongsToLetter, checkIfNumberIsInRangeOfLetter, 
    extractLetterFromString, isMyNumberInThisBingoRow, validateBingoHeader, validateAmountOfRowsInBingoCard, validateAmountOfCharactersInBingoRow } = require('../src/template');

    
describe('This test suite describes the game of bingo. A player has a bingo card. During the bingo game, numbers are drawn. For every number drawn, we check if and where the number appears on the card. If a player has a bingo card with numbers checked in the horizontal, vertical or diagonal, the player wins the Bingo game', () => {
    describe('The first step is to validate the whole bingo card', () => {
        describe('Check if the bingo card has a BINGO header', () => {
            it('[B, I] --> false', () => {
                const bingoHeader = ['B', 'I']
                expect(validateBingoHeader(bingoHeader)).toEqual(false);
            });
            it('[B, I, N, G, O] --> true', () => {
                const bingoHeader = ['B', 'I', 'N', 'G', 'O']
                expect(validateBingoHeader(bingoHeader)).toEqual(true);
            });
            it('[B, I, N, G, O, K] --> false', () => {
                const bingoHeader = ['B', 'I', 'N', 'G', 'O', 'K']
                expect(validateBingoHeader(bingoHeader)).toEqual(false);
            });
        });

        describe('Check if the bingo card has 6 rows', () => {
            it(`['B', 'I', 'N', 'G', 'O'] --> false`, () => {
                const card = ['B', 'I', 'N', 'G', 'O']
                expect(validateAmountOfRowsInBingoCard(card)).toEqual(false);

            });
            it(` card = [
        ['B', 'I', 'N', 'G', 'O'],
        [1, 16, 31, 46, 61],
        [3, 18, 33, 48, 63],              --> true
        [5, 20, 'FREE SPACE', 50, 65],
        [7, 22, 37, 52, 67],
        [9, 24, 39, 54, 69]
]`, () => {
                const card = [
                    ['B', 'I', 'N', 'G', 'O'],
                    [1, 16, 31, 46, 61],
                    [3, 18, 33, 48, 63],
                    [5, 20, 'FREE SPACE', 50, 65],
                    [7, 22, 37, 52, 67],
                    [9, 24, 39, 54, 69]
                ]
                expect(validateAmountOfRowsInBingoCard(card)).toEqual(true);

            });
        });
        describe('Validate if the bingo row has the correct amount of characters', () => {
            it(`['B', 'I', 'N', 'G', 'O'] --> true`, () => {
                const bingoRow = ['B', 'I', 'N', 'G', 'O']
                expect(validateAmountOfCharactersInBingoRow(bingoRow)).toEqual(true);

            });

            it(`[1, 16, 31, 46, 61, 20] --> false`, () => {
                const bingoRow = [1, 16, 31, 46, 61, 20]
                expect(validateAmountOfCharactersInBingoRow(bingoRow)).toEqual(false);

            });

        });

    })

    describe('A player will have a list of drawn bingo numbers. These numbers actually consist of a letter AND a number. In order to check if the player has a bingo, we first need to extract the letter and the number.', () => {
        describe('We first want to extract the number from the letter/number combination ', () => {
            it('B1 --> 1', () => {
                expect(extractNumberFromString("B1")).toEqual(1);
            });
            it('IOO15 --> 15', () => {
                expect(extractNumberFromString("IOO15")).toEqual(15);
            });
        });

        describe('We then want to extract the letter from the letter/number combination ', () => {
            it('B1 --> B', () => {
                expect(extractLetterFromString("B1")).toEqual('B');
            });
            it('I15 --> I', () => {
                expect(extractLetterFromString("I15")).toEqual('I');
            });
        });
    });

    describe('The bingocard contains a row for each letter of the word BINGO. These rows contain a fixed range of numbers. We have to check if the numbers of the player are valid', () => {
        describe('First we check the range per letter', () => {
            it('B --> 1 to 15', () => {
                const letter = 'B'
                expect(checkWhatRangeBelongsToLetter(letter)).toEqual([1, 15]);
            });
            it('I --> 16 to 30', () => {
                const letter = 'I'
                expect(checkWhatRangeBelongsToLetter(letter)).toEqual([16, 30]);
            });
            it('N --> 31 to 45', () => {
                const letter = 'N'
                expect(checkWhatRangeBelongsToLetter(letter)).toEqual([31, 45]);
            });
            it('G --> 46 to 60', () => {
                const letter = 'G'
                expect(checkWhatRangeBelongsToLetter(letter)).toEqual([46, 60]);
            });
            it('O --> 61 to 75', () => {
                const letter = 'O'
                expect(checkWhatRangeBelongsToLetter(letter)).toEqual([61, 75]);
            });
            it('Z --> not in range', () => {
                const letter = 'Z'
                expect(checkWhatRangeBelongsToLetter(letter)).toEqual([0, 0]);
            });
        });

        describe('Then we validate if the number is in the range', () => {
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

    });

    describe('To play bingo, we have to check if the numbers are on the card. ', () => {
        describe('First we check if a number is part of a bingo row', () => {
            it(`number = 1
        bingoRow = [1, 2]
        output = true`, () => {
                const bingoRow = [1, 2]
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

        describe('Then we check if a number is present on the card', () => {
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
            it('I20 --> true', () => {
                const number = 'I20'
                expect(checkIfNumberIsOnCard(card, number)).toEqual(true);
            });
            it('I21 --> false', () => {
                const number = 'I21'
                expect(checkIfNumberIsOnCard(card, number)).toEqual(false);
            });
            it('N52 --> true', () => {
                const number = 'N52'
                expect(checkIfNumberIsOnCard(card, number)).toEqual(true);
            });
            it('G68 --> false', () => {
                const number = 'G68'
                expect(checkIfNumberIsOnCard(card, number)).toEqual(false);
            });
        });

    });
});   



