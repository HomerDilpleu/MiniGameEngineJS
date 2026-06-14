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

stringsToUglify=[]

#########################################
# Audio
#########################################
# _create.js
stringsToUglify+=['_audioContext','_audioGain']
# _playSound.js
stringsToUglify+=['_playSound','_synthConfig','_outputNode','_frequency','_startTime','_duration','_applyADSR','_context']
# _setVolume.js
stringsToUglify+=['_setVolume']
# _volumeToGain.js
stringsToUglify+=['_volumeToGain','_maxDBReduction']
# Namespace
stringsToUglify+=['_audio']
#########################################
# Synthetizer
#########################################
# _standardOsc.js
stringsToUglify+=['_standardOsc','_applyADSR','_envelop','_audioParam', '_startTime', '_duration']
stringsToUglify+=['_play','_buffer','_noiseOutput','_oscGain','_oscFilter','_feedbackGain','_realFrequency']
# _synthGetCacheId.js
stringsToUglify+=['_synthGetCacheId']
# _synthInit.js
stringsToUglify+=['_synthInit','_oscList']
# _synthPlay.js
# _synthPlayLive.js
# _synthPlayPreRendered.js
stringsToUglify+=['_soundGain','_synthPlayLive','_synthPlayPreRendered','_synthPlay','_preRenderedSounds']
# _synthPreRender.js
stringsToUglify+=['_offlineContext','_synthPreRender']
# Namespaces
stringsToUglify+=['_synth','_synthetizer']

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
# _createTimer.js
stringsToUglify+=['_createTimer','_mode']
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
stringsToUglify+=['_createTrack','_bars','_instrument','_tracks','_track','_newTrack']
# _noteToFrequency.js
stringsToUglify+=['_noteToFrequency','_noteToEvaluate','_notesFrequence','_note','_frequency']
# _playTrackBar.js
stringsToUglify+=['_playTrackBar','_track','_barNum','_instrument','_bar','_curTime','_noteFrequency','_note','_duration']
# _play.js
stringsToUglify+=['_play','_currentAudioTime','_track']
# _start.js
stringsToUglify+=['_start']
# _stop.js
stringsToUglify+=['_stop']
# _track.js
stringsToUglify+=['_track','_bars','_instrument','_setVolume','_getBar','_numBar','_nbBars']
# Namespace
stringsToUglify+=['_sequencer']
#########################################
# Timer
#########################################
# _createTimer.js
stringsToUglify+=['_timer','_createTimer']
# _start.js
stringsToUglify+=['_start','_progress','_startTimestamp']
# _update.js
stringsToUglify+=['_update']
#########################################
# Other
#########################################
stringsToUglify+=['_create']


outputFile='mge_Vx.x.x.min.js'

buildUtils.build(inputFiles,stringsToUglify,outputFile)
