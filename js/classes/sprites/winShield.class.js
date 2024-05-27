/**
 * Represents the win shield in the game, used to display a victory screen when players win a level.
 * Extends the `Sprite` class to include functionality for loading and displaying the win shield image,
 * as well as setting its dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the win shield will be placed on the canvas.
 * @param {number} y - The y coordinate where the win shield will be placed on the canvas.
 * @param {number} w - The width of the win shield image.
 * @param {number} h - The height of the win shield image.
 */
class winShield extends sprite{
    /**
     * Path to the sprite image used for the win shield.
     * @type {string}
     */
    IMAGE_SPRITE = "./IMG/winShield.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}