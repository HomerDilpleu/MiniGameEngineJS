////////////////////////////////////
// Create a new song object
////////////////////////////////////

mge._extensionSong._songs._createSong = function () {
    
    // Create a song object
    let _newSong = Object.create(mge._extensionSong._songObject)
    _newSong._create()

    // Add it to images list
    this._list.push(_newSong)

    // Return the image
    return _newSong
}