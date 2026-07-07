///////////////////////////
// Check if the sprite is
// touch for given x and y
///////////////////////////
mge._sprite._isTouched = function() {

    // Get screen values
    let _s = mge._camera._worldToScreen(this)

    // Calculate sprite min and max coordinates
    // based in its width and height
    let _xMaxSprite = _s._xScreen + (this._width / 2) * _s._scaleXScreen
    let _xMinSprite = _s._xScreen - (this._width / 2) * _s._scaleXScreen
    let _yMaxSprite = _s._yScreen + (this._height / 2) * _s._scaleYScreen
    let _yMinSprite = _s._yScreen - (this._height / 2) * _s._scaleYScreen

    // Check if inside
    if (mge._mouse._x >= _xMinSprite && mge._mouse._x <= _xMaxSprite && mge._mouse._y >= _yMinSprite && mge._mouse._y <= _yMaxSprite) {
        return true
    } else {
        return false
    }
}
