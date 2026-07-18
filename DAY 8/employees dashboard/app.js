import {employees} from './employees.js';

let searchInput= document.getElementById("search");
let searchBtn = document.getElementById("searchBtn")
let result = document.getElementById("resultsContainer");
let select =  document.getElementById("category");
let p = document.getElementById("employeeCount");
let div = document.getElementById("employeeCards");
function renderEmployees() {
    div.innerHTML = "";
    let count = 0;
    let searchTerm = searchInput.value.trim().toLowerCase();
    let selectedDept = select.value;
  
    for (let i = 0; i < employees.length; i++) {
        let { name, department, role } = employees[i];

        let matchesSearch = name.toLowerCase().includes(searchTerm);
        let matchesDept = selectedDept === "" || department === selectedDept;
        
            if (matchesSearch && matchesDept) {
                let card = document.createElement("div");
                card.innerHTML = `<h3>${name}</h3><p>${department}</p><p>${role}</p>`;
                div.appendChild(card);
                count++;
              }
        
    }
  
    p.innerHTML = "Showing " + count + " employees";
  }
  searchInput.addEventListener("input", renderEmployees);
select.addEventListener("change", renderEmployees);
renderEmployees();