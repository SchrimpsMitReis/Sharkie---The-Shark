class SoundObject2D {
    constructor(url, x = 1000, range){
        this.sound = new Audio(url)
        this.sound.play()
        this.sound.loop = true;
        this.position_x = x;
        this.range = range
        this.detectionLoop = null;
    }
    detectVolume(){
        this.detectionLoop = setInterval(()=>{
            let charakterPosX = world.charakter.position_x;
            let distanceX = Math.abs(this.position_x - charakterPosX)
            if (distanceX <= this.range ){
                this.sound.volume = ((range - distanceX)/this.range )*0.5
            }else{
                this.sound.volume = 0;
            }
        }, 10)
    }
    stopLoops(){
        clearInterval(this.detectionLoop)
    }
}