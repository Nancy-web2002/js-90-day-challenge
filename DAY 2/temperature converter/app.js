let temperature = Number(prompt("Enter temperature value "));
let conversionType = prompt("Type C to convert Celsius to Fahrenheit, or type F to convert Fahrenheit to Celsius");
function temperatureConverter(temperature, conversionType){
    let result;
    if (conversionType == "C"){
        result = (temperature * 9/5) + 32
    }else if (conversionType == "F"){
        result = (temperature - 32) * 5/9
    } 
    return(result)
}
let converted = temperatureConverter(temperature, conversionType);
console.log(converted);
alert("converted temperature: " + converted);