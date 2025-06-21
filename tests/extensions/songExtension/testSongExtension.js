//////////////////////////
// SONG
//////////////////////////
let song = mge.song.create()
song.config = {"_str": [0,0,1],"_p": [ {"_b": [["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",2]],"_s": [[0,1,2,2],[3,0,1,1]]},{"_b": [["D4",4],["G4",4],["C4",4],["A4",4]],"_s": [[0,1,2,2],[3,0,1,1]]}]}
song.load()

//////////////////////////
// INSTRUMENTS
//////////////////////////
let myRetroGameInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {oscType:'triangle',
                            volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: _volume}
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}

//////////////////////////
// ORCHESTRA, MIX & TEMPO
//////////////////////////
// Orchestra
let orchestra = []
orchestra.push(myRetroGameInstrument)
orchestra.push(myRetroGameInstrument)
// Mix
let mix = [1,0.9]
// Tempo
let bpm = 120

//////////////////////////
// PLAY BUTTON
//////////////////////////
playButton = mge.game.createSprite()
playButton.width = 200
playButton.height = 50 
playButton.x = 50
playButton.y = 50
playButton.drawFunction = function (ctx) {
  ctx.fillStyle = 'grey'
  ctx.fillRect(0,0,this.width,this.height)
  ctx.fillStyle = 'black'
  ctx.font = '20px Arial' 
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle' 
  ctx.fillText('PLAY', this.width / 2, this.height / 2)
}
playButton.update = function() {
  if (this.isClicked) {
    mge.sequencer.stop()
    mge.sequencer.reset()
    song.play(bpm,orchestra,mix)
  }
}

