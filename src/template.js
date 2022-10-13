function checkIfNumberIsOnCard(card, number) {
    var numberWithoutTheLetter = extractNumberFromString(number);
        
    return card[1].includes(numberWithoutTheLetter);
}

function extractNumberFromString(number) {
    return parseInt(number.replace(/[^0-9\.]+/g, ""));
}

function extractLetterFromString(number) {
    return number.replace(/[0-9]/g, '');
}

function checkWhatRangeBelongsToLetter(letter) {
    var lowerBound
    var upperBound

    if (letter == 'B') {
        lowerBound = 1;
        upperBound = 15;
    } else if (letter == 'I') {
        lowerBound = 16;
        upperBound = 30       
    } else if (letter == 'N') {
        lowerBound = 31;
        upperBound = 45  
    } else if (letter == 'G') {
        lowerBound = 46;
        upperBound = 60
    } else if (letter == 'O') {
        lowerBound = 61;
        upperBound = 75
    } else return 'not in range'
    
    return [lowerBound, upperBound]   
}

function checkIfNumberIsInRangeOfLetter(number) {
    const letter = extractLetterFromString(number);
    const digit = extractNumberFromString(number);
    const rangeOfLetter = checkWhatRangeBelongsToLetter(letter)
    const lowerBound = rangeOfLetter[0]
    const upperBound = rangeOfLetter[1]

    return digit >= lowerBound && digit <= upperBound
}



function isMyNumberInThisBingoRow(row, number) {
    return row.indexOf(number) > -1 
}



module.exports = { checkIfNumberIsOnCard, extractNumberFromString, extractLetterFromString, checkWhatRangeBelongsToLetter, checkIfNumberIsInRangeOfLetter, isMyNumberInThisBingoRow }