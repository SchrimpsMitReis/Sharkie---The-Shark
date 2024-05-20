class throwableObject extends moveableObjekt{

    constructor(){
        super()
        this.directionLeft = world.charakter.otherDirection
    }
    throw(x){
        this.speedY = 10;
        this.applyGravity();
        setInterval(()=>{
            if(this.directionLeft){
                this.position_x -= x;
            }else{
                this.position_x += x;
            }
        },1)
    }
}