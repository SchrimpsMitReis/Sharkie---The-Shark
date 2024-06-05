/**
 * Initializes an array of Audio objects, each loaded with a specific sound file.
 * @type {Audio[]}
 */
let allSounds = [
    new Audio('audio/BarCrowd.mp3'),
    new Audio('audio/click1.mp3'),
    new Audio('audio/bite.mp3'),
    new Audio('audio/oceanSeagulls.mp3'),
    new Audio('audio/coin.mp3'), // coin Pling

    new Audio('audio/pop.mp3'),
    new Audio('audio/theWin.mp3'),
    new Audio('audio/outdoor.mp3'),
    new Audio('audio/testSound.mp3'),
    new Audio('audio/Jaws.mp3'),

    new Audio('audio/biteEndboss.mp3'),
    new Audio('audio/screamEndboss.mp3'),
    new Audio('audio/sleeping.mp3'),
    new Audio('audio/electric-shock.mp3'),
    new Audio('audio/poison.mp3')
]
/**
 * Initializes an array of Audio objects, each loaded with a sound files of the same topic.
 * @type {Audio[]}
 */

let hitSounds = [
    new Audio('audio/hitSound/hitSound (1).mp3'),
    new Audio('audio/hitSound/hitSound (2).mp3'),
    new Audio('audio/hitSound/hitSound (3).mp3'),
    new Audio('audio/hitSound/hitSound (4).mp3'),
    new Audio('audio/hitSound/hitSound (5).mp3'),
    new Audio('audio/hitSound/hitSound (6).mp3'),
    new Audio('audio/hitSound/hitSound (7).mp3')
]

// Audio Config
allSounds[0].volume = 0.2
allSounds[3].volume = 0.1
allSounds[1].used;
allSounds[1].loop = false;
allSounds[9].loop = true;
allSounds[10].loop = false;
allSounds[12].loop = true;

/**
 * Plays a Sound from allSounds
 * @param {number} x 
 */
async function playSound(x){
    await allSounds[x].play()
}
/**
 * Plays a sound from the allSounds array only once per session or until reset. 
 * Each sound can only be played once unless the 'used' property is reset elsewhere in the code.
 * @param {number} x - The index of the sound in the allSounds array to play.
 */
async function playSoundOnce(x){
    if(!allSounds[x].used){
        await allSounds[x].play();
        allSounds[x].used = true;
    }
}
/**
 * Resets the 'used' flag of a sound in the `allSounds` array to allow it to be played again.
 * This function ensures that sounds which are meant to be played only once per interaction
 * can be re-triggered after they have been initially used.
 * @param {number} x - The index of the sound in the `allSounds` array whose 'used' flag should be reset.
 */
function playSoundOnceUnuse(x){
    if(allSounds[x].used){
        allSounds[x].used = false;
    }
}
/**
 * Plays a random sound from an array of Audio objects. This function selects a sound at random 
 * from the provided array and plays it.
 * @param {Audio[]} x - An array of Audio objects from which a random sound will be played.
 */
async function playRandomSound(x){
    let random = Math.floor(Math.random()* x.length)
    await x[random].play()
}
/**
 * Toggles the mute state for all sounds within the game, both for individual sound effects
 * and any background music tracks. This applies to all sounds in the allSounds and hitSounds arrays,
 * and also toggles a global mute state tracked by the `world` object.
 */
function muteAll(){
    allSounds.forEach((sound)=>{
        sound.muted = !sound.muted;
    })
    hitSounds.forEach((sound)=>{
        sound.muted = !sound.muted;
    })

    world.muted = !world.muted;
}
