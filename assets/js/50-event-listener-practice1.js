const avgBtn = document.querySelector("#btn");

grading = () => {
    let num1 = document.querySelector("#in1").value;
    let num2 = Numberdocument.querySelector("#in2").value;
    let avg = (parseInt(num1) + parseInt(num2)) / 2;
    if (avg >=90 && avg<=100){
        alert("A");
    }else if(avg >=80 && avg<90){
        alert("B");
    }else if(avg >=70 && avg<80){
        alert("C");
    }else if(avg >=50 && avg<70){
        alert("D");
    }else {
        alert("F");
    }
};

const convertNumberToLetter = () => {

}

avgBtn.addEventListener("click", grading);