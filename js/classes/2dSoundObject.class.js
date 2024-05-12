class SoundObject2D {
    constructor(url, x = 1000, range){
        this.sound = new Audio(url)
        this.sound.play()
        this.sound.loop = true;
        this.position_x = x;
        this.detectVolume(range)
    }
    detectVolume(range){
        setInterval(()=>{
            let charakterPosX = world.charakter.position_x;
            let distanceX = Math.abs(this.position_x - charakterPosX)
            if (distanceX <= range ){
                this.sound.volume = ((range - distanceX)/range )*0.5
            }else{
                this.sound.volume = 0;
            }
        }, 10)
    }
}