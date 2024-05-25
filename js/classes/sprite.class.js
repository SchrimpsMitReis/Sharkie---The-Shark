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
        this.showImage(this.IMAGE_SPRITE_HOVER)
    }
    unhover(){
        this.showImage(this.IMAGE_SPRITE)
    }
    showCache(){
        console.log(this, this.imageCache);
        // this.img = this.imageCache[]
    }

}