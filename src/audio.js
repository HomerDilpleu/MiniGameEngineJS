///////////////////////////
// Audio API
///////////////////////////
mge.audio = {
    
    ////////////////
    // Properties
    ////////////////
    // Current audio time
    get currentAudioTime () {
        return mge._audio._audioContext.currentTime
    },
    // Global Audio volume
    get volume() {
        return mge._audio._volume
    },
    set volume(_value) {
        mge._audio._setVolume(_value)
    },

    ////////////////
    // Methods
    ////////////////

}





