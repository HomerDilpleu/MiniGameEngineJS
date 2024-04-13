///////////////////////////
// Draw the current frame
// in the provided context
///////////////////////////
mge._extensionAnimation._animationObject._create = function() {

    // Properties
    this._frames=[]
    this._currentFrame=-1
    this._lastFrameTime=Date.now()
    this._timeBetweenFrames=100
}