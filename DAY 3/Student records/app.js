
let students = [
    { name: "Ada", score: 85, grade: gradeCalculator(85) },
    {name:"Nancy", score: 95, grade: gradeCalculator(95) },
    { name: "Prince", score: 55, grade: gradeCalculator(55) },
    { name: "Lota", score: 60, grade: gradeCalculator(60) },
];
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
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " scored " + students[i].score + " and got a " + students[i].grade);;
  }

  let highestScore = students[0].score;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > highestScore) {
      highestScore = students[i].score;
    }
  }
  console.log(highestScore);

  let passCount = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
      passCount = passCount + 1;
    }
  }
  console.log(passCount)
