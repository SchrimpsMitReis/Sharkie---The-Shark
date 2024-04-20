class Highscorebutton extends sprite{
    IMAGE_SPRITE = "./IMG/HighscoreButton.png";
    IMAGE_SPRITE_HOVER = "./IMG/HighscoreButton_hover.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}