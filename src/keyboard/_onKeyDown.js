///////////////////////////
// Event handler onkeydown
///////////////////////////
mge._keyboard._onKeyDown = function(e) {

    // Add _keyPressedDetected array 
    if (this._keyPressedDetected.indexOf(e.key) == -1) {
        this._keyPressedDetected.push(e.key)
    }

}
