class Endboss extends moveableObjekt {
    position_x = 3000;
    position_y = 50;
    // offset = {
    //     top: 120,
    //     left: 10,
    //     right: 30,
    //     bottom: 170,
    // }

    height = 250;
    width = 250;
    lifePoints = 100;
    isAttacking = false;
    energie = 30;
    spawnCount = 0
    firstContact = false
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
    IMAGES_ATTACK = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/6.png",
    ]
    constructor() {
        super().loadImage(this.IMAGES_FLOATING[0])
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.setOffset(0.5, 0.04, 0.06, 0.1)
        this.animateLoop = null
        this.energieLoop = null
        this.animate()
    }
    async animate() {
        this.animateLoop = setInterval(() => {
            if (!this.isDead()) {
                playSoundOnceUnuse(10)
                this.playAnimation(this.IMAGES_FLOATING)
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT)
                } else {
                    this.attack()
                }
                if (this.spawnCount === 0) {
                    this.playAnimation(this.IMAGES_INTRO);
                }
                if (world.charakter.position_x > 2500 && !this.firstContact) {
                    this.spawnCount = 0;
                    this.firstContact = true;

                }    
            } else {
                this.playAnimation(this.IMAGES_DEAD)
                allSounds[10].pause()
                world.isGameOver = true;
                world.win = true
            }
            this.spawnCount++
        }, 100)
        this.energieLoop = setInterval(() => {
            this.energie += 5;
            if (this.energie >= 30) {
                this.energie = 30
            }
        }, 400);
    }
    inRange() {
        let range = Math.abs(this.position_x - world.charakter.position_x)
        return range < 600
    }
    attack() {
        if (this.energie >= 25 && this.inRange()) {
            this.energie -= 25
            this.moveAtoB(world.charakter.position_x, world.charakter.position_y)
            this.playAnimation(this.IMAGES_ATTACK)
            playSoundOnce(10)
        }
    }
    stopLoops(){
        clearInterval(this.animateLoop);
        clearInterval(this.energieLoop);
    }
}

