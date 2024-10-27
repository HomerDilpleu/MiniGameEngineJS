//////////////////////////
// BACKGROUND SPRITE
//////////////////////////
spriteBackground = mge.game.createSprite()
spriteBackground.width=0
spriteBackground.height=0
spriteBackground.x=0
spriteBackground.y=0
//
spriteBackground.drawFunction = function (ctx) {
  ctx.fillStyle = 'grey'
  ctx.fillRect(0,0,mge.game.width,mge.game.height)
}

//////////////////////////
// DEBUG SPRITE
//////////////////////////
spriteDebug = mge.game.createSprite()
spriteDebug.text = []
spriteDebug.width=0
spriteDebug.height=0
spriteDebug.x=0
spriteDebug.y=0
spriteDebug.fontSize = 14
//
spriteDebug.drawFunction = function (ctx) {
  ctx.fillStyle = 'black'
  ctx.font = this.fontSize+'px serif'
  ctx.textAlign = 'Start'
  ctx.textBaseline = 'top'
  // Loop on each line to display
  for (let i = 0; i < this.text.length; i++) {
    ctx.fillText(this.text[i], 0, i*this.fontSize)
  }
}

//////////////////////////
// SCENE
//////////////////////////
sceneMain={}
sceneMain.start = function() {
}
sceneMain.update = function() {
  // Update Sprite Debug
  spriteDebug.text = []
  spriteDebug.text.push('GAME')
  spriteDebug.text.push('- mge.game.width: ' + mge.game.width)
  spriteDebug.text.push('- mge.game.height: ' + mge.game.height)
  spriteDebug.text.push('- mge.game.fps: ' + Math.round(mge.game.fps))
  spriteDebug.text.push('- mge.game.clonesNb: ' + mge.game.clonesNb)
  spriteDebug.text.push('')
  spriteDebug.text.push('KEYBOARD')
  spriteDebug.text.push('- mge.keyboard.keysPressed : ' + mge.keyboard.keysPressed)
  spriteDebug.text.push('- mge.keyboard.isKeyPressed(space) : ' +  mge.keyboard.isKeyPressed(' '))
  spriteDebug.text.push('')
  spriteDebug.text.push('MOUSE')
  spriteDebug.text.push('- mge.mouse.isClicked: ' + mge.mouse.isClicked)
  spriteDebug.text.push('- mge.mouse.x: ' + mge.mouse.x)
  spriteDebug.text.push('- mge.mouse.y: ' + mge.mouse.y)
}
sceneMain.draw = function() {
  spriteBackground.draw()
  spriteDebug.draw()
}



//////////////////////////
// START TESTS
//////////////////////////
  window.addEventListener("load", (event) => {
    let loading = document.getElementById("loading")
    loading.remove()
    mge.game.width = 1280
    mge.game.height = 720
    mge.game.start(sceneMain)
  }
)


