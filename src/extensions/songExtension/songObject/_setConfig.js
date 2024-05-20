///////////////////////////
// Change song configuration
///////////////////////////
mge._extensionSong._songObject._setConfig = function(_value) {

    // Change properties
    this._config = _value
    this._isLoaded = false
    this._tracks=[]

}