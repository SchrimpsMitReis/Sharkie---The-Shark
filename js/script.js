/**
 * Sets up touch event listeners for on-screen control buttons to simulate keyboard input for a game.
 */
let SmartBtnLEFT = document.getElementById('leftSmartBtn')
let SmartBtnRIGHT = document.getElementById('rightSmartBtn')
let SmartBtnUP = document.getElementById('upSmartBtn')
let SmartBtnDOWN = document.getElementById('downSmartBtn')
let SmartBtnA = document.getElementById('aSmartBtn')
let SmartBtnB = document.getElementById('bSmartBtn')
let SmartBtnZ = document.getElementById('zSmartBtn')


SmartBtnLEFT.addEventListener('touchstart', () =>{
    keyboard.LEFT = true;
},{ passive: true })
SmartBtnRIGHT.addEventListener('touchstart', () =>{
    keyboard.RIGHT = true;
},{ passive: true })
SmartBtnUP.addEventListener('touchstart', () =>{
    keyboard.UP = true;
},{ passive: true })
SmartBtnDOWN.addEventListener('touchstart', () =>{
    keyboard.DOWN = true;
},{ passive: true })
SmartBtnA.addEventListener('touchstart', () =>{
    keyboard.SPACE = true;
},{ passive: true })
SmartBtnB.addEventListener('touchstart', () =>{
    keyboard.SECONDARY = true;
},{ passive: true })
SmartBtnDOWN.addEventListener('touchstart', () =>{
    keyboard.SHIFT = true;
},{ passive: true })
SmartBtnLEFT.addEventListener('touchend', () =>{
    keyboard.LEFT = false;
})
SmartBtnRIGHT.addEventListener('touchend', () =>{
    keyboard.RIGHT = false;
})
SmartBtnUP.addEventListener('touchend', () =>{
    keyboard.UP = false;
})
SmartBtnDOWN.addEventListener('touchend', () =>{
    keyboard.DOWN = false;
})
SmartBtnA.addEventListener('touchend', () =>{
    keyboard.SPACE = false;
})
SmartBtnB.addEventListener('touchend', () =>{
    keyboard.SECONDARY = false;
})
SmartBtnDOWN.addEventListener('touchend', () =>{
    keyboard.SHIFT = false;
})
    