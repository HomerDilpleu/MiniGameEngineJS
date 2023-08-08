///////////////////////////
// Set the general volume
// of the game
///////////////////////////
mge._audio._setVolume = function (_volume) {

    // Update  mge._audio._volume 
    if (_volume <= 0) {
        mge._audio._volume = 0
    } 
    else if (_volume >= 1) {
        mge._audio._volume = 1
    } 
    else {
        mge._audio._volume = _volume
    }

    // Change gain value
    mge._audio._audioGain.gain.setValueAtTime(mge._audio._volumeToGain(mge._audio._volume), mge.audio.currentAudioTime)
}





