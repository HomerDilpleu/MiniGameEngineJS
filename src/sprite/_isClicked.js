///////////////////////////
// Check if the sprite is
// touched and if there is
// a click
///////////////////////////
mge._sprite._isClicked = function(_xTouched, _yTouched, _click) {

    if (this._isTouched(_xTouched, _yTouched) && _click) {
        return true
    } else {
        return false
    }
}