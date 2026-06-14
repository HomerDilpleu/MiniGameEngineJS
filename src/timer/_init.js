///////////////////////////
// Initialize a timer
///////////////////////////
mge._timer._init = function (_duration, _mode) {
    // Create properties
    this._duration  = _duration
    this._mode = _mode
    this._progress = 0
    this._startTimestamp = Date.now()
}
