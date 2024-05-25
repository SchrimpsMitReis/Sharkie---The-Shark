class BackgroundObjekt extends moveableObjekt{
    position_y = 0;
    constructor(imagePath, extention = 0, width = 1440, height = 480){
        super().loadImage(imagePath)
        this.width = width;
        this.height = height;
        this.position_x = this.width * extention;
    }

}
