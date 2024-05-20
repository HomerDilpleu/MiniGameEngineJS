# Song extension
This extension provides a way to create songs with a minimum of code.
A song is represented by a json object containing all the song information:
- its structure organised in "sections"
- the bars of each part of each sections

# Installation
This extension is plain javascript. To use it, just import the latest version of the minified distribution (mge_songExtension_Vx.x.x.min.js) available in the dist directory:

```
<script src="mge_songExtension_V0.0.1.min.js"></script>
```

For developping and debugging, it is possible to use the non minified version also available in the dist directory:

```
<script src="mge_songExtension_V0.0.1.js"></script>
```

# How it works
## Json structure
Example of a basic json structure:
```
{
    "_str": [0,0,1],
    "_p": [ {
            "_b": [["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",2]],
            "_s": [[0,1,2,2],[3,0,1,1]]
            },
	    {
            "_b": [["D4",4],["G4",4],["C4",4],["A4",4]],
            "_s": [[0,1,2,2],[3,0,1,1]]
            }
          ]
}
```
* _str provides the struture of the song (a list of sections). In the example above, section "0" will be played twice, then section "1" will be played once.
* _p provides the list of parts of the song

For eeach part, the following information must be provided:
* _b: list of DISTINCT bars that will be played by the part.
* _s: list that describes each section. Each section is represented by an array of bars. In the example above, part 0 will play for secton 0: bar 0, bar 1, bar 2, bar 2 

## Create and load a song
The first step consists in creating a song object and defining its json structure.

The second step consists in loading the song (creating each track of the song)

```
-- Create the song object and define its json structure
let song = mge.song.create()
song.config = {"_str": [0,0,1],"_p": [ {"_b": [["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",2]],"_s": [[0,1,2,2],[3,0,1,1]]},{"_b": [["D4",4],["G4",4],["C4",4],["A4",4]],"_s": [[0,1,2,2],[3,0,1,1]]}]}

-- Load the song (create the tracks)
song.load()
```

## Play a song
To play a second, you first have to create 
- an array of instruments (on instrument per part)
- an array with the volume of each instrument (this is the mix of the song)
- the tempo (bpm)

Then you can play the song using the "play" method

```
// Create an instrument (see mge documentation for more informaton about instruments)
let myRetroGameInstrument = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {oscType:'triangle',
                            volumeADSR: {a:0.02, d:0.5, s:0.2, r:0.15, minValue:0, maxValue: _volume}
                        }      
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
    }
}

// Create the orchestra (list of instruments)
let orchestra = []
orchestra.push(myRetroGameInstrument)
orchestra.push(myRetroGameInstrument)

// Create the mix
let mix = [1,0.9]

// Define the tempo
let bpm = 120

// And finally play the song
song.play(bpm,orchestra,mix)

```

# Examples
Some simple examples can be found in the "examples" folder.

# Documentation
## mge.song
A song is created the following way.

```
let song = mge.song.create()
```

This action creates a new song and add it in the list of songs of the game 

### -> Properties
* config: the json structure of the song

### -> Methods
* load(): create the tracks of the song and store the result in an object of the game
* play(_bpm, _instruments, _mix): play the song at the "_bpm" tempo, using the "_instruments" orchestra with "_mix" volume 
* mge.loadNextSong: load the "next" song among the list of game songs and provides, as result, the percentage of loaded songs. This method can be used to display a progress bar during the loading process of all songs


# Contact
homer.dilpleu@yahoo.com
