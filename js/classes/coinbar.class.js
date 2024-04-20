class coinbar extends statusBar {
    IMAGES = [
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/coinGreen (1).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/coinGreen (2).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/coinGreen (3).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/coinGreen (4).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/coinGreen (5).png",
        "./Grafiken - Sharkie/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/coinGreen (6).png",
    ];


    constructor(x , y, s) {
        super(s);
        this.position_x = x;
        this.position_y = y;
        
        this.loadImages(this.IMAGES);
        this.setPercentage(100)
    }
    setSize(multiply = 1) {
        this.width = 595 * multiply
        this.height = 185 * multiply
    }

}