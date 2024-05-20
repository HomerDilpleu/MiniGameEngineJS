///////////////////////////
// Load the song in an array of tracks
///////////////////////////
mge._extensionSong._songObject._load = function() {

    // Shortcuts
    let _config = this._config

    // Initialaize tracks
    let _tracks = []

    // For each part
    _config._p.forEach(function (_part) {
        let _currentPart = []
        // For each section
        _config._str.forEach(function (_section) {
            // For each bar of the section
            _part._s[_section].forEach(function (_bar) {
                _currentPart.push(_part._b[_bar])
            })
        })
        _tracks.push(_currentPart)
    })

    // Sav the track content
    this._tracks = _tracks

    // Update status
    this._isLoaded=true

}
