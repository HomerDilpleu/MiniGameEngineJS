////////////////////////////////////
// Activate the animation of a clone
// by copying its prototype animation
////////////////////////////////////

mge._extensionAnimation._activateOwnCloneAnimation = function (_clone) {

    // Copy the animation prototype object in the clone itself
    _clone.animation = Object.create(_clone.__proto__.animation)
    
}