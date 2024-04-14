////////////////////////////////////////////////////////
// MGE EXAMPLE: Animation
////////////////////////////////////////////////////////
// This example illustrates how "image" extension and
// "animation" extension work
////////////////////////////////////////////////////////

//------------------------------------------------------
// Game properties
//------------------------------------------------------
// Set the game size and modify background color
//------------------------------------------------------
mge.game.width = 1200
mge.game.height = 600
document.body.style.backgroundColor = "rgb(50,50,50)"

//------------------------------------------------------
// Images
//------------------------------------------------------
// First, define some images thanks to the "image" 
// extention
//------------------------------------------------------
// Create images
let star1 = mge.image.create()
let star2 = mge.image.create()
let star3 = mge.image.create()
let star4 = mge.image.create()
let star5 = mge.image.create()
let star6 = mge.image.create()

// Update their configuration
star1.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#fdd000"],"_ss":["#955c07","3","round","round"],"_gp":[],"_c":[["M","48","5"],["L","62","32"],["L","91","37"],["L","71","58"],["L","74","88"],["L","48","75"],["L","21","88"],["L","24","58"],["L","4","36"],["L","33","32"],["L","48","5"]],"_t":[8,8,8,"","","","",""]}]}
star2.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#fdd000"],"_ss":["#955c07","3","round","round"],"_gp":[],"_c":[["M","48","5"],["L","63","34"],["L","84","38"],["L","69","58"],["L","71","86"],["L","48","76"],["L","22","92"],["L","25","58"],["L","4","36"],["L","33","32"],["L","48","5"]],"_t":[8,8,8,"","","","",""]}]}
star3.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#fdd000"],"_ss":["#955c07","3","round","round"],"_gp":[],"_c":[["M","48","5"],["L","61","34"],["L","72","39"],["L","64","57"],["L","64","84"],["L","49","77"],["L","30","95"],["L","29","59"],["L","15","34"],["L","36","32"],["L","48","5"]],"_t":[8,8,8,"","","","",""]}]}
star4.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#fdd000"],"_ss":["#955c07","3","round","round"],"_gp":[],"_c":[["E","47","49","7","45","0"]],"_t":[8,8,8,"","","","",""]}]}
star5.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#fdd000"],"_ss":["#955c07","3","round","round"],"_gp":[],"_c":[["M","48","5"],["L","59","29"],["L","78","33"],["L","64","57"],["L","65","94"],["L","45","76"],["L","33","83"],["L","33","55"],["L","25","38"],["L","36","32"],["L","48","5"]],"_t":[8,8,8,"","","","",""]}]}
star6.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#fdd000"],"_ss":["#955c07","3","round","round"],"_gp":[],"_c":[["M","48","5"],["L","61","31"],["L","89","34"],["L","69","57"],["L","71","93"],["L","46","76"],["L","29","84"],["L","30","56"],["L","19","39"],["L","36","32"],["L","48","5"]],"_t":[8,8,8,"","","","",""]}]}

// Load them as bitmap objects
star1.load()
star2.load()
star3.load()
star4.load()
star5.load()
star6.load()

// Put the images in an array representinf the frames of the animation
animationFrames = [star1,star2,star3,star4,star5,star6]

//------------------------------------------------------
// Sprite
//------------------------------------------------------
// Create the sprite, load the animation extension
// and set up the draw function
//------------------------------------------------------
// Create a MGE sprite
let sprite = mge.game.createSprite()
sprite.x = 100
sprite.y = 100

// Load the animation extension
mge.animation.loadExtention(sprite)

// Define the frames array and the time between 2 frames (ms)
sprite.animation.frames = animationFrames
sprite.animation.timeBetweenFrames = 100

// Finally update the sprite drawFunction in order to use the animation draw
sprite.drawFunction = function (ctx) {
    this.animation.draw(ctx)
}

//------------------------------------------------------
// Scene
//------------------------------------------------------
// Only one scene is created for this game
//------------------------------------------------------
let scene = {
    start:function() {
    },

    update:function() {
        // If the mouse is clicked, then create a clone of the sprite
        if(mge.mouse.isClicked){
            let clone = sprite.cloneCreate()
            mge.animation.activateOwnCloneAnimation(clone)
            clone.animation.restart()
            clone.x = mge.mouse.x
            clone.y = mge.mouse.y
            clone.scaleX = 0.4
            clone.scaleY = 0.4
            clone.animation.timeBetweenFrames = 150
        }
    },

    draw: function() {
        sprite.draw()
        sprite.cloneExecuteForEach('draw')
    }
}

//------------------------------------------------------
// Start the game
//------------------------------------------------------
// When all the pages are loaded, the background color
// is changed and the game starts by executing the
// scene
//------------------------------------------------------
window.addEventListener("load", (event) => {
    mge.game.start(scene)
  }
)