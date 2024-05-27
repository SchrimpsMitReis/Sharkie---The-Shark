/**
 * Represents the Help Menu in the game, which displays key bindings or other useful information to the player.
 * This class extends the `Sprite` class to manage the loading and displaying of the help menu image.
 *
 * @class
 * @extends Sprite
 * @param {number} x - The x coordinate where the help menu will be placed on the canvas.
 * @param {number} y - The y coordinate where the help menu will be placed on the canvas.
 */
class HelpMenu extends sprite{
    IMAGE = "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/7. Eigene/keys.png"
    constructor(x,y){
        super(x,y)
        this.loadImage(this.IMAGE)
    }
}