# MiniGameEngineJS
This project has been created for the 2023 js13kGames challenge https://js13kgames.com/

The objective is to create a **minimalist and easy to use** engine for simple 2D games including:
* Game loop
* Scenes management
* Mouse and keyboard controls
* Sprites, sprites clones and collisions
* Synthetizer
* Audio sequencer

# Installation
MGE is plain javascript. To use it, just import the latest version of the minified distribution (mge_Vx.x.x.min.js) available in the dist directory:

```
<script src="mge_V0.0.1.min.js"></script>
```

For developping and debugging, it is possible to use the non minified version also available in the dist directory:

```
<script src="mge_V0.0.1.js"></script>
```

# How it works
## Scenes
A scene is an object that must have at least the 3 following methods:
* start: executed once, when the scene starts
* update: executed for each frame. This method must manage the game logic (physics, events,...)
* draw: executed for each frame, just after the update method. This method must manage the display logic (what must be rendered and in which order)

```
let myScene = {
    start:function() {
        console.log('Start scene')
    },
    update:function() {
        console.log('Update scene')
    },
    draw: function() {
        console.log('Draw scene')
    }
}
```

At the begining of the game, a scene must be started as follows: 
```
mge.game.start(myScene)
```

To change the current scene, use: 
```
mge.game.changeScene(myScene)
```

## Sprites
A sprite is created as follows : 
```
let newSprite = mge.game.createSprite()
```

A draw function must be declared in order to define how the sprite must be drawn. This function takes a canvas context as parameter:
```
mySprite.drawFunction = function (ctx) {
    ctx.fillStyle='blue'
    ctx.fillRect(0,0,100,100)
}
```

A sprite has several attributes, such as x and y, its coordinates in the screen:

```
mySprite.x = 100
mySprite.y = 200
```

Finally,  the sprite can be drawn by calling its draw method: 

```
mySprite.draw()
```

Other interesting attributes of a sprite are:
* width and height to define the collision box
* scaleX and scaleY to resize the sprite
* isVisible to hide or show the sprite
* isTouched and isCliked to detect interactions with the mouse
* isColliding (otherSprite) to check if there is a collusion with the otherSprite

## Sprite clones
Sprites can be cloned in order to have several objects displayed in the screen, but sharing the same code. For example it can apply to enemies, bullets, ...

A sprite can be cloned as follows:
```
myClone = mySprite.cloneCreate()
```

It can be deleted as follows:
```
myClone.cloneDelete()
```

All the clones of a sprite can be deleted:
```
mySprite.cloneDeleteAll()
```

Other interesting features are:
* the capacity to detect collisions between a sprite and the clones of another sprite: mySprite.listCollisionsWithClones (clonedSprite)
* the capacity to execute, for each clone, a given function:     mySprite.cloneExecuteForEach('functionToExecute')

## User input
Keyboard and mouse events can easily be handled.

Get the an array with the list of pressed keys:
```
let keysPressed = mge.keyboard.keysPressed()
```

Get a boolean indicating if a given a key is pressed
```
let isArrowUpPressed = mge.keyboard.isKeyPressed('ArrowUp')
```

Get a boolean indicating if the mouse has been clicked
```
let isClicked = mge.mouse.isCliked()
```

Get mouse coordinates
```
let mouseX = mge.mouse.x
let mouseY = mge.mouse.y
```

## Synthetizer
MGE provides a mini synthetizer to create sounds.
This synthetizer is composed of one oscillator (sine, square, triangle, sawtooth or white noise), one filter (low pass or high pass) and several adsr envelops (volume, filter frequency, filter Q, detune,...).

The synthetizer settings must be declared in an object as follows.

```
let mySynth = {
    oscType:'sine',
    filterType: 'lowpass',
    volumeADSR: {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1},
    pitchADSR: {a:0, d:0, s:1, r:0, minValue:1000, maxValue: 500}
    detuneADSR: {a:0, d:0, s:1, r:0, minValue:0, maxValue: 0}
    filterFreqADSR: {a:0, d:0, s:1, r:0, minValue:20000, maxValue: 20000}
    filterQADSR: {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1}
}   
```

All these settings are **NOT** mandatory. The following example is perfectly correct:
```
let mySynth = {
    oscType:'triangle',
    volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: 1}
}
```

To play the sound of a synthetizer, the **mge.audio.playSound** function must be called with the following parameters:
* synthezer configuration
* frequency
* starttime
* duration
* volume

The following example will play right now a sine wave of 440 Hz during 1 second

```
mge.audio.playSound({oscType:'sine'},440,mge.audio.currentAudioTime,1,1)
```

## Audio sequencer
The audio sequencer allows to play simultaneously several tracks.
A track is an array of "bars". When the sequencer is started, each bar of each track will be played sequencially.
Each track will loop **independently** (restart playing from the first bar after the last bar has been played). 
It means all the tracks do **NOT** need to have the same number of bars. 
For example, the bass track could be a repeated 4 bars pattern and the lead guitare track could be a 16 bars melody.

### Bars
A bar is has 4 beats. Technically, a bar is an array that provides the list of notes to be played and their duration:

```
// Create 3 bars
let myBar1 = ['C2',4]                                 // Whole C (2nd octave)
let myBar2 = ['C1',2,'G1',2]                          // Half G (1st octave) and half G (1st octave)
let myBar3 = ['C4',1.5,'Eb4',0.5,'G4',1,'Bb4',1]      // Dotted quarter C4, eighth Eb4, quarter G4 and quarter Bb4 

// Create the list of bars of the track
let myBars = []
myBars.push(myBar1,myBar2,myBar3)
```

