class World {
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.setWorld()
        this.run()
        this.ctxOptions()
    }
    activLevel = 1

    charakter = new Charakter();
    allLevels = [
        level00,
        level01
    ]

    level = this.allLevels[this.activLevel]
    enemies = this.level.enemies;
    scenerie = this.level.scenerie;
    collectables = this.level.collectables;
    gameMenues = this.level.menues;
    menuHelp = new HelpMenu(0, 0);
    escMenue = new ESCMenu(0,0);
    lifeBar = new lifebar(50, 20, 0.3);
    coinBar = new coinbar(50, 50, 0.3);
    gameCurser = new Cursor()
    throwableObjects = []
    width = 720;
    height = 480;
    canvas;

    // canvasBorder = canvas.getBoundingClientRect();

    ctx;
    keyboard;
    camera_x = -100;
    isGameOver = false;
    win = false;
    gameOverShield = new GameOver(150, 50, 400, 400)
    winShield = new winShield(200, 70, 400, 400)
    
    ctxOptions() {
    }
    setWorld() {
        this.charakter.world = this;
        this.level.world = this;
        this.gameCurser.world = this;

    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkObjectThrow();
            // console.log("Hallo");
        }, 4)
    }
    /**
    * Überprüft Kollisionen des Spielcharakters mit verschiedenen Elementen.
    * Ruft Methoden auf, um Kollisionen mit Feinden, Sammelobjekten, werfbaren Objekten und Menüs zu überprüfen.
    *   `
    * @name checkCollisions
    * @memberof World
    * @instance
    * @returns {void}
    */
    checkCollisions() {
        this.checkEnemies()
        this.checkCollectables()
        this.checkThrowables()
        this.checkMenues()
    }
    checkEnemies() {
        this.level.enemies.forEach((enemie) => {
            let enemieDead = enemie.isDead()
            if (enemie.isDead() && !enemie instanceof Endboss){
                enemie.deconstruct(this.level.enemies);
            }
            if (this.charakter.isColliding(enemie) && !enemieDead) {
                if (this.charakter.meleeActive) {
                    this.charakter.addScore(30)
                    if (enemie instanceof Endboss) {
                        enemie.hit(20);
                    } else {
                        enemie.hit(10)
                    }

                } else {
                    this.charakter.reduceScore(10)
                    if (enemie instanceof Pufferfish && !this.charakter.isHurt()) {
                        this.charakter.hit(15);
                        this.lifeBar.setPercentage(this.charakter.lifePoints)
                        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_POISON)

                        console.log(`Noch ${this.charakter.lifePoints} Leben Puffer`);
                    }
                    if (enemie instanceof Squid && !this.charakter.isHurt()) {
                        this.charakter.hit(10);
                        this.lifeBar.setPercentage(this.charakter.lifePoints)
                        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_ELECTRO)
                        console.log(`Noch ${this.charakter.lifePoints} Leben Squid`);
                    }
                    if (enemie instanceof Endboss && !enemie.isDead()&& !this.charakter.isHurt()) {
                        this.charakter.hit(20);
                        this.lifeBar.setPercentage(this.charakter.lifePoints)
                        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_ELECTRO)
                        console.log(`Noch ${this.charakter.lifePoints} Leben Boss`);
                    }
                }
            }
        })

    }
    /** */
    checkCollectables() {
        this.level.collectables.forEach((collectable) => {
            if (this.charakter.isColliding(collectable)) {
                if (collectable instanceof Coin) {
                    this.charakter.coins++
                    this.charakter.addScore(10)
                    collectable.deconstruct(this.level.collectables)
                    playSound(4)
                    console.log(`${this.charakter.coins} Coins`);
                }
            }
        })
    }
    checkThrowables() {
        this.throwableObjects.forEach((throwable) => {
            this.level.enemies.forEach((enemie) => {
                if (throwable.isColliding(enemie)) {
                    this.charakter.addScore(5)
                    if (enemie instanceof Endboss) {
                        enemie.hit(20);
                        console.log("Endbosslife : ", enemie.lifePoints)
                    }
                    else {
                        enemie.hit(5)
                        enemie.playAnimation(enemie.IMAGES_DIE);
                        setTimeout(()=>{
                            enemie.deconstruct(this.level.enemies)
                        }, 2000)
                    }
                    throwable.deconstruct(this.throwableObjects)
                }
            })
        });

    }
    areButtons(menue){
        return menue instanceof Controlbutton || 
        menue instanceof Highscorebutton || 
        menue instanceof Mutebutton || 
        menue instanceof Startbutton || 
        menue instanceof PauseBtn;
    }
    checkMenues(){
        this.level.menues.forEach((menue) => {
            // console.log(menue);
            if(this.gameCurser.position_x >= menue.position_x && 
                this.gameCurser.position_y >= menue.position_y && 
                this.gameCurser.position_x <= menue.position_x + menue.width &&
                this.gameCurser.position_y <= menue.position_y + menue.height){
                    if (this.areButtons(menue)){
                        if (!menue.highlighted){
                            playSound(1)
                            menue.highlighted = true;
                        }
                        menue.hover()
                    }else{

                    }
                    if(this.keyboard.MOUSEBTN){
                        playSound(2)
                        if (menue instanceof Startbutton){
                            this.setLevel(1)
                        }
                        else if(menue instanceof PauseBtn){
                            this.setLevel(0)

                        }
                        else if (menue instanceof Controlbutton){
                            console.log("Show Controlls");
                            this.keyboard.HELP = !this.keyboard.HELP
                        }
                        else if (menue instanceof Highscorebutton){
                            console.log("Show Highscores");
                        }
                        else if (menue instanceof Mutebutton){
                            console.log("Mute all");
                            muteAll()
                        }
                    }
            }
            else{
                if (this.areButtons(menue)){
                    menue.unhover()
                }
                if (menue.highlighted){
                    menue.highlighted = false;
                }

            }
        })

    }
    checkObjectThrow() {
        if (this.keyboard.SECONDARY && this.charakter.energie >= 25) {
            setTimeout(() => {
                this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_SHOOT)
                
            }, 2000);
            let newBubble = new bubble(this.charakter.position_x + 100, this.charakter.position_y + 100)
            this.throwableObjects.push(newBubble)
            playSound(5)
            this.charakter.energie -= 25;
            this.keyboard.SECONDARY = !this.keyboard.SECONDARY;

        }
    }
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.drawLevelComponents()
        this.addObjectsToMap(this.gameMenues)
        this.addToMap(this.gameCurser)
        // Standard Elemente
        this.levelGUI()
        // Tastenbelegung
        if (this.keyboard.HELP) {
            this.addToMap(this.menuHelp)
        }

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        })
    }
    addLifebar(x,y,w,h){
        let bg = new Scoreboard(310, 0, 200, 75)
        let factor = 1.8
        let frame = new lifebarFrame(x, y, w * factor, h)
        let lifeProcentage = this.charakter.lifePoints / 100
        let barColor = ()=>{
            if (lifeProcentage >= 0.6){
                return 'green'
            }else if(lifeProcentage < 0.6 && lifeProcentage >= 0.2){
                return 'yellow'
            }else if(lifeProcentage < 0.2){
                return 'red'
            }
        }
        this.addToMap(bg)
        this.ctx.fillStyle = barColor()
        this.ctx.fillRect(x + 4, y + 2, (lifeProcentage * 96) * factor, h - 4)
        this.addToMap(frame)

    }
    addEnergiebar(x,y,w,h){
        let bg = new Scoreboard(500, 0, 200, 75)
        let factor = 1.8
        let frame = new lifebarFrame(x, y, w * factor, h)
        let lifeProcentage = this.charakter.energie / 100
        let barColor = ()=>{
            if (lifeProcentage >= 0.6){
                return 'blue'
            }else if(lifeProcentage < 0.6 && lifeProcentage >= 0.2){
                return 'lightblue'
            }else if(lifeProcentage < 0.2){
                return 'white'
            }
        }
        this.addToMap(bg)
        this.ctx.fillStyle = barColor()
        this.ctx.fillRect(x + 4, y + 2, (lifeProcentage * 96) * factor, h - 4)
        this.addToMap(frame)

    }
    addObjectsToMap(Objects) {
        Objects.forEach(item => {
            this.addToMap(item)
        })
    }
    addToMap(mo) {
        if (mo.otherDirection) {
            mo.switchDirection(this.ctx)
        }
        mo.draw(this.ctx)
        mo.drawFrame(this.ctx)

        if (mo.otherDirection) {
            mo.switchDirectionBack(this.ctx)
        }
    }
    nextLevel() {
        this.activLevel++
        this.levelRestart()
    }
    setLevel(lvl){
        this.activLevel = lvl;
        this.levelRestart()
    }
    prevLevel() {
        this.activLevel--
        if (this.activLevel < 0) {
            this.activLevel = 0;
        }
        this.levelRestart()
    }
    addTextElement(fontSize, hexColor, counter, x, y) {
        this.ctx.font = `${fontSize}px Spongebob`;
        this.ctx.fillStyle = `#${hexColor}`;
        this.ctx.fillText(`${counter}`, x, y);

    }
    addLifeCounter() {

    }
    drawLevelComponents(){
        this.ctx.translate(this.camera_x, 0)
        this.addObjectsToMap(this.scenerie)
        this.addObjectsToMap(this.enemies)
        this.addObjectsToMap(this.collectables)
        this.addObjectsToMap(this.throwableObjects)
        this.ctx.translate(-this.camera_x, 0)

    }
    levelGUI(){
        if (this.activLevel !== 0) {
            this.addTextElement(48, "2237ac", this.charakter.score, 150, 60)
            this.addLifebar(320,8, 100, 60)
            this.addEnergiebar(510,8, 100, 60)
            this.ctx.translate(this.camera_x, 0)
            this.addToMap(this.charakter)
            this.gameEnd()
            this.ctx.translate(-this.camera_x, 0)
        }
    }
    levelRestart() {
        this.restartLevel()
        this.restartCharacter()
        this.camera_x = -100
        this.draw()
    }
    restartCharacter(){
        this.charakter.position_x = 120
        this.charakter.lifePoints = 100
        this.charakter.energie = 100
        this.charakter.switchDirectionBack()
    }
    restartLevel(){
        this.level = this.allLevels[this.activLevel]
        this.enemies = this.level.enemies;
        this.scenerie = this.level.scenerie;
        this.collectables = this.level.collectables;
        this.gameMenues = this.level.menues;
    }
    gameEnd(){
        if(this.isGameOver && !this.win){
            this.addToMap(this.gameOverShield)                
        }else if (this.isGameOver && this.win){
            this.addToMap(this.winShield)                
        }

    }
}