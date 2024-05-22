World.prototype.run = function() {
    this.checkLoop = setInterval(() => {
        this.checkCollisions();
        this.checkObjectThrow();
        this.winLooseSound();
        this.checkGameEnd();
    }, 4)
}
World.prototype.stopCheckLoop = function() {
    clearInterval(this.checkLoop)
}
World.prototype.winLooseSound = function() {
    if (this.isGameOver) {
        playSoundOnce(6)
    }
}
World.prototype.checkGameEnd = function() {
    if (this.isGameOver) {
        if (this.win) {
            this.saveScore()
        }
        if (this.keyboard.MOUSEBTN && !this.restarted) {
            this.restarted = true;
            this.level.stopLoops()
            this.LevelZero()
        }
    }
}
World.prototype.checkCollisions = function() {
    this.checkEnemies()
    this.checkCollectables()
    this.checkThrowables()
    this.checkMenues()
}
World.prototype.checkEnemies = function() {
    this.level.enemies.forEach((enemie) => {
        let enemieDead = enemie.isDead()
        if (enemie.isDead() && !enemie instanceof Endboss) {
            enemie.deconstruct(this.level.enemies);
        }
        if (this.charakter.isColliding(enemie) && !enemieDead) {
            if (this.charakter.meleeActive) {
                this.collidingMelee(enemie)
            } else {
                if (!this.charakter.isDead()) {
                    this.inYourFace()
                }
            }
        }
    })

}
World.prototype.inYourFace = function(enemie){
    if (enemie instanceof Pufferfish && !this.charakter.isHurt()) {
        this.charakter.hit(15);
        this.lifeBar.setPercentage(this.charakter.lifePoints)
        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_POISON)
        this.charakter.reduceScore(10)
    }
    if (enemie instanceof Squid && !this.charakter.isHurt()) {
        this.charakter.hit(10);
        this.lifeBar.setPercentage(this.charakter.lifePoints)
        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_ELECTRO)
        this.charakter.reduceScore(10)
    }
    if (enemie instanceof Endboss && !enemie.isDead() && !this.charakter.isHurt()) {
        this.charakter.hit(20);
        this.lifeBar.setPercentage(this.charakter.lifePoints)
        this.charakter.reduceScore(10)
        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_ELECTRO)
    }
}
World.prototype.collidingMelee = function(enemie){
    this.charakter.addScore(30)
    if (enemie instanceof Endboss && !enemie.isHurt()) {
        enemie.hit(20);
        playSound(11)
    } else {
        enemie.hit(10)
    }

}
World.prototype.checkCollectables = function() {
    this.level.collectables.forEach((collectable) => {
        if (this.charakter.isColliding(collectable)) {
            if (collectable instanceof Coin) {
                this.charakter.coins++
                this.charakter.addScore(10)
                collectable.deconstruct(this.level.collectables)
                playSound(4)
            }
        }
    })
}
World.prototype.checkThrowables = function() {
    this.throwableObjects.forEach((throwable) => {
        this.level.enemies.forEach((enemie) => {
            if (throwable.isColliding(enemie)) {
                this.charakter.addScore(5)
                if (enemie instanceof Endboss) {
                    enemie.hit(20);
                    playSound(11)
                }
                else {
                    enemie.hit(5)
                    enemie.playAnimation(enemie.IMAGES_DIE);
                    setTimeout(() => {
                        enemie.deconstruct(this.level.enemies)
                    }, 2000)
                }
                throwable.deconstruct(this.throwableObjects)
            }
        })
    });
}
World.prototype.areButtons = function(menue) {
    return menue instanceof Controlbutton ||
        menue instanceof Highscorebutton ||
        menue instanceof Mutebutton ||
        menue instanceof Startbutton ||
        menue instanceof PauseBtn;
}
World.prototype.checkMenues = function() {
    this.level.menues.forEach((menue) => {
        if (this.curserOverMenue(menue)) {
            if (this.areButtons(menue)) {
                if (!menue.highlighted) {
                    playSound(1)
                    menue.highlighted = true;
                }
                menue.hover()
            }
            if (this.keyboard.MOUSEBTN) {
                playSound(2)
                this.buttonSelection(menue)
            }
        }
        else {
            if (this.areButtons(menue)) {
                menue.unhover()
            }
            if (menue.highlighted) {
                menue.highlighted = false;
            }
        }
    })

}
World.prototype.curserOverMenue = function(menue){
    return this.gameCurser.position_x >= menue.position_x &&
        this.gameCurser.position_y >= menue.position_y &&
        this.gameCurser.position_x <= menue.position_x + menue.width &&
        this.gameCurser.position_y <= menue.position_y + menue.height; 
}
World.prototype.buttonSelection = function(menue){
    if (menue instanceof Startbutton) {
        this.LevelOne()
    }
    else if (menue instanceof PauseBtn) {
        this.LevelZero()
    }
    else if (menue instanceof Controlbutton) {
        this.keyboard.HELP = !this.keyboard.HELP
    }
    else if (menue instanceof Highscorebutton) {
        this.showHighscore = !this.showHighscore
    }
    else if (menue instanceof Mutebutton) {
        muteAll()
    }
}
World.prototype.checkObjectThrow = function() {
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
