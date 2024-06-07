/**
 * The Method starts the Checkloop
 * It checks for object throws the collisions of them or the Character with Enemies.
 * It checks for the gameend
 * The check rate is 4/1000 sec
 * @memberof World
 */
World.prototype.run = function () {
    this.checkLoop = setInterval(() => {
        this.checkCollisions();
        if (!this.pauseGame) {
            this.checkObjectThrow();
            this.checkGameEnd();
        }
    }, 4)
}
/**
 * This Method breaks the Checkloop
 */
World.prototype.stopCheckLoop = function () {
    clearInterval(this.checkLoop)
}
/**
 * This checks if the Game is Over and if you win or not
 * on win it saves the score
 * if the Mousebtn is pressed it:
 * *it activates the restart flag
 * *it stopps all Levelloops
 * *it brings back Mainmenue
 * 
 * @memberof World
 */
World.prototype.checkGameEnd = function () {
    if (this.isGameOver) {
        playSoundOnce(6)
        if (this.win) {
            this.saveScore()
        }
        if ((this.keyboard.MOUSEBTN || this.keyboard.SPACE) && !this.restarted) {
            this.restarted = true;
            this.level.stopLoops()
            this.LevelZero()
        }
    }
}
/**
 * It checks for any kind of Collisions in game:
 * Character <-> Enemies
 * Character <-> Collectables
 * Throwables <-> Enemies
 * Cursor <-> Menues
 * @memberof World
 */
World.prototype.checkCollisions = function () {
    if (!this.pauseGame) {
        this.checkEnemies()
        this.checkCollectables()
        this.checkThrowables()
    }
    this.checkMenues()
    this.responsiveControl()
}
/**
 * This Method Checks the Enemies
 * if an not Endboss is dead it disappiers
 * if the character is colliding with enemies
 * if it is in Melee he deals otherwise he gets damage
 * @memberof World
 */
World.prototype.checkEnemies = function () {
    this.level.enemies.forEach((enemie) => {
        let enemieDead = enemie.isDead()
        if (enemie.isDead() && !(enemie instanceof Endboss)) {
            enemie.deconstruct(this.level.enemies);
        }
        if (this.charakter.isColliding(enemie) && !enemieDead) {
            if (this.charakter.meleeActive) {
                this.collidingMelee(enemie)
            } else {
                if (!this.charakter.isDead()) {
                    this.inYourFace(enemie)
                }
            }
        }
    })

}
/**
 * This Method accesses the damage, taken by the Character, and the contact sound for each instance of enemies 
 * @param {moveableObjekt} enemie 
 * @memberof World
 */
World.prototype.inYourFace = function (enemie) {
    if (enemie instanceof Pufferfish && !this.charakter.isHurt()) {
        this.charakter.hit(15, enemie);
        playSound(14)
        this.charakter.reduceScore(10)
    }
    if (enemie instanceof Squid && !this.charakter.isHurt()) {
        this.charakter.hit(10, enemie);
        this.charakter.reduceScore(10)
        playSound(13)
    }
    if (enemie instanceof Endboss && !enemie.isDead() && !this.charakter.isHurt()) {
        this.charakter.hit(20, enemie);
        this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_HURT_ELECTRO)
    }
}
/**
 * If the Character colliding an enemie is in meleeActiv, it deals damage
 * the Score is raised
 * Endboss enemies get little more damage and play a sound.
 * @param {moveableObjekt} enemie 
 * @memberof World
 */
World.prototype.collidingMelee = function (enemie) {
    this.charakter.addScore(30)
    if (enemie instanceof Endboss) {
        if (!enemie.isHurt()) {
            enemie.hit(20);
            playSound(11)
        }
    } else {
        enemie.hit(10)
    }

}
/**
 * The Method check for each Collectable colliding with the Character
 * if the character collides with a coin @param character.coin goes +1
 * the @param character.score is added with 10
 * the @param collectable is remove from the collectable Array
 * @memberof World
 */
