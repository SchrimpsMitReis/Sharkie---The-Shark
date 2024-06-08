/**
 * Represents a background object in the game, extending across the game canvas to create visually rich environments.
 * Extends the `moveableObjekt` class to manage the loading, display, and positioning of background images.
 *
 * @class
 * @extends moveableObjekt
 * @param {string} imagePath - The path to the image file used for the background.
 * @param {number} [extention=0] - The multiplier for positioning the background object along the x-axis, typically used for sequential background images.
 * @param {number} [width=1440] - The width of the background image; default is set to typical full-screen width.
 * @param {number} [height=480] - The height of the background image; default is set to typical full-screen height.
 */
class BackgroundObjekt extends moveableObjekt{

    position_y = 0;
    
    /**
     * Initializes a new background object with specific dimensions and location based on the provided image path and extension factor.
     */
    constructor(imagePath, extention = 0, width = 1440, height = 480){
        super().loadImage(imagePath)
        this.width = width;
        this.height = height;
        this.position_x = this.width * extention;
    }

}
