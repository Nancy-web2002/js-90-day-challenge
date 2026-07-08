let billAmount = Number(prompt("Enter values between 1 - 1000"));
let tipPercentage = Number(prompt("Enter values between 1 - 100"));
function tipCalculator(billAmount, tipPercentage){
    let tipAmount= billAmount*(tipPercentage/100);
    let totalBill = billAmount + tipAmount;
    return {tip:tipAmount, total:totalBill};
}
let result = tipCalculator(billAmount,tipPercentage);
console.log(result.tip);
console.log(result.total)
alert("Tip: " + result.tip + "," + "Total: " + result.total);