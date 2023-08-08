///////////////////////////
// Start the game
///////////////////////////

mge._game._start = function (_scene) {

    // Dependencies
    let _loop = mge._loop

    // Change scene and start the game loop
    this._sceneChange(_scene)
    _loop._start()

}


