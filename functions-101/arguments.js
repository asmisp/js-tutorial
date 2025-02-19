let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    //eturn 'Name :  ' + name + ' - Score:   ' +score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// CHallenge area
// getTips
//total, tipPercent (.2)
// A 25% tip on the $40 would be $10
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip =  total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tips = getTip(50)
console.log(tips)


let name = 'Lasha'
console.log(`Hey, my name is ${name}!`)