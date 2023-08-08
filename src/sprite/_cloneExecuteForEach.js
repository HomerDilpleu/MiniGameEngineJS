///////////////////////////
// Execute a method for
// each clone
///////////////////////////
mge._sprite._cloneExecuteForEach = function(_method) {

    // Execute the method for eah clone
    this._clonesList.forEach(_clone => {
        _clone[_method]()
    })

}

