///////////////////////////
// Create the mouse
///////////////////////////
mge._mouse._create = function(_HtmlCanvas) {

    // Properties
    this._x = 0
    this._y = 0
    this._isClicked = false
    this._isDown = false
    this._isUp = true
    this._isPressed = false
    this._isReleased = false
    this._xDetected = 0
    this._yDetected = 0
    this._clickDetected = false
    this._downDetected = false
    this._upDetected = false

    // Create listeners
    _HtmlCanvas.onclick = function(e) {
        mge._mouse._onClick(e)
    }

    _HtmlCanvas.onmousemove = function(e) {
        mge._mouse._onMove(e)
    }
    
    _HtmlCanvas.onmouseout = function(e) {
        mge._mouse._onOut(e)
    }

    _HtmlCanvas.onmousedown = function(e) {
        mge._mouse._onDown(e)
    }

    _HtmlCanvas.onmouseup = function(e) {
        mge._mouse._onUp(e)
    }

}
