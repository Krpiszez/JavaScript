// const avgBtn = document.querySelector("#btn");

// grading = () => {
//     let num1 = document.querySelector("#in1").value;
//     let num2 = document.querySelector("#in2").value;
//     let avg = (parseInt(num1) + parseInt(num2)) / 2;
//     if (avg >=90 && avg<=100){
//         alert("A");
//     }else if(avg >=80 && avg<90){
//         alert("B");
//     }else if(avg >=70 && avg<80){
//         alert("C");
//     }else if(avg >=50 && avg<70){
//         alert("D");
//     }else {
//         alert("F");
//     }
// };

// const convertNumberToLetter = () => {

// }

// avgBtn.addEventListener("click", grading);

const btnAverage = document.querySelector("#btnAverage");

const findAverage = () => {
    const grade1 = document.querySelector("#grade1").value;
    const grade2 = document.querySelector("#grade2").value;

    const average = getAverage(grade1, grade2);
    const letter = convertNumberToLetter(average);
    alert(letter);
}

btnAverage.addEventListener("click", findAverage);

// isNaN(variable);

// parseInt(), parseFloat()
// Number(x) convert x to a numerical value, if its empty 0;
// parseFloat(x) converts to a decimal value, if its empty spaces returned to NaN

const getAverage = (num1, num2) => {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) return;
    const average = (parseFloat(num1) + parseFloat(num2)) / 2;
    return average;
};


const convertNumberToLetter = (num) => {
    if (isNaN(parseFloat(num))) return;
    let letter;

    if (num >= 90 && num <= 100) letter = "A"
    else if (num >= 80 && num < 90) letter = "B"        
    else if (num >= 70 && num < 80) letter = "C"
    else if (num >= 50 && num < 70) letter = "D"
    else letter = "F"
    return letter;
};