///////////////////////////
// Play directly a sound
// with no use of cache
///////////////////////////
mge._synth._synthetizer._synthPlayLive = function (_frequency, _startTime, _duration, _volume) {
    let _ctx = mge._audio._audioContext
    // Create a gain node for volume
    let _volumeGain = _ctx.createGain()
    _volumeGain.gain.setValueAtTime(_volume, _startTime)
    _volumeGain.connect(mge._audio._audioGain)    
    // Play all oscillators
    this._oscs.forEach (_osc => {
        _osc._play (_ctx, _frequency, _startTime, _duration, _volumeGain)

    })
}
