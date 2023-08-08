///////////////////////////
// Create the sequencer
///////////////////////////
mge._sequencer._create = function() {

    // Properties
    this._tracks = []
    this._bpm = 60
    this._nextBarNum = 1
    this._nextBarStartTime = 0
    this._nextBarTriggerTime = 0
    this._status = 'stopped'

}


