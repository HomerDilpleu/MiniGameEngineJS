///////////////////////////
// Get the frequency in Hz
// of a given note on a given
// octave.
// Example E2
///////////////////////////
mge._sequencer._noteToFrequency = function(_noteToEvaluate) {
    // List of basic frequence octave 0
    let _notesFrequence = {C:32.7,Db:34.6,D:36.7,Eb:38.9,E:41.2,F:43.6,Gb:46.2,G:49,Ab:51.9,A:55,Bb:58.3,B:61.7}
    // Get the note and the octave
    let _octave = parseInt(_noteToEvaluate.substr(_noteToEvaluate.length-1,_noteToEvaluate.length),10)
    let _note = _noteToEvaluate.substr(0,_noteToEvaluate.length-1)
    // Calculate the frequency
    let _frequency = _notesFrequence[_note] * Math.pow(2,_octave)
    return Math.round(_frequency)
}
