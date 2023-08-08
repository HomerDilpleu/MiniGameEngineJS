 ///////////////////////////
// Create the keayboard
///////////////////////////
mge._keyboard._create = function() {

    // Properties
    this._keyPressed = []
    this._keyPressedDetected = []

    // Create listeners
    document.onkeydown = function(e) {
        mge._keyboard._onKeyDown(e)
    }

    document.onkeyup = function(e) {
        mge._keyboard._onKeyUp(e)
    }

}