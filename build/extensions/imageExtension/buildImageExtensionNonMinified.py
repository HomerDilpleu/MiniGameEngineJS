import os
import buildUtils

inputFiles = ['../../../src/extensions/imageExtension/mge.js',\
              '../../../src/extensions/imageExtension/api/_imageObject.js',\
              '../../../src/extensions/imageExtension/api/image.js',\
              '../../../src/extensions/imageExtension/imageObject/_create.js',\
              '../../../src/extensions/imageExtension/imageObject/_draw.js',\
              '../../../src/extensions/imageExtension/imageObject/_load.js',\
              '../../../src/extensions/imageExtension/imageObject/_setConfig.js',\
              '../../../src/extensions/imageExtension/imageObject/_setScale.js',\
              '../../../src/extensions/imageExtension/images/_createImage.js'\
              ]

inputLines=buildUtils.readFiles(inputFiles)

outputFile='mge_imageExtension_Vx.x.x.js'

buildUtils.writeResultNoTransfo (inputLines, outputFile)

