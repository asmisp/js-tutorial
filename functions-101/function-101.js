// Function - input (argument) , code, output (return value)

let greetUser = function () {
    console.log('Welcome user')
}

greetUser()
greetUser()
greetUser()

 let square = function (num) {
     let result = num * num
    return result
 }

 let value = square(3)
 let otherValue = square(10)

 console.log(value)
 console.log(otherValue)

 // Challenge area

 // converFareheittoCelsius

 // Call a couple of times (32 --> 0 ) (68-> 20)

 // print the converted values

 let converter = function (temp) {
     let tempConverted = (temp -32) * 5 / 9
    return tempConverted
 }

 let fTemp = converter(32)
 let otherTemp = converter (110)
 console.log(fTemp)
 console.log(otherTemp)