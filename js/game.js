let canvas;
let world;
let keyboard = new Keyboard()
let isMobile = false
let landscapeMode = checkLandscape()
let md = new MobileDetect(window.navigator.userAgent)
const body = document.getElementById('body')
let smartOverlay;

/**
 * Initializes the game by setting safe storage and loading the game world.
 * @async
 */
async function init(){
    setSaveSpace()
    loadWorld();
}
/**
 * Loads the game world, initializes the canvas, the world object, keyboard handlers, and overlays.
 */
function loadWorld(){
    getDeviceType()
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    smartOverlay = document.getElementById('smartOverlay')
    portaitDialog = document.getElementById('portaitDialog')
    arrangeSmartOverlay(canvas)
    keyEventListeners()
}
/**
 * Registers event listeners for mouse and keyboard interactions.
 */
function keyEventListeners(){
    document.addEventListener('mousemove', (event)=>{
        let canvasBorder = canvas.getBoundingClientRect();
        if(keyboard.FULLSCREEN){
            world.gameCurser.position_x = (event.clientX/window.innerWidth) * canvas.width;
            world.gameCurser.position_y = (event.clientY/window.innerHeight) * canvas.height;
        }
        else{
            world.gameCurser.position_x = event.clientX - canvasBorder.left ;
            world.gameCurser.position_y = event.clientY - canvasBorder.top;
        }
    })
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'A' || event.key === 'a'){
            keyboard.LEFT = true;
        }
        else if (event.key === 'W' || event.key === 'w'){
            keyboard.UP = true;
        }
        else if (event.key === 'S' || event.key === 's'){
            keyboard.DOWN = true;
        }
        else if (event.key === 'D' || event.key === 'd'){
            keyboard.RIGHT = true;
        }
        else if (event.key === 'Escape'){
            keyboard.ESCAPE = true;
        }
        else if (event.key === 'Shift'){
            keyboard.SHIFT = true;
        }
        else if (event.key === ' '){
            keyboard.SPACE = true;
        }
        else if (event.key === 'E' || event.key === 'e'){
            keyboard.SECONDARY = true;
        }
        else if (event.key === 'F' || event.key === 'f'){
            toggleFullscreen()
        }
        else if (event.key === 'H' || event.key === 'h'){
            keyboard.HELP = !keyboard.HELP;
        }
        world.charakter.sleepTimer = new Date().getTime();
    })
    document.addEventListener('keyup', (event)=>{
        if (event.key === 'A' || event.key === 'a'){
            keyboard.LEFT = false;
        }
        else if (event.key === 'W' || event.key === 'w'){
            keyboard.UP = false;
        }
        else if (event.key === 'S' || event.key === 's'){
            keyboard.DOWN = false;
        }
        else if (event.key === 'D' || event.key === 'd'){
            keyboard.RIGHT = false;
        }
        else if (event.key === 'Escape'){
            keyboard.ESCAPE = false;
        }
        else if (event.key === 'Shift'){
            keyboard.SHIFT = false;
        }
        else if (event.key === ' '){
            keyboard.SPACE = false;
        }
        else if (event.key === 'E' || event.key === 'e'){
            keyboard.SECONDARY = false;
        }
    
    })
    document.addEventListener('click', async ()=>{
        keyboard.MOUSEBTN = true;
        setTimeout(() => {
            keyboard.MOUSEBTN = false;        
        }, 3);
    
    })
}
/**
 * Toggles the full screen state of the canvas.
 */
function toggleFullscreen(){
    keyboard.FULLSCREEN = !keyboard.FULLSCREEN;
    if (keyboard.FULLSCREEN){
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) { /* Firefox */
            canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) { /* IE/Edge */
            canvas.msRequestFullscreen();
        }
    }else{
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
function arrangeSmartOverlay(canvas){
    if (isMobile){
        if (landscapeMode){
            overlayFit(smartOverlay)
        }
        else{
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
    let canvasBorder = canvas.getBoundingClientRect();
    overlay.style.left = canvasBorder.left +'px';
    overlay.style.top = canvasBorder.top +'px';
    overlay.style.right = canvasBorder.right +'px';
    overlay.style.bottom = canvasBorder.bottom +'px';
}
/**
 * Detects the type of device the game is being accessed from.
 * @returns {string} The type of device detected (Mobile, Tablet, or Desktop).
 */
function getDeviceType(){
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
function checkLandscape(){
    return window.innerWidth > window.innerHeight
}
/**
 * Sets up initial safe storage for game data.
 */
function setSaveSpace(){
    let firstSave = () =>{
        let keyFound = true;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key == 'HighScore'){
                keyFound = false;
            }
        }
        return keyFound;
    }
    if (firstSave){
        let HighScoreProto = [testScore1, testScore2, testScore3, testScore4, testScore5];
        let HighScoreProtoAsJSON = JSON.stringify(HighScoreProto)
        localStorage.setItem('HighScore', HighScoreProtoAsJSON)
    }
}
