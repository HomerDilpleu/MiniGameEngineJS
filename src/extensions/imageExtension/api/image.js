///////////////////////////
// Image API
///////////////////////////
mge.image = {

    ////////////////
    // Properties
    ////////////////

    ////////////////
    // Methods
    ////////////////
    create: function() {
        return mge._extensionImage._images._createImage()
    },

    loadNextImage: function () {
        return mge._extensionImage._images._loadNextImage()
    }

}
