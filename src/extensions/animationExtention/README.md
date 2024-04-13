# Animation extension
The aim of this extension is to provide an easy way to define, manage and draw animations.
An animation is a set of frames that are displayed successively, frame by frame.
In this extension, frames are not traditional images such as png, bmp, jpeg... Frames are objects that contain at least a "draw" function with a 2d context as unique parameter; this draw function is in charge of drawing the image on the canvas.

Even if it is not mandatory, these frames objects can be created using the mge "image" extension; see documentation and source code of this extension.

# Installation
This extension is plain javascript. To use it, just import the latest version of the minified distribution (mge_animationExtension_Vx.x.x.min.js) available in the dist directory:
```
<script src="mge_animationExtension_V0.0.1.min.js"></script>
```

For developping and debugging, it is possible to use the non minified version also available in the dist directory:
```
<script src="mge_animationExtension_V0.0.1.js"></script>
```

# How it works
## First step: Activate the extension on an object
Event if an animation can be activated to any object, it will very likely be activated on a sprite. To do so, function 'loadExtention' must be called with the sprite as parameter.

```
let sprite = mge.game.createSprite()
mge.animation.loadExtention(sprite)
```

## Second step: Define the array of frames and the time between 2 images
The array of "frames" must be created, a frame being an object containing at least a "draw" function with a 2d canvas as parameter.

Once created, this array must be attached to the sprite and the time between 2 frames (in ms) can be configured (default is 100ms).

```
let animationFrames = [image1, image2, image3]
sprite.animation.frames = animationFrames
sprite.animation.timeBetweenFrames = 80
```

## Third step: Define the draw function of the sprite
The last step consists in using the "animation.draw" function in the "drawFunction" function of the sprite.

```
sprite.drawFunction = function (ctx) {
    this.animation.draw(ctx)
}
```

## Important note on sprite clones
By default, when a clone of a sprite is created, it shares the same "animation" object. It means, the sprite and the clone will display exactly the same animation at the same time. It is perfectly suitable if you want all the sprites having synchronised animations.

However, if you want the clones to have specific animation, desynchronised from the sprite animation, you have to call the 'activateOwnCloneAnimation' function. 

In the following example, clone1 and sprite will display exactly the same frame at the same time; clone2 will have his own animation, desynchronised from the sprite animation:
```
let clone1 = sprite.cloneCreate()
let clone2 = sprite.cloneCreate()
mge.animation.activateOwnCloneAnimation(clone2)
```

# Examples
Some simple examples can be found in the "examples" folder.

# Documentation

## mge.animation
Provide functions to load animation on a sprite or a sprite clone

### -> Properties
No property

### -> Methods
* loadExtention(_sprite): create, in the given sprite, additional methods and properties needed for the animation extension
* activateOwnCloneAnimation(_clone): unlink the animation of the clone from the animation of the sprite. For that, the sprite animation methods and properties are copied in the clone.

## sprite.animation
Once the extension has been loaded on a sprite, this sprite contains additionnal properties and methods dedicated to the animation.

### -> Properties
* timeBetweenFrames: time, in ms, between 2 frames
* frames: array of frames 

### -> Methods
* draw(_ctx): draw the "current" frame of the animation on the canvas
* restart(): restart the animation by setting the first frame of the animation as "current" frame

# Contact
homer.dilpleu@yahoo.com
