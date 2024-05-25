class Mutebutton extends sprite{
    IMAGE_SPRITE = "./IMG/MuteBtn.png"
    IMAGE_SPRITE_HOVER = "./IMG/MuteBtn_hover.png"
    constructor(x,y, w, h){
        super(x,y).loadSingleImage(this.IMAGE_SPRITE)
        this.loadSingleImage(this.IMAGE_SPRITE_HOVER)
        this.showImage(this.IMAGE_SPRITE)
        this.width = w;
        this.height = h;
    }
}