///////////////////////////
// Play sound of a synthetizer
///////////////////////////
mge._synth._synthetizer._synthPlay = function (_frequency, _startTime, _duration, _volume) {
    if (!isNaN(_frequency)) {
        // Check if the sound is already pre-rendered
        if (this._preRenderedSounds.get (this._synthGetCacheId(_frequency, _duration)) == undefined) {
            console.log('Real time')
            this._synthPlayLive(_frequency, _startTime, _duration, _volume)
            this._synthPreRender(_frequency, _duration)
        } else {
            console.log('Pre rendered')
            this._synthPlayPreRendered(_frequency, _startTime, _duration, _volume)
        }
    }
}
