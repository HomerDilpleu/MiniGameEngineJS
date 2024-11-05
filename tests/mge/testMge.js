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
// TEST SPRITE
//////////////////////////
spriteTest = mge.game.createSprite()
spriteTest.width=100
spriteTest.height=100
spriteTest.x=500
spriteTest.y=100
spriteTest.drawBoundaries=true
//
spriteTest.drawFunction = function (ctx) {
  ctx.fillStyle = 'Salmon'
  ctx.fillRect(0,0,100,100)
  ctx.fillStyle = 'DarkSalmon'
  ctx.fillRect(10,10,80,10)
  ctx.fillStyle = 'LightSalmon'
  ctx.fillRect(10,30,80,10)
  ctx.fillStyle = 'IndianRed'
  ctx.fillRect(10,50,80,10)
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
  spriteDebug.text.push('')
  spriteDebug.text.push('SPRITE')
  spriteDebug.text.push('- spriteTest.x: ' + spriteTest.x)
  spriteDebug.text.push('- spriteTest.y: ' + spriteTest.y)
  spriteDebug.text.push('- spriteTest.scaleX: ' + spriteTest.scaleX)
  spriteDebug.text.push('- spriteTest.scaleY: ' + spriteTest.scaleY)
  spriteDebug.text.push('- spriteTest.isTouched: ' + spriteTest.isTouched)
  spriteDebug.text.push('- spriteTest.isClicked: ' + spriteTest.isClicked)
  spriteDebug.text.push('')
  spriteDebug.text.push('Move sprite: arrows')
  if(mge.keyboard.isKeyPressed('ArrowLeft')) {spriteTest.x-=5}
  if(mge.keyboard.isKeyPressed('ArrowRight')) {spriteTest.x+=5}
  if(mge.keyboard.isKeyPressed('ArrowDown')) {spriteTest.y+=5}
  if(mge.keyboard.isKeyPressed('ArrowUp')) {spriteTest.y-=5}
  spriteDebug.text.push('Resize sprite X: 4 / 6')
  if(mge.keyboard.isKeyPressed('6')) {spriteTest.scaleX=spriteTest.scaleX*1.05}
  if(mge.keyboard.isKeyPressed('4')) {spriteTest.scaleX=spriteTest.scaleX/1.05}
  spriteDebug.text.push('Resize sprite Y: 2 / 8')
  if(mge.keyboard.isKeyPressed('8')) {spriteTest.scaleY=spriteTest.scaleY*1.05}
  if(mge.keyboard.isKeyPressed('2')) {spriteTest.scaleY=spriteTest.scaleY/1.05}
  spriteDebug.text.push('Reset sprite size: 5')
  if(mge.keyboard.isKeyPressed('5')) {spriteTest.scaleX=1;spriteTest.scaleY=1}
  spriteDebug.text.push('Create clone: +')
  if(mge.keyboard.isKeyPressed('+')) {
    let newclone = spriteTest.cloneCreate()
    newclone.x = spriteTest.x+20
    newclone.y = spriteTest.y+20
    newclone.scaleX = 1
    newclone.scaleY = 1
  }
  spriteDebug.text.push('Delete all clones: -')
  if(mge.keyboard.isKeyPressed('-')) {spriteTest.cloneDeleteAll()}
}
sceneMain.draw = function() {
  spriteBackground.draw()
  spriteDebug.draw()
  spriteTest.draw()
  spriteTest.cloneExecuteForEach('draw')
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


