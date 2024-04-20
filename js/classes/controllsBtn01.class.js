class Controlbutton extends sprite{
    IMAGE_SPRITE = "./IMG/Controlbutton.png"
    IMAGE_SPRITE_HOVER = "./IMG/Controlbutton_hover.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}