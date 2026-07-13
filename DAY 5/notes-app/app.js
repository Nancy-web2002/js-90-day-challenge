let messageInput = document.getElementById("message");
let addNote = document.getElementById("addBtn");
let notesList = document.getElementById("notesList");
let notes = JSON.parse(localStorage.getItem("notes")) || [];

addNote.addEventListener("click", function() {
  let noteText = messageInput.value;

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();

  messageInput.value = "";
});
function renderNotes() {
    notesList.innerHTML = ""; 
  
    for (let i = 0; i < notes.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = notes[i]+ " "; 
  
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
  
      deleteBtn.addEventListener("click", function() {
        notes.splice(i, 1); 
        localStorage.setItem("notes",JSON.stringify(notes)); 
          renderNotes(); 
      });
  
      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    }
  }
  renderNotes();