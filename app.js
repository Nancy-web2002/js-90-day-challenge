let number1 = Number(prompt("Enter the number between 1-100: "));
let number2 = Number(prompt("Enter the number between 1-100: "));
let operator = prompt("+ for add,- for subtract, / for divide, * for multiply");
let result;
if(operator == "+"){
  result = number1 + number2
}else if(operator == "-"){
    result = number1 - number2
}else if(operator == "/"){
    result = number1 / number2
}else if(operator == "*"){
    result = number1 * number2
}
console.log(result);
alert("Total: " + result)