//////////////////////////
// SCENE
//////////////////////////
sceneMain={}
sceneMain.start = function() {
}
sceneMain.update = function() {
  playButton.update()
}
sceneMain.draw = function() {
  playButton.draw()
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


/*

game.songs.mainSong.config = {"_str":[0,1],"_p":[{"_b":[["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",1,"A2",1],["C2",2,"C2",1,"C2",1],["F2",2,"F2",2],["Bb2",2,"Bb2",1,"Bb2",1],["E2",2,"E2",2],["A2",2,"A2",2],["G2",2,"G2",1,"G2",1]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,4],[1,2,5,6,7,8,0,9]]},{"_b":[["r",4],["r",3,"A2",1],["r",1,"D2",1,"r",1,"D2",1],["r",1,"G2",1,"r",1,"G2",1],["r",1,"C2",1,"r",1,"C2",1],["r",1,"A2",1,"r",0.5,"A2",0.5,"A2",0.5,"A2",0.25,"A2",0.25],["r",1,"C2",1,"r",0.5,"C2",0.5,"C2",0.5,"C2",0.25,"C2",0.25],["r",1,"F2",1,"r",1,"F2",1],["r",1,"Bb2",1,"r",0.5,"Bb2",0.5,"Bb2",0.5,"Bb2",0.25,"Bb2",0.25],["r",1,"E2",1,"r",1,"E2",1],["r",1,"A2",1,"r",1,"A2",1],["r",1,"G2",1,"r",0.5,"G2",0.5,"G2",0.5,"G2",0.25,"G2",0.25]],"_s":[[0,0,0,1,2,3,4,5,2,3,4,5,2,3,4,6],[3,4,7,8,9,10,2,11]]},{"_b":[["D2",4],["G2",4],["C2",4],["A2",4],["G2",0.5,"G2",0.5,"Bb2",3],["C2",0.5,"C2",0.5,"E2",3],["F2",0.5,"F2",0.5,"A2",3],["Bb2",0.5,"Bb2",0.5,"D2",3],["E2",0.5,"E2",0.5,"G2",3],["A2",0.5,"A2",0.5,"Db2",3],["D2",0.5,"D2",0.5,"F2",3],["G2",0.5,"G2",0.5,"B2",3]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,2],[4,5,6,7,8,9,10,11]]},{"_b":[["F3",4],["B3",4],["E3",4],["C3",4],["Bb3",4],["A3",4],["D3",4],["G3",4],["Db3",4]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,2],[4,2,5,6,7,8,0,1]]},{"_b":[["A3",4],["D3",4],["G3",4],["E3",4],["C3",4],["F3",4],["bB3",4]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,2],[1,2,4,5,6,3,0,1]]},{"_b":[["C3",4],["F3",4],["B3",4],["G3",4],["Bb3",4],["E3",4],["A3",4],["D3",4]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,4],[1,4,5,6,7,3,0,1]]},{"_b":[["r",4],["r",0.5,"F3",0.5,"A3",0.5,"G3",0.5,"E3",2],["r",0.5,"F3",0.5,"D3",0.5,"C3",0.5,"A3",2],["r",0.5,"C3",0.5,"D3",1,"E3",0.5,"F3",0.5,"G3",0.5,"E3",0.5],["E3",2,"r",2],["E3",4],["Bb3",0.5,"r",1,"F3",2],["E3",0.5,"r",1,"Bb3",0.5,"D3",0.5,"E3",0.5,"F3",0.5,"G3",0.5],["A3",0.5,"r",1,"E3",2],["D3",0.5,"r",1,"A3",0.5,"C3",0.5,"D3",0.5,"E3",0.5,"F3",0.5],["G3",0.5,"r",1,"D3",2],["Db3",0.5,"r",1,"G3",2],["F3",2,"r",2],["B3",1,"r",3]],"_s":[[0,0,0,0,0,0,0,0,1,2,3,4,1,2,3,5],[6,7,8,9,10,11,12,13]]}]}

game.songs.mainSong.playSong = function() {

    // Restart mge sequencer
    mge.sequencer.stop()
    mge.sequencer.reset()

    // Create the orchestra (list of instruments)
    let orchestra = []
    orchestra.push(game.instruments.kick)
    orchestra.push(game.instruments.snare)
    orchestra.push(game.instruments.electricPiano)
    orchestra.push(game.instruments.electricPiano)
    orchestra.push(game.instruments.electricPiano)
    orchestra.push(game.instruments.electricPiano)
    orchestra.push(game.instruments.electricPiano)

    // Create the mix
    let mix = [9.05,0.85,1.45,1.25,1.25,1.25,3]

    // Define the tempo
    let bpm = 120

    // And finally play the song
    mge.audio.volume = 1.5
    game.songs.mainSong.play(bpm,orchestra,mix)

}
*/
/*
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
// AUDIO
//////////////////////////
myRetroGameInstrument = {
  play: function (_frequency, _startTime, _duration, _volume) {
      let _synthConfig = {oscType:'triangle',
                          volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: _volume}
                      }      
      mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
  }
}
// Create 3 bars
myBar1 = ['C2',4]                                 // Whole C (2nd octave)
myBar2 = ['C1',2,'G1',2]                          // Half G (1st octave) and half G (1st octave)
myBar3 = ['C4',1.5,'Eb4',0.5,'G4',1,'Bb4',1]      // Dotted quarter C4, eighth Eb4, quarter G4 and quarter Bb4 
// Sequencer
mge.sequencer.reset()
mge.sequencer.bpm = 120        
mge.sequencer.createTrack([myBar1],myRetroGameInstrument,1)
mge.sequencer.createTrack([myBar2],myRetroGameInstrument,1)
mge.sequencer.createTrack([myBar3],myRetroGameInstrument,1)


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
  spriteDebug.text.push('Play sine sound: s')
  if(mge.keyboard.isKeyPressed('s')) {
    mge.audio.playSound({oscType:'sine'},440,mge.audio.currentAudioTime,1,1)
  }
  spriteDebug.text.push('Play triangle sound: t')
  if(mge.keyboard.isKeyPressed('t')) {
    mge.audio.playSound({oscType:'triangle'},440,mge.audio.currentAudioTime,1,1)
  }
  spriteDebug.text.push('Play noise sound: n')
  if(mge.keyboard.isKeyPressed('n')) {
    mge.audio.playSound({oscType:'noise'},440,mge.audio.currentAudioTime,1,1)
  }
  spriteDebug.text.push('Start sequencer: w')
  if(mge.keyboard.isKeyPressed('w')) {
    mge.sequencer.stop()
    mge.sequencer.start()
  }
  spriteDebug.text.push('Stop sequencer: x')
  if(mge.keyboard.isKeyPressed('x')) {
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
*/

