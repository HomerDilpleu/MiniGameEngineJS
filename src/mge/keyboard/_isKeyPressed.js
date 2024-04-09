///////////////////////////
// Check if a key is pressed
///////////////////////////
mge._keyboard._isKeyPressed = function(_key) {

    if (this._keyPressed.indexOf(_key) == -1) {
        return false
    } else {
        return true
    }
}
