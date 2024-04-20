class throwableObject extends moveableObjekt{

    constructor(){
        super()
    }
    throw(x){
        console.log(world.width);
        this.speedY = 10;
        this.applyGravity();
        setInterval(()=>{
            if(world.charakter.otherDirection){
                this.position_x -= x;
            }else{
                this.position_x += x;
            }
        },1)
    }
}