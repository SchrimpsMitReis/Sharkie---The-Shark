class SoundObject2D {
    constructor(x = 1000,y = 220, range){
        this.sound = new Audio('./audio/EndbossMusic.wav')
        this.sound.play()
        this.sound.loop = true;
        // this.sound.volume = 0.5
        this.position_x = x;
        this.position_y = y;
        this.detectVolume(range)
    }
    detectVolume(range){
        setInterval(()=>{
            let charakterPosX = world.charakter.position_x;
            let distanceX = Math.abs(this.position_x - charakterPosX)
            console.log(distanceX);
            if (distanceX <= range ){
                this.sound.volume = ((range - distanceX)/range )*0.5
            }else{
                this.sound.volume = 0;
            }
        }, 1000)
    }
}