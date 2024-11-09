// Copyright © 2024 TBM Studios. All rights reserved.

// Legend: 
// [G] - Gameplay: Affects mechanics, progression, or balance
// [T] - Technical: Addresses compatibility or performance issues
// [C] - Customization: Aligns with theme or player preferences

ServerEvents.recipes(event => {
    
    //Mutant Monsters
    event.remove({ output: 'mutantmonsters:creeper_minion_tracker' }) // [C]

    console.log('Hello! The recipe event has fired!')
})