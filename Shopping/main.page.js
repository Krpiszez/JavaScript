const btn = document.getElementById("submitBtn");

let balance = 1000;





const text = document.getElementById("afterTransactionMessage");

const funct = () => {
    const amount = Number(document.getElementById("atmInput").value);
    const choice = document.getElementById("menu").appendChild("option");
    console.log(choice.value);
    balance+=amount;
    text.innerHTML = `Your balance is: ${balance}`
    
}
btn.addEventListener("click", funct);

