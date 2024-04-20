class lifebar extends statusBar {
    IMAGES = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/lifeGreen (1).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/lifeGreen (2).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/lifeGreen (3).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/lifeGreen (4).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/lifeGreen (5).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/lifeGreen (6).png"
    ];


    constructor(x , y, s) {
        super(s);
        this.position_x = x;
        this.position_y = y;
        
        this.loadImages(this.IMAGES);
        this.setPercentage(100)
    }

}