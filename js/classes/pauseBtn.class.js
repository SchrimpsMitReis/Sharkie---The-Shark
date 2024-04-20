class PauseBtn extends sprite{
    IMAGE_SPRITE = "./IMG/pauseBtn.png"
    IMAGE_SPRITE_HOVER = "./IMG/pauseBtn_hover.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}