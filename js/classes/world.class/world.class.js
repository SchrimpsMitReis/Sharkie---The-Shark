class World {
    level;
    enemies;
    scenerie;
    collectables;
    gameMenues;
    charakter;
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.checkLoop = null
        this.LevelZero()
        this.draw()
        this.run()
        this.loadHighScore();
    }
    menuHelp = new HelpMenu(0, 0);
    escMenue = new ESCMenu(0, 0);
    lifeBar = new lifebar(50, 20, 0.3);
    coinBar = new coinbar(50, 50, 0.3);
    gameCurser = new Cursor()
    throwableObjects = []
    width = 720;
    height = 480;
    saved = false;
    canvas;
    editorMode = false;
    ctx;
    muted = false;
    keyboard;
    camera_x = 0;
    isGameOver = false;
    win = false;
    gameOverShield = new GameOver(150, 50, 400, 400)
    winShield = new winShield(150, 50, 400, 400)
    ScoreTable = new HighscoreBoard(20, 10, 500, 500);
    HighScore = []
    showGUI = false
    showHighscore = false;
    startPlay = false
    soundObjects;
    restarted = false
    setWorld() {
        this.charakter.world = this;
        this.level.world = this;
        this.gameCurser.world = this;
    }
}