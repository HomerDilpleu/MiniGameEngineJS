///////////////////////////
// Loop tick
///////////////////////////

mge._loop._tick = function () {

    // Dependencies
    let _canvas = mge._canvas
    let _game = mge._game
    let _mouse = mge._mouse
    let _keyboard = mge._keyboard
    let _sequencer = mge._sequencer

    // Shortcuts
    let _renderContext = _canvas._renderContext
    let _renderCanvas = _canvas._renderCanvas
    let _loop = mge._loop
    let _spritesList = _game._spritesList

    // Update tick metrics
    _loop._currentTick = performance.now()
    _loop._elapsedTick = _loop._currentTick - _loop._lastTick
    _loop._fps = 1 / (_loop._elapsedTick / 1000)

    // Get mouse & keyboard information
    _mouse._update() 
    _keyboard._update() 

    // Check if the scene must change
    if (_game._curScene != _game._nextScene) {
        // Update curScene, reset controls and launch the start function of the new scene
        _game._curScene = _game._nextScene
        _mouse._reset()
        _keyboard._reset()
        _game._curScene.start()
    }

    // Call update function
    _game._curScene.update()

    // Clean the clone list of each sprite
    _spritesList.forEach(_sprite => {
        _sprite._cloneCleanList()
    })

    // Clear screen
    _renderContext.clearRect(0,0,_renderCanvas.width,_renderCanvas.height)

    // Call draw function
    _game._curScene.draw()

    // Scale the game render canvas in order to fit window size
    _canvas._fitToScreen()

    // Call audio sequencer
    _sequencer._play()
    
    // Update tick timestamp
    _loop._lastTick = _loop._currentTick

    // Loop if status is running
    requestAnimationFrame(_loop._tick)
}

