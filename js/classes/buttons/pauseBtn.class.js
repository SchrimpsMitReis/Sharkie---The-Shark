/**
 * Represents a pause button in the game, used to halt gameplay temporarily.
 * Extends the `Sprite` class to manage the loading and display of different states of the button (normal and hover),
 * as well as setting the button's dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the pause button will be placed on the canvas.
 * @param {number} y - The y coordinate where the pause button will be placed on the canvas.
 * @param {number} w - The width of the pause button.
 * @param {number} h - The height of the pause button.
 */
class PauseBtn extends sprite{
    
    IMAGE_SPRITE = "./IMG/pauseBtn_1.png"
    IMAGE_SPRITE_HOVER = "./IMG/pauseBtn_hover_1.png"

    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE)
        this.loadSingleImage(this.IMAGE_SPRITE_HOVER)
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}