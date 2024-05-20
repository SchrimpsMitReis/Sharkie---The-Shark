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
    }
    // Generate Menues
    generateHauptmenü(){
        const Hauptmenü = [
            new planeShield(0, 0, 720, 480),
            new Startbutton(10, 330, 150, 150),
            new Controlbutton(185, 340,150, 133),
            new Highscorebutton(550, 340, 150, 133),
            new Mutebutton(370, 340, 150, 133),
        ] 
        this.menues = Hauptmenü;
        this.scenerie = [new BackgroundObjekt("./IMG/lvl00.webp",0, 800 , 480),]

    }
    generateIngameMenue(){
        const ingameMenue = [
            new planeShield_IG(0, 0, 720, 480),
            new PauseBtn(20, 0, 75, 75),
            new Scoreboard(120, 0, 200, 75),
        ]
        this.menues = ingameMenue;
    }
    generateScenerie(x){
        const sceneriePattern = [
            new BackgroundObjekt("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png",x),
            new BackgroundObjekt("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L.png",x),
            new BackgroundObjekt("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L.png",x),
            new BackgroundObjekt("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/1. Light/3.png",x),
            new BackgroundObjekt("./Grafiken - Sharkie/Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L.png",x),
        ]
        this.scenerie.push(sceneriePattern)
    }
    generateEndcard(){
        
    }
    // Generate Enemies
    async generateEnemie(dif) {
        let count = 0;
        setInterval(()=>{
                if (this.world.startPlay){
                    this.generatePufferfish(dif)
                    this.generateSquid(dif)
                    this.generateCoin(dif)
                    this.generateEndboss()
                }
                count++
            },count * (1000 / (dif + 1)))
    
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
        let allEndbosses = this.enemies.filter(enemie => enemie instanceof Endboss)
        if(allEndbosses.length === 0){
            if (!endbossExistiert && !this.spawnedEndboss) {
                this.spawnedEndboss = true
                let endboss = new Endboss();
                this.enemies.push(endboss)
            }

        }else if(allEndbosses.length > 1){
            allEndbosses[0].deconstuct(world.enemies)
        }
            
    }

    
}