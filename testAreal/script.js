let testFunktion = () =>{
    for (let i = 0; i < 10; i++) {
        if(i == 1){
            console.log(`${i} Schaf`);
            
        }else{
            console.log(`${i} Schafe`);
        }
        
    }
}
let testFunktion2 = () =>{
    for (let i = 0; i < 10; i++) {
        if(i == 1){
            console.log(`${i} Ziege`);
            
        }else{
            console.log(`${i} Ziegen`);
        }
        
    }
}
let testFunktion3 = () =>{
    for (let i = 0; i < 10; i++) {
        if(i == 1){
            console.log(`${i} Wildschwein`);
            
        }else{
            console.log(`${i} Wildschweine`);
        }
        
    }
}

let array = [
    testFunktion(),
    testFunktion2(),
    testFunktion3(),
    
]


// array[0]