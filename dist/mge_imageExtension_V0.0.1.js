////////////////////////////////////////
// Add the image extension to mge
////////////////////////////////////////
mge._extensionImage = {
    _images:{
        _list:[]
    },
    _imageObject:{
    }
}
///////////////////////////
// Image API
///////////////////////////
mge._extensionImage._imageObject= {
    
    ////////////////
    // Properties
    ////////////////
    // Config
    set config(_value) {
        this._setConfig(_value)
    },
    get config() {
        return this._config
    },
    // Scale
    set scale(_value) {
        this._setScale(_value)
    },
    get scale() {
        return this._scale
    },
    // width and heigh 
    get width() {
        return this._config._s._w * this._scale
    },
    get height() {
        return this._config._s._h * this._scale
    },

    ////////////////
    // Methods
    ////////////////
    load: function() {
        this._load()
    },

    draw: function(_ctx) {
        this._draw(_ctx)
    }
}
///////////////////////////
// Image API
///////////////////////////
mge.image = {

    ////////////////
    // Properties
    ////////////////

    ////////////////
    // Methods
    ////////////////
    create: function() {
        return mge._extensionImage._images._createImage()
    },

    loadNextImage: function () {
        return mge._extensionImage._images._loadNextImage()
    }

}
///////////////////////////
// Change image configuration
///////////////////////////
mge._extensionImage._imageObject._setConfig = function(_value) {

    // Change properties
    this._config = _value
    this._isLoaded = false
    this._bitmap = {}

}///////////////////////////
// Change image scale
///////////////////////////
mge._extensionImage._imageObject._setScale = function(_value) {

    // Change properties
    this._scale = _value
    this._isLoaded = false
    this._bitmap = {}

}///////////////////////////
// Load the image in a bitmap
///////////////////////////
mge._extensionImage._imageObject._load = function() {

    // Shortcuts
    let _config = this._config
    let _scale = this._scale

    // Get image size
    let _s = _config._s || {}
    let _w = _s._w * _scale || 200
    let _h = _s._h * _scale || 200

    // Create offscreen canvas
    let _offScreenCanvas = new OffscreenCanvas(_w,_h)
    let _ctx = _offScreenCanvas.getContext('2d')

    // Draw each paths
    let _p = _config._p || []
    _p.forEach(function (_path) {
        ////////////////////
        // Fill style
        ////////////////////
        let fs = _path._fs || ['C','red']
        // Uniform color
        if (fs[0] == 'C') {_ctx.fillStyle = fs[1]}
        // Gradient
        else if (fs[0] == 'LG' || fs[0] == 'RG') {
            // Create gradient
            let _gradient = {}
            if (fs[0] == 'LG') {_gradient = _ctx.createLinearGradient(fs[1]*_scale,fs[2]*_scale,fs[3]*_scale,fs[4]*_scale)}
            else {_gradient = _ctx.createRadialGradient(fs[1]*_scale,fs[2]*_scale,fs[3]*_scale,fs[4]*_scale,fs[5]*_scale,fs[6]*_scale)}
            // Create gradient points
            let _gp = _path._gp
            _gp.forEach(function(_point) {
                _gradient.addColorStop(_point[0],_point[1])
            })
            _ctx.fillStyle = _gradient
        }

        ////////////////////
        // Stroke style
        ////////////////////
        let ss = _path._ss || ['red',2,'square','miter']
        _ctx.strokeStyle = ss[0]
        _ctx.lineWidth = ss[1]*_scale
        _ctx.lineCap = ss[2]
        _ctx.lineJoin = ss[3]

        ////////////////////
        // Create the path
        ////////////////////
        _ctx.beginPath()
        let _c = _path._c || []
        _c.forEach(function(_cmd) {
            // Move to
            if (_cmd[0] == 'M') {
                _ctx.moveTo(_cmd[1]*_scale,_cmd[2]*_scale)
            } 
            // Line to
            else if (_cmd[0] == 'L') {
                _ctx.lineTo(_cmd[1]*_scale,_cmd[2]*_scale)
            }
            // Quadratic curve
            else if (_cmd[0] == 'Q') {
                _ctx.quadraticCurveTo(_cmd[1]*_scale,_cmd[2]*_scale,_cmd[3]*_scale,_cmd[4]*_scale)
            }
            // Beziers curve
            else if (_cmd[0] == 'B') {
                _ctx.bezierCurveTo(_cmd[1]*_scale,_cmd[2]*_scale,_cmd[3]*_scale,_cmd[4]*_scale,_cmd[5]*_scale,_cmd[6]*_scale)
            }
            // Circle
            else if (_cmd[0] == 'C') {
                _ctx.arc(_cmd[1]*_scale,_cmd[2]*_scale,_cmd[3]*_scale,0,2 * Math.PI)
            }
            // Rectangle
            else if (_cmd[0] == 'R') {
                _ctx.rect(_cmd[1]*_scale,_cmd[2]*_scale,_cmd[3]*_scale,_cmd[4]*_scale)
            }
            // Elipse
            else if (_cmd[0] == 'E') {
                _ctx.ellipse(_cmd[1]*_scale,_cmd[2]*_scale,_cmd[3]*_scale,_cmd[4]*_scale,_cmd[5],0,2 * Math.PI)
            }
        })

        ////////////////////
        // Draw path
        ////////////////////
        if (fs[0] != 'N') {
            _ctx.fill()  
        }
        if (ss[1] > 0) {
            _ctx.stroke() 
        }
        
        ////////////////////
        // Draw text
        ////////////////////
        let _txt = _path._t || [0,0,20,'normal','serif','start','alphabetic','']
        let _fontSize = _txt[2]*_scale
        _ctx.font = _txt[3] + ' ' + _fontSize.toString() + 'px ' + _txt[4]
        _ctx.textAlign = _txt[5]
        _ctx.textBaseline = _txt[6]
        if (fs[0] != 'N') {
            _ctx.fillText(_txt[7],_txt[0]*_scale,_txt[1]*_scale)
        }
        if (ss[1] > 0) {
            _ctx.strokeText(_txt[7],_txt[0]*_scale,_txt[1]*_scale)
        }
    })

    // Save canvas content
    this._bitmap = _offScreenCanvas.transferToImageBitmap()

    // Update status
    this._isLoaded=true

}
///////////////////////////
// Load the image in a bitmap
///////////////////////////
mge._extensionImage._imageObject._create = function() {

    // Properties
    this._config={}
    this._isLoaded=false
    this._scale=1
    this._bitmap={}

}///////////////////////////
// Draw the image to a given canvas
///////////////////////////
mge._extensionImage._imageObject._draw = function(_ctx) {

    _ctx.drawImage(this._bitmap,0,0)

}////////////////////////////////////
// Create a new image object
////////////////////////////////////

mge._extensionImage._images._createImage = function () {
    
    // Create an image object
    let _newImage = Object.create(mge._extensionImage._imageObject)
    _newImage._create()

    // Add it to images list
    this._list.push(_newImage)

    // Return the image
    return _newImage
}////////////////////////////////////////////////////////
// Load next image and return the load completion 
// (nb images loaded / nb total images)
////////////////////////////////////////////////////////

mge._extensionImage._images._loadNextImage = function () {
    
    // Shortcuts
    let _lst = mge._extensionImage._images._list

    // Variables
    let _nbImagesLoaded = 0
    let _hasLoadedOneImage = false
    let _lstLength = _lst.length

    // If list is empty, do nothing and return 100%
    if (_lst.length == 0) {
        return 1
    } else {
    // Else count loaded images and load first non loaded image
        _lst.forEach(function (_img) {
            if (_img._isLoaded) {_nbImagesLoaded+=1}
            else if (!_hasLoadedOneImage) {
                _img._load()
                _nbImagesLoaded+=1
                _hasLoadedOneImage=true
            }
        })
        return _nbImagesLoaded / _lstLength
    }

}
