///////////////////////////
// Update a timer
///////////////////////////
mge._timer._update = function () {

    if (this._mode == 'L') {
        this._progress = (Date.now() - this._startTimestamp) % this._duration
    } else {
        this._progress = Math.min(1,(Date.now() - this._startTimestamp)/this._duration)
    }
}
