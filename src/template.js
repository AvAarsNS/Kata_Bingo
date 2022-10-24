const rangeB = [1, 15] 
const rangeI = [16, 30]
const rangeN = [31, 45]
const rangeG = [46, 60]
const rangeO = [61, 75]


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
    if (letter == 'B') {
        return rangeB
   
    } else if (letter == 'I') {
        return rangeI
    
    } else if (letter == 'N') {
        return rangeN
        
    } else if (letter == 'G') {
        return rangeG
        
    } else if (letter == 'O') {
        return rangeO    
    } else 
    return [0, 0]
}

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