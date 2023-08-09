////////////////////////////////////////////////////////
// MGE EXAMPLE: Geyser
////////////////////////////////////////////////////////
// This example illustrates how sprites and clones
// work in MGE.
// It also shows a basic usage of MGE mouse click
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
// Particles
//------------------------------------------------------
// All the particles will be a clone of this generic
// "particle" object.
//------------------------------------------------------
// Create a MGE sprite for the particles
let particle = mge.game.createSprite()
// Set up particle initial properties
particle.init = function (speedX,speedY,radius,color) {
    // Inital position
    this.x = mge.game.width / 2
    this.y = mge.game.height - 20
    // Inital speed
    this.speedX = speedX
    this.speedY = speedY  
    // Radius
    this.radius = radius
    // Color
    this.color = color
}
// Define how the particle moves
particle.move = function () {
    // Update speed
    let gravity = 0.5
    this.speedY += gravity
    // Update position
    this.x += this.speedX
    this.y += this.speedY
    // Delete particles that touch floor  
    if (this.y > mge.game.height) {
        this.cloneDelete()
    }
}
// Override the drawFunction method
particle.drawFunction = function (ctx) {
    // Create a circle in the center of the sprite (0,0)
    ctx.fillStyle=this.color
    ctx.beginPath()
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI, false) 
    ctx.fill()
}

//------------------------------------------------------
// Geyser
//------------------------------------------------------
// The geyser generates random particles depending
// on geyser intensity
//------------------------------------------------------
geyser = {
    intensity:2
}
// Function to get a random integer between a min and a max
geyser.getRandomInt = function(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
// Generate random particles
geyser.generateParticles = function() {
    // Depending on the intensity, generates a different number of particles,
    // on a different range of speeds and radius
    let intensity = Math.floor(this.intensity)
    for (let i = 0; i < intensity; i++) {
        let speedX = this.getRandomInt(-intensity,intensity+1)
        let speedY = this.getRandomInt(-5*intensity,-1)
        let radius = this.getRandomInt(1,10*intensity) / 10
        let colorR = 254
        let colorG = this.getRandomInt(0,150)
        let colorB = this.getRandomInt(0,150)
        let color = 'rgb('+colorR+','+colorG+','+colorB+')'
        // Create a clone of particles
        let cloneParticle = particle.cloneCreate()
        cloneParticle.init(speedX,speedY,radius,color)
      }
}
// Increase intensity (20 max)
geyser.increaseIntensity = function () {
    this.intensity+=3
    if (this.intensity > 20) {
        this.intensity = 20
    }
}
// Decrease intensity (2 min)
geyser.decreaseIntensity = function () {
    this.intensity+=-0.2
    if (this.intensity < 2) {
        this.intensity = 2
    }
}

//------------------------------------------------------
// Message
//------------------------------------------------------
// A sprite that provides a message to tell the player
// what to do depending on geyser intensity
//------------------------------------------------------
// Create a MGE sprite and define its position
let msg = mge.game.createSprite()
msg.x = 600
msg.y = 100
// Set the message depending on geyser intensity
msg.setMessage = function () {
    if (geyser.intensity < 3) {
        this.message = 'Click on the screen to increase geyser intensity'
    } else 
    if (geyser.intensity < 18) {
        this.message = 'Click more quickly !'
    } else {
        this.message = 'Ho yeah!!!!'
    }
}
// Override the drawFunction method
msg.drawFunction = function (ctx) {
    ctx.fillStyle='white'
    ctx.font = "40px serif"
    ctx.textAlign = "center"
    ctx.fillText(this.message, 0, 0)
}

//------------------------------------------------------
// Information
//------------------------------------------------------
// A sprite that provides information on game FPS and 
// number of particles
//------------------------------------------------------
// Create a MGE sprite and define its position
let info = mge.game.createSprite()
info.x = 1120
info.y = 30
// Override the drawFunction method
info.drawFunction = function (ctx) {
    let fps = 'FPS: '.concat(Math.round(mge.game.fps))
    let clonesNb = 'Nb particles: '.concat(mge.game.clonesNb)
    ctx.font = "12px serif"
    ctx.textAlign = "left"
    // Set font color depending on FPS
    if (mge.game.fps > 55) {
        ctx.fillStyle='green'
    } else 
    if (mge.game.fps > 45) {
        ctx.fillStyle='yellow'
    } else 
    if (mge.game.fps > 35) {
        ctx.fillStyle='orange'
    } else {
        ctx.fillStyle='red'
    }
    ctx.fillText(fps, 10, 40)
    ctx.fillStyle='white'
    ctx.fillText(clonesNb, 10, 60)
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
        // Modify intensity depending on click
        if (mge.mouse.isClicked) {
            geyser.increaseIntensity()
        } else {
            geyser.decreaseIntensity()
        }
        // Generate random particles depending on intensity
        geyser.generateParticles()
        // For each particle, execute the "move" method
        particle.cloneExecuteForEach('move')
        // Update the information message depending on the intensity
        msg.setMessage()
    },
    draw: function() {
        // For each particle, execute the "draw" method
        particle.cloneExecuteForEach('draw')
        // Draw the information message
        msg.draw()
        // Draw informations on FPS and number of particles
        info.draw()
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