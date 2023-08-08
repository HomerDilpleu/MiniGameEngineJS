///////////////////////////
// Apply an ADSR envelopp
// to a given audio param
///////////////////////////
mge._audio._applyADSR = function (_envelop, _audioParam, _startTime, _duration) {

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
}