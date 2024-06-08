/**
 * Represents the High Score Board in the game, showing the top scores.
 * Extends the `Sprite` class to include specific functionality for loading and displaying the scoreboard image,
 * along with its dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the high score board will be placed on the canvas.
 * @param {number} y - The y coordinate where the high score board will be placed on the canvas.
 * @param {number} w - The width of the high score board image.
 * @param {number} h - The height of the high score board image.
 */
class HighscoreBoard extends sprite{
    
    /**
     * Path to the sprite image used for the high score board.
     * @type {string}
     */
    IMAGE_SPRITE = "./IMG/Scoreboard_1.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}