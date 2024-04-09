///////////////////////////
// Keyboard API
///////////////////////////
mge.keyboard = {
    ////////////////
    // Properties
    ////////////////
    get keysPressed() {
        return mge._keyboard._keyPressed
    },
    
    ////////////////
    // Methods
    ////////////////
    isKeyPressed: function (_key) {
        return mge._keyboard._isKeyPressed(_key)
    }
}