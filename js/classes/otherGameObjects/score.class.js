/**
 * Represents a game score with an associated date.
 * @class
 */
class Score{
     /**
     * Initializes a new instance of the Score class.
     * @param {number} gamescore - The numeric value of the game score.
     */
    constructor(gamescore){
        this.date = this.getNow()
        this.scoreValue = gamescore;
    }
    /**
     * Retrieves the current date and formats it as "day.month.year".
     * @returns {string} The formatted current date.
     */
    getNow(){
        const now = new Date()
        const year = now.getFullYear(); 
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const formattedDate = `${day}.${month}.${year}`;
        return formattedDate
    }
    
}
// Example usage of the Score class
let testScore1 = new Score(120)
testScore1.date = "24.12.2023" // Manually setting the date for demonstration.
let testScore2 = new Score(80)
testScore2.date = "31.10.2023"
let testScore3 = new Score(60)
testScore3.date = "11.11.2023"
let testScore4 = new Score(42)
testScore4.date = "31.05.2023"
let testScore5 = new Score(1)
testScore5.date = "31.05.2023"