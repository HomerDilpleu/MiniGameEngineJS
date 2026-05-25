///////////////////////////
// Check if the sprite is
// touched and if there is
// a click
///////////////////////////
mge._sprite._isClicked = function() {

    if (this._isTouched() && mge._mouse._isClicked) {
        return true
    } else {
        return false
    }
}
 