import { projects } from './project.js';

let summary = document.getElementById("summary");
let projectsContainer = document.getElementById("projectsContainer");
function renderProjects() {
    projectsContainer.innerHTML = "";
  
    for (let i = 0; i < projects.length; i++) {
      let { title, description, skills, status, day } = projects[i];
  
      let card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${title}</h3>
        <p class="day-tag">${day}</p>
        <p>${description}</p>
        <p><strong>Skills:</strong> ${skills.join(", ")}</p>
        <span class="status">${status}</span>
      `;
      projectsContainer.appendChild(card);
    }
  
    summary.innerHTML = `Total Projects Completed: ${projects.length}`;
  }
  
  renderProjects();