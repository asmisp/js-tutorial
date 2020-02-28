// undefined : absences of value 

let name = 'Jen'

if (name === undefined) {
    console.log('Provide a name')
} else {
    console.log(name)
}

// undefined for function arguments
// undefined as fucntion return default value
let square = function (num) {
    console.log (num)
}

let result = square()
console.log(result)

// Null as assigned value
let age = 27
age = null
console.log(age)