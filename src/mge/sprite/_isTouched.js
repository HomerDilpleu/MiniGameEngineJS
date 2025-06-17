///////////////////////////
// Check if the sprite is
// touch for given x and y
///////////////////////////
mge._sprite._isTouched = function() {

    // Calculate sprite min and max coordinates
    // based in its width and height
    let _xMaxSprite = this._x + (this._width / 2) * this._scaleX
    let _xMinSprite = this._x - (this._width / 2) * this._scaleX
    let _yMaxSprite = this._y + (this._height / 2) * this._scaleY
    let _yMinSprite = this._y - (this._height / 2) * this._scaleY

    // Check if inside
    if (mge._mouse._x >= _xMinSprite && mge._mouse._x <= _xMaxSprite && mge._mouse._y >= _yMinSprite && mge._mouse._y <= _yMaxSprite) {
        return true
    } else {
        return false
    }
}

