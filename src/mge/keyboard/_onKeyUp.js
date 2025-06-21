///////////////////////////
// Event handler onkeyup
///////////////////////////
mge._keyboard._onKeyUp = function(e) {

    // Remove fom _keyPressedDetected array 
    let indexOfKey = this._keyPressedDetected.indexOf(e.key)
    if (indexOfKey != -1) {
        this._keyPressedDetected.splice(indexOfKey,1)
    }
}