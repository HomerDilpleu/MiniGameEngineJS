# MiniGameEngineJS
This project has been created for the 2023 js13kGames challenge https://js13kgames.com/

The objective was to create a **minimalist and easy to use** engine for simple 2D games including:
* Game loop
* Scenes management
* Mouse and keyboard controls
* Sprites, sprites clones and collisions
* Synthetizer
* Audio sequencer

**Since 2023, this project has largely being improved and is still maintained actively.**

The main objectives remain the same:
* Limited size: around 4Kb minified and zip
* Easyness: MGE API is very simple to use and largely documented
* Minimalist but complete: provides all the basic features of a generic 2D engine

**Exemple of games created with MGE** 
* Cathedral builder (MGE 0.0.1): https://dilpleu-games.itch.io/cathedral-builder
* Unloved 13 (MGE 1.0.0): https://dilpleu-games.itch.io/unloved-13
* Wash the cat (MGE 1.1.1): https://dilpleu-games.itch.io/wash-the-cat
  

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
* ...

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

A synthetizer is made of one or several oscillators (an array of oscillators).

Each oscillator has one type (sine, square, triangle, sawtooth or white noise), one filter (low pass or high pass), several adsr envelops (volume, filter frequency, detune,...) and some reverb options.

An oscillator settings must be declared in an object as follows.

```
let myOsc = {
    _type: 'sawtooth', 
    _octave: 0, 
    _volumeADSR: {a:0.1, d:0.1, s:0.8, r:0.1, minValue: 0, maxValue: 1},
    _detuneADSR: {a:0, d:0, s:1, r:0, minValue: 0, maxValue: 0},
    _pitchADSR: {a:0, d:0, s:1, r:0, minValue: 1, maxValue: 1},
    _filterType: 'lowpass', 
    _filterQ:1,
    _filterADSR: {a:0, d:0, s:1, r:0, minValue: 10000, maxValue: 10000},
    _reverb: {_delay: 0, _feedbackLevel: 0},
}   
```

All these settings are **NOT** mandatory. The following example is perfectly correct:
```
let myOsc = {
    _type:'triangle',
    _volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: 1}
}
```

A synthetizer is created using the **mge.game.createSynthetizer** function that takes as parameter an array of oscillators.

Let's imagine we want te create a synthetizer with 2 oscillators, one sine osc and one noise osc with different adsr envelops:

```
let sineOsc = {
    _type:'sine',
    _volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: 1}
}
let noiseOsc = {
    _type:'noise',
    _volumeADSR: {a:2, d:0.5, s:1, r:0.2, minValue:0, maxValue: 1}
}
let mySynth = mge.game.createSynthetizer([sineOsc,noiseOsc])

```

To play the sound of a synthetizer, the synthetizer **play** function must be called with the following parameters:
* frequency
* starttime
* duration
* volume

The following example will play, right now, the **mySynth** synthetizer created previously at 440 Hz during 1 second

```
mySynth.play(440,mge.audio.currentAudioTime,1,1)
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
Example of a simple instrument:

```
let simpleSynthConfig = {
  _type:'triangle',
  _volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: 1}
}
let simpleSynth = mge.game.createSynthetizer([simpleSynthConfig])
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
Once the tracks have been declared, the sequencer can be used as follows:

```
mge.sequencer.stop()            // Stop the sequencer
mge.sequencer.reset()           // Reset the sequencer (delete all tracks)
mge.sequencer.bpm = 120         // Set the bpm (beats per minute). Bpm can be modified at any time
mge.sequencer.start()           // Starts playing all the tracks
```

## Timer
Timers provide a progression rate (in %) for a given duration. They are useful for creating sprite animations.

For example, if a sprite has an "opacity" property, you can create a timer to change the opacity from 0 to 1 in 3 seconds.

To create a timer, use the **mge.game.createTime()** function that takes 2 parameters
* duration of the timer in ms
* mode: if 'L' the timer will loop (restart automatically when reach 100% progress), else it will be executed once (from 0% to 100%).

Once started, you can restart the timer at anytime using its **start()** method.

