/**
 * Represents a plane shield background in the game, providing a specific graphical element or backdrop.
 * Extends the `Sprite` class to handle loading, displaying, and sizing the plane shield background image.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the plane shield background will be placed on the canvas.
 * @param {number} y - The y coordinate where the plane shield background will be placed on the canvas.
 * @param {number} w - The width of the plane shield background image.
 * @param {number} h - The height of the plane shield background image.
 */
class planeShield extends sprite{
    
    /**
     * Path to the sprite image used for the plane shield background.
     * @type {string}
     */
    IMAGE_SPRITE = "./IMG/planeShieldBG_1.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}