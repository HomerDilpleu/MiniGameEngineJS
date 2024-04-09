
mge._game._createSprite = function () {

    // Dependencies
    let _sprite = mge._sprite
    let _canvas = mge._canvas
    let _game = mge._game

    // Shortcuts
    let _renderContext = _canvas._renderContext

    // Create the sprite
    let _newSprite = Object.create(_sprite)
    _newSprite._create(_renderContext)

    // Add it to the list of game sprites
    _game._spritesList.push(_newSprite)

    // And return the sprite 
    return _newSprite
}
