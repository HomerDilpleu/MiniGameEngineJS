mge._game._createTimer = function (_duration, _mode) {
    // Create a timer
    let _timer = Object.create(mge._timer)
    // Initi the timer
    _timer._init(_duration, _mode)
    // Return
    return _timer
}
