///////////////////////////
// Song API
///////////////////////////
mge._extensionSong._songObject= {
    
    ////////////////
    // Properties
    ////////////////
    // Config
    set config(_value) {
        this._setConfig(_value)
    },
    get config() {
        return this._config
    },

    ////////////////
    // Methods
    ////////////////
    load: function() {
        this._load()
    },

    play: function(_bpm, _instruments, _mix) {
        this._play(_bpm, _instruments, _mix)
    }
}
