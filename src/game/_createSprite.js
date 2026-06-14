
mge._game._createSprite = function () {

    // Create the sprite
    let _newSprite = Object.create(mge._sprite)
    _newSprite._create(mge._canvas._renderContext)

    // Add it to the list of game sprites
    mge._game._spritesList.push(_newSprite)

    // And return the sprite 
    return _newSprite
}
