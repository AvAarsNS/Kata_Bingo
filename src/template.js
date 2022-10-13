function translateNumberToLetter(number) {
    return String.fromCharCode(number + 64);
}
function translateListOfNumbersToLetters(numbers) {
    let letters = [];
    for (number of numbers) {
        letters.push(translateNumberToLetter(number));
    }
    return letters;
}
function isLetterInList(letterToFind, letters) {
    if (letters.indexOf(letterToFind) === -1) {
        return false
    }
    return true
}
function isBingoInList(letters) {
    bingoList = ['B','I','N','G','O']; 
    for (letter of bingoList) {
        if (isLetterInList(letter, letters) === false ) {
             return false
        }
    }
    return true
}

function bingoResult(numbers) {
    letters = translateListOfNumbersToLetters(numbers);

    if (isBingoInList(letters)) {
        return 'WIN'
    }

    return 'LOSE';
}
 

module.exports = {
    translateNumberToLetter,
    translateListOfNumbersToLetters,
    isLetterInList,
    isBingoInList,
    bingoResult
}