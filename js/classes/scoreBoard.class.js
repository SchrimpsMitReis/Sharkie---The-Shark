class Scoreboard extends sprite{
    IMAGE_SPRITE = "./IMG/leer.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}