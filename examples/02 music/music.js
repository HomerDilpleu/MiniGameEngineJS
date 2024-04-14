////////////////////////////////////////////////////////
// MGE EXAMPLE: Music
////////////////////////////////////////////////////////
// This example illustrates how to play music with MGE
// thanks to the built-in synthetizer and sequencer.
// It also provides basic examples on sprites and
// mouse interaction
////////////////////////////////////////////////////////

//------------------------------------------------------
// Game properties
//------------------------------------------------------
// Set the game size and modify background color
//------------------------------------------------------
mge.game.width = 1200
mge.game.height = 600
document.body.style.backgroundColor = "rgb(50,50,50)"
// Create a gameStatus in oder to manage the button beaviour
let gameStatus = 'Waiting for sound activation'

//------------------------------------------------------
// Instruments
//------------------------------------------------------
// Create basic instruments thanks to the MGE synth.
// Each synth must be an object with a "play" function
//------------------------------------------------------
// Instrument used for arpegios
arpegioInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.015, d:400, s:0, r:0.1, minValue:0, maxValue: _volume},
                            filterFreqADSR: {a:0, d:0, s:1, r:2, minValue:_frequency * 2, maxValue: _frequency * 2},
                            filterQADSR: {a:2, d:0, s:1, r:2, minValue:0.1, maxValue: 10},
                            oscType:'sawtooth',
                            filterType:'lowpass'
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}
// Instrument used for bass
bassInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.5, d:0, s:1, r:0.05, minValue:0.3, maxValue: _volume},
                            filterFreqADSR: {a:0.5, d:0.7, s:0.8, r:0.05, minValue:_frequency, maxValue: _frequency * 1.5},
                            oscType:'triangle',
                            filterType:'lowpass'
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}
// Instrument used for alto
altoInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.2, d:0.1, s:0.9, r:0.01, minValue:0.2, maxValue: _volume},
                            filterFreqADSR: {a:0.3, d:0.3, s:0.7, r:0.01, minValue:_frequency, maxValue: _frequency * 2},
                            oscType:'square',
                            filterType:'lowpass'
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}
// Instrument used for soprano
sopranoInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.02, d:400, s:0, r:0.1, minValue:0, maxValue: _volume},
                            oscType:'sine'
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}

