let inputDisplay = document.getElementById("taskInput");
let addBtn = document.getElementById("add");
let listDisplay = document.getElementById("taskList");
addBtn.addEventListener("click", function() {
    let taskText = inputDisplay.value;
  
    let li = document.createElement("li");
    li.innerHTML = taskText + " ";
  
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
      });
    li.appendChild(deleteBtn);

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
    });
    li.appendChild(completeBtn);
  
    listDisplay.appendChild(li);
    inputDisplay.value = "";
  });