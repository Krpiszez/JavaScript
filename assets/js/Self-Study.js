const firstQBtn = document.querySelector("#firstQBtn");



calculateSum = () => {
let firstNum = document.querySelector("#firstQFirstNum").value;
let secondNum = document.querySelector("#firstQSecondNum").value;
let sum = parseInt(firstNum) + parseInt(secondNum);
document.querySelector("#firstQAnswer").innerText = `The Sum of your values is: ${sum}`;
return sum;

}

firstQBtn.addEventListener("click", calculateSum);

