class bubble extends throwableObject{
    IMAGE = "Grafiken - Sharkie/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png";


    constructor(x , y) {
        super().loadImage(this.IMAGE)
        this.position_x = x;
        this.position_y = y;
        this.width = 50;
        this.height = 50;
        this.throw(5)
    }
}