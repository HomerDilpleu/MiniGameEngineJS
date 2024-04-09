///////////////////////////
// Get the number of clones
// in the game
///////////////////////////

mge._game._getClonesNb = function () {
    
    // Initialize the number of clones to 0
    let _clonesNb = 0

    // For each sprite, count the number of clones and sum it
    this._spritesList.forEach(_sprite => {
        _clonesNb += _sprite._clonesList.length
    })

    // Return the result
    return _clonesNb

}