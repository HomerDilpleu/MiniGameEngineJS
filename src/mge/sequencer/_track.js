///////////////////////////
// Track object
///////////////////////////
mge._sequencer._track = {
    _bars: [],
    _instrument: {},
    _volume: 1,
    _setVolume: function(_volume) {
        // Change the volume of the track
        if (_volume <= 0) {
            this._volume = 0
        } 
        else if (_volume >= 1) {
            this._volume = 1
        } 
        else {
            this._volume = _volume
        }
    },
    _getBar: function (_numBar) {
        // Get the content of a given bar
        let _nbBars = this._bars.length
        if (_nbBars == 0) {
          return ''
        }
        else if (_numBar%_nbBars == 0) {
          return this._bars[_nbBars-1]
        }
        else {
          return this._bars[_numBar%_nbBars-1]
        }
      }
}


