////////////////////////////////////////
// Add the animation extension to mge
////////////////////////////////////////
mge._extensionAnimation = {
    _animationObject:{
    }
}
////////////////////////////////////
// Activate the animation of a clone
// by copying its prototype animation
////////////////////////////////////

mge._extensionAnimation._activateOwnCloneAnimation = function (_clone) {

    // Copy the animation prototype object in the clone itself
    _clone.animation = Object.create(_clone.__proto__.animation)
    
}////////////////////////////////////
// Copy an animation object inside
// a given sprite
////////////////////////////////////

mge._extensionAnimation._loadExtension = function (_sprite) {

    // Create object
    _sprite.animation = Object.create(mge._extensionAnimation._animationObject)

    // Add properties
    _sprite.animation._create()
    
}///////////////////////////
// Animation API
///////////////////////////
mge.animation = {

    ////////////////
    // Properties
    ////////////////

    ////////////////
    // Methods
    ////////////////
    loadExtention: function(_sprite) {
        mge._extensionAnimation._loadExtension(_sprite)
    },

    activateOwnCloneAnimation: function(_clone) {
        mge._extensionAnimation._activateOwnCloneAnimation(_clone)
    }

}///////////////////////////
// Animation API
///////////////////////////
mge._extensionAnimation._animationObject = {
    
    ////////////////
    // Properties
    ////////////////
    // Time between 2 frames (ms)
    set timeBetweenFrames(_value) {
        this._timeBetweenFrames =_value
        
    },
    get timeBetweenFrames() {
        return this._timeBetweenFrames
    },
    // Animaiton frames
    set frames(_frames) {
        this._setFrames(_frames)
    },

    ////////////////
    // Methods
    ////////////////
    draw: function(_ctx) {
        this._draw(_ctx)
    },

    restart: function() {
        this._restart()
    }
    
}
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
}///////////////////////////
// Change the _frames of
// the animation
///////////////////////////
mge._extensionAnimation._animationObject._setFrames = function(_frames) {

    // Load the _frames array
    this._frames = _frames

    // Re initialize the other animation properties
    this._currentFrame==-1
    this._lastFrameTime=Date.now()
}///////////////////////////
// Draw the current frame
// in the provided context
///////////////////////////
mge._extensionAnimation._animationObject._create = function() {

    // Properties
    this._frames=[]
    this._currentFrame=-1
    this._lastFrameTime=Date.now()
    this._timeBetweenFrames=100
}///////////////////////////
// Restart the animation
// (set _currenFrame = -1)
///////////////////////////
mge._extensionAnimation._animationObject._restart = function() {

    // Restart the animation
    this._currentFrame=-1
}