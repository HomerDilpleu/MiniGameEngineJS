///////////////////////////
// Plays a sound given
///////////////////////////
mge._audio._playSound = function (_synthConfig,_outputNode,_frequency,_startTime,_duration,_volume) {


    // Parameters
    let _oscType = _synthConfig.oscType || 'sine'
    let _filterType = _synthConfig.filterType || 'lowpass'
    let _volumeADSR = _synthConfig.volumeADSR || {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1}
    let _pitchADSR = _synthConfig.pitchADSR || {a:0, d:0, s:1, r:0, minValue:_frequency, maxValue: _frequency}
    let _detuneADSR = _synthConfig.detuneADSR || {a:0, d:0, s:1, r:0, minValue:0, maxValue: 0}
    let _filterFreqADSR = _synthConfig.filterFreqADSR || {a:0, d:0, s:1, r:0, minValue:20000, maxValue: 20000}
    let _filterQADSR = _synthConfig.filterQADSR || {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1}
    let _reverb = _synthConfig.reverb || {delay: 0, feedbackLevel: 0}

    // Osc
    let _osc = ''
    if (_oscType == 'noise') {
        _osc = this._audioContext.createBufferSource()
        let buffer = this._audioContext.createBuffer(1, this._audioContext.sampleRate * (_duration+_volumeADSR.r), this._audioContext.sampleRate)
        let noiseOutput = buffer.getChannelData(0)
        for (let i = 0; i < buffer.length; i++) {
            noiseOutput[i] = Math.random() * 2 - 1
        }
        _osc.buffer = buffer
    } else {
        _osc = this._audioContext.createOscillator()
        _osc.type = _oscType
        this._applyADSR(_pitchADSR, _osc.frequency, _startTime, _duration)
        this._applyADSR(_detuneADSR, _osc.detune, _startTime, _duration)
    }
    _osc.start(_startTime)
    _osc.stop(_startTime+_duration+_volumeADSR.r)

    // Gain ADSR
    let _oscGainADSR = this._audioContext.createGain()
    this._applyADSR(_volumeADSR, _oscGainADSR.gain, _startTime, _duration)

    // Volume
    let _oscVolume = this._audioContext.createGain()
    _oscVolume.gain.setValueAtTime(mge._audio._volumeToGain(_volume) * 0.04, _startTime)

    // Filter
    let _filter = this._audioContext.createBiquadFilter()
    _filter.type = _filterType
    this._applyADSR(_filterFreqADSR, _filter.frequency, _startTime, _duration)
    this._applyADSR(_filterQADSR, _filter.Q, _startTime, _duration)

    // Reverb
    let _delay = new DelayNode(this._audioContext, {delayTime: _reverb.delay})
    let _feedbackGain = this._audioContext.createGain()
    _feedbackGain.gain.value = _reverb.feedbackLevel

    // Connections normal oscillator
    _osc.connect(_filter)
    _filter.connect(_oscGainADSR)
    _oscGainADSR.connect(_oscVolume)
    _oscVolume.connect(_outputNode)

    // Connections delay
    _oscGainADSR.connect(_delay)
    _delay.connect(_feedbackGain)
    _feedbackGain.connect(_delay)
    _feedbackGain.connect(_oscVolume)
    
}