let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let yearInput = document.getElementById("year");
let button = document.getElementById("addBtn");
let table = document.getElementById("bookTable");
let body = document.getElementById("bookBody");
let result = document.getElementById("resultsContainer")
let books = JSON.parse(localStorage.getItem("books")) || [];
button.addEventListener("click", function() {
    let book = {
        title: titleInput.value,
        author:authorInput.value,
        year: Number(yearInput.value)
      };
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
  titleInput.value = "";
authorInput.value = "";
yearInput.value = "";
});  
function performSearch(){
    let query = searchInput.value.trim().toLowerCase();
    result.innerHTML = "";

    if (query == ""){
       result.innerHTML = "<p>Please enter a search term.</p>";
       return;
    }

    for (let i = 0; i < books.length; i++) {
        let { title, author, year } = books[i];
        if (title.toLowerCase().includes(query)) {
            result.innerHTML += "<p>" + title + " by " + author + " (" + year + ")</p>";
        }
    }
}
searchBtn.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", function(event){
    if(event.key == "Enter"){performSearch();}
});

function renderBooks() {
    body.innerHTML = "";
  
    for (let i = 0; i < books.length; i++) {
        let row = document.createElement("tr");
        let{title,  author, year} =books[i];
        row.innerHTML = "<td>" + title + "</td><td>" + author + "</td><td>" + year + "</td>";
        body.appendChild(row);

        let removeBtn = document.createElement("button");
      removeBtn.innerHTML = "Remove";
  
      removeBtn.addEventListener("click", function() {
        books.splice(i, 1); 
        localStorage.setItem("books",JSON.stringify(books)); 
          renderBooks(); 
      });
  
      row.appendChild(removeBtn);
      body.appendChild(row);
    }
  }
  renderBooks();
    