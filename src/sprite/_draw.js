///////////////////////////
// Draw the sprite
///////////////////////////
mge._sprite._draw = function() {

    // Draw only if sprite is visible
    if (this._isVisible) {

        // Shortcuts
        let _ctx = this._ctx

        // Get screen values
        let _s = mge._camera._worldToScreen(this)

        // Save context
        _ctx.save()

        // Apply transformations
        _ctx.translate(_s._xScreen - this._width * _s._scaleXScreen / 2, _s._yScreen - this._height * _s._scaleYScreen / 2)
        _ctx.scale(_s._scaleXScreen, _s._scaleYScreen)

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
