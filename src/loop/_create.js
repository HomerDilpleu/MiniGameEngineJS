///////////////////////////
// Create the loop
///////////////////////////
mge._loop._create = function() {

    // Properties
    this._lastTick = 0
    this._currentTick = 0
    this._elapsedTick = 0
    this._fps = 0
    this._status = 'stopped'

}

