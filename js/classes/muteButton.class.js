class Mutebutton extends sprite{
    IMAGE_SPRITE = "./IMG/MuteBtn.png"
    IMAGE_SPRITE_HOVER = "./IMG/MuteBtn_hover.png"
    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}