///////////////////////////
// Check if the sprite is
// collinding with clones
// of another srpite.
// Returns the list of
// clones colliding with
// him
///////////////////////////
mge._sprite._listCollisionsWithClones = function(_spriteToCheck) {

    // Create an empty array to store the touched clones
    let _touchedClones = []

    // Add in this array the clones that are touched
    _spriteToCheck._clonesList.forEach(_clone => {
        if (this._isColliding(_clone)) {
            _touchedClones.push(_clone)
        }
    })

    // Return the list of clones touhced by the sprite
    return _touchedClones
}
