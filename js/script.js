
let SmartBtnLEFT = document.getElementById('leftSmartBtn')
let SmartBtnRIGHT = document.getElementById('rightSmartBtn')
let SmartBtnUP = document.getElementById('upSmartBtn')
let SmartBtnDOWN = document.getElementById('downSmartBtn')
let SmartBtnA = document.getElementById('aSmartBtn')
let SmartBtnB = document.getElementById('bSmartBtn')
let SmartBtnZ = document.getElementById('zSmartBtn')

SmartBtnLEFT.addEventListener('touchstart', (event) =>{
    console.log("Links");
    keyboard.LEFT = true;
})
SmartBtnRIGHT.addEventListener('touchstart', (event) =>{
    console.log("Rechts");
    keyboard.RIGHT = true;
})
SmartBtnUP.addEventListener('touchstart', (event) =>{
    console.log("Oben");
    keyboard.UP = true;
})
SmartBtnDOWN.addEventListener('touchstart', (event) =>{
    console.log("Unten");
    keyboard.DOWN = true;
})
SmartBtnA.addEventListener('touchstart', (event) =>{
    console.log("Rechts");
    keyboard.SPACE = true;
})
SmartBtnB.addEventListener('touchstart', (event) =>{
    console.log("Oben");
    keyboard.SECONDARY = true;
})
SmartBtnDOWN.addEventListener('touchstart', (event) =>{
    console.log("Unten");
    keyboard.SHIFT = true;
})

SmartBtnLEFT.addEventListener('touchend', (event) =>{
    console.log("Links");
    keyboard.LEFT = false;
})
SmartBtnRIGHT.addEventListener('touchend', (event) =>{
    console.log("Rechts");
    keyboard.RIGHT = false;
})
SmartBtnUP.addEventListener('touchend', (event) =>{
    console.log("Oben");
    keyboard.UP = false;
})
SmartBtnDOWN.addEventListener('touchend', (event) =>{
    console.log("Unten");
    keyboard.DOWN = false;
})
SmartBtnA.addEventListener('touchend', (event) =>{
    console.log("Rechts");
    keyboard.SPACE = false;
})
SmartBtnB.addEventListener('touchend', (event) =>{
    console.log("Oben");
    keyboard.SECONDARY = false;
})
SmartBtnDOWN.addEventListener('touchend', (event) =>{
    console.log("Unten");
    keyboard.SHIFT = false;
})
    