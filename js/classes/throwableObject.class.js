/**
 * Represents an object that can be thrown by the player or other game entities, managing its trajectory and dynamics.
 * Extends the `moveableObjekt` class to include functionality for handling direction and motion after being thrown.
 * @extends moveableObjekt
 */
class throwableObject extends moveableObjekt {
    /**
         * Initializes a new throwable object, setting its initial direction based on the character's facing direction.
         */
    constructor() {
        super()
        this.directionLeft = world.charakter.otherDirection
    }
    /**
     * Initiates the object's motion in the throw direction with a specified initial velocity.
     * @param {number} x - The initial horizontal velocity of the throw in pixels per interval.
     */
    throw(x) {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            if (this.directionLeft) {
                this.position_x -= x;
            } else {
                this.position_x += x;
            }
        }, 1)
    }
}