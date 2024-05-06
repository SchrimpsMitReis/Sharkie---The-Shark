class Charakter extends moveableObjekt {
    height = 220;
    width = 200;
    world;
    speed = 5;
    lifePoints = 100;
    energie = 100;
    coins = 0;
    score = 0;
    meleeActive = false;
    sleepTimer = 0;
    alive = true
    IMAGES_SHARKIESTILL = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/6.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/7.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/8.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/9.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/10.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/11.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/12.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/13.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/14.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/15.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/16.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/17.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/18.png"
    ]
    IMAGES_SHARKIE_SWIM = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/6.png"
    ]
    IMAGES_SHARKIE_DEAD = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png"
    ]
    IMAGES_SHARKIE_HURT_POISON = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/5.png"
    ]
    IMAGES_SHARKIE_HURT_ELECTRO = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/3.png",
    ]
    IMAGES_SHARKIE_FINSLAP = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/6.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/7.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/8.png",
    ]
    IMAGES_SHARKIE_SLEEP = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I1.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I2.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I3.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I4.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I5.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I6.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I7.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I8.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I9.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I10.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I11.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I12.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I13.png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I14.png"
    ]
    IMAGES_SHARKIE_SHOOT = [
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
        "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png"
    ]
    constructor() {
        super().loadImage("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/I2.png")
        this.loadImages(this.IMAGES_SHARKIESTILL)
        this.loadImages(this.IMAGES_SHARKIE_SWIM)
        this.loadImages(this.IMAGES_SHARKIE_DEAD)
        this.loadImages(this.IMAGES_SHARKIE_HURT_POISON)
        this.loadImages(this.IMAGES_SHARKIE_HURT_ELECTRO)
        this.loadImages(this.IMAGES_SHARKIE_FINSLAP)
        this.loadImages(this.IMAGES_SHARKIE_SLEEP)
        this.loadImages(this.IMAGES_SHARKIE_SHOOT)
        this.applyGravity()
        // this.setOffset(0.5, 0.3 ,0.27, 0.24)
        this.setOffset(0.45, 0.05 ,0.05, 0.05)
        this.animate();
    }
    animate() {
        setInterval(() => {
            if (this.alive){
                if (this.world.keyboard.RIGHT && this.position_x <= level01.levelEndX - 180) {
                    this.moveRight()
                }
                if (this.world.keyboard.LEFT && this.position_x > 110) {
                    this.moveLeft()
                }
                if (this.world.keyboard.UP && this.position_y > 0 - 30 ) {
                    this.moveUp()
                }
                if (this.world.keyboard.DOWN && this.position_y < 480 - 150) {
                    this.moveDown()
                }
                if (this.world.keyboard.SHIFT && !(this.energie < 10)){
                        this.speed = 10;
                        this.energie -= 0.7
                    
                } else {
                    this.speed = 5
                }
                if (this.world.keyboard.SPACE && !this.meleeActive) {
                    this.playAnimation(this.IMAGES_SHARKIE_FINSLAP);
                    playRandomSound(hitSounds)
                    this.activateMelee()
                }
                this.world.camera_x = - this.position_x + 100;
            }
            // this.world.lifeBar.position_x = this.position_x 
            // this.world.lifeBar.position_y = this.position_y
        }, 1000 / 60)

        setInterval(() => {
            if (this.isDead()) {
                if (this.alive){
                    this.playAnimation(this.IMAGES_SHARKIE_DEAD)
                    this.alive = false;
                    // setTimeout(()=>{
                        world.isGameOver = true;
                    // },3000)
                }else{
                    this.loadImage(this.IMAGES_SHARKIE_DEAD[11])
                }
            } else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.alive) {
                this.playAnimation(this.IMAGES_SHARKIE_SWIM)
                this.addEnergie(0.5)

            } else {
                this.playAnimation(this.IMAGES_SHARKIESTILL)
                this.addEnergie(1)
            }
        }, 100)
    }
    activateMelee(){
        this.meleeActive = true;
        setTimeout(()=>{
            this.meleeActive = false;
        },200)

    }
    addScore(x){
        this.score += x
    }
    reduceScore(x){
        this.score -= x
        if (this.score < 0){
            this.score = 0
        }
    }
    addEnergie(x){
        this.energie += x;
        if(this.energie > 100){
            this.energie = 100
        }
    }
}