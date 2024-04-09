///////////////////////////
// Stop game loop
///////////////////////////
mge._loop._stop = function() {
    this._status = 'stopped'
    this._tick()
}

