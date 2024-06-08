/**
 * Represents the Escape Menu in the game, showing controls or other menu options.
 * Extends the `Sprite` class to include specific functionality for loading and displaying the menu's image.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the menu will be placed on the canvas.
 * @param {number} y - The y coordinate where the menu will be placed on the canvas.
 */
class ESCMenu extends sprite{

    /**
     * Path to the image used for the ESC menu.
     * @type {string}
     */
    IMAGE = "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/7. Eigene/keys.png"
    
    constructor(x,y){
        super(x,y)
        this.loadImage(this.IMAGE)
    }
}