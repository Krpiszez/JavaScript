import { students } from "../data/students.js";

const tblStudents = document.querySelector("#tblStudents tbody")

const getSum = (a,b)=>{
    return a+b;
}

alert(getSum(3,6));

const loadData = ()=>{
    let html = "";
    students.forEach((student, index)=>{
        html += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${student.name}</td>
            <td class="score">${student.grade}</td>
            <td><button class="btn btn-danger btnDelete"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
            
          </tr>
        `
    })
    
    tblStudents.innerHTML = html;
}
loadData();

/* Events */

document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    const lastTd = tblStudents.querySelectorAll("tr td.score")
    console.log(lastTd)
    lastTd.forEach((td, index)=>{
        if(td.innerHTML<60){
            //td.style.backgroundColor = "red"
            tblStudents.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor = "red";
        }
    })
})

document.querySelectorAll(".btnDelete").forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        e.stopPropagation();
        const name = e.target.closest("tr").querySelector("td").innerHTML;
        confirm(`Are you sure to delete ${name} ?`) ? e.target.closest("tr").remove() : true; 
    })
})

tblStudents.querySelectorAll("tr").forEach((tr) =>{
    tr.addEventListener("click", (e)=>{
        e.target.closest("tr").classList.toggle("table-info");
    })
})





/* Events */