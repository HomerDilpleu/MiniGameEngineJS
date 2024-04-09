///////////////////////////
// Plays a sound given
///////////////////////////
mge._audio._playSound = function (_synthConfig,_outputNode,_frequency,_startTime,_duration,_volume) {

    // Shortcuts
    let _applyADSR = this._applyADSR
    let _context = this._audioContext

    // Parameters
    let _oscType = _synthConfig.oscType || 'sine'
    let _filterType = _synthConfig.filterType || 'lowpass'
    let _volumeADSR = _synthConfig.volumeADSR || {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1}
    let _pitchADSR = _synthConfig.pitchADSR || {a:0, d:0, s:1, r:0, minValue:_frequency, maxValue: _frequency}
    let _detuneADSR = _synthConfig.detuneADSR || {a:0, d:0, s:1, r:0, minValue:0, maxValue: 0}
    let _filterFreqADSR = _synthConfig.filterFreqADSR || {a:0, d:0, s:1, r:0, minValue:20000, maxValue: 20000}
    let _filterQADSR = _synthConfig.filterQADSR || {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1}

    // Osc
    let _osc = ''
    if (_oscType == 'noise') {
        _osc = _context.createBufferSource()
        let buffer = _context.createBuffer(1, _context.sampleRate * (_duration+_volumeADSR.r), _context.sampleRate)
        let noiseOutput = buffer.getChannelData(0)
        for (let i = 0; i < buffer.length; i++) {
            noiseOutput[i] = Math.random() * 2 - 1
        }
        osc.buffer = buffer
    } else {
        _osc = _context.createOscillator()
        _osc.type = _oscType
        _applyADSR(_pitchADSR, _osc.frequency, _startTime, _duration)
        _applyADSR(_detuneADSR, _osc.detune, _startTime, _duration)
    }
    _osc.start(_startTime)
    _osc.stop(_startTime+_duration+_volumeADSR.r)

    // Gain ADSR
    let _oscGainADSR = _context.createGain()
    _applyADSR(_volumeADSR, _oscGainADSR.gain, _startTime, _duration)

    // Volume
    let _oscVolume = _context.createGain()
    _oscVolume.gain.setValueAtTime(mge._audio._volumeToGain(_volume) * 0.04, _startTime)

    // Filter
    let _filter = _context.createBiquadFilter()
    _filter.type = _filterType
    _applyADSR(_filterFreqADSR, _filter.frequency, _startTime, _duration)
    _applyADSR(_filterQADSR, _filter.Q, _startTime, _duration)

    // Connections
    _osc.connect(_filter)
    _filter.connect(_oscGainADSR)
    _oscGainADSR.connect(_oscVolume)
    _oscVolume.connect(_outputNode)
}