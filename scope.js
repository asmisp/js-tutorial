// Lexical scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope  - Defined inside a code block 


// In a scope you can access varianles defined in that scope or in any parent/amcestor

//Global Scope (varOne)
    //Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varthree)

let varOne = 'varOne'

if (true) {
     console.log (varOne)
     let varTwo = 'varTwo'
     console.log (varTwo)

     if (true) {
         let varFour = 'varFour'
     }
}

if (true) {
    let varThree = 'varThree'
}

console.log (varTwo)