///////////////////////////
// Create the mouse
///////////////////////////
mge._mouse._create = function(_HtmlCanvas) {

    // Properties
    this._x = 0
    this._y = 0
    this._isClicked = false
    this._xDetected = 0
    this._yDetected = 0
    this._clickDetected = false

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

}
