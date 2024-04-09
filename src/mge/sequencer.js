///////////////////////////
// Sequencer API
///////////////////////////
mge.sequencer = {

    ////////////////    
    // Properties
    ////////////////
    get bpm() {
        return mge._sequencer._bpm
    },
    set bpm(_value) {
        mge._sequencer._bpm = _value
    },
    
    ////////////////
    // Methods
    ////////////////
    createTrack: function (_bars, _instrument, _volume) {
        return mge._sequencer._createTrack (_bars, _instrument, _volume)
    },
    start: function() {
        mge._sequencer._start()
    },
    stop: function() {
        mge._sequencer._stop()
    },
    reset: function() {
        mge._sequencer._create()
    }
    
    
}