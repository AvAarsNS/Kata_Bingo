function checkIfNumberIsOnCard(card, number) {
    var numberWithoutTheLetter = extractNumberFromString(number);
    var foundTheNumberOnTheCard = false
    for (let bingoRow = 0; bingoRow < card.length; bingoRow++) {
        const row = card[bingoRow];
        if (isMyNumberInThisBingoRow(row, numberWithoutTheLetter)) {
            foundTheNumberOnTheCard = true
        }
    }
    return foundTheNumberOnTheCard;
}


function isMyNumberInThisBingoRow(row, number) {
    return row.indexOf(number) > -1
}

function validateBingoHeader(bingoHeader) {
    const validBingoHeader = ['B', 'I', 'N', 'G', 'O']
    const validBingoHeaderString = JSON.stringify(validBingoHeader)
    const bingoHeaderToValidateString = JSON.stringify(bingoHeader)

    return bingoHeaderToValidateString == validBingoHeaderString
}


function extractNumberFromString(number) {
    return parseInt(number.replace(/[^0-9\.]+/g, ""));
}

function extractLetterFromString(number) {
    return number.replace(/[0-9]/g, '');
}

function checkWhatRangeBelongsToLetter(letter) {
    var range = [0,0]

    range = getTheRangeOfB(letter, range)
    range = getTheRangeOfI(letter, range)
    range = getTheRangeOfN(letter, range)
    range = getTheRangeOfG(letter, range)
    range = getTheRangeOfO(letter, range)

    return range
}

function getTheRangeOfB(letter, range) {
    if (letter == 'B'){
        range[0] = 1;
        range[1] = 15;
        return range
    }   return range
};

function getTheRangeOfI(letter, range) {
    if (letter == 'I') {
        range[0] = 16;
        range[1] = 30;
        return range
    } return range
};

function getTheRangeOfN(letter, range) {
    if (letter == 'N') {
        range[0] = 31;
        range[1] = 45;
        return range
    } return range
};

function getTheRangeOfG(letter, range) {
    if (letter == 'G') {
        range[0] = 46;
        range[1] = 60;
        return range
    } return range
};

function getTheRangeOfO(letter, range) {
    if (letter == 'O') {
        range[0] = 61;
        range[1] = 75;
        return range
    }   return range
};

function checkIfNumberIsInRangeOfLetter(number) {
    const letter = extractLetterFromString(number);
    const digit = extractNumberFromString(number);
    const rangeOfLetter = checkWhatRangeBelongsToLetter(letter)
    const lowerBound = rangeOfLetter[0]
    const upperBound = rangeOfLetter[1]

    return digit >= lowerBound && digit <= upperBound
}

function validateAmountOfRowsInBingoCard(card) {
    return card.length == 6

}

function validateAmountOfCharactersInBingoRow(bingoRow) {
    return bingoRow.length == 5

}





module.exports = {
    checkIfNumberIsOnCard, extractNumberFromString, extractLetterFromString, checkWhatRangeBelongsToLetter,
    checkIfNumberIsInRangeOfLetter, isMyNumberInThisBingoRow, validateBingoHeader, validateAmountOfRowsInBingoCard, validateAmountOfCharactersInBingoRow
}