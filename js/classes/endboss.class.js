class Endboss extends moveableObjekt{
    position_x = 3000;
    position_y = 50;
    height = 300;
    width = 300;
    lifePoints = 100;
    IMAGES_INTRO = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png",
    ]
    IMAGES_FLOATING = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png"
    ];
    IMAGES_DEAD = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/EndbossTot (1).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/EndbossTot (2).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/EndbossTot (3).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/EndbossTot (4).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/EndbossTot (5).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/EndbossTot (6).png",
    ]
    IMAGES_HURT = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/4.png"
    ]
    constructor(){
        super().loadImage(this.IMAGES_FLOATING[0])
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)
        this.animate()
    }
    animate(){
        
        setInterval( ()=>{
            if (this.isDead()){
                this.playAnimation(this.IMAGES_DEAD)
            }else if (this.isHurt()){
                this.playAnimation(this.IMAGES_HURT)
            }
            else{this.playAnimation(this.IMAGES_FLOATING)}
        }, 100)

    }

}