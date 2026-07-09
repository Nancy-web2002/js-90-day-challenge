let movieCollection = [
    { title: "Every year after", genre: "Romance", rating: 6 },
    { title: "Zatima", genre: "RomCom", rating: 10 },
    { title: "Fake Profile", genre: "Romance/Crime", rating: 8.5 },
    { title: "Five feet Apart", genre: "Romance/tragedy", rating: 9.5 },
];
for(let i =0; i < movieCollection.length; i++){
    console.log(movieCollection[i].title + " is a " + movieCollection[i].genre + " movie," + " i'll rate: " + movieCollection[i].rating)
}

let highestMovieRated = movieCollection[0].rating;
for (let i = 0; i < movieCollection.length; i++) {
    if (movieCollection[i].rating > highestMovieRated) {
      highestMovieRated = movieCollection[i].rating;
    }
  }
  console.log("highest movie rated is: " + highestMovieRated);

  let searchGenre = "Romance";
  for (let i = 0; i < movieCollection.length; i++) {
    if (movieCollection[i].genre.includes(searchGenre)) {
      console.log(movieCollection[i].title);
    }
  }