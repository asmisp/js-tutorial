let temp = 55

// Logical And Operator - True if both side are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}


// Challenge area 

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log ('Offer up some vegan options')
} else {
    console.log('offer up anything on the menue')

}

// are both vegan? only offer up vegan dishes
// at least one guest is vegan ? <ake sure to offer up some vegan options
// Else, offer uo anything on the menu