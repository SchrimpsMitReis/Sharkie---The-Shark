class Cursor extends moveableObjekt{
    CURSOR_IMAGE = "./IMG/Mauszeiger.png";
    width = 32;
    height = 32;
    canvasSize = "";
    constructor(x = 100, y= 100){
        super().loadImage(this.CURSOR_IMAGE)
        this.position_x = x;
        this.position_y = y;
        
    }

}