**NOTE:** Only flatten (b) notes are allowed --> Gb4 must be used instead of F#4.

### Instruments
A track must be played by an insrtument. An instrument is an object having at least a "play" function that will generated the sound.
This play function must have the following parameters:
* frequency
* startTime
* duration
* volume

The easiest way to create an instrument is to use the MGE synthetizer.
Example of a simple "retro gaming" instrument:

```
let myRetroGameInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {oscType:'triangle',
                            volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: _volume}
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}
```

### Tracks
The final step consists in declaring the tracks using the mge.sequencer.createTrack function that takes 3 parameters:
* array of bars
* instrument
* volume

```
mge.sequencer.createTrack(myBars,myRetroGameInstrument,1)
```

### Starting and stopping the sequencer
Once the tracks have been declared, the sequancer can be used as follows:

```
mge.sequencer.stop()            // Stop the sequencer
mge.sequencer.reset()           // Reset the sequencer (delete all tracks)
mge.sequencer.bpm = 120         // Set the bpm (beats per minute). Bpm can be modified at any time
mge.sequencer.start()           // Starts playing all the tracks
```

## Examples
Some simple examples can be found in the "examples" folder.

## Documentation

### mge.audio
Provides access to the audio context and to the built-in synthetizer
#### -> Properties
* currentAudioTime (Read Only): current time of the audio context
* volume: audio context volume
#### -> Methods
* playSound(_synthConfig,_frequency,_startTime,_duration,_volume): play a sound in the game audio context
    * _synthConfig: synthetizer configuration as follows:
        * oscType: oscllator type (default value = 'sine')
        * filterType: type of filter (default value = 'lowpass')
        * volumeADSR: ADSR envelop for the volume (default value = {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1})
        * pitchADSR: ADSR envelop for the pitch (default value = {a:0, d:0, s:1, r:0, minValue:_frequency, maxValue: _frequency})
        * detuneADSR: ADSR envelop for the detune (default value = {a:0, d:0, s:1, r:0, minValue:0, maxValue: 0})
        * filterFreqADSR: ADSR envelop for the filter frequency (default value = {a:0, d:0, s:1, r:0, minValue:20000, maxValue: 20000})
        * filterQADSR: ADSR envelop for the filter Q (default value = {a:0, d:0, s:1, r:0, minValue:1, maxValue: 1})
    * _frequency: sound frequency in Hz
    * _startTime: start time (of the audio context)
    * _duration: duration in s
    * _volume: volume (value between 0 and 1)

-------------------------
### mge.game
Provides access to the MGE game
#### -> Properties
* width: game canvas width
* height: game canvas height
* fps (Read Only): current FPS (Frames per seconds) of the game loop
* clonesNb (Read Only): total number of sprite clones currently existing
#### -> Methods
* start(_scene): starts the game and starts the _scene
* changeScene(_scene): changes the current _scene 
* createSprite(): creates and returns a sprite object

-------------------------
### mge.keyboard 
Provides access to the keyboard input
#### -> Properties
* keysPressed (Read Only): array of keys currently pressed
#### -> Methods
* isKeyPressed(_key): checks if a given key is pressed (boolean)

-------------------------
### mge.mouse 
Provides access to the mouse input
#### -> Properties
* isClicked (Read Only): checks if the mouse has been clicked (boolean)
* x (Read Only): mouse x position in the canvas
* y (Read Only): mouse y position in the canvas

-------------------------
### mge.sequencer 
Provides access to the audio sequencer
#### -> Properties
* bpm: beats per minutes 
#### -> Methods
* createTrack(_bars, _instrument, _volume): creates a new track
    * _bars: array with the list of the bars to be played in the track
    * _instrument: instrument that must play the track
    * _volume: track volume
* start(): starts the sequencer (start playing the tracks)
* stop(): stop the sequencer
* reset(): delete all the tracks

-------------------------
### Sprites 
Sprites are created using mge.game.createSprite():
```
let mySprite = mge.game.createSprite()
```
#### -> Properties
* drawFunction (write only): function that will draw the sprite. This function takes exacltly 1 argument: the canvas context
* width: width of the sprite, used for collision
* height: height of the sprite, used for collision
* x: x location of the sprite in the canvas
* y: y location of the sprite in the canvas
* scaleX: resize factor for width
* scaleY: resize factor for height
* isVisible: boolean that indicates of the sprite must be drawn or not
* drawBoundaries: boolean that indicates if the bundaries (collision box) must be displayed. Useful for debugging
* isTouched (read only): boolean that indicates if the sprite is touched by the mouse
* isClicked (read only): boolean that indicates if the sprite is clicked
#### -> Methods
* draw(): draw the sprite on the canvas (manages resizing, positionning, bundaries drawing and visibility)
* isColliding(_spriteToCheck): returns a boolean that indicates if the sprite is colling with the sprcified sprite (box detection)
* cloneCreate(): creates a clone of the sprite
* cloneDelete(): deletes itself as clone
* cloneDeleteAll(): deletes all the clones of the sprite
* cloneExecuteForEach(_method): execute the spcified _method for all the clones of the sprite
* listCollisionsWithClones(_sprite): checks if the sprite is colliding with clones of the specified sprite. Returns an array of clones

# Contact
homer.dilpleu@yahoo.com
