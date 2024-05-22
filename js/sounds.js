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
]
let mute = false;
allSounds[0].volume = 0.2
allSounds[3].volume = 0.1
allSounds[1].loop = false;
allSounds[1].used;

allSounds[9].loop = true;
allSounds[10].loop = false;
allSounds[12].loop = true;
let hitSounds = [
    new Audio('audio/hitSound/hitSound (1).mp3'),
    new Audio('audio/hitSound/hitSound (2).mp3'),
    new Audio('audio/hitSound/hitSound (3).mp3'),
    new Audio('audio/hitSound/hitSound (4).mp3'),
    new Audio('audio/hitSound/hitSound (5).mp3'),
    new Audio('audio/hitSound/hitSound (6).mp3'),
    new Audio('audio/hitSound/hitSound (7).mp3')
]
function playSound(x){
    // allSounds[x].load()
    allSounds[x].play()
}
function playSoundOnce(x){
    if(!allSounds[x].used){
        allSounds[x].play();
        allSounds[x].used = true;
    }
}
function playSoundOnceUnuse(x){
    if(allSounds[x].used){
        allSounds[x].used = false;
    }
}
function playRandomSound(x){
    let random = Math.floor(Math.random()* x.length)
    x[random].play()
}
function muteAll(){
    allSounds.forEach((sound)=>{
        sound.muted = !sound.muted;
    })
    hitSounds.forEach((sound)=>{
        sound.muted = !sound.muted;
    })

    world.muted = !world.muted;
}
