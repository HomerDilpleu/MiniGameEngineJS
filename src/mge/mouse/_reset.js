///////////////////////////
// Reset mouse information
///////////////////////////
mge._mouse._reset = function() {
    this._x = 0
    this._y = 0
    this._isClicked = false
    this._isDown = false
    this._isUp = true
    this._isPressed = false
    this._isReleased = false
    this._xDetected = 0
    this._yDetected = 0
    this._clickDetected = false
    this._downDetected = false
    this._upDetected = false
}
