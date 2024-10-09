///////////////////////////
// Resize the canvas html
// component in order
// to fill the screen
///////////////////////////
mge._canvas._fitToScreen = function() {

    // Shortcuts
    let _HtmlCanvas = this._renderCanvas

    // Get scale ratio
    let _scaleX = (window.innerWidth - 10) / _HtmlCanvas.width
    let _scaleY = (window.innerHeight - 10) / _HtmlCanvas.height
    let _scale = Math.min(_scaleX, _scaleY)

    // Modify the canvas style
    _HtmlCanvas.style.transform = 'scale(' + _scale + ')'
    _HtmlCanvas.display = 'block'
}
