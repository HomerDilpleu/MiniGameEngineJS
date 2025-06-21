import os
import buildUtils

inputFiles = ['../../src/mge/mge.js',\
              '../../src/mge/audio.js',\
              '../../src/mge/sequencer.js',\
              '../../src/mge/game.js',\
              '../../src/mge/keyboard.js',\
              '../../src/mge/mouse.js',\
              '../../src/mge/sprite.js',\
              '../../src/mge/audio/_applyADSR.js',\
              '../../src/mge/audio/_create.js',\
              '../../src/mge/audio/_playSound.js',\
              '../../src/mge/audio/_setVolume.js',\
              '../../src/mge/audio/_volumeToGain.js',\
              '../../src/mge/canvas/_create.js',\
              '../../src/mge/canvas/_fitToScreen.js',\
              '../../src/mge/game/_create.js',\
              '../../src/mge/game/_createSprite.js',\
              '../../src/mge/game/_getClonesNb.js',\
              '../../src/mge/game/_sceneChange.js',\
              '../../src/mge/game/_start.js',\
              '../../src/mge/keyboard/_isKeyPressed.js',\
              '../../src/mge/keyboard/_onKeyDown.js',\
              '../../src/mge/keyboard/_onKeyUp.js',\
              '../../src/mge/keyboard/_reset.js',\
              '../../src/mge/keyboard/_update.js',\
              '../../src/mge/keyboard/_create.js',\
              '../../src/mge/loop/_create.js',\
              '../../src/mge/loop/_start.js',\
              '../../src/mge/loop/_tick.js',\
              '../../src/mge/mouse/_onClick.js',\
              '../../src/mge/mouse/_onDown.js',\
              '../../src/mge/mouse/_onMove.js',\
              '../../src/mge/mouse/_onOut.js',\
              '../../src/mge/mouse/_onUp.js',\
              '../../src/mge/mouse/_reset.js',\
              '../../src/mge/mouse/_update.js',\
              '../../src/mge/mouse/_create.js',\
              '../../src/mge/sprite/_create.js',\
              '../../src/mge/sprite/_draw.js',\
              '../../src/mge/sprite/_isClicked.js',\
              '../../src/mge/sprite/_isDragged.js',\
              '../../src/mge/sprite/_isSelected.js',\
              '../../src/mge/sprite/_isColliding.js',\
              '../../src/mge/sprite/_isTouched.js',\
              '../../src/mge/sprite/_cloneCleanList.js',\
              '../../src/mge/sprite/_cloneCreate.js',\
              '../../src/mge/sprite/_cloneDelete.js',\
              '../../src/mge/sprite/_cloneDeleteAll.js',\
              '../../src/mge/sprite/_cloneExecuteForEach.js',\
              '../../src/mge/sprite/_listCollisionsWithClones.js',\
              '../../src/mge/sequencer/_create.js',\
              '../../src/mge/sequencer/_noteToFrequency.js',\
              '../../src/mge/sequencer/_createTrack.js',\
              '../../src/mge/sequencer/_playTrackBar.js',\
              '../../src/mge/sequencer/_play.js',\
              '../../src/mge/sequencer/_start.js',\
              '../../src/mge/sequencer/_stop.js',\
              '../../src/mge/sequencer/_track.js',\
              '../../src/mge/main.js'\
              ]

inputLines=buildUtils.readFiles(inputFiles)

outputFile='mge_Vx.x.x.js'

buildUtils.writeResultNoTransfo (inputLines, outputFile)

