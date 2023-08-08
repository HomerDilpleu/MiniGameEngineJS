///////////////////////////
// Start game loop
///////////////////////////
mge._loop._start = function() {
    this._status = 'running'
    this._tick()
}

