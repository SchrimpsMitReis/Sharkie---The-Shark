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
    constructor() {
        super()
    }
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.position_y -= this.speedY;
            }
        }, 1000 / 25)
    }
    isAboveGround() {
        if (this instanceof throwableObject) {
            return true
        } else {
            return this.position_y < 320
        }
    }
    drawFrame(ctx) {
        if (this instanceof Charakter || this instanceof Pufferfish || this instanceof Squid || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "black";
            ctx.rect(this.position_x, this.position_y, this.width, this.height);
            ctx.stroke();
        }
    }
    switchDirection(ctx) {
        if (this.otherDirection) {
            ctx.save();
            ctx.translate(this.width, 0);
            ctx.scale(-1, 1)
            this.position_x = this.position_x * -1
        }
    }
    switchDirectionBack(ctx) {
        if (this.otherDirection) {
            ctx.restore()
            this.position_x = this.position_x * -1
        }
    }

    hit(damage = 0) {
        this.lifePoints -= damage;
        if (this.lifePoints < 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        console.log(this.isHurt());
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit
        timepassed = timepassed / 1000;
        return timepassed < 3;
    }
    isDead() {
        return this.lifePoints == 0;
    }
    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i];
        this.img = this.imageCache[path]
        this.currentImage++

    }
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
        // console.log("Moving left");
    }
}