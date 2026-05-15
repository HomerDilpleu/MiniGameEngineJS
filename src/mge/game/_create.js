///////////////////////////
// Create the game
///////////////////////////
mge._game._create = function (_width, _height) {

    // Properties
    this._curScene = ''
    this._nextScene = ''
    this._spritesList = []

    // Create main canvas to render the game
    mge._canvas._create(_width,_height,'GAME_RENDER_CANVAS')

    // Create mouse
    mge._mouse._create(mge._canvas._renderCanvas)

    // Create keyboard
    mge._keyboard._create()

    // Create the audio context
    mge._audio._create()

    // Create the audio sequencer
    mge._sequencer._create()

    // Create the game loop
    mge._loop._create()

}
