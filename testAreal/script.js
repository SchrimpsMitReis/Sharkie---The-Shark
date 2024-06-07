const inputName = document.getElementById('textInput')
const inputAge = document.getElementById('ageInput')
const submitBtn = document.getElementById('submit')
const table = document.getElementById('table')
const BASE_URL = "https://modul-9---apis-default-rtdb.europe-west1.firebasedatabase.app/"
let entrys = 0
async function loadData(path="") {
    let response = await fetch(BASE_URL+ path +".json")
    let responseAsJSON = await response.json()
    entrys = responseAsJSON.length
    return responseAsJSON;
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

// putData("/stoll", "data()")

async function sendNames(){
    try{await loadData()}catch(e){console.log(e);}
    let name = inputName.value;   
    let age = inputAge.value;   
    let student = {
        "name" : name,
        "age" : `${age}`
    }
    await putData(`${entrys}`, student)
    await printList()
}

async function printList(){
    let fetchedData = await loadData()
    table.innerHTML = ""
    for (let i = 0; i < fetchedData.length; i++) {
        const student = fetchedData[`${i}`];
        table.innerHTML += /*html*/`
            <tr class="student">
                <td>Name: ${student['name']}</td>
                <td>Alter: ${student['age']}</td>
                <td><button onclick="deleteStudent(${i})">D</button></td>
            </tr>

        `
        console.log("Name: ", student['name'], "||" , "Alter: ", student['age'])
    }
}

async function deleteStudent(i){
    try{await loadData()}catch(e){console.log(e);}
    await deleteData(`${i}`)
    await printList()    
}
