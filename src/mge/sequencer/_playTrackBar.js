///////////////////////////
// Play a bar of a track
///////////////////////////
mge._sequencer._playTrackBar = function(_track, _barNum) {

    // Get the bar to be played
    let _bar = _track._getBar(_barNum)

    // Initialze current time 
    let _curTime = this._nextBarStartTime

    // Play each note
    for (let i=0; i < _bar.length; i+=2) {

        // Get note and duration
        let _note = _bar[i]
        let _noteFrequency = this._noteToFrequency(_note)
        let _duration = _bar[i+1] * 60 / this._bpm

        // Play the note
        _track._instrument.play(_noteFrequency, _curTime, _duration, _track._volume)

        // Update current time
        _curTime += _duration

    }
    
}


