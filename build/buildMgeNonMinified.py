import os
import buildUtils

inputFiles = ['../src/mge.js',\
              '../src/audio.js',\
              '../src/synthetizer.js',\
              '../src/sequencer.js',\
              '../src/game.js',\
              '../src/keyboard.js',\
              '../src/mouse.js',\
              '../src/sprite.js',\
              '../src/timer.js',\
              '../src/audio/_create.js',\
              '../src/audio/_setVolume.js',\
              '../src/audio/_volumeToGain.js',\
              '../src/canvas/_create.js',\
              '../src/canvas/_fitToScreen.js',\
              '../src/game/_create.js',\
              '../src/game/_createSprite.js',\
              '../src/game/_createSynth.js',\
              '../src/game/_createTimer.js',\
              '../src/game/_getClonesNb.js',\
              '../src/game/_sceneChange.js',\
              '../src/game/_start.js',\
              '../src/keyboard/_isKeyPressed.js',\
              '../src/keyboard/_onKeyDown.js',\
              '../src/keyboard/_onKeyUp.js',\
              '../src/keyboard/_reset.js',\
              '../src/keyboard/_update.js',\
              '../src/keyboard/_create.js',\
              '../src/loop/_create.js',\
              '../src/loop/_start.js',\
              '../src/loop/_tick.js',\
              '../src/mouse/_onClick.js',\
              '../src/mouse/_onDown.js',\
              '../src/mouse/_onMove.js',\
              '../src/mouse/_onOut.js',\
              '../src/mouse/_onUp.js',\
              '../src/mouse/_reset.js',\
              '../src/mouse/_update.js',\
              '../src/mouse/_create.js',\
              '../src/sprite/_create.js',\
              '../src/sprite/_draw.js',\
              '../src/sprite/_isClicked.js',\
              '../src/sprite/_isDragged.js',\
              '../src/sprite/_isSelected.js',\
              '../src/sprite/_isColliding.js',\
              '../src/sprite/_isTouched.js',\
              '../src/sprite/_cloneCleanList.js',\
              '../src/sprite/_cloneCreate.js',\
              '../src/sprite/_cloneDelete.js',\
              '../src/sprite/_cloneDeleteAll.js',\
              '../src/sprite/_cloneExecuteForEach.js',\
              '../src/sprite/_listCollisionsWithClones.js',\
              '../src/synthetizer/_standardOsc.js',\
              '../src/synthetizer/_synthGetCacheId.js',\
              '../src/synthetizer/_synthInit.js',\
              '../src/synthetizer/_synthPlay.js',\
              '../src/synthetizer/_synthPlayLive.js',\
              '../src/synthetizer/_synthPreRender.js',\
              '../src/synthetizer/_synthPlayPreRendered.js',\
              '../src/sequencer/_create.js',\
              '../src/sequencer/_noteToFrequency.js',\
              '../src/sequencer/_createTrack.js',\
              '../src/sequencer/_playTrackBar.js',\
              '../src/sequencer/_play.js',\
              '../src/sequencer/_start.js',\
              '../src/sequencer/_stop.js',\
              '../src/sequencer/_track.js',\
              '../src/timer/_init.js',\
              '../src/timer/_start.js',\
              '../src/timer/_update.js',\
              '../src/main.js'\
              ]

inputLines=buildUtils.readFiles(inputFiles)

outputFile='mge_Vx.x.x.js'

buildUtils.writeResultNoTransfo (inputLines, outputFile)

