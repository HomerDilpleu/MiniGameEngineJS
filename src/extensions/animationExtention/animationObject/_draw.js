///////////////////////////
// Draw the current frame
// in the provided context
///////////////////////////
mge._extensionAnimation._animationObject._draw = function(_ctx) {

    // Get right frame and update parameter
    if(this._currentFrame==-1) {
        // First time the animation is used
        this._currentFrame=0
        this._lastFrameTime=Date.now()
    } else if (Date.now() -  this._lastFrameTime > this._timeBetweenFrames) {
        // Frame must be changed
        this._currentFrame+=1
        if (this._currentFrame > this._frames.length-1) {
            this._currentFrame=0
        }
        this._lastFrameTime=Date.now()
    }

    // Draw to context
    this._frames[this._currentFrame].draw(_ctx)
}