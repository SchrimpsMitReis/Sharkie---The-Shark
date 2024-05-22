
let SmartBtnLEFT = document.getElementById('leftSmartBtn')
let SmartBtnRIGHT = document.getElementById('rightSmartBtn')
let SmartBtnUP = document.getElementById('upSmartBtn')
let SmartBtnDOWN = document.getElementById('downSmartBtn')
let SmartBtnA = document.getElementById('aSmartBtn')
let SmartBtnB = document.getElementById('bSmartBtn')
let SmartBtnZ = document.getElementById('zSmartBtn')

SmartBtnLEFT.addEventListener('touchstart', () =>{
    keyboard.LEFT = true;
})
SmartBtnRIGHT.addEventListener('touchstart', () =>{
    keyboard.RIGHT = true;
})
SmartBtnUP.addEventListener('touchstart', () =>{
    keyboard.UP = true;
})
SmartBtnDOWN.addEventListener('touchstart', () =>{
    keyboard.DOWN = true;
})
SmartBtnA.addEventListener('touchstart', () =>{
    keyboard.SPACE = true;
})
SmartBtnB.addEventListener('touchstart', () =>{
    keyboard.SECONDARY = true;
})
SmartBtnDOWN.addEventListener('touchstart', () =>{
    keyboard.SHIFT = true;
})

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
    