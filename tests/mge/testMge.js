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
  ctx.textAlign = 'start'
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
  if (mge.mouse.isPressed && this.isTouched) {
    this.xoffset = mge.mouse.x - this.x 
    this.yoffset = mge.mouse.y - this.y 
  }
  if(this.isDragged) {this.x = mge.mouse.x - this.xoffset; this.y = mge.mouse.y - this.yoffset}
  ctx.fillStyle = 'Salmon'
  ctx.fillRect(0,0,100,100)
  ctx.fillStyle = 'DarkSalmon'
  ctx.fillRect(10,10,80,10)
  ctx.fillStyle = 'LightSalmon'
  ctx.fillRect(10,30,80,10)
  ctx.fillStyle = 'IndianRed'
  ctx.fillRect(10,50,80,10)
  if(this.isSelected) {
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.strokeRect(-2,-2,104,104)
  }
}

//////////////////////////
// SYNTHETIZER
//////////////////////////
synthSine = mge.game.createSynthetizer([{_type: 'sine'}])
synthTriangle = mge.game.createSynthetizer([{_type: 'triangle'}])
synthNoise = mge.game.createSynthetizer([{_type: 'noise'}])
synthComplexeOsc1Config = {
  _type:'sawtooth',
  _octave: 0,
  _volumeADSR: {a:0.02, d:0.3, s:0.8, r:0.1, minValue: 0, maxValue: 1},
  _filterType: 'lowpass', 
  _filterADSR: {a:0.1, d:0.1, s:0.8, r:0.1, minValue: 1000, maxValue: 2000},
  _reverb: {_delay: 0.1, _feedbackLevel: 0.4}
}
synthComplexeOsc2Config = {
  _type:'sawtooth',
  _octave: -1,
  _volumeADSR: {a:0.02, d:0.3, s:0.8, r:0.1, minValue: 0, maxValue: 1},
  _filterType: 'lowpass', 
  _filterADSR: {a:0.1, d:0.1, s:0.8, r:0.1, minValue: 1000, maxValue: 2000},
  _reverb: {_delay: 0.1, _feedbackLevel: 0.4}
}
synthComplexeOsc3Config = {
  _type:'sawtooth',
  _octave: 0,
  _volumeADSR: {a:0.02, d:0.3, s:0.8, r:0.1, minValue: 0, maxValue: 1},
  _filterType: 'lowpass', 
  _filterADSR: {a:0.1, d:0.1, s:0.8, r:0.1, minValue: 1000, maxValue: 2000},
  _detuneADSR: {a:0.02, d:0.3, s:0.8, r:0.1, minValue:-4, maxValue: 4},
  _reverb: {_delay: 0.1, _feedbackLevel: 0.4}
}
synthComplexeOscs = [synthComplexeOsc1Config,synthComplexeOsc2Config,synthComplexeOsc3Config]
synthComplexe = mge.game.createSynthetizer(synthComplexeOscs)

//////////////////////////
// SEQUENCER
//////////////////////////
synthRetroConfig = {
  _type:'triangle',
  _volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: 1}
}
synthRetro = mge.game.createSynthetizer([synthRetroConfig])
// Create 3 bars
myBar1 = ['C2',4]                                 // Whole C (2nd octave)
myBar2 = ['C1',2,'G1',2]                          // Half G (1st octave) and half G (1st octave)
myBar3 = ['C4',1.5,'Eb4',0.5,'G4',1,'Bb4',1]      // Dotted quarter C4, eighth Eb4, quarter G4 and quarter Bb4 
// Sequencer
mge.sequencer.reset()
mge.sequencer.bpm = 120        
mge.sequencer.createTrack([myBar1],synthRetro,1)
mge.sequencer.createTrack([myBar2],synthRetro,1)
mge.sequencer.createTrack([myBar3],synthRetro,1)

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
  spriteDebug.text.push('- mge.game.context: ' + mge.game.context)
  spriteDebug.text.push('')
  spriteDebug.text.push('KEYBOARD')
  spriteDebug.text.push('- mge.keyboard.keysPressed : ' + mge.keyboard.keysPressed)
  spriteDebug.text.push('- mge.keyboard.isKeyPressed(space) : ' +  mge.keyboard.isKeyPressed(' '))
  spriteDebug.text.push('')
  spriteDebug.text.push('MOUSE')
  spriteDebug.text.push('- mge.mouse.isClicked: ' + mge.mouse.isClicked)
  spriteDebug.text.push('- mge.mouse.isDown: ' + mge.mouse.isDown)
  spriteDebug.text.push('- mge.mouse.isUp: ' + mge.mouse.isUp)
  spriteDebug.text.push('- mge.mouse.isPressed: ' + mge.mouse.isPressed)
  spriteDebug.text.push('- mge.mouse.isReleased: ' + mge.mouse.isReleased)
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
  spriteDebug.text.push('- spriteTest.isDragged: ' + spriteTest.isDragged)
  spriteDebug.text.push('- spriteTest.isSelected: ' + spriteTest.isSelected)
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
  spriteDebug.text.push('')
  spriteDebug.text.push('AUDIO')
  spriteDebug.text.push('Play sine sound: s + click')
  if(mge.keyboard.isKeyPressed('s') & mge.mouse.isClicked) {
    synthSine.play(440,mge.audio.currentAudioTime,2,1)
  }
  spriteDebug.text.push('Play triangle sound: t + click')
  if(mge.keyboard.isKeyPressed('t') & mge.mouse.isClicked) {
    synthTriangle.play(440,mge.audio.currentAudioTime,2,1)
  }
  spriteDebug.text.push('Play noise sound: n + click')
  if(mge.keyboard.isKeyPressed('n') & mge.mouse.isClicked) {
    synthNoise.play(440,mge.audio.currentAudioTime,2,1)
  }
  spriteDebug.text.push('Play complexe synth: c + click')
  if(mge.keyboard.isKeyPressed('c') & mge.mouse.isClicked) {
    synthComplexe.play(220,mge.audio.currentAudioTime,2,1)
  }
  spriteDebug.text.push('Start sequencer: w + click')
  if(mge.keyboard.isKeyPressed('w') & mge.mouse.isClicked) {
    mge.sequencer.stop()
    mge.sequencer.start()
  }
  spriteDebug.text.push('Stop sequencer: x + click')
  if(mge.keyboard.isKeyPressed('x') & mge.mouse.isClicked) {
    mge.sequencer.stop()
  }
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


