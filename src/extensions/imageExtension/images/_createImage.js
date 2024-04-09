////////////////////////////////////
// Create a new image object
////////////////////////////////////

mge._extensionImage._images._createImage = function () {
    
    // Create an image object
    let _newImage = Object.create(mge._extensionImage._imageObject)
    _newImage._create()

    // Add it to images list
    this._list.push(_newImage)

    // Return the image
    return _newImage
}