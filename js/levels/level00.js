const level00 = new Level(
    [
    ],
    [
        new BackgroundObjekt("./IMG/lvl00.webp",0, 800 , 480),

    ],
    [
        // new Coin(100, 200),
    ],
    [
        // new Startbutton(350, 150, 200, 200),

    ],
    0,


)
level00.generateHauptmenü()
playSound(allSounds[0])
playSound(allSounds[3])