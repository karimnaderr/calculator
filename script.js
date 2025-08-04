const display = document.querySelector(".user-display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operators");
const result = document.querySelector("#equal");
let firstNumber;
let operator;
let secondNumber;
let clearDisplay = false;
let switchNumbers = false;
let total;
digits.forEach(digitbutton=>{
    digitbutton.addEventListener("click",(event)=>{
        const clickedDigit = event.target.textContent
        if(clearDisplay){
            display.textContent = clickedDigit;
            secondNumber = display.textContent;
            clearDisplay = false;
        }
        else if(display.textContent=="0"){
            display.textContent = clickedDigit;
        }
        else if(display.textContent!="0" && switchNumbers==false){
            display.textContent += clickedDigit;
            firstNumber = display.textContent;
        }else{
            display.textContent += clickedDigit;
            secondNumber = display.textContent;
        }
    });
});
operators.forEach(operatorbutton=>{
    operatorbutton.addEventListener("click",function(){
        operator = operatorbutton.textContent;
        clearDisplay = true;
        switchNumbers = !switchNumbers;
    })
});

result.addEventListener("click",function(){
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    total = operate(firstNumber,secondNumber,operator);
    display.textContent = total;
});
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function operate(num1,num2,operator){
    let answer;
    if(operator=="+"){
        answer = add(num1,num2);
    }
    else if(operator=="-"){
        answer = subtract(num1,num2);
    }
    else if(operator == "x"){
        answer = multiply(num1,num2);
    }
    else if(operator == "÷"){
        answer = divide(num1,num2);
    }
    return answer;
}
