///////////////////////////
// Create a standard osc
///////////////////////////
mge._audio._standardOsc = {
    _type: 'sawtooth', 
    _octave: 0, 
    _volumeADSR: {a:0, d:0, s:0, r:0, minValue: 0, maxValue: 0},
    _detuneADSR: {a:0, d:0, s:1, r:0, minValue: 0, maxValue: 0},
    _pitchADSR: {a:0, d:0, s:1, r:0, minValue: 1, maxValue: 1},
    _filterType: 'lowpass', 
    _filterQ:1,
    _filterADSR: {a:0, d:0, s:1, r:0, minValue: 10000, maxValue: 10000},
    _reverb: {_delay: 0, _feedbackLevel: 0},
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
            _osc.frequency.setValueAtTime(_frequency, _startTime)
            if (this._octave == -1) {
                _osc.frequency.setValueAtTime(_frequency / 2, _startTime)
            }
            if (this._octave == 1) {
                _osc.frequency.setValueAtTime(_frequency * 2, _startTime)
            }
            // Detune
            mge._audio._applyADSR(this._detuneADSR, _osc.detune, _startTime, _duration)
            // Pitch
            mge._audio._applyADSR({a:this._pitchADSR.a, d:this._pitchADSR.d, s:this._pitchADSR.s, r:this._pitchADSR.r, minValue: _frequency * this._pitchADSR.minValue, maxValue: _frequency * this._pitchADSR.maxValue}, _osc.frequency, _startTime, _duration)
        }
        // Volume
        let _oscGain = _ctx.createGain()
        mge._audio._applyADSR (this._volumeADSR, _oscGain.gain, _startTime, _duration)
        // Filter
        let _oscFilter = _ctx.createBiquadFilter()
        _oscFilter.type = this._filterType
        _oscFilter.Q.value = this._filterQ
        mge._audio._applyADSR (this._filterADSR, _oscFilter.frequency, _startTime, _duration)
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