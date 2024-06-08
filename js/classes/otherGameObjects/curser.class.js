/**
 * Represents a custom game cursor, used to interact with game elements visually.
 * Extends the `moveableObjekt` class to include specific functionalities for handling the cursor's position and appearance.
 *
 * @class
 * @extends moveableObjekt
 * @param {number} [x=100] - The initial x-coordinate where the cursor will appear on the canvas.
 * @param {number} [y=100] - The initial y-coordinate where the cursor will appear on the canvas.
 */
class Cursor extends moveableObjekt{

    CURSOR_IMAGE = "./IMG/Mauszeiger.png";
    width = 32;
    height = 32;
    canvasSize = "";
    
    /**
     * Initializes a new cursor object with specified default coordinates if not provided.
     */
    constructor(x = 100, y= 100){
        super().loadImage(this.CURSOR_IMAGE)
        this.position_x = x;
        this.position_y = y;
        
    }

}