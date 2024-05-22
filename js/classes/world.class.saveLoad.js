 // Save/Load the Game

World.prototype.saveScore = async function() {
    if (!this.saved) {
        let resultScore = this.charakter.score;
        const endScore = new Score(resultScore)
        this.HighScore.push(endScore)
        this.saveHighScore()
        this.saved = !this.saved
    }
}
World.prototype.saveHighScore = function() {
    let HighScoreAsJSON = JSON.stringify(this.HighScore)
    localStorage.setItem('HighScore', HighScoreAsJSON)
}
World.prototype.loadHighScore = async function() {
    try {
        let resHighScoreAsJSON = localStorage.getItem('HighScore')
        let parsedHighscore = JSON.parse(resHighScoreAsJSON)
        this.HighScore = parsedHighscore;
    } catch (error) {
        console.log(error);
    }
}
World.prototype.clearHighscores = function() {
    localStorage.removeItem('HighScore')
    this.HighScore = []
}
