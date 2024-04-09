///////////////////////////
// Create the game
///////////////////////////
mge._game._create = function (_width, _height) {

    // Properties
    this._curScene = ''
    this._nextScene = ''
    this._spritesList = []

    // Dependencies
    let _canvas = mge._canvas
    let _audio = mge._audio
    let _loop = mge._loop
    let _mouse = mge._mouse
    let _keyboard = mge._keyboard
    let _sequencer = mge._sequencer

    // Create main canvas to render the game
    _canvas._create(_width,_height,'GAME_RENDER_CANVAS')

    // Create mouse
    _mouse._create(_canvas._renderCanvas)

    // Create keyboard
    _keyboard._create()

    // Create the audio context
    _audio._create()

    // Create the audio sequencer
    _sequencer._create()

    // Create the game loop
    _loop._create()

}
