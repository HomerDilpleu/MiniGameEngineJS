////////////////////////////////////////
// Add the song extension to mge
////////////////////////////////////////
mge._extensionSong = {
    _songs:{
        _list:[]
    },
    _songObject:{
    }
}
///////////////////////////
// Song API
///////////////////////////
mge._extensionSong._songObject= {
    
    ////////////////
    // Properties
    ////////////////
    // Config
    set config(_value) {
        this._setConfig(_value)
    },

    ////////////////
    // Methods
    ////////////////
    load: function() {
        this._load()
    },

    play: function(_bpm, _instruments, _mix) {
        this._play(_bpm, _instruments, _mix)
    }
}
///////////////////////////
// Song API
///////////////////////////
mge.song = {

    ////////////////
    // Properties
    ////////////////

    ////////////////
    // Methods
    ////////////////
    create: function() {
        return mge._extensionSong._songs._createSong()
    }

}
///////////////////////////
// Songs properties
///////////////////////////
mge._extensionSong._songObject._create = function() {

    // Properties
    this._config={}
    this._isLoaded=false
    this._tracks=[]

}///////////////////////////
// Load the song in an array of tracks
///////////////////////////
mge._extensionSong._songObject._load = function() {

    // Shortcuts
    let _config = this._config

    // Initialaize tracks
    let _tracks = []

    // For each part
    _config._p.forEach(function (_part) {
        let _currentPart = []
        // For each section
        _config._str.forEach(function (_section) {
            // For each bar of the section
            _part._s[_section].forEach(function (_bar) {
                _currentPart.push(_part._b[_bar])
            })
        })
        _tracks.push(_currentPart)
    })

    // Sav the track content
    this._tracks = _tracks

    // Update status
    this._isLoaded=true

}
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
///////////////////////////
// Change song configuration
///////////////////////////
mge._extensionSong._songObject._setConfig = function(_value) {

    // Change properties
    this._config = _value
    this._isLoaded = false
    this._tracks=[]

}////////////////////////////////////
// Create a new song object
////////////////////////////////////

mge._extensionSong._songs._createSong = function () {
    
    // Create a song object
    let _newSong = Object.create(mge._extensionSong._songObject)
    _newSong._create()

    // Add it to images list
    this._list.push(_newSong)

    // Return the image
    return _newSong
}