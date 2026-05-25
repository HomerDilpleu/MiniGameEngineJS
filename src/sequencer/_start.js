///////////////////////////
// Start the sequencer
///////////////////////////
mge._sequencer._start = function() {
    
    this._nextBarNum = 1
    this._nextBarStartTime = mge._audio._audioContext.currentTime
    this._nextBarTriggerTime = 0
    this._status = 'started'

}
