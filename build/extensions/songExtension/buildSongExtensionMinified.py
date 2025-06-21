import os
import buildUtils

inputFiles = ['../../../src/extensions/songExtension/mge.js',\
              '../../../src/extensions/songExtension/api/_songObject.js',\
              '../../../src/extensions/songExtension/api/song.js',\
              '../../../src/extensions/songExtension/songObject/_create.js',\
              '../../../src/extensions/songExtension/songObject/_load.js',\
              '../../../src/extensions/songExtension/songObject/_play.js',\
              '../../../src/extensions/songExtension/songObject/_setConfig.js',\
              '../../../src/extensions/songExtension/songs/_createSong.js'\
              ]

stringsToUglify=[]
stringsToUglify+=['_extensionSong','_songs','_list','_songObject']
stringsToUglify+=['_create','_config','_isLoaded','_tracks']
stringsToUglify+=['_load']
stringsToUglify+=['_play','_defaultInstrument','_curTrack','_tracks']
stringsToUglify+=['_setConfig']
stringsToUglify+=['_createSong','_newSong']
stringsToUglify+=['_loadNextSong','_nbSongsLoaded','_hasLoadedOneSong','_lstLength']

outputFile='mge_songExtension_Vx.x.x.min.js'

buildUtils.build(inputFiles,stringsToUglify,outputFile)
