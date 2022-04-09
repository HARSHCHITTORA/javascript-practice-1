let num1=8
let num2=2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL=document.getElementById("sum-el")

function add()
{   console.log("onclick add")
    sumEL.textContent="sum: "+ num1+num2;
}

function subtract()
{
    sumEL.textContent="sum: "+ (num1-num2);
}
function divide()
{
    sumEL.textContent="sum: "+ num1/num2;
}
function multiply()
{
    sumEL.textContent="sum: "+ num1*num2;
}