You can get the progress of the timer (decimal between 0 and 1) by calling it **progress** property.

### IMPORTANT
You must explicitely call the **update()** method in the game loop. This method is responsbile for increasing the progress property.

```
// Create a scene to illustrate the timer usage
let myScene = {
    start:function() {
        // Create a 3s seconds timer that will loop
        myTimer = mge.game.createTimer(3000,'L')
    },
    update:function() {
        // Update the progress of the timer
        myTimer.update()
    },
    draw: function() {
        // Display the progress (value from 0 to 1) in the console
        console.log(myTimer.progress)
    }
}

// Start the scene
mge.game.changeScene(myScene)
```


## Examples
Some simple examples can be found in the "examples" folder.

## Documentation

### mge.audio
Provides access to the audio context
#### -> Properties
* currentAudioTime (Read Only): current time of the audio context
* volume: audio context volume

-------------------------
### mge.game
Provides access to the MGE game
#### -> Properties
* width: game canvas width
* height: game canvas height
* fps (Read Only): current FPS (Frames per seconds) of the game loop
* clonesNb (Read Only): total number of sprite clones currently existing
* context (Read Only): reference to game canvas context
#### -> Methods
* start(_scene): starts the game and starts the _scene
* changeScene(_scene): changes the current _scene 
* createSprite(): creates and returns a sprite object
* createTimer(duration, mode)
    * duration: duration of the timer in ms
    * mode: 'L' to loop the timer
* createSynthetizer(_oscList): creates and return a synthetizer object. This method input is an array of oscillator configutations (*)

(*) An oscillator configuration is an object containing the following elements:
* _type: type of the oscillator (sine, square, triangle, sawtooth or noise)
* _octave: the relative octave of this oscillator in the synthetizer (-1 will play an octave below, 0 will play at the synthetizer octave, 1 will play an octave above,...)
* _volumeADSR: {a:0.1, d:0.1, s:0.8, r:0.1, minValue: 0, maxValue: 1} --> min and max values as % of volume
* _detuneADSR: {a:0, d:0, s:1, r:0, minValue: 0, maxValue: 0} --> min and max values in cents
* _pitchADSR: {a:0, d:0, s:1, r:0, minValue: 1, maxValue: 1} --> min and max values as % of frequency
* _filterType: lowpass or highpass
* _filterQ: resonance of the filter
* _filterADSR: {a:0, d:0, s:1, r:0, minValue: 10000, maxValue: 10000} --> min and max values in Hz
*  _reverb: {_delay: 0, _feedbackLevel: 0}

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
* isDown (Read Only): true if the mouse button is pressed
* isUp (Read Only): true if the mouse button is not pressed
* isPressed (Read Only): true if the mouse button has just been pressed 
* isReleased (Read Only): true if the mouse button has just been released 

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
* isDragged (read only): boolean that indicates if the sprite is currently being dragged
* isSelected (read only): boolean that indicates if the sprite is currently selected
#### -> Methods
* draw(): draw the sprite on the canvas (manages resizing, positionning, bundaries drawing and visibility)
* cloneCreate(): creates a clone of the sprite
* cloneDelete(): deletes itself as clone
* cloneDeleteAll(): deletes all the clones of the sprite
* cloneExecuteForEach(_method): execute the spcified _method for all the clones of the sprite

-------------------------
### Synthetizer 
Synthetizers are created using mge.game.createSynthetizer():
```
let simpleSynthConfig = {
  _type:'triangle',
  _volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: 1}
}
let simpleSynth = mge.game.createSynthetizer([simpleSynthConfig])
```
#### -> Methods
* play(frequency, startTime, duration, volume): play a the synthetizer


-------------------------
### Timer
Timers are created using mge.game.createTimer(duration,mode):
```
// Create a timer of 3 seconds that will loop
let myTimer = mge.game.createTimer(3000,'L') 
```
#### -> Properties
* progress: progress of the timer (value between 0 and 1)

#### -> Methods
* start(): restart a timer (set its progress to 0)
* update(): update the progress of the timer. Must be called in the game loop


# Contact
homer.dilpleu@yahoo.com
