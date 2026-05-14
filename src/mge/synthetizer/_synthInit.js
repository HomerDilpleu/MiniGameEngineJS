///////////////////////////
// Initialize a synthetizer
///////////////////////////
mge._synth._synthetizer._synthInit = function (_oscList) {
    // Create the unique name of the synth (for prerender)
    this._name = mge._synth._curID
    mge._synth._curID += 1
    // Create and configure all the oscillators
    let _oscs = []
    _oscList.forEach (_osc => {
        let _curOsc = Object.create(mge._synth._standardOsc)
        if (_osc._type != undefined) {_curOsc._type = _osc._type}
        if (_osc._octave != undefined) {_curOsc._octave = _osc._octave}
        if (_osc._volumeADSR != undefined) {_curOsc._volumeADSR = _osc._volumeADSR}
        if (_osc._detuneADSR != undefined) {_curOsc._detuneADSR = _osc._detuneADSR}
        if (_osc._pitchADSR != undefined) {_curOsc._pitchADSR = _osc._pitchADSR}
        if (_osc._filterType != undefined) {_curOsc._filterType = _osc._filterType}
        if (_osc._filterQ != undefined) {_curOsc._filterQ = _osc._filterQ}
        if (_osc._filterADSR != undefined) {_curOsc._filterADSR = _osc._filterADSR}
        if (_osc._reverb != undefined) {_curOsc._reverb = _osc._reverb}
        // Add oscillatore to the synth
        _oscs.push(_curOsc)
    })
    // Add oscillators in synth
    this._oscs = _oscs
}
