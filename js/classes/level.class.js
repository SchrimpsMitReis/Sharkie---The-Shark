class Level {
    enemies;
    scenerie;
    world;
    levelEndX = 1440 * 3;
    spawnedEndboss = false
    constructor(enemies, scenerie, collectables, menues, dif = 0) {
        this.enemies = enemies;
        this.scenerie = scenerie;
        this.collectables = collectables;
        this.menues = menues;

        this.dif = dif;
        this.generateEnemie(this.dif)
    }
    // Generate Menues
    generateHauptmenü(){
        const Hauptmenü = [
            new planeShield(0, 0, 720, 480),
            new Startbutton(10, 330, 150, 150),
            new Controlbutton(185, 340,150, 133),
            new Highscorebutton(370, 340, 150, 133),
            new Mutebutton(550, 340, 150, 133)
        ] 
        this.menues = Hauptmenü;

    }
    generateIngameMenue(){
        const ingameMenue = [
            new planeShield_IG(0, 0, 720, 480),
            new PauseBtn(20, 0, 75, 75),
            new Scoreboard(120, 0, 200, 75),
        ]
        this.menues = ingameMenue;
    }

    generateEndcard(){
        
    }
    // Generate Enemies
    generateEnemie(dif) {
        console.log("Dif = ", dif);
        setInterval(()=>{
                if (world.activLevel !== 0){
                this.generatePufferfish(dif)
                this.generateSquid(dif)
                this.generateCoin(dif)
                this.generateEndboss()
            }
            },1000 / (dif + 1))
    }
    generatePufferfish(dif) {
            if (this.enemies.length < 10 * dif) {
                let pX = world.charakter.position_x + 720
                let pY = (Math.random() * 310) + 110;
                let pufferfish = new Pufferfish(pX, pY);
                this.enemies.push(pufferfish)
            }
    }
    generateSquid(dif) {
            if (this.enemies.length < 10 * dif) {
                let pX = world.charakter.position_x + 720 + (720 * Math.random())
                let pY = Math.random() * 420;
                let tintenFisch = new Squid(pX, pY);
                this.enemies.push(tintenFisch)
            }
    }
    generateCoin(dif) { 
        if (this.collectables.length < 10 * dif) {
            let pX = world.charakter.position_x + 720 + (720 * Math.random())
            let pY = Math.random() * 420;
            let coin = new Coin(pX, pY);
            this.collectables.push(coin)
        }
    }
    generateEndboss() {
        let endbossExistiert  = this.enemies.find(enemie =>  enemie instanceof Endboss)
            if (!endbossExistiert && !this.spawnedEndboss) {
                let endboss = new Endboss();
                this.spawnedEndboss = true
                world.enemies.push(endboss)
                console.log("Endboss erstellt :", endboss.position_x, "/", endboss.position_y );
            }
    }
    // Soundtracks

    
}