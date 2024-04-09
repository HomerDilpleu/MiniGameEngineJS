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
    get x() {
        return mge._mouse._x
    },
    get y() {
        return mge._mouse._y
    }

}