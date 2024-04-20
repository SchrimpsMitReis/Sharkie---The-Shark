class Coin extends moveableObjekt{
    speed = 0;
    IMAGE = "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png";

    constructor(x,y){
        super()
        this.loadImage(this.IMAGE)
        this.position_x = x;
        this.position_y = y;

    }
}