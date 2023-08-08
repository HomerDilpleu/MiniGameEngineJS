///////////////////////////
// Check if the sprite is
// touch for given x and y
///////////////////////////
mge._sprite._isTouched = function(_xTouched, _yTouched) {

    // Calculate sprite min and max coordinates
    // based in its width and height
    let _xMaxSprite = this._x + (this._width / 2) * this._scaleX
    let _xMinSprite = this._x - (this._width / 2) * this._scaleX
    let _yMaxSprite = this._y + (this._height / 2) * this._scaleY
    let _yMinSprite = this._y - (this._height / 2) * this._scaleY

    // Check if inside
    if (_xTouched >= _xMinSprite && _xTouched <= _xMaxSprite && _yTouched >= _yMinSprite && _yTouched <= _yMaxSprite) {
        return true
    } else {
        return false
    }
}
