///////////////////////////
// Create a track with
// - a list of bars
// - an instrument with a "play" function
// - the volume of the track
///////////////////////////
mge._sequencer._createTrack = function(_bars, _instrument, _volume) {
        
    // Dependencies
    let _track = mge._sequencer._track
    let _tracks = mge._sequencer._tracks
    
    // Create the track object
    let _newTrack = Object.create(_track)
    _newTrack._bars = _bars
    _newTrack._instrument = _instrument
    _newTrack._volume = _volume

    // Add it to the list of sequencer tracks
    _tracks.push(_newTrack)

    // And return the track 
    return _newTrack

}
