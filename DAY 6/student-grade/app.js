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

let students = [
    { name: "Ada", score: 85, grade: gradeCalculator(85) },
    { name: "Nancy", score: 95, grade: gradeCalculator(95) },
    { name: "Prince", score: 55, grade: gradeCalculator(55) },
    { name: "Lota", score: 60, grade: gradeCalculator(60) },
];
let table = document.getElementById("studentsTable");
let body = document.getElementById("studentsBody");
let p = document.getElementById("average");
function renderStudents() {
    body.innerHTML = "";
    let total = 0;
  
    for (let i = 0; i < students.length; i++) {
        let { name, score, grade } = students[i];

        let row = document.createElement("tr");
        row.innerHTML = "<td>" + name + "</td><td>" + score + "</td><td>" + grade + "</td>";
        body.appendChild(row);
        
        total = total + students[i].score;
    }
  
    let average = total / students.length;
    p.innerHTML = "Average Score: " + average;
  }
  renderStudents();