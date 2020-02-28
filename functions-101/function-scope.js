let converter = function (temp) {
    let tempConverted = (temp -32) * 5 / 9
   return tempConverted
}

let fTemp = converter(32)
let otherTemp = converter (110)
console.log(fTemp)
console.log(otherTemp)