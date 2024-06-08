/**
 * Represents a control button in the game, capable of displaying different visuals for hover and default states.
 * Extends the `Sprite` class to manage loading, displaying, and sizing of the control button images.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the control button will be placed on the canvas.
 * @param {number} y - The y coordinate where the control button will be placed on the canvas.
 * @param {number} w - The width of the control button.
 * @param {number} h - The height of the control button.
 */
class Controlbutton extends sprite{
    IMAGE_SPRITE = "./IMG/Controlbutton_2.png"
    IMAGE_SPRITE_HOVER = "./IMG/Controlbutton_hover_2.png"

    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE)
        this.loadSingleImage(this.IMAGE_SPRITE_HOVER)
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}