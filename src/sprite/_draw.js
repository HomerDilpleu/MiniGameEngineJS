///////////////////////////
// Draw the sprite
///////////////////////////
mge._sprite._draw = function() {

    // Draw only if sprite is visible
    if (this._isVisible) {

        // Shortcuts
        let _ctx = this._ctx

        // Save context
        _ctx.save()

        // Apply transformations
        _ctx.translate(this._x - this._width * this._scaleX / 2, this._y - this._height * this._scaleY / 2)
        _ctx.scale(this._scaleX, this._scaleY)

        // Draw
        this._drawFunction(_ctx)   

        // Draw boundaries if needed
        if (this._drawBoundaries) {
            _ctx.strokeStyle = 'red'
            _ctx.strokeRect(0, 0, this._width, this._height)
            _ctx.strokeRect(this._width / 2, this._height / 2, 1, 1)
        }

        // Restore context
        _ctx.restore()
    }
}