//------------------------------------------------------
// Tracks
//------------------------------------------------------
// Create 4 tracks (arpegio, bass, alto, soprano)
//------------------------------------------------------
// Arpegio track
arpegio1 = ['D2',1,'A2',1,'D3',1,'Gb3',1]
arpegio2 = ['A1',1,'E2',1,'A2',1,'Db3',1]
arpegio3 = ['B1',1,'Gb2',1,'B2',1,'D3',1]
arpegio4 = ['Gb1',1,'Db2',1,'Gb2',1,'A2',1]
arpegio5 = ['G1',1,'D2',1,'G2',1,'B2',1]
arpegio6 = ['D1',1,'A1',1,'D2',1,'Gb2',1]
arpegio7 = ['G1',1,'D2',1,'G2',1,'B2',1]
arpegio8 = ['A1',1,'E2',1,'A2',1,'Db3',1]
arpegioBars = []
arpegioBars.push(arpegio1,arpegio2,arpegio3,arpegio4,arpegio5,arpegio6,arpegio7,arpegio8)
mge.sequencer.createTrack(arpegioBars,arpegioInstrument,0.85)
// Bass track
bassWhole1 = ['Gb2',4]
bassWhole2 = ['E2',4]
bassWhole3 = ['D2',4]
bassWhole4 = ['Db2',4]
bassWhole5 = ['B1',4]
bassWhole6 = ['A1',4]
bassWhole7 = ['B1',4]
bassWhole8 = ['Db2',4]
bassBars = []
bassBars.push(bassWhole1,bassWhole2,bassWhole3,bassWhole4,bassWhole5,bassWhole6,bassWhole7,bassWhole8)
mge.sequencer.createTrack(bassBars,bassInstrument,0.85)
// Alto track - do not play 1st sequence
altoHalf1 = ['D3',2,'Gb3',2]
altoHalf2 = ['A3',2,'G3',2]
altoHalf3 = ['Gb3',2,'D3',2]
altoHalf4 = ['Gb3',3,'E3',1]
altoHalf5 = ['D3',2,'B2',2]
altoHalf6 = ['D3',2,'Gb3',2]
altoHalf7 = ['G3',2,'B3',2]
altoHalf8 = ['A3',3,'G3',1]
altoBars = []
altoBars.push(['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4]) // Empty bars (instrument does not play)
altoBars.push(altoHalf1,altoHalf2,altoHalf3,altoHalf4,altoHalf5,altoHalf6,altoHalf7,altoHalf8)
altoBars.push(altoHalf1,altoHalf2,altoHalf3,altoHalf4,altoHalf5,altoHalf6,altoHalf7,altoHalf8)
altoBars.push(altoHalf1,altoHalf2,altoHalf3,altoHalf4,altoHalf5,altoHalf6,altoHalf7,altoHalf8)
altoBars.push(altoHalf1,altoHalf2,altoHalf3,altoHalf4,altoHalf5,altoHalf6,altoHalf7,altoHalf8)
mge.sequencer.createTrack(altoBars,altoInstrument,0.7)
// Soprano track
sopranoMelody1 = ['A5',1,'Gb5',0.5,'G5',0.5,'A5',1,'Gb5',0.5,'G5',0.5]
sopranoMelody2 = ['A5',0.5,'A4',0.5,'B4',0.5,'Db5',0.5,'D5',0.5,'E5',0.5,'Gb5',0.5,'G5',0.5]
sopranoMelody3 = ['Gb5',1,'D5',0.5,'E5',0.5,'Gb5',1,'Gb4',0.5,'G4',0.5]
sopranoMelody4 = ['A4',0.5,'B4',0.5,'A4',0.5,'G4',0.5,'A4',0.5,'Gb4',0.5,'G4',0.5,'A4',0.5]
sopranoMelody5 = ['G4',1,'B4',0.5,'A4',0.5,'G4',1,'Gb4',0.5,'E4',0.5]
sopranoMelody6 = ['Gb4',0.5,'E4',0.5,'D4',0.5,'E4',0.5,'Gb4',0.5,'G4',0.5,'A4',0.5,'B4',0.5]
sopranoMelody7 = ['G4',1,'B4',0.5,'A4',0.5,'B4',1,'Db5',0.5,'D5',0.5]
sopranoMelody8 = ['A4',0.5,'B4',0.5,'Db5',0.5,'D5',0.5,'E5',0.5,'Gb5',0.5,'G5',0.5,'A5',0.5]
sopranoBars = []
sopranoBars.push(['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4]) 
sopranoBars.push(['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4]) 
sopranoBars.push(sopranoMelody1,sopranoMelody2,sopranoMelody3,sopranoMelody4,sopranoMelody5,sopranoMelody6,sopranoMelody7,sopranoMelody8)
sopranoBars.push(sopranoMelody1,sopranoMelody2,sopranoMelody3,sopranoMelody4,sopranoMelody5,sopranoMelody6,sopranoMelody7,sopranoMelody8)
sopranoBars.push(['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4],['r',4]) 
mge.sequencer.createTrack(sopranoBars,sopranoInstrument,0.7)

//------------------------------------------------------
// Audio sequencer 
//------------------------------------------------------
// Set bpm (beat per minute)
mge.sequencer.bpm = 180

//------------------------------------------------------
// Button
//------------------------------------------------------
// The unique button of this game. Allows the player
// to start and stop the sequencer
//------------------------------------------------------
// Create a MGE sprite and define its position and size
let button = mge.game.createSprite()
button.x = 600
button.y = 200
button.width = 300
button.height = 100
// Set the button message depending on the gameStatus
button.setMessage = function () {
    if (gameStatus == 'Waiting for sound activation') {
        this.message = 'Activate sound'
    } else 
    if (gameStatus == 'Sound activated') {
        this.message = 'Play music'
    } else 
    if (gameStatus == 'Playing') {
        this.message = 'Stop music'
    } else 
    if (gameStatus == 'Stopped') {
        this.message = 'Play music'
    } else {
        this.message = 'Play music'
    }
}
// Button action (start or stop sequencer), depending on the gameStatus
button.action = function() {
    if (gameStatus == 'Waiting for sound activation') {
        gameStatus = 'Sound activated'
    } else 
    if (gameStatus == 'Sound activated') {
        mge.sequencer.start()
        gameStatus = 'Playing'
    } else 
    if (gameStatus == 'Playing') {
        mge.sequencer.stop()
        gameStatus = 'Stopped'
    } else 
    if (gameStatus == 'Stopped') {
        mge.sequencer.start()
        gameStatus = 'Playing'
    } else {
        mge.sequencer.start()
        gameStatus = 'Playing'
    }
}
// Override the drawFunction method
button.drawFunction = function (ctx) {
    // Draw the button
    ctx.strokeStyle = 'white'
    ctx.strokeRect(0,0,this.width, this.height)
    // Draw the message
    ctx.fillStyle='white'
    ctx.font = '40px serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(this.message, this.width/2, this.height/2)
}

//------------------------------------------------------
// Scene
//------------------------------------------------------
// Only one scene is created for this game
//------------------------------------------------------
let scene = {
    start:function() {
    },
    update:function() {
        // Check if the button has been clicked
        if (button.isClicked) {button.action()}
        // Update the button message
        button.setMessage()
    },
    draw: function() {
        // Draw the button
        button.draw()
    }
}

//------------------------------------------------------
// Start the game
//------------------------------------------------------
// When all the pages are loaded, the game starts by 
// executing the scene
//------------------------------------------------------
window.addEventListener("load", (event) => {
    mge.game.start(scene)
  }
)
