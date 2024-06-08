let canvas;
let world;
let keyboard = new Keyboard()
let isMobile = false
let landscapeMode = checkLandscape()
let md = new MobileDetect(window.navigator.userAgent)
const body = document.getElementById('body')
let smartOverlay;
const mainSection = document.getElementById('mainSection');


// Global EventListener

window.addEventListener('load', function () {
    init()
    mainSection.addEventListener('contextmenu', function (event) {
        event.preventDefault()
    })

});

window.addEventListener("orientationchange", function () {
    location.reload();
});

// Functions

/**
 * Checks wether the device is in portait or landscapemode.
 * sending Startbutton or sending the switchimage to MainSection
 */
function init() {
    if (checkLandscape()) {
        mainSection.innerHTML = setFirstBtn()
    } else {
        mainSection.innerHTML = setSwitchImage()
    }
}

/**
 * Initializes the game by setting safe storage and loading the game world.
 * @async
 */
async function startGame() {
    mainSection.innerHTML = setCanvas();
    setSaveSpace()
    loadWorld();

}

/**
 * Loads the game world, initializes the canvas, the world object, keyboard handlers, and overlays.
 */
function loadWorld() {
    getDeviceType()
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    smartOverlay = document.getElementById('smartOverlay')
    portaitDialog = document.getElementById('portaitDialog')
    arrangeSmartOverlay(canvas)
    if (isMobile) {
        smartOverlay.classList.remove('d-none')
        smartControlListener()
    }
    keyEventListeners()
}

/**
 * Registers event listeners for mouse and keyboard interactions.
 */
function keyEventListeners() {
    mousemoveEventListener();
    keyDownListener();
    keyUpListener();
    mouseClickListener();
}

/**
 * Sets Controlls the Mousebtn on Canvas in case of casual and Fullscreen
 */
function mousemoveEventListener() {
    document.addEventListener('mousemove', (event) => {
        let canvasBorder = canvas.getBoundingClientRect();
        if (keyboard.FULLSCREEN) {
            world.gameCurser.position_x = (event.clientX / window.innerWidth) * canvas.width;
            world.gameCurser.position_y = (event.clientY / window.innerHeight) * canvas.height;
        }
        else {
            world.gameCurser.position_x = event.clientX - canvasBorder.left;
            world.gameCurser.position_y = event.clientY - canvasBorder.top;
        }
    })
}

/**
 * On Mouse 1 click it switches keyboard
 */
function mouseClickListener() {
    document.addEventListener('click', async () => {
        keyboard.MOUSEBTN = true;
        setTimeout(() => {
            keyboard.MOUSEBTN = false;
        }, 3);

    })

}

/**
 * Check wether a relevant key is released
 */
function keyUpListener() {
    document.addEventListener('keyup', (event) => {
        if (event.key === 'A' || event.key === 'a') {
            keyboard.LEFT = false;
        }
        else if (event.key === 'W' || event.key === 'w') {
            keyboard.UP = false;
        }
        else if (event.key === 'S' || event.key === 's') {
            keyboard.DOWN = false;
        }
        else if (event.key === 'D' || event.key === 'd') {
            keyboard.RIGHT = false;
        }
        else if (event.key === 'Escape') {
            keyboard.ESCAPE = false;
        }
        else if (event.key === 'Shift') {
            keyboard.SHIFT = false;
        }
        else if (event.key === ' ') {
            keyboard.SPACE = false;
        }
        else if (event.key === 'E' || event.key === 'e') {
            keyboard.SECONDARY = false;
        }

    })
}

/**
 * Check wether a relevant key is pressed
 */
