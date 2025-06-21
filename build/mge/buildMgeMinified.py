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

stringsToUglify=[]

#########################################
# Audio
#########################################
# _applyADSR.js
stringsToUglify+=['_applyADSR','_envelop','_audioParam', '_startTime', '_duration', '_minValue', '_maxValue']
# _create.js
stringsToUglify+=['_audioContext','_audioGain']
# _playSound.js
stringsToUglify+=['_playSound','_synthConfig','_outputNode','_frequency','_startTime','_duration','_applyADSR','_context','_oscType']
stringsToUglify+=['_filterType','_volumeADSR','_pitchADSR','_detuneADSR','_filterFreqADSR','_filterQADSR','_oscGainADSR','_oscVolume','_filter','_osc']
# _setVolume.js
stringsToUglify+=['_setVolume']
# _volumeToGain.js
stringsToUglify+=['_volumeToGain','_maxDBReduction']
# Namespace
stringsToUglify+=['_audio','_volume']
#########################################
# Canvas
#########################################
# _create.js
stringsToUglify+=['_width','_height','_id', '_renderCanvas', '_renderContext']
# _fitToScreen.js
stringsToUglify+=['_fitToScreen','_HtmlCanvas','_scaleX', '_scaleY', '_scale']
# Namespace
stringsToUglify+=['_canvas']
#########################################
# Game
#########################################
# _create.js
stringsToUglify+=['_width','_height','_curScene', '_nextScene','_spritesList']
# _createSprite.js
stringsToUglify+=['_createSprite','_renderContext','_newSprite']
# _sceneChange.js
stringsToUglify+=['_sceneChange','_scene']
# _start.js
stringsToUglify+=['_start','_scene']
#_getClonesNb
stringsToUglify+=['_clonesNb','_getClonesNb']
# Namespace
stringsToUglify+=['_game']
#########################################
# Keyboard
#########################################
# _create.js
stringsToUglify+=['_keyPressedDetected','_keyPressed','_keyboard']
# _isKeyPressed.js
stringsToUglify+=['_isKeyPressed']
# _onKeyDown.js
stringsToUglify+=['_onKeyDown','_key']
# _onKeyUp.js
stringsToUglify+=['_onKeyUp','_key']
# _reset.js
stringsToUglify+=['_reset']
# _update.js
stringsToUglify+=['_update']
# Namespace
stringsToUglify+=['_keyboard']
#########################################
# Loop
#########################################
# _create.js
stringsToUglify+=['_lastTick','_currentTick','_elapsedTick','_fps','_status']
# _start.js
stringsToUglify+=['_start']
# _tick.js
stringsToUglify+=['_tick','_spritesList']
# Namespace
stringsToUglify+=['_loop']
#########################################
# Mouse
#########################################
# _create.js
stringsToUglify+=['_HtmlCanvas','_isClicked','_isDown','_isUp','_isPressed','_isReleased','_xDetected','_yDetected','_clickDetected','_downDetected','_upDetected']
# _onClick.js
stringsToUglify+=['_onClick']
# _onDown.js
stringsToUglify+=['_onDown']
# _onMove.js
stringsToUglify+=['_onMove']
# _onOut.js
stringsToUglify+=['_onOut']
# _onUp.js
stringsToUglify+=['_onUp']
# _reset.js
stringsToUglify+=['_reset']
# _reset.js
stringsToUglify+=['_update']
# Namespace
stringsToUglify+=['_mouse']
#########################################
# Sprite
#########################################
# _create.js
stringsToUglify+=['_ctx','_drawFunction','_width','_height','_scaleX','_scaleY','_isVisible','_drawBoundaries','_dragState','_selectState','_clonesList','_cloneIsValid']
# _draw.js
stringsToUglify+=['_draw']
# _isColliding.js
stringsToUglify+=['_isColliding','_spriteToCheck','_minXDistance','_minYDistance','_realXDistance','_realYDistance']
# _isClicked.js
stringsToUglify+=['_isClicked','_xTouched','_yTouched','_click']
# _isDragged.js
stringsToUglify+=['_isDragged']
# _isTouched.js
stringsToUglify+=['_isTouched','_xTouched','_yTouched','_xMaxSprite','_xMinSprite','_yMaxSprite','_yMinSprite']
# _isSelected.js
stringsToUglify+=['_isSelected']
# _cloneCleanList.js
stringsToUglify+=['_cloneCleanList','_cleanedList']
# _cloneCreate.js
stringsToUglify+=['_cloneCreate','_cloneIsValid','_clonesList']
# _cloneDeleteAll.js
stringsToUglify+=['_cloneDeleteAll','_clonesList']
# _cloneDelete.js
stringsToUglify+=['_cloneDelete','_cloneIsValid']
# _cloneExecuteForEach.js
stringsToUglify+=['_cloneExecuteForEach','_clonesList']
# _listCollisionsWithClones.js
stringsToUglify+=['_listCollisionsWithClones','_spriteToCheck','_touchedClones','_clonesList','_clone']
# Namespace
stringsToUglify+=['_sprite']
#########################################
# Sequencer
#########################################
# _create.js
stringsToUglify+=['_tracks','_bpm','_nextBarNum','_nextBarStartTime','_nextBarTriggerTime','_status']
# _createTrack.js
stringsToUglify+=['_createTrack','_bars','_instrument','_volume','_tracks','_track','_newTrack']
# _noteToFrequency.js
stringsToUglify+=['_noteToFrequency','_noteToEvaluate','_notesFrequence','_octave','_note','_frequency']
# _playTrackBar.js
stringsToUglify+=['_playTrackBar','_track','_barNum','_instrument','_volume','_bar','_curTime','_noteFrequency','_note','_duration']
# _play.js
stringsToUglify+=['_play','_currentAudioTime','_track']
# _start.js
stringsToUglify+=['_start']
# _stop.js
stringsToUglify+=['_stop']
# _track.js
stringsToUglify+=['_track','_bars','_instrument','_volume','_setVolume','_getBar','_numBar']
# Namespace
stringsToUglify+=['_sequencer']
#########################################
# Other
#########################################
stringsToUglify+=['_create']


outputFile='mge_Vx.x.x.min.js'

buildUtils.build(inputFiles,stringsToUglify,outputFile)
