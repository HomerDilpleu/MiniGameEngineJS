///////////////////////////
// Create a standard osc
///////////////////////////
mge._synth._standardOsc = {
    _type: 'sawtooth', 
    _octave: 0, 
    _volumeADSR: {a:0.1, d:0.1, s:0.8, r:0.1, minValue: 0, maxValue: 1},
    _detuneADSR: {a:0, d:0, s:1, r:0, minValue: 0, maxValue: 0},
    _pitchADSR: {a:0, d:0, s:1, r:0, minValue: 1, maxValue: 1},
    _filterType: 'lowpass', 
    _filterQ:1,
    _filterADSR: {a:0, d:0, s:1, r:0, minValue: 10000, maxValue: 10000},
    _reverb: {_delay: 0, _feedbackLevel: 0},
    /////////////////////////////////
    /////////////////////////////////
    _applyADSR: function (_envelop, _audioParam, _startTime, _duration) {
        // Get parameters
        let a = _envelop.a || 0.0001
        let d = _envelop.d || 0.0001
        let s = _envelop.s || 0.0001
        let r = _envelop.r || 0.0001
        let _minValue = _envelop.minValue || 0.0001
        let _maxValue = _envelop.maxValue || 1
        // Case 1: duration < attack
        if (_duration <= a) {
            // Attack
            _audioParam.setValueAtTime(_minValue, _startTime)
            _audioParam.exponentialRampToValueAtTime(_maxValue*_duration/a, _startTime+_duration)
            // Release
            _audioParam.exponentialRampToValueAtTime(_minValue, _startTime+_duration+r) 
        } 
        // Case 2: duration < attack + decay
        else if (_duration <= a + d) {
            // Attack
            _audioParam.setValueAtTime(_minValue, _startTime)
            _audioParam.exponentialRampToValueAtTime(_maxValue, _startTime+a)
            // Decay
            _audioParam.exponentialRampToValueAtTime(_maxValue*s*d/_duration, _startTime+_duration)
            // Release
            _audioParam.exponentialRampToValueAtTime(_minValue, _startTime+_duration+r) 
        }
        // Case 3: normal case
        else {
            // Attack
            _audioParam.setValueAtTime(_minValue, _startTime)
            _audioParam.exponentialRampToValueAtTime(_maxValue, _startTime+a)
            // Decay
            _audioParam.exponentialRampToValueAtTime(_maxValue*s, _startTime+a+d)
            // Sustain
            _audioParam.setValueAtTime(_maxValue*s, _startTime+_duration)
            // Release
            _audioParam.exponentialRampToValueAtTime(_minValue, _startTime+_duration+r)         
        }
    },
    /////////////////////////////////
    /////////////////////////////////
    _play: function (_ctx, _frequency, _startTime, _duration, _destination) {
        let _osc = {}
        ////////////
        // Noise
        ////////////
        if (this._type == 'noise') {
            _osc = _ctx.createBufferSource()
            let _buffer = _ctx.createBuffer(1, _ctx.sampleRate * (_duration+this._volumeADSR.r), _ctx.sampleRate)
            let _noiseOutput = _buffer.getChannelData(0)
            for (let i = 0; i < _buffer.length; i++) {
                _noiseOutput[i] = Math.random() * 2 - 1
            }
                _osc.buffer = _buffer
        } else {
            ////////////
            // Oscillator
            ////////////
            _osc = _ctx.createOscillator()
            // Type
            _osc.type = this._type
            // Frequency
           let _realFrequency = _frequency
           if (this._octave == -1) {_realFrequency = _frequency / 2}
           if (this._octave == 1) {_realFrequency = _frequency * 2}
            // Detune
            this._applyADSR(this._detuneADSR, _osc.detune, _startTime, _duration)
            // Pitch
            this._applyADSR({a:this._pitchADSR.a, d:this._pitchADSR.d, s:this._pitchADSR.s, r:this._pitchADSR.r, minValue: _realFrequency * this._pitchADSR.minValue, maxValue: _realFrequency * this._pitchADSR.maxValue}, _osc.frequency, _startTime, _duration)
        }
        // Volume
        let _oscGain = _ctx.createGain()
        this._applyADSR (this._volumeADSR, _oscGain.gain, _startTime, _duration)
        // Filter
        let _oscFilter = _ctx.createBiquadFilter()
        _oscFilter.type = this._filterType
        _oscFilter.Q.value = this._filterQ
        this._applyADSR (this._filterADSR, _oscFilter.frequency, _startTime, _duration)
        // Reverb
        let _delay = new DelayNode(_ctx, {delayTime: this._reverb._delay})
        let _feedbackGain = _ctx.createGain()
        _feedbackGain.gain.value = this._reverb._feedbackLevel
        // Connections
        _osc.connect(_oscFilter)
        _oscFilter.connect(_oscGain)
        _oscGain.connect(_destination)
        // Connections delay
        _oscGain.connect(_delay)
        _delay.connect(_feedbackGain)
        _feedbackGain.connect(_delay)
        _feedbackGain.connect(_destination)
        // Play
        _osc.start(_startTime)
        _osc.stop(_startTime + _duration + this._volumeADSR.r)
    }
}