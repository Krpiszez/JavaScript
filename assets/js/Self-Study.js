let sum = 0;
document.getElementById("addBtn").addEventListener("click", ()=>{
    const text = document.getElementById("answers")
    const num = Number(document.getElementById("addInp").value);
    sum += num;
    text.innerHTML = `The Result is : ${sum}`;
    alert(sum)
})

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

    document.getElementById("calculatorBtn").addEventListener("click", ()=>{
        let operator = document.getElementById("operatorCalc").value;
        let num1 = Number(document.getElementById("num1Calc").value);
        let num2 = Number(document.getElementById("num2Calc").value);
        switch(operator){
            case "+" : 
            document.getElementById("answerCalc").innerHTML = num1+num2;
            break;
            case "-" : 
            document.getElementById("answerCalc").innerHTML = num1-num2;
            break;
            case "*" : 
            document.getElementById("answerCalc").innerHTML = num1*num2;
            break;
            case "/" : 
            document.getElementById("answerCalc").innerHTML = Math.(num1/num2);
            break;
        }
    })