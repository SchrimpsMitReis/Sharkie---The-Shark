/**
 * Initializes an array of Audio objects, each loaded with a specific sound file.
 * @type {Audio[]}
 */
let allSounds = [
    new Audio('audio/BarCrowd_1_1.aac'),
    new Audio('audio/click1.aac'),
    new Audio('audio/bite.aac'),
    new Audio('audio/oceanSeagulls_2.aac'),
    new Audio('audio/coin.aac'), // coin Pling

    new Audio('audio/pop.aac'),
    new Audio('audio/theWin.aac'),
    new Audio('audio/outdoor_1.aac'),
    new Audio('audio/testSound.aac'),
    new Audio('audio/Jaws.aac'),

    new Audio('audio/biteEndboss.aac'),
    new Audio('audio/screamEndboss.aac'),
    new Audio('audio/sleeping.aac'),
    new Audio('audio/electric-shock.aac'),
    new Audio('audio/poison.aac')
]

/**
 * Initializes an array of Audio objects, each loaded with a sound files of the same topic.
 * @type {Audio[]}
 */
let hitSounds = [
    new Audio('audio/hitSound/hitSound (1).aac'),
    new Audio('audio/hitSound/hitSound (2).aac'),
    new Audio('audio/hitSound/hitSound (3).aac'),
    new Audio('audio/hitSound/hitSound (4).aac'),
    new Audio('audio/hitSound/hitSound (5).aac'),
    new Audio('audio/hitSound/hitSound (6).aac'),
    new Audio('audio/hitSound/hitSound (7).aac')
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
