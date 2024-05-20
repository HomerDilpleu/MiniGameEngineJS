///////////////////////////
// Song API
///////////////////////////
mge.song = {

    ////////////////
    // Properties
    ////////////////

    ////////////////
    // Methods
    ////////////////
    create: function() {
        return mge._extensionSong._songs._createSong()
    },

    loadNextSong: function () {
        return mge._extensionSong._songs._loadNextSong()
    }

}
