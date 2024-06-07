const BASE_URL = "https://modul-9---apis-default-rtdb.europe-west1.firebasedatabase.app/"
console.clear()
async function loadData(path="") {
    let response = await fetch(BASE_URL+ path +".json")
    let responseAsJSON = await response.json()
    console.log(responseAsJSON);
}
async function postData(path="", data={}){
    let response = await fetch(BASE_URL+ path +".json",{
        method: "POST",
        header: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    let responseAsJSON = await response.json()
    console.log(responseAsJSON);
}
async function putData(path="", data={}){
    let response = await fetch(BASE_URL+ path +".json",{
        method: "PUT",
        header: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    let responseAsJSON = await response.json()
    console.log(responseAsJSON);
}
async function deleteData(path=""){
    let response = await fetch(BASE_URL+ path +".json",{
        method: "DELETE",
    })
    let responseAsJSON = await response.json()
    console.log(responseAsJSON);
}
// loadData("/Kinder")
let student ={
    "name": "Stefan",
}
let data = async ()=>{
    let oldData = await loadData();
    if (oldData==undefined){
        oldData = ""
    }
    let studentsAsJson = JSON.stringify(student)
    console.log(oldData +","+studentsAsJson)
    return (oldData +","+studentsAsJson)
};

putData("/stoll", "data()")