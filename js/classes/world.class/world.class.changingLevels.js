/**
 * Initializes the game at level zero, typically a starting or home level.
 * Loads high scores, stops any ongoing game loops, sets the initial level configuration,
 * and clears previous game states.
 * @memberof World
 * @method
 */
World.prototype.LevelZero = async function(){
    playSoundOnceUnuse(6)
    this.loadHighScore()
    this.stopLoops()
    this.level = level00;
    this.clearLevel()
    this.clearWorld()
    this.loadingLevel()
}
/**
 * Sets the game to level one, usually the first level of actual gameplay.
 * Initializes game elements specific to level one, including enemies, character, and sounds.
 * Also starts the gameplay by enabling GUI and setting game state to start.
 * @memberof World
 * @method
 */
World.prototype.LevelOne = function(){
    this.level = level01;
    this.clearLevel()
    this.loadingCharakter()
    this.loadingLevel()
    this.stopEnemieLoops()
    this.loadingSoundObjects()
    this.showGUI = true;
    this.startPlay = true;
    this.level.generateEnemie(1)
}
/**
 * Clears all current level information, resetting enemies and other level-specific states.
 * @memberof World
 * @method
 */
World.prototype.clearLevel = function(){
    this.level.stopLoops()
    this.level.enemies.length = 0;
    this.level.spawnedEndboss = false
}
/**
 * Resets the entire game world state, including game over flags, GUI visibility, and character data.
 * @memberof World
 * @method
 */
World.prototype.clearWorld = function(){
    this.isGameOver = false;
    this.win = false;
    this.showGUI = false;
    this.startPlay = false;
    this.soundObjects = null;
    this.charakter = null;
    this.camera_x = 0;
    this.saved = false;
    this.restarted = false;
    this.pauseSounds();
}
/**
 * Stops all ongoing loops related to enemies, character, and sound objects in the game.
 * @memberof World
 * @method
 */
World.prototype.stopLoops = function(){
    this.stopEnemieLoops()
    this.stopCharakterLoops();
    this.stopSOLoops()

}
World.prototype.pauseSounds = function (){
    allSounds.forEach((sound) =>{
        if (sound.src !== 'audio/click1.mp3' || sound.src !== 'audio/bite.mp3' ){
            if(!sound.paused){
                sound.pause()
                sound.currentTime = 0;
            }
        }
    })
    
    
}
/**
 * Loads the current level's data into the game world, including enemies, scenery, collectables, and menus.
 * @memberof World
 * @method
 */
World.prototype.loadingLevel = function(){
    this.enemies = this.level.enemies;
    this.scenerie = this.level.scenerie;
    this.collectables = this.level.collectables;
    this.gameMenues = this.level.menues;
}
/**
 * Loads the character and initializes their position and state within the world.
 * @memberof World
 * @method
 */
World.prototype.loadingCharakter = function(){
    this.charakter = new Charakter()
    this.camera_x = 100
    this.setWorld()
}
/**
 * Loads and prepares sound objects for the game, setting up their initial conditions and volume.
 * @memberof World
 * @method
 */
World.prototype.loadingSoundObjects = function(){
    this.soundObjects = [
        new SoundObject2D('./audio/BarCrowd.mp3', 0, 1000),
        new SoundObject2D('./audio/EndbossMusic.mp3', 3000, 1000),
    ]
    this.startSoundObjects();
}
/**
 * Stops all loops associated with the character's animations or actions.
 * @memberof `World`
 * @method
 */
World.prototype.stopEnemieLoops = function(){
    if (this.enemies) {
        this.enemies.forEach((enemie) => {
            enemie.stopLoops();
        })
    }
}
/**
 * Stops all sound-related loops, pausing the sound playback and any other sound-related intervals.
 * @memberof World
 * @method
 */
World.prototype.stopCharakterLoops = function(){
    if (this.charakter) {
        this.charakter.stopLoops();
    }
}
/**
 * Initiates playback of all configured sound objects, typically adjusting volume based on game settings.
 * @memberof World
 * @method
 */
World.prototype.stopSOLoops = function(){
    if (this.soundObjects) {
        this.soundObjects.forEach((SO) => {
            SO.sound.pause()
            SO.stopLoops()
        })
    }
}
World.prototype.startSoundObjects = function(){
    this.soundObjects.forEach((SO) => {
        SO.detectVolume();
    })
}