World.prototype.checkCollectables = function () {
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
/**
 * each throwable is checked if it hits any of the enemies
 * The Endboss would be hit an all other Enemies die and get removed from the array
 * @memberof World
 */
World.prototype.checkThrowables = function () {
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
/**
 * checks if the menue is a Button
 * @param {Sprite} menue 
 * @returns {boolean}
 */
World.prototype.areButtons = function (menue) {
    return menue instanceof Controlbutton ||
        menue instanceof Highscorebutton ||
        menue instanceof Mutebutton ||
        menue instanceof Startbutton ||
        menue instanceof PauseBtn;
}
/**
 * the Method checks for each @param menue if the curser hovers
 * 
 */
World.prototype.checkMenues = function () {
    this.level.menues.forEach((menue) => {
        if (this.curserOverMenue(menue)) {
            if (this.areButtons(menue)) {
                if (!menue.highlighted) {
                    playSound(1)
                    menue.highlighted = true;
                }
                menue.hover()
                if (this.keyboard.MOUSEBTN && !isMobile) {
                    playSound(2)
                    this.buttonSelection(menue)
                }
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
/**
 * Determines if the game cursor is currently over a specified menu.
 * This method checks if the cursor's coordinates are within the boundaries of the menu's rectangle
 * defined by its position and dimensions.
 *
 * @memberof World
 * @method
 * @param {Object} menue - The menu object to check against, which includes position and size properties.
 * @returns {boolean} Returns true if the cursor is over the menu, false otherwise.
 * @example
 * // Assuming a menu at position (100, 100) with a size of 200x100 and a cursor at position (150, 120)
 * const isOverMenu = world.curserOverMenue(menu);
 * console.log(isOverMenu);  // Outputs: true
 */
World.prototype.curserOverMenue = function (menue) {
    return this.gameCurser.position_x >= menue.position_x &&
        this.gameCurser.position_y >= menue.position_y &&
        this.gameCurser.position_x <= menue.position_x + menue.width &&
        this.gameCurser.position_y <= menue.position_y + menue.height;
}
/**
 * Handles the actions triggered when different types of menu buttons are selected.
 * This method checks the type of the given menu object and executes an action based on its type:
 * - Startbutton: Starts the game from the first level.
 * - PauseBtn: Returns the game to the initial state (zero level).
 * - Controlbutton: Toggles the display of the help menu.
 * - Highscorebutton: Toggles the display of the high score table.
 * - Mutebutton: Mutes all game sounds.
 *
 * @memberof World
 * @method
 * @param {Object} menue - The menu button object that was selected. Expected to be an instance of one of the button classes.
 * @example
 * // Assuming `menu` is an instance of `Startbutton`
 * world.buttonSelection(menu);  // This would trigger the `LevelOne` method to start the game.
 */
World.prototype.buttonSelection = function (menue) {
    if (menue instanceof Startbutton) {
        this.LevelOne()
    }
    else if (menue instanceof PauseBtn) {
        this.pauseGame = !this.pauseGame
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
/**
 * Checks if conditions are met to throw an object in the game, typically a "bubble".
 * If the secondary action key is pressed and the character has sufficient energy,
 * an animation is played after a delay, a new bubble is created and added to the list of throwable objects,
 * a sound effect is triggered, and the character's energy is reduced.
 *
 * @memberof World
 * @method
 * @fires playSound - Triggers a sound effect when the bubble is thrown.
 * @example
 * // This method is typically called within the game loop to continuously check if the 
 * // character should throw a bubble based on current input and energy level.
 * world.checkObjectThrow();
 */
World.prototype.checkObjectThrow = function () {
    if (this.keyboard.SECONDARY && this.charakter.energie >= 25) {
        this.charakter.rangeActive = true
        // setTimeout(() => {
        // this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_SHOOT)
        // }, 2000);
        let newBubble = new bubble(this.charakter.position_x + 100, this.charakter.position_y + 100)
        this.throwableObjects.push(newBubble)
        playSound(5)
        this.charakter.energie -= 25;
        this.keyboard.SECONDARY = !this.keyboard.SECONDARY;
        setTimeout(() => {
            this.charakter.rangeActive = false

        }, 100)
    }
}
World.prototype.responsiveControl = function () {
    if (isMobile && !this.activLevel) {
        playSoundOnceUnuse(2)
        if (this.buttonHighlighted === 1) {
            this.unhoverAll()
            this.gameMenues[1].hover()
            if (this.keyboard.SPACE) {
                this.LevelOne()
                this.keyboard.SPACE = !this.keyboard.SPACE
                playSoundOnce(2)
            }
        }
        else if (this.buttonHighlighted === 2) {
            this.unhoverAll()
            this.gameMenues[2].hover()
            if (this.keyboard.SPACE) {
                playSoundOnce(2)
                this.keyboard.HELP = !this.keyboard.HELP
                this.keyboard.SPACE = !this.keyboard.SPACE

            }
        }
        else if (this.buttonHighlighted === 3) {
            this.unhoverAll()
            this.gameMenues[3].hover()
            if (this.keyboard.SPACE) {
                playSoundOnce(2)
                muteAll()
                this.keyboard.SPACE = !this.keyboard.SPACE
            }
        }
        else if (this.buttonHighlighted === 4) {
            this.unhoverAll()
            this.gameMenues[4].hover()
            if (this.keyboard.SPACE) {
                playSoundOnce(2)
                this.showHighscore = !this.showHighscore
                this.keyboard.SPACE = !this.keyboard.SPACE

            }

        }

    }
}
World.prototype.unhoverAll = function(){
    this.gameMenues[1].unhover()
    this.gameMenues[2].unhover()
    this.gameMenues[3].unhover()
    this.gameMenues[4].unhover()
}