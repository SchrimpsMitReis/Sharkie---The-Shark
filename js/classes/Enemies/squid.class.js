class Squid extends moveableObjekt {
    IMAGES_SQUIDSTILL = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png"
    ];
    IMAGES_DIE = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L4.png"
    ]
    currentImage = 0;
    lifePoints = 5;
    constructor(x, y) {
        super().loadImage("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png")
        this.loadImages(this.IMAGES_SQUIDSTILL)
        this.loadImages(this.IMAGES_DIE)
        this.speed = 5 + Math.random() * 2;
        this.position_x = x;
        this.position_y = y;
        this.animateLoop = null;
        this.animate()
    }

    animate() {
        this.animateLoop = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DIE)
                this.loadImage(this.IMAGES_DIE[2])
            }
            else {
                this.moveUp()
                this.playAnimation(this.IMAGES_SQUIDSTILL)
            }
        }, 300)

    }
    stopLoops() {
        this.animateLoop = null;
    }
    outOfView(){
        return this.position_y < 0
    }

}