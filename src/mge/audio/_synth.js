/*///////////////////////////
// Create a synthetizer
///////////////////////////
mge._audio._standardOsc = {
    name: 'newInstrument',
    osc1: {},
    osc2: {},
    osc3: {},
    init: function () {
        this.osc1 = Object.create(game.instruments.standardOsc)
        this.osc2 = Object.create(game.instruments.standardOsc) 
        this.osc3 = Object.create(game.instruments.standardOsc)
    },
    getBufferId: function (_frequency, _duration) {
        return this.name + '-' + (Math.round(_frequency*100)/100).toString() + '-' + (Math.round(_duration*100)/100).toString()
    },
    preRender: function (_frequency, _duration) {
        // Create offline context   
        let  offlineContext = new OfflineAudioContext(2, _duration * 1.5 * 44100, 44100)
        // Create an play oscillators
        this.osc1.play(offlineContext, _frequency, 0, _duration, offlineContext.destination)
        this.osc2.play(offlineContext, _frequency, 0, _duration, offlineContext.destination)
        this.osc3.play(offlineContext, _frequency, 0, _duration, offlineContext.destination)
        // Prerender
        offlineContext.startRendering().then(renderedBuffer => {
                game.instruments.preRenderedSounds.set(this.getBufferId(_frequency, _duration),renderedBuffer)
            })
    },
    playLive: function (_frequency, _startTime, _duration, _volume) {
        let _ctx = mge._audio._audioContext
        // Create a gain node for volume
        let _volumeGain = _ctx.createGain()
        _volumeGain.gain.setValueAtTime(_volume, _startTime)
        _volumeGain.connect(mge._audio._audioGain)
        // Create an play oscillators
        this.osc1.play(_ctx, _frequency, _startTime, _duration, _volumeGain)
        this.osc2.play(_ctx, _frequency, _startTime, _duration, _volumeGain)
        this.osc3.play(_ctx, _frequency, _startTime, _duration, _volumeGain)
    },
    playPreRendered: function (_frequency, _startTime, _duration, _volume) {
        let ctx = mge._audio._audioContext
        // Get prerendered buffer
        let source = ctx.createBufferSource()
        source.buffer = game.instruments.preRenderedSounds.get(this.getBufferId(_frequency, _duration))
        // Volume
        let soundGain = ctx.createGain()
        soundGain.gain.setValueAtTime(_volume, _startTime)
        // Connect and play
        source.connect(soundGain)
        soundGain.connect(mge._audio._audioGain)
        source.start(_startTime)
        source.stop(_startTime + _duration * 1.5)
    },
    play: function (_frequency, _startTime, _duration, _volume) {
        if (!isNaN(_frequency)) {
            // Check if the sound is already pre-rendered
            if (game.instruments.preRenderedSounds.get (this.getBufferId(_frequency, _duration)) == undefined) {
                //console.log('Real time')
                this.playLive(_frequency, _startTime, _duration, _volume)
                this.preRender(_frequency, _duration)
            } else {
                //console.log('Pre rendered')
                this.playPreRendered(_frequency, _startTime, _duration, _volume)
            }
        }
    }
}*/