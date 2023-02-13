const sayHello = () => {
    const name1El = document.querySelector("#txtName");
    const text1El = document.querySelector("#welcome");
    text1El.innerHTML = `Hi ${name1El.value}`;
}

const setLiveText = () => {
    const name1El = document.querySelector("#txtName");
    const text1El = document.querySelector("#welcome2");
    text1El.innerHTML = `Hi ${name1El.value}`;
}

const calculate = () => {
    let priceEl = Number (document.querySelector("#priceInput").value);
    if (priceEl > 500){
        priceEl *= 1.1;
    }
    const text1El = document.querySelector("#welcome2");
    text1El.innerHTML = `Result: ${priceEl}`;
}
let mode = "light";
const bodyEl = document.querySelector("body");

const setMode = () => {
    if(mode == "light"){
        bodyEl.classList.remove("light");
        bodyEl.classList.add("dark");
        mode = "dark";
    }else{
        bodyEl.classList.remove("dark");
        bodyEl.classList.add("light");
        mode = "light";
    }
}

let showSalary = document.querySelector("#showSalary");
 document.getElementById("calculateBtn").addEventListener("click", () => {
    let status = document.querySelector("input[name='status']:checked").value;
    let salary = Number (document.getElementById("txtSalary").value);
    salary = status == "retired" ? salary*0.9 : salary *0.95;
    showSalary.innerHTML = `New Salary: ${salary}.`;
})

