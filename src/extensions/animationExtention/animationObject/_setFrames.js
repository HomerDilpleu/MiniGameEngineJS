///////////////////////////
// Change the _frames of
// the animation
///////////////////////////
mge._extensionAnimation._animationObject._setFrames = function(_frames) {

    // Load the _frames array
    this._frames = _frames

    // Re initialize the other animation properties
    this._currentFrame==-1
    this._lastFrameTime=Date.now()
}