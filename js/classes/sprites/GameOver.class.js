/**
 * Represents the Game Over screen in the game, displaying a specific image when the game ends.
 * Extends the `Sprite` class to include properties for loading and handling the Game Over image's dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the Game Over image will be placed on the canvas.
 * @param {number} y - The y coordinate where the Game Over image will be placed on the canvas.
 * @param {number} w - The width of the Game Over image.
 * @param {number} h - The height of the Game Over image.
 */
class GameOver extends sprite{
    /**
     * Path to the sprite image used for the Game Over screen.
     * @type {string}
     */
    IMAGE_SPRITE = "./IMG/GameOver.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}