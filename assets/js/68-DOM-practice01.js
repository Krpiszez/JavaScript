import {students} from "../data/students.js";

const studentsTable = document.querySelector("#studentsTable tbody");



document.getElementById("btnShowLowScores").addEventListener("click", () => {
    const lastTd = studentsTable.querySelectorAll("tr td:last-child");
    console.log(lastTd);
    lastTd.forEach((td, index) => {
        if(td.innerHTML<60){
            console.log(td.innerHTML);
            studentsTable.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor = "red";
        }
    })    
})

const loadData = () => {
    let html = "";
    students.forEach((student, index)=>{
        html+=`
        <tr>
            <th scope="row">${index+1}</th>
            <td>${student.name}</td>
            <td>${student.grade}<td>
        </tr>
          `
    })
    studentsTable.innerHTML = html;
}
loadData();

