/**
 * Represents a Pufferfish enemy in the game, handling its animation and movement.
 * Extends the `moveableObjekt` class to include specific functionality for animations and conditional behavior based on game state.
 *
 * @class
 * @extends moveableObjekt
 * @param {number} x - The initial x-coordinate of the pufferfish.
 * @param {number} y - The initial y-coordinate of the pufferfish.
 */
class Pufferfish extends moveableObjekt {
    speed = Math.random() * 7;
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
    /**
     * Initializes an instance of a Pufferfish with given coordinates and default properties.
     */
    constructor(x, y) {
        super().loadImage("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png")
        this.loadImages(this.IMAGES_PUFFERFISHSTILL)
        this.loadImages(this.IMAGES_DIE)
        this.position_x = x;
        this.position_y = y;
        this.animateLoop = null;
        this.animate()
    }
    /**
         * Manages the animation states of the Pufferfish, including swimming and dying.
         */
    animate() {
        this.animateLoop = setInterval(() => {
            if (!world.pauseGame) {
                if (this.isDead()) {
                    this.playAnimation(this.IMAGES_DIE)
                    this.showImage(this.IMAGES_DIE[2])
                    setTimeout(() => {
                        this.deconstruct(world.enemies)
                    }, 500)
                }
                else {
                    this.moveLeft();
                    this.playAnimation(this.IMAGES_PUFFERFISHSTILL)
                }
            }
        }, 100)

    }
    /**
     * Stops all ongoing animations for the Pufferfish.
     */
    stopLoops() {
        clearInterval(this.animateLoop);
    }
    /**
     * Determines if the Pufferfish is out of the view relative to the character's position.
     * @returns {boolean} Indicates whether the Pufferfish is out of the player's view.
     */
    outOfView() {
        return this.position_x > (world.charakter.position_x + 100)
    }
}