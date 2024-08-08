module.exports = function reverse (n) {
    if(n < 0) {
        n *= -1
    }
    const numberToString = String(n).split('')
    const reversedArray = []
    numberToString.forEach((item) => reversedArray.push(item))
    if(reversedArray[0] == 0) {
        reversedArray.shift() 
    }
    const reversedString = reversedArray.reverse().join('')
    const stringToNumber = Number(reversedString)
    return stringToNumber
}
