let name = '        Andrew Mead'

// Length Property

console.log(name.length)

//Convert to upper case
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//Includes Method

console.log(name.includes('A', 1))

// Trim

console.log(name.trim())

//Challenge area

//isValidPassword
//lengt is more than 8 - and it doesn't contain the word password

let isValidPassword = function (pwd) {
    return pwd.length > 8 && !pwd.includes('password')
 
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!%$%%%^^%$$'))
console.log(isValidPassword('password123'))