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
    constructor() {
        this.id = this.getID()

    }
    loadImage(path) {
        this.img = new Image()
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }
    loadSingleImage(path){
        let img = new Image()
        img.src = path;
        this.imageCache[path] = img
    };
    showImage(path){
        this.img = this.imageCache[path]
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.position_x, this.position_y, this.width, this.height)
    }
    drawFrame(ctx) {
        if (this instanceof Charakter || this instanceof Pufferfish || this instanceof Squid || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "black";
            ctx.rect(this.position_x, this.position_y, this.width, this.height);
            ctx.stroke();
        }
    }
    getID() {
        return Math.floor(Math.random() * 90000) + 10000;
    }
    deconstruct(gameArray) {
        let index = gameArray.findIndex(münze => münze.id === this.id)
        gameArray.splice(index, 1);
    }
    // Collision Functions
    isColliding(obj) {
        return (this.position_x + this.width) - this.offset.right >= obj.position_x + obj.offset.left &&
            this.position_x + this.offset.left <= (obj.position_x + obj.width) - obj.offset.right &&
            (this.position_y + this.height) - this.offset.bottom >= obj.position_y + this.offset.top &&
            (this.position_y + this.offset.top) <= (obj.position_y + obj.height) - obj.offset.bottom;
    }
    setOffset(t, l, r, b) { // Muss Prozentual berechent werden, da sonst von Skalierung betroffen
        this.offset.top = t * this.height
        this.offset.left = l * this.width
        this.offset.right = r * this.width
        this.offset.bottom = b * this.height
    }

}