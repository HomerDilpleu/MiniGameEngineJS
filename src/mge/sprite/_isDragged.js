///////////////////////////
// Check if the sprite is
// being draged
///////////////////////////
mge._sprite._isDragged = function() {

    // Start dragging
    if (this._isTouched() && mge._mouse._isPressed ) {
        this._dragState = true
    } 

    // Continue dragging
    if (this._dragState && mge._mouse._isDown ) {
        this._dragState = true
    } else {
        this._dragState = false
    }

    // Return dragging state
    return this._dragState
}
