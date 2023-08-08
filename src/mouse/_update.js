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

}
