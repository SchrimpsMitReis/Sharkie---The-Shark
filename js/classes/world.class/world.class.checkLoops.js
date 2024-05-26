/**
 * The Method starts the Checkloop
 * It checks for object throws the collisions of them or the Character with Enemies.
 * It checks for the gameend
 * The check rate is 4/1000 sec
 * @memberof World
 */
World.prototype.run = function() {
    this.checkLoop = setInterval(() => {
        this.checkCollisions();
        this.checkObjectThrow();
        this.checkGameEnd();
    }, 4)
}
/**
 * This Method breaks the Checkloop
 */
World.prototype.stopCheckLoop = function() {
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
World.prototype.checkGameEnd = function() {
    if (this.isGameOver) {
        playSoundOnce(6)
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
/**
 * It checks for any kind of Collisions in game:
 * Character <-> Enemies
 * Character <-> Collectables
 * Throwables <-> Enemies
 * Cursor <-> Menues
 * @memberof World
 */
World.prototype.checkCollisions = function() {
    this.checkEnemies()
    this.checkCollectables()
    this.checkThrowables()
    this.checkMenues()
}
/**
 * This Method Checks the Enemies
 * if an not Endboss is dead it disappiers
 * if the character is colliding with enemies
 * if it is in Melee he deals otherwise he gets damage
 * @memberof World
 */
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
World.prototype.inYourFace = function(enemie){
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
World.prototype.collidingMelee = function(enemie){
    this.charakter.addScore(30)
    if (enemie instanceof Endboss && !enemie.isHurt()) {
        enemie.hit(20);
        playSound(11)
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
/**
 * each throwable is checked if it hits any of the enemies
 * The Endboss would be hit an all other Enemies die and get removed from the array
 * @memberof World
 */
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
/**
 * checks if the menue is a Button
 * @param {Sprite} menue 
 * @returns {boolean}
 */
World.prototype.areButtons = function(menue) {
    return menue instanceof Controlbutton ||
        menue instanceof Highscorebutton ||
        menue instanceof Mutebutton ||
        menue instanceof Startbutton ||
        menue instanceof PauseBtn;
}
/**
 * Checks the state of menus in the game level to manage user interactions and visual feedback.
 * Iterates through each menu in the current level, performing checks to determine if the cursor is over the menu,
 * if the menu contains buttons, and handling user clicks.
 * It updates the visual state of menus by highlighting them when hovered over,
 * plays sounds on interactions, and manages the button selections.
 *
 * @memberof World
 * @method
 * @fires playSound
 */
World.prototype.checkMenues = function() {
    this.level.menues.forEach((menue) => {
        if (this.curserOverMenue(menue)) {
            if (this.areButtons(menue)) {
                if (!menue.highlighted) {
                    playSound(1);  // Play a sound when the menu is highlighted.
                    menue.highlighted = true;
                }
                menue.hover();  // Call hover method to update menu's visual state.
            }
            if (this.keyboard.MOUSEBTN) {
                playSound(2);  // Play a sound when a button is selected.
                this.buttonSelection(menue);  // Perform the action associated with the button.
            }
        } else {
            if (this.areButtons(menue)) {
                menue.unhover();  // Revert hover effects when the cursor is not over the menu.
            }
            if (menue.highlighted) {
                menue.highlighted = false;  // Remove highlight when the cursor moves away.
            }
        }
    });
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
 */
World.prototype.curserOverMenue = function(menue){
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
 */
World.prototype.buttonSelection = function(menue){
    if (menue instanceof Startbutton) {
        this.LevelOne();  // Start the game at level one.
    }
    else if (menue instanceof PauseBtn) {
        this.LevelZero();  // Reset the game to its initial state.
    }
    else if (menue instanceof Controlbutton) {
        this.keyboard.HELP = !this.keyboard.HELP;  // Toggle the help display.
    }
    else if (menue instanceof Highscorebutton) {
        this.showHighscore = !this.showHighscore;  // Toggle the high score display.
    }
    else if (menue instanceof Mutebutton) {
        muteAll();  // Mute all game sounds.
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
 */
World.prototype.checkObjectThrow = function() {
    if (this.keyboard.SECONDARY && this.charakter.energie >= 25) {
        // Set a delay before playing the shooting animation
        setTimeout(() => {
            this.charakter.playAnimation(this.charakter.IMAGES_SHARKIE_SHOOT);
        }, 2000);

        // Create a new bubble object at adjusted positions and add it to the throwable objects list
        let newBubble = new Bubble(this.charakter.position_x + 100, this.charakter.position_y + 100);
        this.throwableObjects.push(newBubble);

        // Play a sound effect for throwing the bubble
        playSound(5);

        // Deduct energy from the character for throwing the bubble
        this.charakter.energie -= 25;

        // Reset the key state to prevent continuous throwing without further input
        this.keyboard.SECONDARY = !this.keyboard.SECONDARY;
    }
}