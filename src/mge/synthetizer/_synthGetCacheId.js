///////////////////////////
// Get the cache ID for a
// given note
///////////////////////////
mge._synth._synthetizer._synthGetCacheId = function (_frequency, _duration) {
    return this._name + '-' + (Math.round(_frequency*100)/100).toString() + '-' + (Math.round(_duration*100)/100).toString()
}
