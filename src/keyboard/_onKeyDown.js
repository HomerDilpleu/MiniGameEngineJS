///////////////////////////
// Event handler onkeydown
///////////////////////////
mge._keyboard._onKeyDown = function(e) {

    // Shortcuts
    let _key = e.key

    // Add _keyPressedDetected array 
    if (this._keyPressedDetected.indexOf(_key) == -1) {
        this._keyPressedDetected.push(_key)
    }

}
