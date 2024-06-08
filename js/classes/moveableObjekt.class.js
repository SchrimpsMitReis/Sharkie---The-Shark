/**
 * Represents a base class for all moveable objects in the game, providing functionalities to handle movement, apply gravity,
 * check ground status, and manage directional changes and animations.
 * @extends drawableObject
 */
class moveableObjekt extends drawableObject {

    position_x = 120;
    position_y = 250;
    height = 50;
    width = 50;
    speed = 0;
    speedY = -0.6;
    otherDirection = false;
    currentImage = 0;
    lifePoints;
    boost;
    lastHit = 0;
    lastHitBy = null
    sleepTimer = new Date().getTime();

    constructor() {
        super()
    }

    /**
     * Applies a gravity effect to the object, making it fall if above ground.
     */
    applyGravity() {
        setInterval(() => {
            if(!world.pauseGame){
                if (this.isAboveGround()) {
                    this.position_y -= this.speedY;
                }
            }
        }, 1000 / 25)
    }

    /**
     * Checks if the object is above the ground level.
     * @returns {boolean} True if above ground, otherwise false.
     */
    isAboveGround() {
        if (this instanceof throwableObject) {
            return true
        } else {
            return this.position_y < 320
        }
    }

    /**
     * Draws a frame around the object if it is a character or enemy. Useful for debugging.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrame(ctx) {
        if (this instanceof Charakter || this instanceof Pufferfish || this instanceof Squid || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "black";
            ctx.rect(this.position_x, this.position_y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Switches the object's horizontal direction, useful for turning around animations.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    switchDirection(ctx) {
        if (this.otherDirection) {
            ctx.save();
            ctx.translate(this.width, 0);
            ctx.scale(-1, 1)
            this.position_x = this.position_x * -1
        }
    }

    /**
     * Resets the horizontal direction flipping after drawing.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    switchDirectionBack(ctx) {
        if (this.otherDirection) {
            ctx.restore()
            this.position_x = this.position_x * -1
        }
    }

/**
     * Handles the object being hit by another object.
     * @param {number} damage - The amount of damage inflicted.
     * @param {moveableObjekt} enemie - The object causing the damage.
     */
    hit(damage = 0, enemie = null) {
        this.lifePoints -= damage;
        if (this.lifePoints < 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
            this.lastHitBy = enemie; 
        }
    }

    /**
     * Checks if the object is currently hurt, based on the last hit time.
     * @returns {boolean} True if the object was hurt within the last 3 seconds.
     */
    isHurt(stuntime = 3) {
        let timepassed = new Date().getTime() - this.lastHit
        timepassed = timepassed / 1000;
        return timepassed < 3;
    }

    /**
     * Determines if the object is in a sleeping state based on inactivity.
     * @returns {boolean} True if the object has been inactive for more than 10 seconds.
     */
    isSleeping() {
        let timepassed = new Date().getTime() - this.sleepTimer;
        timepassed = timepassed / 1000;
        return timepassed > 10 && !this.isHurt() && !world.isGameOver;
    }

    /**
     * resets the Sleeptimer
     */
    resetSleeptimer(){
        this.sleepTimer = new Date().getTime()
    }

    /**
     * Checks if the object is dead, i.e., no life points remaining.
     * @returns {boolean} True if the object has no life points.
     */
    isDead() {
        return this.lifePoints == 0;
    }

    // Movement methods that adjust the object's position based on speed and direction.
    moveRight() {
        this.position_x += this.speed;
        this.otherDirection = false;
    };

    moveLeft() {
        this.position_x -= this.speed;
        if (this instanceof Charakter) {
            this.otherDirection = true;
        }
    }

    moveUp() {
        this.position_y -= this.speed;

    };

    moveDown() {
        this.position_y += this.speed;
    };

    /**
     * Moves Visually to the Targetlocation X/Y
     * @param {*} targetX 
     * @param {*} targetY 
     */
    moveAtoB(targetX, targetY) {
        let xWay = targetX - this.position_x;
        let yWay = targetY - this.position_y;
        let steps = 10;
        let stepDuration = 100; // Dauer eines Schritts in Millisekunden
        this.turnAround(xWay)
        for (let i = 0; i < steps; i++) {
            setTimeout(() => {
                if(!this.isHurt()||!this.isDead()){
                    this.position_x += (xWay / steps);
                    this.position_y += (yWay / steps);
                }
            }, i * stepDuration); // Delay für jeden Schritt erhöhen
        }
    }
    
    /**
     * Turns The Object if needed
     * @param {*} xWay 
     */
    turnAround(xWay){
        if (xWay >= 0){
            this.otherDirection = true
        }else{
            this.otherDirection = false
        }
    }
}