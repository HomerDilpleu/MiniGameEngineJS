// API on sprite objects    
mge._sprite = {
    ////////////////
    // Properties
    ////////////////
    // Draw function
    set drawFunction(_value) {
        this._drawFunction = _value
    },
    // width
    get width() {
        return this._width
    },
    set width(_value) {
        this._width = _value
    },
    // height
    get height() {
        return this._height
    },
    set height(_value) {
        this._height = _value
    },
    // x
    get x() {
        return this._x
    },
    set x(_value) {
        this._x = _value
    },
    // y
    get y() {
        return this._y
    },
    set y(_value) {
        this._y = _value
    },
    // scaleX
    get scaleX() {
        return this._scaleX
    },
    set scaleX(_value) {
        this._scaleX = _value
    },
    // scaleY
    get scaleY() {
        return this._scaleY
    },
    set scaleY(_value) {
        this._scaleY = _value
    },
    // isVisible
    get isVisible() {
        return this._isVisible
    },
    set isVisible(_value) {
        this._isVisible = _value
    },
    // drawBoundaries
    get drawBoundaries() {
        return this._drawBoundaries
    },
    set drawBoundaries(_value) {
        this._drawBoundaries = _value
    },
     // is touched by mouse
    get isTouched() {
        return this._isTouched(mge._mouse._x, mge._mouse._y)
    },   
     // is clicked
     get isClicked() {
        return this._isClicked(mge._mouse._x, mge._mouse._y, mge._mouse._isClicked)
    },  
    
    ////////////////
    // Methods
    ////////////////
    draw : function () {
        this._draw()
    },
    isColliding : function(_spriteToCheck) {
        return this._isColliding(_spriteToCheck)
    },
    cloneCreate : function() {
        return this._cloneCreate()
    },
    cloneDelete : function() {
        this._cloneDelete()
    },
    cloneDeleteAll : function() {
        this._cloneDeleteAll()
    },
    cloneExecuteForEach : function(_method) {
        return this._cloneExecuteForEach(_method)
    },
    listCollisionsWithClones : function(_sprite) {
        return this._listCollisionsWithClones(_sprite)
    }
}
