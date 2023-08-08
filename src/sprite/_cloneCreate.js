///////////////////////////
// Create a clone of 
// the sprite
///////////////////////////
mge._sprite._cloneCreate = function() {

    // Create the clone
    let _clone = Object.create(this)
    _clone._cloneIsValid = true

    // Put it in the list of clones
    this._clonesList.push(_clone)

    // Return the clone
    return _clone

}