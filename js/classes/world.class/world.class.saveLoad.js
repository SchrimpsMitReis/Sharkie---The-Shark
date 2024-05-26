// Save/Load the Game
/**
 * Saves the current score to the high score list if it hasn't been saved yet.
 * This function ensures the score is only saved once to prevent duplicates.
 * @memberof World
 * @async
 * @method
 */
World.prototype.saveScore = async function() {
    if (!this.saved) {
        let resultScore = this.character.score;
        const endScore = new Score(resultScore);
        this.HighScore.push(endScore);
        this.saveHighScore();
        this.saved = true;  // Ensures that the score is only saved once per game session.
    }
};

/**
 * Serializes the current list of high scores and saves it to local storage.
 * @memberof World
 * @method
 */
World.prototype.saveHighScore = function() {
    let highScoreAsJSON = JSON.stringify(this.HighScore);
    localStorage.setItem('HighScore', highScoreAsJSON);
};

/**
 * Loads the high scores from local storage and parses them back into an array.
 * If the data can't be loaded, it logs the error to the console.
 * @memberof World
 * @async
 * @method
 */
World.prototype.loadHighScore = async function() {
    try {
        let resHighScoreAsJSON = localStorage.getItem('HighScore');
        let parsedHighscore = JSON.parse(resHighScoreAsJSON);
        this.HighScore = parsedHighscore || [];
    } catch (error) {
        console.error(`Cannot load high scores: ${error}`);
    }
};

/**
 * Clears all high scores from local storage and resets the high score array.
 * @memberof World
 * @method
 */
World.prototype.clearHighscores = function() {
    localStorage.removeItem('HighScore');
    this.HighScore = [];
};