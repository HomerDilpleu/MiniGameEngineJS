///////////////////////////
// Change the scene
///////////////////////////

mge._game._sceneChange = function (_scene) {

    // Create empty start function if not exists
    if (!_scene.start) {
        _scene.start = function () {}
    }

    // Create update start function if not exists
    if (!_scene.update) {
        _scene.update = function () {}
    }

    // Create draw start function if not exists
    if (!_scene.draw) {
        _scene.draw = function () {}
    }

    // Defin this scene as the next scene to run 
    this._nextScene = _scene

}

