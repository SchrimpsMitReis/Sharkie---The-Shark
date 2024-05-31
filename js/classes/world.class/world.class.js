/**
 * Represents the main game world in which all game components and states are managed.
 * This class initializes game elements, loads levels, manages the game loop, and handles user inputs.
 *
 * @class
 * @param {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
 * @param {Object} keyboard - An object that tracks the state of keyboard inputs.
 */
class World {
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
    // Levelbased Lists
    level;
    enemies;
    scenerie;
    collectables;
    gameMenues;
    charakter;
    soundObjects;

    // Game Overlays    
    gameCurser = new Cursor();
    escMenue = new ESCMenu(0, 0);
    menuHelp = new HelpMenu(0, 0);
    winShield = new winShield(150, 50, 400, 400);
    gameOverShield = new GameOver(150, 50, 400, 400);
    ScoreTable = new HighscoreBoard(20, 10, 500, 500);
    // Fags and Booleans
    win = false;
    saved = false;
    muted = false;
    showGUI = false;
    loading = false;
    startPlay = false;
    restarted = false;
    isGameOver = false;
    editorMode = false;
    showHighscore = false;

    // Camera
    camera_x = 0;

    // Arrays and Lists
    HighScore = [];
    throwableObjects = [];
    /**
     * Sets the world context for the character, level, and game cursor,
     * allowing these components to interact with the world.
     */
    setWorld() {
        this.charakter.world = this;
        this.level.world = this;
        this.gameCurser.world = this;
    }
}