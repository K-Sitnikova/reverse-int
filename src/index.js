module.exports = function reverse (n) {
    if(n < 0) {
        n *= -1
    }
    const numberToString = String(n).split('')
    const reversedArray = []
    let firstIndex = 0;
    for (let i = numberToString.length - 1; i >= 0; i--) {
        reversedArray[firstIndex] = numberToString[i]
        firstIndex++
    }
    const reversedString = reversedArray.join('')
    const stringToNumber = Number(reversedString)
    return stringToNumber
}

