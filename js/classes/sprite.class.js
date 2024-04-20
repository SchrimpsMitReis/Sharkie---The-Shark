class sprite extends drawableObject{
    IMAGE_SPRITE; IMAGE_SPRITE_HOVER;
    width = 720;
    height = 480;
    highlighted = false
    constructor(x,y){
        super()
        this.position_x = x;
        this.position_y = y;
    }
    hover(){
        this.loadImage(this.IMAGE_SPRITE_HOVER)
    }
    unhover(){
        this.loadImage(this.IMAGE_SPRITE)
    }

}