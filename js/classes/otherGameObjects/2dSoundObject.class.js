/**
 * Represents a 2D sound object in the game, controlling the playback and volume based on character proximity.
 * This class initializes an audio object that plays continuously and adjusts its volume
 * based on the distance from the character to the sound's position.
 *
 * @class
 * @param {string} url - The URL of the audio file to be played.
 * @param {number} x - The x-coordinate position of the sound source in the game world. Defaults to 1000.
 * @param {number} range - The maximum range at which the sound can be heard at decreasing volumes.
 */
class SoundObject2D {
    constructor(url, x = 1000, range){
        this.sound = new Audio(url)
        this.sound.play()
        this.sound.loop = true;
        this.position_x = x;
        this.range = range
        this.detectionLoop = null;
    }

    /**
     * Sets up an interval to adjust the sound's volume based on the character's proximity to the sound source.
     * Volume is maximized when the character is at the position of the sound and decreases with distance until it reaches zero outside the specified range.
     */
    detectVolume(){
        this.detectionLoop = setInterval(()=>{
            let charakterPosX = world.charakter.position_x;
            let distanceX = Math.abs(this.position_x - charakterPosX)
            if (distanceX <= this.range && !world.muted){
                this.sound.volume = ((this.range - distanceX)/this.range )*0.5
            }else{
                this.sound.volume = 0;
            }
        }, 10)
    }

    /**
     * Stops all active loops for this sound object, particularly the interval that adjusts its volume.
     */
    stopLoops(){
        clearInterval(this.detectionLoop)
    }
    
}