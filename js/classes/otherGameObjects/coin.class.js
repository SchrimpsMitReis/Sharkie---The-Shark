/**
 * Represents a coin in the game, typically used for scoring and rewards within gameplay.
 * Extends the `moveableObjekt` class to handle the coin's positioning and graphical representation.
 *
 * @class
 * @extends moveableObjekt
 * @param {number} x - The initial x-coordinate where the coin will be placed on the canvas.
 * @param {number} y - The initial y-coordinate where the coin will be placed on the canvas.
 */
class Coin extends moveableObjekt {
    
    speed = 0;
    IMAGE = "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png";

    /**
         * Initializes a new coin object with specified coordinates.
         */
    constructor(x, y) {
        super()
        this.loadImage(this.IMAGE)
        this.position_x = x;
        this.position_y = y;

    }
}