let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let resultsList = document.getElementById("resultsList");
let movieDetails = document.getElementById("movieDetails");
async function searchMovies(query) {
    resultsList.innerHTML = "";
    movieDetails.innerHTML = "";
  
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=8063da67&s=" + query);
      let data = await response.json();
  
      if (data.Response === "False") {
        resultsList.innerHTML = "<p>No movies found.</p>";
        return;
      }
  
      for (let i = 0; i < data.Search.length; i++) {
        let { Title, Year, imdbID } = data.Search[i];
        let item = document.createElement("p");
        item.innerHTML = Title + " (" + Year + ")";
        item.style.cursor = "pointer";
        item.addEventListener("click", function() {
          getMovieDetails(imdbID);
        });
        resultsList.appendChild(item);
      }
    } catch (error) {
      resultsList.innerHTML = "<p>Something went wrong. Please try again.</p>";
    }
  }

function performSearch(){
    let query = searchInput.value.trim();
    movieDetails.innerHTML = "";

    if (query == ""){
       movieDetails.innerHTML = "<p>Type a movie title.</p>";
       return;
    }
    searchMovies(query);
}
searchBtn.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", function(event){
    if(event.key == "Enter"){performSearch();}
});;

async function getMovieDetails(imdbID) {
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=8063da67&i=" + imdbID);
      let data = await response.json();
      
      movieDetails.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <img src="${data.Poster}" alt="${data.Title} poster">
        <p>Rating: ${data.imdbRating}</p>
      `;
    } catch (error) {
      movieDetails.innerHTML = "<p>Could not load movie details.</p>";
    }
  }