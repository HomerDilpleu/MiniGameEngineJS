///////////////////////////
// Convert a volume to
// a gain
///////////////////////////
mge._audio._volumeToGain = function (_volume) {

    // DB reduction max
    let _maxDBReduction = 30

    // Return the gain
    if (_volume <= 0) {
        return 0
    } else if (_volume >= 1) {
        return 1
    } else {
        return Math.pow(10,(_volume - 1) * _maxDBReduction / 10)
    }
}

/////////////////////////////////////////
// gain final = 10 ^ (volume en DB / 10)
/////////////////////////////////////////
// Gain final    Volume en DB
// 1             0
// 0.75          -1.25
// 0.5           -3
// 0.25          -6

/////////////////////////////////////////
// volume en DB = (volume jeu -1) * max réduction
/////////////////////////////////////////
// Exemple max réduction 30
// Volume jeu    Volume DB
// 1             0
// 0.9           -3
// 0.8           -6
// 0.7           -9

/////////////////////////////////////////
// Donc gain final = 10 ^(((volume jeu-1) * max réduction ) / 10)
/////////////////////////////////////////


