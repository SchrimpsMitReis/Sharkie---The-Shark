/**
 * Provides a base class for drawable objects within the game. Manages loading and displaying images,
 * as well as basic collision detection functionality.
 * @class
 */
class drawableObject {
    position_x;
    position_y;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
    img;
    height;
    width;
    imageCache = {};
    currentImage = 0;
    id;
    /**
     * Initializes a new drawable object, setting an unique ID.
     */
    constructor() {
        this.id = this.getID()

    }
    /**
     * Loads an image into the object's image property from a specified path.
     * @param {string} path - The path to the image file.
     */
    loadImage(path) {
        this.img = new Image()
        this.img.src = path;
    }
    /**
     * Preloads multiple images and stores them in the image cache.
     * @param {string[]} arr - Array of image paths to load.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }
    /**
 * Animates the object by cycling through a sequence of images.
 * @param {string[]} images - An array of image paths for the animation.
 */
    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i];
        this.img = this.imageCache[path]
        this.currentImage++

    }

    /**
     * Loads a single image and stores it in the image cache.
     * @param {string} path - The path to the image file.
     */
    loadSingleImage(path) {
        let img = new Image()
        img.src = path;
        this.imageCache[path] = img
    };
    /**
     * Sets the current image for rendering from the image cache.
     * @param {string} path - The path to the cached image to display.
     */
    showImage(path) {
        this.img = this.imageCache[path]
    }
    /**
     * Draws the object's current image on a canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.position_x, this.position_y, this.width, this.height)
    }
    /**
     * Draws a frame around the object. Only applies to character and enemy classes.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrame(ctx) {
        if (this instanceof Charakter || this instanceof Pufferfish || this instanceof Squid || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "black";
            ctx.rect(this.position_x, this.position_y, this.width, this.height);
            ctx.stroke();
        }
    }
    /**
     * Generates a unique identifier for the object.
     * @returns {number} A unique identifier.
     */
    getID() {
        return Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * Removes the object from a game array, effectively deconstructing it from the game.
     * @param {Array} gameArray - The array from which the object should be removed.
     */
    deconstruct(gameArray) {
        let index = gameArray.findIndex(münze => münze.id === this.id)
        gameArray.splice(index, 1);
    }
    // Collision Functions
    /**
     * Checks if the object is colliding with another object, taking offsets into account.
     * @param {drawableObject} obj - Another drawable object to check for collision.
     * @returns {boolean} True if there is a collision, false otherwise.
     */
    isColliding(obj) {
        return (this.position_x + this.width) - this.offset.right >= obj.position_x + obj.offset.left &&
            this.position_x + this.offset.left <= (obj.position_x + obj.width) - obj.offset.right &&
            (this.position_y + this.height) - this.offset.bottom >= obj.position_y + obj.offset.top &&
            (this.position_y + this.offset.top) <= (obj.position_y + obj.height) - obj.offset.bottom;
    }
    /**
     * Sets offset values for the object to adjust collision detection margins.
     * @param {number} t - Top offset as a fraction of the object's height.
     * @graher {number} l - Left offset as a fraction of the object's width.
     * @param {number} r - Right offset as a fraction of the object's width.
     * @param {number} b - Bottom offset as a fraction of the object's height.
     */
    setOffset(t, l, r, b) {
        this.offset.top = t * this.height
        this.offset.left = l * this.width
        this.offset.right = r * this.width
        this.offset.bottom = b * this.height
    }

}