///////////////////////////
// Schedule playing next bar
// for all the tracks
///////////////////////////
mge._sequencer._play = function() {

    // Alias
    let _currentAudioTime = mge._audio._audioContext.currentTime

    // Play the bar only if is time to schedule it and if sequencer is started
    if (_currentAudioTime >= this._nextBarTriggerTime && this._status == 'started') {

        // Play all trakcs
        for (let i=0; i < this._tracks.length; i++) {
            // Get track and play it
            let _track = this._tracks[i]
            this._playTrackBar(_track, this._nextBarNum)
        }

        // Update sequencer information
        this._nextBarNum += 1
        this._nextBarTriggerTime = this._nextBarStartTime + 3 * 60 / this._bpm
        this._nextBarStartTime += 4 * 60 / this._bpm

    }

}


