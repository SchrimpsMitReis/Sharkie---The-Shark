/**
 * Represents a bubble object that can be thrown by the player or character in the game.
 * Extends the `throwableObject` class to include specific functionalities for loading, displaying, and handling a bubble's dynamics.
 *
 * @class
 * @extends throwableObject
 * @param {number} x - The initial x-coordinate where the bubble is created.
 * @param {number} y - The initial y-coordinate where the bubble is created.
 */
class bubble extends throwableObject{
    
    IMAGE = "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png";
    
    
    /**
     * Initializes a new bubble object with specified coordinates and sets up its image and size.
     */
    constructor(x , y) {
        super().loadImage(this.IMAGE)
        this.position_x = x;
        this.position_y = y;
        this.width = 50;
        this.height = 50;
        this.throw(5)
    }
}