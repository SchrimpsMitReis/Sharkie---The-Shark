/**
 * Represents a plane shield in the game, which is a specific graphical overlay or background.
 * Extends the `Sprite` class to handle loading, displaying, and sizing the plane shield image.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the plane shield will be placed on the canvas.
 * @param {number} y - The y coordinate where the plane shield will be placed on the canvas.
 * @param {number} w - The width of the plane shield image.
 * @param {number} h - The height of the plane shield image.
 */
class planeShield_IG extends sprite{
    
    /**
     * Path to the sprite image used for the plane shield.
     * @type {string}
     */
    IMAGE_SPRITE = "./IMG/planeShieldBG_IG_1.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}