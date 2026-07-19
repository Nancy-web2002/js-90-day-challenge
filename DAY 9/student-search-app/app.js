let name = document.getElementById("name");
let score = document.getElementById("score");
let add = document.getElementById("addBtn");
let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("resultsContainer");
let category = document.getElementById("category");
let table = document.getElementById("studentTable");
let body = document.getElementById("studentBody");
let stats = document.getElementById("stats");
let students = JSON.parse(localStorage.getItem("students")) || [];
add.addEventListener("click", function() {
    let newStudent = {
        name: name.value,
        score: Number(score.value),
        category: category.value
      };
  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
  name.value = "";
score.value = "";
category.value = "";
});
function renderStudents() {
    searchInput.addEventListener("input", renderStudents);
category.addEventListener("change", renderStudents);
    let searchTerm = searchInput.value.trim().toLowerCase();
    let selectedFilter = category.value;
  
    let filtered = students.filter(student => {
      let matchesSearch = student.name.toLowerCase().includes(searchTerm);
      let matchesCategory = selectedFilter === "" || 
        (selectedFilter === "Pass" && student.score >= 60) ||
        (selectedFilter === "Fail" && student.score < 60);
      return matchesSearch && matchesCategory;
    });
  
    body.innerHTML = "";
    filtered.forEach(student => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${student.name}</td><td>${student.score}</td>`;
      body.appendChild(row);
    });
  
    let total = students.reduce((sum, student) => sum + student.score, 0);
    let average = students.length > 0 ? (total / students.length).toFixed(2) : 0;
    let highest = students.length > 0 ? Math.max(...students.map(student => student.score)) : 0;
  
    stats.innerHTML = `Average: ${average} | Highest: ${highest}`;
  }

