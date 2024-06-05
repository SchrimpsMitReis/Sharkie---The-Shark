/**
 * Represents the main character in the game, managing its animations, movements, and interactions within the game world.
 * Extends the `moveableObjekt` class to include additional functionalities such as animations for different states and melee attacks.
 *
 * @class
 * @extends moveableObjekt
 */
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
    rangeActive = false;
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
        this.setOffset(0.6,0.3,0.22,0.3) // top, left, right, bottom
        this.movementLoop = null;
        this.animationLoop = null;
        this.animate();
    }
    /**
     * Manages all animations and movements based on the character's state and keyboard inputs.
     */
    async animate() {        
        this.movementLoop = setInterval(async () => {
            if (this.alive && !world.isGameOver && !world.pauseGame) {
                allSounds[9].pause()
                if (this.world.keyboard.RIGHT && this.position_x <= 3680) {
                    this.moveRight()
                    await allSounds[9].play()
                    this.resetSleeptimer()
                }
                if (this.world.keyboard.LEFT && this.position_x > 110 ) {
                    this.moveLeft()
                    await allSounds[9].play()
                    this.resetSleeptimer()

                }
                if (this.world.keyboard.UP && this.position_y > 0 - 30) {
                    this.moveUp()
                    await allSounds[9].play()
                    this.resetSleeptimer()
                }
                if (this.world.keyboard.DOWN && this.position_y < 480 - 150) {
                    this.moveDown()
                    await allSounds[9].play()
                    this.resetSleeptimer()
                }
                if (this.world.keyboard.SHIFT && !(this.energie < 10)) {
                    this.speed = 10;
                    this.energie -= 0.7

                } else {
                    this.speed = 5
                }
                if (this.world.keyboard.SPACE && !this.meleeActive) {
                    this.activateMelee()
                    playRandomSound(hitSounds);
                    this.resetSleeptimer()
                }
                this.world.camera_x = -this.position_x + 100;
            }
        }, 1000 / 60)

        this.animationLoop = setInterval(async () => {
            if (!world.pauseGame){
                if (this.isDead()) {
                    allSounds[12].pause()
                    if (this.alive) {
                        this.playAnimation(this.IMAGES_SHARKIE_DEAD)
                        setTimeout(() => {
                            this.alive = false;
                        }, 1000)
                    } else {
                        this.loadImage(this.IMAGES_SHARKIE_DEAD[this.IMAGES_SHARKIE_DEAD.length - 1])
                            world.isGameOver = true;
                    }
                } else {
                    allSounds[12].pause()
                    if (this.isSleeping()) {
                        await allSounds[12].play()
                        this.playAnimation(this.IMAGES_SHARKIE_SLEEP)
                        this.showImage(this.IMAGES_SHARKIE_SLEEP[13])
                    } else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isHurt() && !this.meleeActive) {
                        this.playAnimation(this.IMAGES_SHARKIE_SWIM)
                        this.addEnergie(0.5)
                    }else if (this.meleeActive){
                        this.playAnimation(this.IMAGES_SHARKIE_FINSLAP)
                    }else if(this.rangeActive){
                        this.playAnimation(this.IMAGES_SHARKIE_SHOOT)
                    }else if(this.isHurt()){
                        if (this.lastHitBy instanceof Pufferfish) {
                            this.playAnimation(this.IMAGES_SHARKIE_HURT_POISON)
                        } else if(this.lastHitBy instanceof Squid){
                            this.playAnimation(this.IMAGES_SHARKIE_HURT_ELECTRO)
                        }else{
                            this.playAnimation(this.IMAGES_SHARKIE_HURT_ELECTRO)
                        }
                            
                    }
                    else {
                        this.playAnimation(this.IMAGES_SHARKIESTILL)
                        this.addEnergie(1)
                    }
    
                }
            }

            }, 1000 / 10)
    }

    /**
     * Activates the character's melee attack mode temporarily.
     */
    activateMelee() {
        this.meleeActive = true;
        setTimeout(() => {
            this.meleeActive = false;
        }, 400)

    }
    /**
     * Adds points to the character's score.
     * @param {number} x - The number of points to add.
     */
    addScore(x) {
        this.score += x
    }
    /**
     * Reduces the character's score, ensuring it does not drop below zero.
     * @param {number} x - The number of points to subtract.
     */
    reduceScore(x) {
        this.score -= x
        if (this.score < 0) {
            this.score = 0
        }
    }
    /**
     * Increases the character's energy.
     * @param {number} x - The amount of energy to add.
     */
    addEnergie(x) {
        this.energie += x;
        if (this.energie > 100) {
            this.energie = 100
        }
    }
    /**
     * Stops all ongoing animations and movements for the character.
     */
    reconstuct(){
        this.height = 220;
        this.width = 200;
        this.speed = 5;
        this.lifePoints = 1;
        this.energie = 100;
        this.coins = 0;
        this.score = 0;
        this.meleeActive = false;
        this.alive = true;
        this.position_x = 120;
        this.position_y = 250;
    
    }
    stopLoops(){
        clearInterval(this.movementLoop)
        clearInterval(this.animationLoop)
        allSounds[12].pause()
    }
}