class throwableObject extends moveableObjekt{

    constructor(){
        super()
        this.directionLeft = world.charakter.otherDirection
    }
    throw(x){
        console.log(world.width);
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