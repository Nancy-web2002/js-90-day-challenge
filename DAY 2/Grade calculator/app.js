let studentScore = Number(prompt("Enter Score of Student "));
function gradeCalculator(studentScore){
    let result;
    if(studentScore < 60){
        result= "F"
    }else if(studentScore <=69){
        result= "D"
    }else if(studentScore <=79){
        result= "C"
}else if(studentScore <=89){
    result= "B"
}else if(studentScore >=90 ){
    result= "A"
}
    return(result);
}
let score = gradeCalculator(studentScore);
console.log(score);
alert("Grade: " + score);