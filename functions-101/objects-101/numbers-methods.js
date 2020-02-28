let num = 103.941

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num)) // to convert to whole number
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//10 -20
console.log(randomNum)

// Challenge area

//1 -5 - true is correct - false if not correct

let makeGuess = function (guess) {
    let minG = 1
    let maxG = 5 
    let randomNum = Math.floor(Math.random() * (maxG - minG + 1)) + minG

    return guess === randomNum
}
console.log(makeGuess(10))