World.prototype.LevelZero = function(){
    this.loadHighScore()
    this.stopLoops()
    this.level = level00;
    this.clearLevel()
    this.clearWorld()
    this.loadingLevel()
}
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
    console.log("LevelOne");
}
World.prototype.clearLevel = function(){
    this.level.enemies.length = 0;
    this.level.spawnedEndboss = false
}
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
}
World.prototype.stopLoops = function(){
    this.stopEnemieLoops()
    this.stopCharakterLoops();
    this.stopSOLoops()

}
World.prototype.loadingLevel = function(){
    this.enemies = this.level.enemies;
    this.scenerie = this.level.scenerie;
    this.collectables = this.level.collectables;
    this.gameMenues = this.level.menues;
}
World.prototype.loadingCharakter = function(){
    this.charakter = new Charakter()
    this.camera_x = 100
    this.setWorld()
}
World.prototype.loadingSoundObjects = function(){
    this.soundObjects = [
        new SoundObject2D('./audio/BarCrowd.mp3', 0, 1000),
        new SoundObject2D('./audio/EndbossMusic.mp3', 3000, 1000),
    ]
    this.startSoundObjects();
}
World.prototype.stopEnemieLoops = function(){
    if (this.enemies) {
        this.enemies.forEach((enemie) => {
            enemie.stopLoops();
        })
    }
}
World.prototype.stopCharakterLoops = function(){
    if (this.charakter) {
        this.charakter.stopLoops();
    }
}
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
