///////////////////////////
// Create a canvas
///////////////////////////
mge._canvas._create = function(_width,_height,_id) {

    // Properties
    this._renderCanvas = ''
    this._renderContext = ''

    // Define html element for the canvas
    this._renderCanvas = document.getElementById(_id)

    // Remove html canvas if already exists
    if (this._renderCanvas) {
        this._renderCanvas.remove()
    } 

    // Create new html canvas
    this._renderCanvas = document.createElement('canvas')
    this._renderCanvas.id = _id
    this._renderCanvas.width = _width
    this._renderCanvas.height = _height
    document.body.appendChild(this._renderCanvas)

    // Get context
    this._renderContext = this._renderCanvas.getContext('2d')

}

