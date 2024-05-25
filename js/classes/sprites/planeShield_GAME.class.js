class planeShield_IG extends sprite{
    IMAGE_SPRITE = "./IMG/planeShieldBG_IG.png"

    constructor(x,y, w, h){
        super(x,y).loadImage(this.IMAGE_SPRITE);
        this.width = w;
        this.height = h;
    }
}