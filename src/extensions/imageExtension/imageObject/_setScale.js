///////////////////////////
// Change image scale
///////////////////////////
mge._extensionImage._imageObject._setScale = function(_value) {

    // Change properties
    this._scale = _value
    this._isLoaded = false
    this._bitmap = {}

}