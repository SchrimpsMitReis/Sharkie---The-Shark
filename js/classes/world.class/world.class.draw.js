/**
 * Renders the main game loop's drawing operations, including level components, GUI, and potentially active game menus.
 * It continuously calls itself through requestAnimationFrame to keep the game graphics updated.
 * @memberof World
 */
World.prototype.draw = function () {
    this.drawLevelComponents();
    this.addObjectsToMap(this.gameMenues);
    this.levelGUI();
    this.addHighscoreBoard();
    this.addHelp();
    this.addToMap(this.gameCurser);
    let self = this;
    requestAnimationFrame(() => {
        self.draw();
    });
};

/**
 * Adds multiple objects to the canvas from a given list.
 * @memberof World
 * @param {Array} Objects - The array of objects to be added to the map.
 */
World.prototype.addObjectsToMap = function (Objects) {
    Objects.forEach(item => {
        this.addToMap(item);
    });
};

/**
 * Draws an object on the map, applying transformations if necessary based on the object's properties.
 * @memberof World
 * @param {Object} mo - The map object to be drawn.
 */
World.prototype.addToMap = function (mo) {
    if (mo.otherDirection) {
        mo.switchDirection(this.ctx);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
        mo.switchDirectionBack(this.ctx);
    }
};
/**
 * Adds a text element to the canvas at specified coordinates with a specific font size and color.
 * @memberof World
 * @param {number} fontSize - The font size for the text.
 * @param {string} hexColor - The color code in hexadecimal format.
 * @param {string} text - The text to be displayed.
 * @param {number} x - The x-coordinate for the text.
 * @param {number} y - The y-coordinate for the text.
 */
World.prototype.addTextElement = function (fontSize, hexColor, text, x, y) {
    this.ctx.font = `${fontSize}px Spongebob`;
    this.ctx.fillStyle = `#${hexColor}`;
    this.ctx.fillText(text, x, y);
};
/**
 * Adds a lifebar graphic to the canvas.
 * @memberof World
 * @param {number} x - The x-coordinate of the lifebar.
 * @param {number} y - The y-coordinate of the lifebar.
 * @param {number} w - The width of the lifebar.
 * @param {number} h - The height of the lifebar.
 */
World.prototype.addLifebar = function (x, y, w, h) {
    let bg = new Scoreboard(310, 0, 200, 75)
    let factor = 1.8
    let frame = new lifebarFrame(x, y, w * factor, h)
    let lifeProcentage = this.charakter.lifePoints / 100
    let barColor = () => {
        if (lifeProcentage >= 0.6) {
            return 'green'
        } else if (lifeProcentage < 0.6 && lifeProcentage >= 0.2) {
            return 'yellow'
        } else if (lifeProcentage < 0.2) {
            return 'red'
        }
    }
    this.addToMap(bg)
    this.ctx.fillStyle = barColor()
    this.ctx.fillRect(x + 4, y + 2, (lifeProcentage * 96) * factor, h - 4)
    this.addToMap(frame)
}
/**
 * Adds an energy bar for the character on the canvas.
 * @memberof World
 * @param {number} x - The x-coordinate of the bar.
 * @param {number} y - The y-coordinate of the bar.
 * @param {number} w - The width of the bar.
 * @param {number} h - The height of the bar.
 */
World.prototype.addEnergiebar = function (x, y, w, h) {
    let bg = new Scoreboard(500, 0, 200, 75)
    let factor = 1.8
    let frame = new lifebarFrame(x, y, w * factor, h)
    let lifeProcentage = this.charakter.energie / 100
    let barColor = () => {
        if (lifeProcentage >= 0.6) {
            return 'blue'
        } else if (lifeProcentage < 0.6 && lifeProcentage >= 0.2) {
            return 'lightblue'
        } else if (lifeProcentage < 0.2) {
            return 'white'
        }
    }
    this.addToMap(bg)
    this.ctx.fillStyle = barColor()
    this.ctx.fillRect(x + 4, y + 2, (lifeProcentage * 96) * factor, h - 4)
    this.addToMap(frame)

}
World.prototype.addPauseScreen = function (){
    if (this.pauseGame){
        this.ctx.save(); 
        this.ctx.globalAlpha = 0.1
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0,0, 720, 480)
        this.ctx.restore()
        this.addTextElement(48, "#FFE878", "Pause", 250, 230)
    }
}
/**
 * Dynamically adds the high score board to the canvas if the high score display is enabled.
 * @memberof World
 * @async
 */
World.prototype.addHighscoreBoard = async function () {
    if (this.showHighscore) {
        this.loadHighScore()
        this.HighScore.sort((a, b) => b.scoreValue - a.scoreValue)
        this.addToMap(this.ScoreTable)
        this.addTextElement(34, "7E3C12", this.HighScore[0]['scoreValue'], 120, 241)
        this.addTextElement(34, "7E3C12", this.HighScore[0]['date'], 235, 241)
        this.addTextElement(32, "7E3C12", this.HighScore[1]['scoreValue'], 120, 281)
        this.addTextElement(32, "7E3C12", this.HighScore[1]['date'], 250, 281)
        this.addTextElement(32, "7E3C12", this.HighScore[2]['scoreValue'], 120, 319)
        this.addTextElement(32, "7E3C12", this.HighScore[2]['date'], 250, 319)
        this.addTextElement(32, "7E3C12", this.HighScore[3]['scoreValue'], 120, 358)
        this.addTextElement(32, "7E3C12", this.HighScore[3]['date'], 250, 358)
        this.addTextElement(32, "7E3C12", this.HighScore[4]['scoreValue'], 120, 394)
        this.addTextElement(32, "7E3C12", this.HighScore[4]['date'], 250, 394)
    }

}
/**
 * Adds a help menu to the canvas if the help is toggled on.
 * @memberof World
 */
World.prototype.addHelp = function (){
    if (this.keyboard.HELP) {
        this.addToMap(this.menuHelp)
    }

}
/**
 * Draws level-specific components like scenery, enemies, collectables, and throwable objects, applying camera transformations.
 * @memberof World
 */
World.prototype.drawLevelComponents = function () {
    this.ctx.translate(this.camera_x, 0)
    this.addObjectsToMap(this.scenerie)
    this.addObjectsToMap(this.enemies)
    this.addObjectsToMap(this.collectables)
    this.addObjectsToMap(this.throwableObjects)
    this.ctx.translate(-this.camera_x, 0)

}
/**
 * Displays the GUI for the level, including scores, lifebars, and energy bars.
 * @memberof World
 */
World.prototype.levelGUI = function () {
    if (this.showGUI) {
        this.addTextElement(48, "2237ac", this.charakter.score, 150, 60)
        this.addLifebar(320, 8, 100, 60)
        this.addEnergiebar(510, 8, 100, 60)
        this.addCharacter()
        this.gameEnd()
        this.addPauseScreen()
    }
}
/**
 * Ends the game showing either a victory or game over screen based on the game's outcome.
 * @memberof World
 */
World.prototype.gameEnd = function () {
    if (this.isGameOver) {
        if (!this.win) {
            this.addToMap(this.gameOverShield)
        } else {
            this.addToMap(this.winShield)
        }
    }
}
/**
 * Adds the character to the map, applying camera transformations.
 * @memberof World
 */
World.prototype.addCharacter = function () {
    this.ctx.translate(this.camera_x, 0)
    this.addToMap(this.charakter)
    this.ctx.translate(-this.camera_x, 0)
}
