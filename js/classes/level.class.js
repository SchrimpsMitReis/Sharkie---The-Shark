/**
 * Manages a game level's settings, including enemies, scenery, collectibles, and menus. It provides functions to initialize
 * and control level-specific behaviors such as spawning enemies and managing menus.
 * @class
 */
class Level {
    enemies;
    scenerie;
    world;
    levelEndX = 1440 * 3;
    spawnedEndboss = false
    /**
     * Initializes a new instance of a game level with specified game objects.
     * @param {Array} enemies - An array of enemies to be included in the level.
     * @param {Array} scenerie - An array of scenery objects for the level's background.
     * @param {Array} collectables - An array of collectable items within the level.
     * @param {Array} menues - An array of menu objects for in-game interaction.
     * @param {number} [dif=0] - Difficulty setting for the level, influencing enemy generation and behavior.
     */
    constructor(enemies, scenerie, collectables, menues, dif = 0) {
        this.enemies = enemies;
        this.scenerie = scenerie;
        this.collectables = collectables;
        this.menues = menues;
        this.prozGeneration = null;
        this.dif = dif;
    }
    // Generate Menues
    /**
     * Sets up the main menu with buttons and background for the game start.
     */
    generatemainMenu(){
        const mainMenu = [
            new planeShield(0, 0, 720, 480),
            new Startbutton(10, 330, 150, 150),
            new Controlbutton(185, 340,150, 133),
            new Highscorebutton(550, 340, 150, 133),
            new Mutebutton(370, 340, 150, 133),
        ] 
        this.menues = mainMenu;
        this.scenerie = [new BackgroundObjekt("./IMG/lvl00.webp",0, 800 , 480),]

    }
    /**
     * Configures the in-game menu which can include pause functionality and score display.
     */
    generateIngameMenue(){
        const ingameMenue = [
            new planeShield_IG(0, 0, 720, 480),
            new PauseBtn(20, 0, 75, 75),
            new Scoreboard(120, 0, 200, 75),
        ]
        this.menues = ingameMenue;
    }
    // Generate Enemies
    /**
     * Periodically generates enemies based on the level's difficulty setting.
     * @param {number} dif - The difficulty factor that influences enemy spawn rates and types.
     */
    async generateEnemie(dif) {
        let count = 0;
        this.prozGeneration = setInterval(()=>{
                if (this.world.startPlay){
                    this.generatePufferfish(dif)
                    this.generateSquid(dif)
                    this.generateCoin(dif)
                    this.generateEndboss()
                }
                count++
            },count * (1000 / (dif + 1)))
    
    }
    /**
     * Generates a pufferfish enemy at a calculated position based on difficulty and player's current position.
     * @param {number} dif - Difficulty factor affecting the spawn rate and positioning.
     */
    generatePufferfish(dif) {
            if (this.enemies.length < 10 * dif) {
                let pX = world.charakter.position_x + 720
                let pY = (Math.random() * 310) + 110;
                let pufferfish = new Pufferfish(pX, pY);
                this.enemies.push(pufferfish)
            }
    }
    /**
     * Generates a squid enemy at a calculated position based on difficulty and player's current position.
     * @param {number} dif - Difficulty factor affecting the spawn rate and positioning.
     */
    generateSquid(dif) {
        if (this.enemies.length < 10 * dif) {
            let pX = world.charakter.position_x + 720 + (720 * Math.random())
            let pY = Math.random() * 10 + 420;
            let tintenFisch = new Squid(pX, pY);
            this.enemies.push(tintenFisch)
        }
    }
    /**
     * Generates a coin at a random position within the level, influenced by the difficulty setting.
     * @param {number} dif - Difficulty factor affecting the spawn rate and positioning of coins.
     */
    generateCoin(dif) { 
        if (this.collectables.length < 10 * dif) {
            let pX = world.charakter.position_x + 720 + (720 * Math.random())
            let pY = Math.random() * 420;
            let coin = new Coin(pX, pY);
            this.collectables.push(coin)
        }
    }
    /**
     * Generates the level's end boss if it has not been spawned yet.
     */
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
    /**
     * Stops all ongoing enemy generation loops within the level.
     */
    stopLoops(){
        clearInterval(this.prozGeneration)
    }
    
}