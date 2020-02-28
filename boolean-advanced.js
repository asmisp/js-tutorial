let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked){
    console.log('is account locked')
}else {
    console.log('Not blocked')
}

if (isAccountLocked) {
    console.log('is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log ('Welcome')
}

// Challenge

let temp = 4

if (temp <= 32) {
    console.log("Is freezing")
} else if (temp >= 110  ) {
    console.log("Too hot")
} else {
    console.log ("go outside is fine")
}

// it is freezin outside
// is hot
// Go for it, is pretty nice