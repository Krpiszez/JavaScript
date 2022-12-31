import {students2} from "../data/students2.js"

const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const second = time.getSeconds();
    
    const currentTime = `${hour} : ${min} : ${second}`
    document.getElementById("digitalClock").innerHTML = currentTime;
    setInterval(() =>{
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const second = time.getSeconds();
    
    const currentTime = `${hour} : ${min} : ${second}`

    document.getElementById("digitalClock").innerHTML = currentTime;
    }, 1000)
    

const addBtn = document.getElementById("addBtn");


const stdTable = document.querySelector("#stdTable tbody");
const createList = () => {
    let html = "";
    students2.forEach((student, index )=>{
        html += `
        <tr>
                <th scope="row">${index+1}</th>
                <td>${student.name}</td>
                <td class="score">${student.grade}</td>
                <td><button class="btn btn-danger btnDelete"><i class="fa-sharp fa-solid fa-pencil"></i></button><button class="btn btn-danger btnDelete"><i class="fa-sharp fa-solid fa-trash"></i></button></td>                
              </tr>`
      
    })
    stdTable.innerHTML = html;
}
createList();

console.log(stdTable.querySelector("tr:last-child").querySelector("th").innerHTML)

addBtn.addEventListener("click", ()=>{
    const nameInput = document.getElementById("addName").value;
    const pointInput = document.getElementById("addPoint").value;
    let num = Number(stdTable.querySelector("tr:last-child").querySelector("th").innerHTML);
    stdTable.innerHTML += `
    <th scope="row">${num+1}</th>
                <td>${nameInput}</td>
                <td class="score">${pointInput}</td>
                <td><button class="btn btn-danger btnDelete"><i class="fa-sharp fa-solid fa-pencil"></i></button><button class="btn btn-danger btnDelete"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                `
                console.log(stdTable)
})

console.log(stdTable.querySelector("tr").querySelector("td").nextElementSibling)
let average = 0;
const getAverage = () => {
    //for(let i =0;)
        //let grades = Number(stdTable.querySelector("tr").querySelector("td:nth-child").nextElementSibling.innerHTML);
        //average += grades;
        console.log(average)
    
}

getAverage();