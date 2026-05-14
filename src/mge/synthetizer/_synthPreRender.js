///////////////////////////
// Prerender a sound in 
// the cache
///////////////////////////
mge._synth._synthetizer._synthPreRender = function (_frequency, _duration) {
    // Create offline context   
    let  _offlineContext = new OfflineAudioContext(2, _duration * 1.5 * 44100, 44100)
    // Play all the oscillators
    this._oscs.forEach (_osc => {
        _osc._play (_offlineContext, _frequency, 0, _duration, _offlineContext.destination)
    })
    // Prerender
    _offlineContext.startRendering().then(_renderedCache => {
            mge._synth._preRenderedSounds.set(this._synthGetCacheId(_frequency, _duration),_renderedCache)
        })
}
