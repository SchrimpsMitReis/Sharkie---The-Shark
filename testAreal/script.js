class test{
    constructor(){
        console.log("Bin geladen");
        this.testInterval = null
    }
    testMethode(){
        this.testInterval = setInterval(() => {
            console.log("Methode läuft");
        }, 1000);
        
    }
    stopInterval(){
        clearInterval(this.testInterval)
    }
}

let testVariable = new test() // Bin geladen
testVariable.testMethode()
testVariable.stopInterval()
testVariable = null