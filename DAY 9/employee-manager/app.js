let name = document.getElementById("name");
let department = document.getElementById("department");
let salary = document.getElementById("salary");
let searchInput = document.getElementById("search");
let add = document.getElementById("addBtn");
let table = document.getElementById("employeeTable");
let body = document.getElementById("employeeBody");
let stats = document.getElementById("stats");
let employees = JSON.parse(localStorage.getItem("employees")) || [];
add.addEventListener("click", function() {
    let newEmployee = {
        name: name.value,
        department: department.value,
        salary: Number(salary.value)
      };
  employees.push(newEmployee);
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
  name.value = "";
department.value = "";
salary.value = "";
});
function renderEmployees() {
    let searchTerm = searchInput.value.trim().toLowerCase();
  
    let filtered = employees.filter(employee => {
      let matchesSearch = employee.name.toLowerCase().includes(searchTerm);
      return matchesSearch ;
    });
  
    body.innerHTML = "";
    filtered.forEach(employee => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${employee.name}</td><td>${employee.department}</td><td>${employee.salary}</td>`;
      body.appendChild(row);
    });
  
    let total = employees.reduce((sum, employee) => sum + employee.salary, 0);
    let highest = employees.length > 0 ? Math.max(...employees.map(employee => employee.salary)) : 0;
  
    stats.innerHTML = `Total: ${total} | Highest: ${highest}`;
  }
  searchInput.addEventListener("input", renderEmployees);
  renderEmployees()

