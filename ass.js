async function testMovieDetails() {
    let response = await fetch("https://www.omdbapi.com/?apikey=8063da67&i=tt0372784");
    let data = await response.json();
    console.log(data);
  }
  
  testMovieDetails();