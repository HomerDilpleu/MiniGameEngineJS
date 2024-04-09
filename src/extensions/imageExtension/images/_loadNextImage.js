////////////////////////////////////////////////////////
// Load next image and return the load completion 
// (nb images loaded / nb total images)
////////////////////////////////////////////////////////

mge._extensionImage._images._loadNextImage = function () {
    
    // Shortcuts
    let _lst = mge._extensionImage._images._list

    // Variables
    let _nbImagesLoaded = 0
    let _hasLoadedOneImage = false
    let _lstLength = _lst.length

    // If list is empty, do nothing and return 100%
    if (_lst.length == 0) {
        return 1
    } else {
    // Else count loaded images and load first non loaded image
        _lst.forEach(function (_img) {
            if (_img._isLoaded) {_nbImagesLoaded+=1}
            else if (!_hasLoadedOneImage) {
                _img._load()
                _nbImagesLoaded+=1
                _hasLoadedOneImage=true
            }
        })
        return _nbImagesLoaded / _lstLength
    }

}
