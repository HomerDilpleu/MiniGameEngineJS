///////////////////////////
// Event handler onkeyup
///////////////////////////
mge._keyboard._onKeyUp = function(e) {

    // Shortcuts
    let _key = e.key

    // Remove fom _keyPressedDetected array 
    let indexOfKey = this._keyPressedDetected.indexOf(_key)
    if (indexOfKey != -1) {
        this._keyPressedDetected.splice(indexOfKey,1)
    }
}