///////////////////////////
// Update mouse properties
///////////////////////////
mge._mouse._update = function() {

    // Set the new mouse coordinates
    this._x = this._xDetected
    this._y = this._yDetected

    // Take into account click
    this._isClicked = this._clickDetected
    this._clickDetected = false

    // Take into account mouse down
    this._isPressed = false
    if (this._downDetected) {
        this._isDown = true
        this._isUp = false
        this._downDetected = false    
        this._isPressed = true
    }

    // Take into account mouse up
    this._isReleased = false
    if (this._upDetected) {
        this._isDown = false
        this._isUp = true
        this._upDetected = false
        this._isReleased = true
    }

}
