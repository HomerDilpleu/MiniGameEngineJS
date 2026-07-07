///////////////////////////
// World to screen
///////////////////////////
mge._camera._worldToScreen = function(_sprite) {
    let _result = {}
    // If scroll factor =0, the sprite remains un changed
    if (_sprite._scrollFactor == 0) {
        _result._scaleXScreen = _sprite._scaleX
        _result._scaleYScreen = _sprite._scaleY
        _result._xScreen = _sprite._x
        _result._yScreen = _sprite._y
    } else {
        // Else it position and size is imapcted
        _result._xScreen = (_sprite._x - (mge._camera._x - mge.game.width/2) * _sprite._scrollFactor) * mge._camera._zoom + mge.game.width/2
        _result._yScreen = (_sprite._y - (mge._camera._y - mge.game.height/2) * _sprite._scrollFactor) * mge._camera._zoom + mge.game.height/2
        _result._scaleXScreen = _sprite._scaleX * mge._camera._zoom * _sprite._scrollFactor
        _result._scaleYScreen = _sprite._scaleY * mge._camera._zoom * _sprite._scrollFactor
    }
   return _result
}

