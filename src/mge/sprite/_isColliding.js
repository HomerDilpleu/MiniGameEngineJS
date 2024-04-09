///////////////////////////
// Check if the sprite is
// colliding with another
// sprite.
// The collision detection
// is based on width and
// height (box collision)
///////////////////////////
mge._sprite._isColliding = function(_spriteToCheck) {

    // Calculate min distance between sprites without collision
    let _minXDistance = (this._width / 2) * this._scaleX + (_spriteToCheck._width / 2) * _spriteToCheck._scaleX
    let _minYDistance = (this._height / 2) * this._scaleY + (_spriteToCheck._height / 2) * _spriteToCheck._scaleY

    // Calculate real distance between the 2 sprites
    let _realXDistance = Math.abs(this._x - _spriteToCheck._x)
    let _realYDistance = Math.abs(this._y - _spriteToCheck._y)
    
    // Check collision
   if (_realXDistance < _minXDistance && _realYDistance < _minYDistance) {
        return true
    } else {
        return false
    }
}
