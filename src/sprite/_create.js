///////////////////////////
// Create the sprite
///////////////////////////
mge._sprite._create = function(_ctx) {

    // Properties
    this._ctx = _ctx
    this._drawFunction = function () {}
    this._width = 100
    this._height = 100
    this._x = 0
    this._y = 0
    this._scaleX = 1
    this._scaleY = 1
    this._isVisible = true
    this._drawBoundaries = false

    // Clone properties
    this._clonesList = []
    this._cloneIsValid = false


}