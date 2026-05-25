///////////////////////////
// Mouse API
///////////////////////////
mge.mouse = {

    ////////////////
    // Properties
    ////////////////
    get isClicked () {
        return mge._mouse._isClicked
    },
    get isDown () {
        return mge._mouse._isDown
    },
    get isUp () {
        return mge._mouse._isUp
    },
    get isPressed () {
        return mge._mouse._isPressed
    },
    get isReleased () {
        return mge._mouse._isReleased
    },
    get x() {
        return mge._mouse._x
    },
    get y() {
        return mge._mouse._y
    }

}