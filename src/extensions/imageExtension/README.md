# Image extension
The aim of this extension is to reduce the size of the code for rendering images on 2d canvas.
Instead of writing canvas API instructions such as beginPath, lineTo, createRadialGradient,... the image is described in a simple json structure and then rendered using this extention.

The json describes each path of the image (the patth itself, the fill style, the stroke style) and the text to be displayed if relevant.

# Installation
This extension is plain javascript. To use it, just import the latest version of the minified distribution (mge_imageExtension_Vx.x.x.min.js) available in the dist directory:

```
<script src="mge_imageExtension_V0.0.1.min.js"></script>
```

For developping and debugging, it is possible to use the non minified version also available in the dist directory:

```
<script src="mge_imageExtension_V0.0.1.js"></script>
```

# How it works
## Json structure

Example of a basic json structure:
```
{"_s":{"_w":200,"_h":100},
 "_p":[{"_fs":["C","#ff0000"],
        "_ss":["#000000","1","round","round"],"_gp":[],
        "_c":[["M","0","0"],["L","100","100"]],
        "_t":[8,8,8,"","","","",""]}]}
```

* _s provides the size of the image (_w for width and _h for height)
* _p provides the list of paths (an array of paths)

For each path, the following information must be provided:
* _fs: fill style of the path
* _ss: stroke style of the path
* _c: list of commands
* _t: text style and content

### _fs: fill style of the path
The fill style is represented by an array wich size depends on the type of fill style:
* Uniform color: ['C',color]
* Linear gradient: ['LG', firstPointx, firstPointy, secondPointx, secondPointy]
* Radial gradient: ['LG', firstPointx, firstPointy, firstPointRadius, secondPointx, secondPointy, secondPointRadius]
* No fil: ['N']

For gradients, an other component "_gp" must be added to define the color of the gradient points:
```
"_gp":[[0,"#ff0000"],[1,"#e66465"]]
```

Example of complete fillStyle
```
"_fs":["LG","10","10","20","20"],"_gp":[[0,"#ff0000"],[1,"#e66465"]]
```

### _ss: stroke style of the path
The stroke style is represented by an array of 4 values:
* color
* lineWidth
* lineCap
* lineJoin

Example of complete strokeStyle
```
"_ss":["#000000","1","round","round"]
```

### _c: list of commands
The list of draw commands is represented by an array which size depends on the command:
* Move to: ['M', pointX, pointY]
* Line to: ['L', pointX, pointY]
* Quadratic curve: ['Q', controlPointx, controlPointy, pointx, pointy]
* Bezier curve: ['B', controlPoint1x, controlPoint1y, controlPoint2x, controlPoint2y, pointx, pointy]
* Circle: ['C', centerX, centerY, radius]
* Ellipse: ['E', centerX, centerY, radius1, radius2, angle]
* Rectangle: ['R', topLeftX, topLeftY, width, height]

Example of complete path commands
```
"_c":[["M","50","50"],["Q","75","-35","100","100"]]
```

### _t: text style and content
The text to be rendered is representd by an array of 8 values:
* positionX
* positionY
* fontSize
* fontAttributes: normal, bold, italic
* font
* textAlign
* textBaseline
* text to be displayed

Example of complete text definition
```
"_t":["20","20","14","normal","Comic Sans","left","top","Hello world"]
```

## Create, load and render an image
The first step consists in creating an image object and defining its json structure.

The second step consists in drawing the image on an offline canvas and getting the result in a blob object. This way, the execution of all the commands in the offline canvas is done once and the final result is available in the blob object.

The third steps consists in rendering the blob object in the game canvas. It will generaly be done in the "draw" method of a sprite.

```
-- Create the image object and define its json structure
let img = mge.image.create()
img.config = {_s: {_w:200,_h: 100},_p:[{_c:[['M',50,50],['L',150,50]]}]}

-- Load the image (draw the image in an offline canvas and store the result as a blob)
img.load()

-- Render in game canvas (will be done often in the "draw" function of a sprite)
img.draw(ctx)
```

# Examples
Some simple examples can be found in the "examples" folder.

# Documentation
## mge.image
An image is create the following way.

```
let img = mge.image.create()
```

This action creates a new image and add it in the list of images of the game 

### -> Properties
* config: the json structure of the image
* scale: the scale to be applied when loading the image
* width (Ready Only): real width of the image depending on the scale
* height (Ready Only): real height of the image depending on the scale

### -> Methods
* load(): draw the image in an offline context, store the result in a blob and notifies mge the image is loaded
* draw(_ctx): draw the blob image in the given 2d context
* mge.loadNextImage: load the "next" image among the list of game images and provides, as result, the percentage of loaded images. This method can be used to display a progress bar during the loading process of all images


# Contact
homer.dilpleu@yahoo.com
