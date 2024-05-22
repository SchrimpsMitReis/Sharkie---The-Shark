World.prototype.draw = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.drawLevelComponents()
    this.addObjectsToMap(this.gameMenues)
    // Standard Elemente
    this.levelGUI()
    if (this.showHighscore) {
        this.addHighscoreBoard()
    }
    // Tastenbelegung
    if (this.keyboard.HELP) {
        this.addToMap(this.menuHelp)
    }
    this.addToMap(this.gameCurser)
    let self = this;
    requestAnimationFrame(() => {
        self.draw();
    })
}
World.prototype.addLifebar = function(x, y, w, h) {
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
World.prototype.addEnergiebar = function(x, y, w, h) {
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
World.prototype.addHighscoreBoard = async function() {
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
World.prototype.addObjectsToMap = function(Objects) {
    Objects.forEach(item => {
        this.addToMap(item)
    })
}
World.prototype.addToMap = function(mo) {
    if (mo.otherDirection) {
        mo.switchDirection(this.ctx)
    }
    mo.draw(this.ctx)
    mo.drawFrame(this.ctx)

    if (mo.otherDirection) {
        mo.switchDirectionBack(this.ctx)
    }
}
World.prototype.addTextElement = function(fontSize, hexColor, text, x, y) {
    let textContent = (text) ? text : "";
    this.ctx.font = `${fontSize}px Spongebob`;
    this.ctx.fillStyle = `#${hexColor}`;
    this.ctx.fillText(`${textContent}`, x, y);

}
World.prototype.drawLevelComponents = function() {
    this.ctx.translate(this.camera_x, 0)
    this.addObjectsToMap(this.scenerie)
    this.addObjectsToMap(this.enemies)
    this.addObjectsToMap(this.collectables)
    this.addObjectsToMap(this.throwableObjects)
    this.ctx.translate(-this.camera_x, 0)

}
World.prototype.levelGUI = function() {
    if (this.showGUI) {
        this.addTextElement(48, "2237ac", this.charakter.score, 150, 60)
        this.addLifebar(320, 8, 100, 60)
        this.addEnergiebar(510, 8, 100, 60)
        this.addCharacter()
        this.gameEnd()
    }
}
World.prototype.gameEnd = function() {
    if (this.isGameOver) {
        if (!this.win) {
            this.addToMap(this.gameOverShield)
        } else {
            this.addToMap(this.winShield)
        }
    }
}
World.prototype.addCharacter = function() {
    this.ctx.translate(this.camera_x, 0)
    this.addToMap(this.charakter)
    this.ctx.translate(-this.camera_x, 0)
}
