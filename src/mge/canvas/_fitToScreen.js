///////////////////////////
// Resize the canvas html
// component in order
// to fill the screen
///////////////////////////
mge._canvas._fitToScreen = function() {

     // Get scale ratio
    let _scaleX = (window.innerWidth - 10) / this._renderCanvas.width
    let _scaleY = (window.innerHeight - 10) / this._renderCanvas.height
    let _scale = Math.min(_scaleX, _scaleY)

    // Modify the canvas style
    this._renderCanvas.style.transform = 'scale(' + _scale + ')'
    this._renderCanvas.display = 'block'
}
