let allSounds = [
    new Audio('audio/BarCrowd.wav'),
    new Audio('audio/click1.mp3'),
    new Audio('audio/bite.mp3'),
    new Audio('audio/oceanSeagulls.wav')
    // new Audio('audio/walkingsound.mp3'), // "Walkingsound"
    // new Audio('audio/SHIFT - swoosh.mp3'), // "Swoosh" 
    // new Audio('audio/coin.mp3'), // coin Pling
    // new Audio('audio/electric-shock.mp3'), // electroshock
    // new Audio('audio/bonk.mp3'), 
    // new Audio('audio/bubblesound.mp3'),
    // new Audio('audio/UnderwaterHit.wav')

]
let mute = false;
allSounds[0].volume = 0.2
allSounds[3].volume = 0.1
allSounds[1].loop = false;
allSounds[1].used;

let hitSounds = [
    new Audio('audio/hitSound/hitSound (1).mp3'),
    new Audio('audio/hitSound/hitSound (2).mp3'),
    new Audio('audio/hitSound/hitSound (3).mp3'),
    new Audio('audio/hitSound/hitSound (4).mp3'),
    new Audio('audio/hitSound/hitSound (5).mp3'),
    new Audio('audio/hitSound/hitSound (6).mp3'),
    new Audio('audio/hitSound/hitSound (7).mp3')
]
let smackSounds = [
    new Audio('audio/smack/smack (1).mp3'),
    new Audio('audio/smack/smack (2).mp3'),
    new Audio('audio/smack/smack (3).mp3'),
    new Audio('audio/smack/smack (4).mp3'),
]
function playSound(x){
    x.load()
    x.play()
}
function playSoundOnce(x){
    if(!x.used){
        x.play();
        x.used = true;
    }
}
function playSoundOnceUnuse(x){
    if(x.used){
        x.used = false;
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
}
