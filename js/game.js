let canvas;
let world;
let keyboard = new Keyboard()
const body = document.getElementById('body')
let smartOverlay;

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    smartOverlay = document.getElementById('smartOverlay')
    arrangeSmartOverlay(canvas)
    document.addEventListener('mousemove', (event)=>{
        // event.preventDefault()
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
        // Editor Tools :D
    
    })
    document.addEventListener('click', async ()=>{
        keyboard.MOUSEBTN = true;
        setTimeout(() => {
            keyboard.MOUSEBTN = false;        
        }, 3);
    
    })
    
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
}
function arrangeSmartOverlay(canvas){
    let canvasBorder = canvas.getBoundingClientRect();
    console.log(canvasBorder);
    smartOverlay.style.left = canvasBorder.left +'px';
    smartOverlay.style.top = canvasBorder.top +'px';
    smartOverlay.style.right = canvasBorder.right +'px';
    smartOverlay.style.bottom = canvasBorder.bottom +'px';

}
