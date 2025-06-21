///////////////////////////
// Image API
///////////////////////////
mge._extensionImage._imageObject= {
    
    ////////////////
    // Properties
    ////////////////
    // Config
    set config(_value) {
        this._setConfig(_value)
    },
    // Scale
    set scale(_value) {
        this._setScale(_value)
    },
    get scale() {
        return this._scale
    },
    // width and heigh 
    get width() {
        return this._config._s._w * this._scale
    },
    get height() {
        return this._config._s._h * this._scale
    },

    ////////////////
    // Methods
    ////////////////
    load: function() {
        this._load()
    },

    draw: function(_ctx) {
        this._draw(_ctx)
    }
}
