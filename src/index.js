module.exports = function reverse (n) {
    if(n < 0) {
        n *= -1
    }
    const numberToString = String(n).split('')
    const reversedArray = []
    for (let i = numberToString.length - 1; i >= 0; i--) {
        reversedArray.push(numberToString[i])
    }
    if(reversedArray[0] == 0) {
        reversedArray.shift() 
    }
    const reversedString = reversedArray.join('')
    const stringToNumber = Number(reversedString)
    return stringToNumber
}

