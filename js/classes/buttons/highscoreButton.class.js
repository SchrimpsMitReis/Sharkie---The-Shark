/**
 * Represents a button in the game used to display the high score board. This button can show different visuals
 * depending on whether it is in its normal state or hovered over by the cursor.
 * Extends the `Sprite` class to include functionality for loading and displaying the high score button images,
 * as well as setting its dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the high score button will be placed on the canvas.
 * @param {number} y - The y coordinate where the high score button will be placed on the canvas.
 * @param {number} w - The width of the high score button.
 * @param {number} h - The height of the first high score button.
 */
class Highscorebutton extends sprite{
    IMAGE_SPRITE = "./IMG/HighscoreButton_1.png";
    IMAGE_SPRITE_HOVER = "./IMG/HighscoreButton_hover_1.png"

    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE)
        this.loadSingleImage(this.IMAGE_SPRITE_HOVER)
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}