function keyDownListener() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'A' || event.key === 'a') {
            keyboard.LEFT = true;
        }
        else if (event.key === 'W' || event.key === 'w') {
            keyboard.UP = true;
        }
        else if (event.key === 'S' || event.key === 's') {
            keyboard.DOWN = true;
        }
        else if (event.key === 'D' || event.key === 'd') {
            keyboard.RIGHT = true;
        }
        else if (event.key === 'Escape') {
            keyboard.ESCAPE = true;
        }
        else if (event.key === 'Shift') {
            keyboard.SHIFT = true;
        }
        else if (event.key === ' ') {
            keyboard.SPACE = true;
        }
        else if (event.key === 'E' || event.key === 'e') {
            keyboard.SECONDARY = true;
        }
        else if (event.key === 'F' || event.key === 'f') {
            toggleFullscreen()
        }
        else if (event.key === 'H' || event.key === 'h') {
            keyboard.HELP = !keyboard.HELP;
        }
    })
}

/**
 * Toggles the full screen state of the canvas.
 */
function toggleFullscreen() {
    keyboard.FULLSCREEN = !keyboard.FULLSCREEN;
    if (keyboard.FULLSCREEN) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) { /* Firefox */
            canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) { /* IE/Edge */
            canvas.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari und Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}

/**
 * Arranges the overlay based on device orientation.
 * @param {HTMLElement} canvas - The canvas element where the game is rendered.
 */
function arrangeSmartOverlay(canvas) {
    if (isMobile) {
        if (landscapeMode) {
            overlayFit(smartOverlay)
        }
        else {
            overlayFit(portaitDialog)
        }
    }
}

/**
 * Fits the overlay to the canvas dimensions.
 * @param {HTMLElement} overlay - The overlay element to fit.
 */
function overlayFit(overlay) {
    overlay.classList.remove('d-none')
    // let canvasBorder = canvas.getBoundingClientRect();
    // overlay.style.left = canvasBorder.left + 'px';
    // overlay.style.top = canvasBorder.top + 'px';
    // overlay.style.right = canvasBorder.right + 'px';
    // overlay.style.bottom = canvasBorder.bottom + 'px';
}

/**
 * Detects the type of device the game is being accessed from.
 * @returns {string} The type of device detected (Mobile, Tablet, or Desktop).
 */
function getDeviceType() {
    if (md.mobile()) {
        isMobile = true
        return "Mobilgerät";
    } else if (md.tablet()) {
        return "Tablet";
    } else {
        return "Desktop";
    }
}

/**
 * Checks if the device is in landscape orientation.
 * @returns {boolean} True if the device is in landscape mode, false otherwise.
 */
function checkLandscape() {
    return window.innerWidth > window.innerHeight
}

/**
 * Sets up initial safe storage for game data.
 */
function setSaveSpace() {
    let firstSave = () => {
        let keyFound = true;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key == 'HighScore') {
                keyFound = false;
            }
        }
        return keyFound;
    }
    if (firstSave()) {
        let HighScoreProto = [testScore1, testScore2, testScore3, testScore4, testScore5];
        let HighScoreProtoAsJSON = JSON.stringify(HighScoreProto)
        localStorage.setItem('HighScore', HighScoreProtoAsJSON)
    }
}

/**
 * CodeSnippet of the Canvas an the responsiv controll that are d-none'd
 * @returns html
 */
function setCanvas() {
    return /*html*/`
        <canvas id="canvas" width="720" height="480"></canvas>
        <div id="smartOverlay" class="smartOverlay d-none">
            <div id="leftSmartBtn" class="overlayButton leftBtn">&#8592;</div>
            <div id="rightSmartBtn" class="overlayButton rightBtn">&#8594;</div>
            <div id="upSmartBtn" class="overlayButton upBtn">&#8593;</div>
            <div id="downSmartBtn" class="overlayButton downBtn">&#8595;</div>
            <div id="aSmartBtn" class="overlayButton aBtn">A</div>
            <div id="bSmartBtn" class="overlayButton bBtn">B</div>
            <div id="zSmartBtn" class="overlayButton zBtn">Z</div>
            <div id="startSmartBtn" class="overlayButton startBtn">Start</div>
            <div id="pauseSmartBtn" class="overlayButton pauseBtn">Pause</div>
        </div>
    `
}

