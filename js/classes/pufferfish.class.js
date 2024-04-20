class Pufferfish extends moveableObjekt {
    speed = Math.random()*7;
    IMAGES_PUFFERFISHSTILL = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",

    ];
    IMAGES_DIE = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/DIE (1).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/DIE (2).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/DIE (3).png"
    ]
    currentImage = 0;
    lifePoints = 5;
    constructor(x, y){
        super().loadImage("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png")
        this.loadImages(this.IMAGES_PUFFERFISHSTILL)
        this.loadImages(this.IMAGES_DIE)
        this.position_x = x;
        this.position_y = y;
        this.animate()
    }

    animate(){
        setInterval( ()=>{
            this.playAnimation(this.IMAGES_PUFFERFISHSTILL)
        }, 100)
        setInterval( ()=>{
            if (this.isDead()){
                this.playAnimation(this.IMAGES_DIE)
                this.loadImage(this.IMAGES_DIE[2])
            }else{
                this.moveLeft();
                this.playAnimation(this.IMAGES_PUFFERFISHSTILL)
            }
        }, 100)

    }
}