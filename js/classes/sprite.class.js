/**
 * Represents a graphical sprite on the screen, often used for interactive elements like buttons.
 * This class provides functionality to change images based on hover states to provide visual feedback.
 * @extends drawableObject
 */
class sprite extends drawableObject{

    IMAGE_SPRITE; IMAGE_SPRITE_HOVER;
    width = 720;
    height = 480;
    highlighted = false

    /**
     * Creates a sprite object positioned at the specified coordinates.
     * @param {number} x - The x coordinate where the sprite will be placed.
     * @param {number} y - The y coordinate where the sprite will be placed.
     */
    constructor(x,y){
        super()
        this.position_x = x;
        this.position_y = y;
        
    }

    /**
     * Changes the sprite's current display image to the hover image to indicate an interactive state.
     */
    hover(){
        this.showImage(this.IMAGE_SPRITE_HOVER)
    }
    
    /**
     * Reverts the sprite's display image to the normal state image when not hovered.
     */
    unhover(){
        this.showImage(this.IMAGE_SPRITE)
    }

}