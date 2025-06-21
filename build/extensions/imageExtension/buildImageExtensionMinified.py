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

stringsToUglify = []
#########################################
# Images
#########################################
# _createImage.js
stringsToUglify+=['_createImage', '_newImage']

#########################################
# Image object
#########################################
# _create.js
stringsToUglify+=['_create', '_config','_isLoaded','_scale', '_bitmap']
# _draw.js
stringsToUglify+=['_draw']
# _load
stringsToUglify+=['_load','_offScreenCanvas','_gradient','_path','_isLoaded']
# _setConfig
stringsToUglify+=['_setConfig']
# _setScale
stringsToUglify+=['_setScale']

#########################################
# Mge
#########################################
# mge.js
stringsToUglify+=['_images', '_imageObject']

outputFile='mge_imageExtension_Vx.x.x.min.js'

buildUtils.build(inputFiles,stringsToUglify,outputFile)
