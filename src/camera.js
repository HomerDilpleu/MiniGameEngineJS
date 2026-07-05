// API on sprite objects    
mge.camera = {
    ////////////////
    // Properties
    ////////////////
    // x
    get x() {
        return mge._camera._x
    },
    set x(_value) {
        mge._camera._x = _value
    },
    // y
    get y() {
        return mge._camera._y
    },
    set y(_value) {
        mge._camera._y = _value
    },
    // zoom
    get zoom() {
        return mge._camera._zoom
    },
    set zoom(_value) {
        mge._camera._zoom = _value
        if(mge._camera._zoom < 0 ) {mge._camera._zoom = 0}
    }
}
