///////////////////////////
// Play sound of a synthetizer
///////////////////////////
mge._synth._synthetizer._synthPlay = function (_frequency, _startTime, _duration, _volume) {
    console.log ('Play: ' + this._name)
    this._synthPlayLive(_frequency, _startTime, _duration, _volume)

}
