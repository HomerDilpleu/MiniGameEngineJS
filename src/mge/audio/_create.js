///////////////////////////
// Create an audio context
///////////////////////////
mge._audio._create = function () {

    // Properties
    this._audioContext = ''
    this._audioGain = ''
    this._volume = 1

    // Create the audio context, a gain node and connect it to speakers
    this._audioContext = new (window.AudioContext||window.webkitAudioContext)()
    this._audioGain = this._audioContext.createGain()
    this._audioGain.connect(this._audioContext.destination)

}