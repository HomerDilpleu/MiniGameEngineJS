///////////////////////////
// Event handler onmouseclick
///////////////////////////
mge._mouse._onClick = function(e) {
    this._clickDetected = true
    this._xDetected = e.offsetX
    this._yDetected = e.offsetY
}
