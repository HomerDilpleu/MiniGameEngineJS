///////////////////////////
// Check if the sprite is
// selected
///////////////////////////
mge._sprite._isSelected = function() {

    // Click the sprite
    if (this._isTouched() && mge._mouse._isPressed ) {
        this._selectState = true
    } 
    
    // Click outside the sprite
    if (!this._isTouched() && mge._mouse._isPressed ) {
        this._selectState = false
    } 

    // Return dragging state
    return this._selectState
}
