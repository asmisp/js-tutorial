// Method is a property of an object
let restaurant = {
    name: 'ASB', 
    guessCapacity: 75, 
    guestCount: 0, 
    checkAvailanility : function(partySize) {
        let seatsLeft = this.guessCapacity - this.guestCount
        return partySize <= seatsLeft
    }, 
    seatParty : function(partySize) {
        this.guestCount = this.guestCount + partySize
    }, 
    removeParty : function (partySize) {
        this.guestCount = this.guestCount - partySize
    }

}

//SeatParty

// RemoveParty
restaurant.seatParty(72)
console.log(restaurant.checkAvailanility(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailanility(4))