/**
 * 
 * @returns Image that you see if the device is in Portait Mode
 */
function setSwitchImage() {
    return /*html*/`
                <div class="switchPortaitImage"></div>
    `
}

/**
 * 
 * @returns the Startbtn to play the Canvas and unlock the Browser security stoping all Onload Listeners
 */
function setFirstBtn() {
    return /*html*/`
        <button id="startBtn" class="startGameBtn" onclick="startGame()">Start&nbsp;Game</button>

    `
}

/**
 * Sets up touch event listeners for on-screen control buttons to simulate keyboard input for a game.
 */
function smartControlListener() {
    let SmartBtnLEFT = document.getElementById('leftSmartBtn')
    let SmartBtnRIGHT = document.getElementById('rightSmartBtn')
    let SmartBtnUP = document.getElementById('upSmartBtn')
    let SmartBtnDOWN = document.getElementById('downSmartBtn')
    let SmartBtnA = document.getElementById('aSmartBtn')
    let SmartBtnB = document.getElementById('bSmartBtn')
    let SmartBtnZ = document.getElementById('zSmartBtn')
    let SmartBtnStart = document.getElementById('startSmartBtn')
    let SmartBtnPause = document.getElementById('pauseSmartBtn')

    SmartBtnLEFT.addEventListener('touchstart', () => {
        keyboard.LEFT = true;
        switchDownMobileSelection()
    }, { passive: true })
    SmartBtnRIGHT.addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
        switchUpMobileSelection()
    }, { passive: true })
    SmartBtnUP.addEventListener('touchstart', () => {
        keyboard.UP = true;
        switchDownMobileSelection()
    }, { passive: true })
    SmartBtnDOWN.addEventListener('touchstart', () => {
        keyboard.DOWN = true;
        switchUpMobileSelection()
    }, { passive: true })
    SmartBtnStart.addEventListener('touchstart', () => {
        if (world.activLevel){
            world.LevelZero()
        }else{
            world.LevelOne()
        }
    })
    SmartBtnPause.addEventListener('touchstart', () => {
        if (world.activLevel){
            world.pauseGame = !world.pauseGame
        }
    }, { passive: true })
    SmartBtnA.addEventListener('touchstart', () => {
        keyboard.SPACE = true;
    }, { passive: true })
    SmartBtnB.addEventListener('touchstart', () => {
        keyboard.SECONDARY = true;
    }, { passive: true })
    SmartBtnZ.addEventListener('touchstart', () => {
        keyboard.SHIFT = true;
    }, { passive: true })
    SmartBtnLEFT.addEventListener('touchend', () => {
        keyboard.LEFT = false;
    })
    SmartBtnRIGHT.addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    })
    SmartBtnUP.addEventListener('touchend', () => {
        keyboard.UP = false;
    })
    SmartBtnDOWN.addEventListener('touchend', () => {
        keyboard.DOWN = false;
    })
    SmartBtnA.addEventListener('touchend', () => {
        keyboard.SPACE = false;
    })
    SmartBtnB.addEventListener('touchend', () => {
        keyboard.SECONDARY = false;
    })
    SmartBtnZ.addEventListener('touchend', () => {
        keyboard.SHIFT = false;
    })
}

/**
 * Set the next Button on Focus an Highlights it
 */
function switchUpMobileSelection() {
    if (!world.activLevel) {
        world.buttonHighlighted++
        playSound(1)
        if (world.buttonHighlighted > 4) {
            world.buttonHighlighted = 1;
        }
    }
}

/**
 * Set the previous Button on Focus an Highlights it
 */
function switchDownMobileSelection() {
    if (!world.activLevel) {
        world.buttonHighlighted--
        playSound(1)
        if (world.buttonHighlighted < 1) {
            world.buttonHighlighted = 4;
        }
    }
}
