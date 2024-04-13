////////////////////////////////////
// Copy an animation object inside
// a given sprite
////////////////////////////////////

mge._extensionAnimation._loadExtension = function (_sprite) {

    // Create object
    _sprite.animation = Object.create(mge._extensionAnimation._animationObject)

    // Add properties
    _sprite.animation._create()
    
}