class Score{
    constructor(gamescore){
        this.date = this.getNow()
        this.scoreValue = gamescore;
    }
    getNow(){
        const now = new Date()
        const year = now.getFullYear(); 
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const formattedDate = `${day}.${month}.${year}`;
        return formattedDate
    }
    
}
let testScore1 = new Score(120)
testScore1.date = "24.12.2023"
let testScore2 = new Score(80)
testScore2.date = "31.10.2023"
let testScore3 = new Score(60)
testScore3.date = "11.11.2023"
let testScore4 = new Score(42)
testScore4.date = "31.05.2023"
let testScore5 = new Score(1)
testScore5.date = "31.05.2023"