///////////////////////////
// Loop tick
///////////////////////////

mge._loop._tick = function () {

    // Update tick metrics
    mge._loop._currentTick = performance.now()
    mge._loop._elapsedTick = mge._loop._currentTick - mge._loop._lastTick
    mge._loop._fps = 1 / (mge._loop._elapsedTick / 1000)

    // Fixed time step 16.67ms (60 fps)
    if (mge._loop._elapsedTick >= 16) {

        // Get mouse & keyboard information
        mge._mouse._update() 
        mge._keyboard._update() 

        // Check if the scene must change
        if (mge._game._curScene != mge._game._nextScene) {
            // Update curScene, reset controls and launch the start function of the new scene
            mge._game._curScene = mge._game._nextScene
            mge._mouse._reset()
            mge._keyboard._reset()
            mge._game._curScene.start()
        }

        // Call update function
        mge._game._curScene.update()

        // Clean the clone list of each sprite
        mge._game._spritesList.forEach(_sprite => {
            _sprite._cloneCleanList()
        })

        // Clear screen
        mge._canvas._renderContext.clearRect(0,0,mge._canvas._renderCanvas.width,mge._canvas._renderCanvas.height)

        // Call draw function
        mge._game._curScene.draw()

        // Scale the game render canvas in order to fit window size
        mge._canvas._fitToScreen()

        // Call audio sequencer
        mge._sequencer._play()
        
        // Update tick timestamp
        mge._loop._lastTick = mge._loop._currentTick

    }

    // Loop 
    requestAnimationFrame(mge._loop._tick)
}

