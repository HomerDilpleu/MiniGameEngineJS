mge._game._createSynth = function (_oscList) {
    // Create empty synth
    let _synth = Object.create(mge._synth._synthetizer)
    // Initi the synth (create oscilators...)
    _synth._synthInit(_oscList)
    // Return
    return _synth
}
