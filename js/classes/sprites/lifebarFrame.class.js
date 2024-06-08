/**
 * Represents the frame around a life bar in the game, displaying a specific image to encapsulate the life bar.
 * Extends the `Sprite` class to include functionality for loading and displaying the frame's image,
 * as well as setting its dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the life bar frame will be placed on the canvas.
 * @param {number} y - The y coordinate where the life bar frame will be placed on the canvas.
 * @param {number} w - The width of the life bar frame.
 * @param {number} h - The height of the life bar frame.
 */
class lifebarFrame extends sprite{
    
    /**
     * Path to the sprite image used for the life bar frame.
     * @type {string}
     */
    IMAGE_SPRITE = "./IMG/LifebarRahmen.png"

    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE);
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}