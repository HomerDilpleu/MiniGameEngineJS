////////////////////////////////////////////////////////
// Load next song and return the load completion 
// (nb songs loaded / nb total songs)
////////////////////////////////////////////////////////

mge._extensionSong._songs._loadNextSong = function () {
    
    // Shortcuts
    let _lst = mge._extensionSong._songs._list

    // Variables
    let _nbSongsLoaded = 0
    let _hasLoadedOneSong = false
    let _lstLength = _lst.length

    // If list is empty, do nothing and return 100%
    if (_lst.length == 0) {
        return 1
    } else {
    // Else count loaded songs and load first non loaded song
        _lst.forEach(function (_song) {
            if (_song._isLoaded) {_nbSongsLoaded+=1}
            else if (!_hasLoadedOneSong) {
                _song._load()
                _nbSongsLoaded+=1
                _hasLoadedOneSong=true
            }
        })
        return _nbSongsLoaded / _lstLength
    }

}
