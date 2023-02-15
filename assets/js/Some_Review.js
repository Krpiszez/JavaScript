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

document.getElementById("btnRate").addEventListener("click", () => {
    const rateEl = Number (document.getElementById("txtRate").value);
    const productListEl = document.querySelectorAll("#productList li");
    
    for (let i = 0; i<productListEl.length; i++){
        let price = productListEl[i].querySelector("span");
        let numPrice = Number(price.innerHTML);
        price.innerHTML = numPrice + numPrice * rateEl / 100;
    }

})

document.getElementById("btnFactoriel").addEventListener("click", ()=>{
    let sum =1; 
    let num = prompt("Enter num to get factoriel!");
    while(num>0){
        sum*=num--;
    }
    alert(sum);
})
    let price = Number (document.getElementById("inPrice").value);
    let tax = Number (document.getElementById("inTax").value);
    let discount = Number (document.getElementById("inDiscount").value);
    const spanRes = document.getElementById("spanRes");
document.getElementById("btnCalcPrice").addEventListener("click", (price, tax, discount)=>{
    if(!price || isNaN(price) ||!tax ||isNaN(tax||!discount||isNaN(discount))) return;
    if(discount<=0) tax=0;
    if(price>1500) discount +=10;

    const totalTax = price*tax/100;
    const totalDiscount = price * discount/100;

    const result = price + totalTax - totalDiscount;
    spanRes.innerHTML = result;

})

let randomNumber = 0;

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = document.getElementById("btnStart").addEventListener("click", ()=>{
    randomNumber = generateRandomNumber(1,100);
    const btnGuess = document.getElementById("btnGuess");
    const btnStart = document.getElementById("btnStart");
    btnGuess.style.display = "inline";
    btnStart.style.display = "none";
})

document.getElementById("btnGuess").addEventListener("click", ()=>{
    const userNum = Number (document.getElementById("txtNumber").value);
    const gameNum = randomNumber;
    if (userNum == randomNumber){
        alert("You have found the number")
        btnGuess.style.display = "none";
    } else if(userNum>randomNumber){
        alert("Incorrect guess. Try a smaller number!")
    } else {
        alert("Incorrect guess. Try a bigger number!")
    }
})

