///////////////////////////
// Game API
///////////////////////////
mge.game = {
    
    ////////////////
    // Properties
    ////////////////
    // Game size
    get width() {
        return mge._canvas._renderCanvas.width
    },
    set width(_value) {
        mge._canvas._renderCanvas.width = _value
    },
    get height() {
        return mge._canvas._renderCanvas.height
    },
    set height(_value) {
        mge._canvas._renderCanvas.height = _value
    },
    // Frames per second
    get fps() {
        return mge._loop._fps
    },
    // Number of clones
    get clonesNb() {
        return mge._game._getClonesNb()
    },
    // Access to the game canvas
    get context() {
        return mge._canvas._renderContext
    },

    ////////////////
    // Methods
    ////////////////
    start: function(_scene) {
        mge._game._start(_scene)
    },
    changeScene: function(_scene) {
        mge._game._sceneChange(_scene)
    },
    createSprite: function() {
        return mge._game._createSprite()
    }
}