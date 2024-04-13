///////////////////////////
// Animation API
///////////////////////////
mge._extensionAnimation._animationObject = {
    
    ////////////////
    // Properties
    ////////////////
    // Time between 2 frames (ms)
    set timeBetweenFrames(_value) {
        this._timeBetweenFrames =_value
        
    },
    get timeBetweenFrames() {
        return this._timeBetweenFrames
    },
    // Animaiton frames
    set frames(_frames) {
        this._setFrames(_frames)
    },

    ////////////////
    // Methods
    ////////////////
    draw: function(_ctx) {
        this._draw(_ctx)
    },

    restart: function() {
        this._restart()
    }
    
}
