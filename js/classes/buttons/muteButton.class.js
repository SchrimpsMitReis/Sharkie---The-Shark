/**
 * Represents a mute button in the game, designed to toggle sound on and off.
 * Extends the `Sprite` class to manage the loading and display of different button states (normal and hover),
 * as well as setting the button's dimensions.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the mute button will be placed on the canvas.
 * @param {number} y - The y coordinate where the mute button will be placed on the canvas.
 * @param {number} w - The width of the mute button.
 * @param {number} h - The height of the mute button.
 */
class Mutebutton extends sprite{
    IMAGE_SPRITE = "./IMG/MuteBtn.png"
    IMAGE_SPRITE_HOVER = "./IMG/MuteBtn_hover.png"
    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE)
        this.loadSingleImage(this.IMAGE_SPRITE_HOVER)
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}