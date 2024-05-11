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