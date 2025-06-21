///////////////////////////
// Start the game
///////////////////////////

mge._game._start = function (_scene) {

    // Change scene and start the game loop
    this._sceneChange(_scene)
    mge._loop._start()

}


