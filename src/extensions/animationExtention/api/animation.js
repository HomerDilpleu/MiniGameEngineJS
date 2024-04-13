///////////////////////////
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

}