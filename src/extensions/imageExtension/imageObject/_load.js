///////////////////////////
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
        
    })

    // Save canvas content
    this._bitmap = _offScreenCanvas.transferToImageBitmap()

    // Update status
    this._isLoaded=true

}
