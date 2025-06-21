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

inputLines=buildUtils.readFiles(inputFiles)

outputFile='mge_songExtension_Vx.x.x.js'

buildUtils.writeResultNoTransfo (inputLines, outputFile)

