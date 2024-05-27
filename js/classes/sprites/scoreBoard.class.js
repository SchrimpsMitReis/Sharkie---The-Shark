/**
 * Represents a scoreboard or a generic background panel in the game, used for displaying scores or other information.
 * Extends the `Sprite` class to manage loading, displaying, and sizing a particular image for the scoreboard.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the scoreboard will be placed on the canvas.
 * @param {number} y - The y coordinate where the scoreboard will be placed on the pool.
 * @param {number} w - The width of the scoreboard image.
 * @param {number} h - The height of the scoreboard image.
 */
class Scoreboard extends sprite{
    IMAGE_SPRITE = "./IMG/leer.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}