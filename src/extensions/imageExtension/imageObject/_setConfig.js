///////////////////////////
// Change image configuration
///////////////////////////
mge._extensionImage._imageObject._setConfig = function(_value) {

    // Change properties
    this._config = _value
    this._isLoaded = false
    this._bitmap = {}

}