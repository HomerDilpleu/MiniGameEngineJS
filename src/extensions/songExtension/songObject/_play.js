///////////////////////////
// Play the song at a given bpm
///////////////////////////
mge._extensionSong._songObject._play = function(_bpm, _instruments, _mix) {

    // Default instrument
    let _defaultInstrument = {
        play: function (_frequency, _startTime, _duration, _volume) {
            let _synthConfig = {volumeADSR: {a:0.02, d:400, s:0, r:0.1, minValue:0, maxValue: _volume},oscType:'sine'}      
            mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
        }
    }

    // Check if song is loaded
    if (!this._isLoaded) {
        this._load()
    }

    // Reset sequencer
    mge.sequencer.stop()
    mge.sequencer.reset()

    // Create each track
    let _curTrack = 0
    this._tracks.forEach(function (_track) {
        mge.sequencer.createTrack(_track,_instruments[_curTrack]||_defaultInstrument,_mix[_curTrack]||1)
        _curTrack+=1
    })

    // Play song
    mge.sequencer.bpm = _bpm
    mge.sequencer.start()

}
