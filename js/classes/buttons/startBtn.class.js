/**
 * Represents the start button in the game, used to initiate gameplay. 
 * Extends the `Sprite` class to manage the loading and display of different states of the button (normal and hover),
 * as well as setting the button's dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the start button will be placed on the canvas.
 * @param {number} y - The y coordinate where the start button will be placed on the canvas.
 * @param {number} w - The width of the start button.
 * @param {number} h - The height of the start button.
 */
class Startbutton extends sprite{
    
    IMAGE_SPRITE = "./IMG/Startbutton2_1.png"
    IMAGE_SPRITE_HOVER = "./IMG/Startbutton2_hover_1.png"

    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE)
        this.loadSingleImage(this.IMAGE_SPRITE_HOVER)
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}