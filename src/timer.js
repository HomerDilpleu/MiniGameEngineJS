// API on timer objects    
mge._timer = {
    ////////////////
    // Properties
    ////////////////
    // progress
    get progress() {
        return this._progress
    },
    ////////////////
    // Methods
    ////////////////
    start : function () {
        this._start()
    },
    update : function() {
        return this._update()
    }
}
