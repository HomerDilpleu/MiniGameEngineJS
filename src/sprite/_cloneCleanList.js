///////////////////////////
// Clean the list of clones
// (deletes items for which
// _cloneIsValid is false)
///////////////////////////
mge._sprite._cloneCleanList = function() {

    // Create an empty cleaned list
    let _cleanedList = []

    // Put in the clean list all the clones that are valid
    this._clonesList.forEach(_clone => {
        if (_clone._cloneIsValid) {
            _cleanedList.push(_clone)
        }
    })

    // Put the result in the clone list
    this._clonesList = _cleanedList

}

