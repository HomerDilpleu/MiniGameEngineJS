///////////////////////////
// Play a pre rendered sound
///////////////////////////
mge._synth._synthetizer._synthPlayPreRendered = function (_frequency, _startTime, _duration, _volume) {
    let _ctx = mge._audio._audioContext
    // Get prerendered buffer
    let _source = _ctx.createBufferSource()
    _source.buffer = mge._synth._preRenderedSounds.get(this._synthGetCacheId(_frequency, _duration))
    // Volume
    let _soundGain = _ctx.createGain()
    _soundGain.gain.setValueAtTime(_volume, _startTime)
    // Connect and play
    _source.connect(_soundGain)
    _soundGain.connect(mge._audio._audioGain)
    _source.start(_startTime)
    _source.stop(_startTime + _duration * 1.5)
}
