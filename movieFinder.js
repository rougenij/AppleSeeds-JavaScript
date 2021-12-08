//*The API we using for this project is https://www.omdbapi.com/?apikey=579127a9&t=
//TODO 1. Movie poster
//TODO 2. Movie title
//TODO 3. Genre
//TODO 4. Year
//TODO 5. Plot
//TODO 6. Director
//TODO 7. Actors
//TODO 8. Ratings of movies from imdb, rotten tomatoes and
//TODO metacritic.
//TODO (make sure that particular movie gives you all the ratings. It could be, that movie won’t give you all 3 ratings)

const inputEl = document.querySelector("input");
const searchBtnEl = document.querySelector("button");

//Creating Elements
const moviePoster = document.createElement("img");
const movieTitle = document.createElement("h1");
const movieGenre = document.createElement("h2");
const movieYear = document.createElement("h2");
const moviePlot = document.createElement("h2");
const movieDirector = document.createElement("h2");
const movieActors = document.createElement("h2");
const movieRating = document.createElement("h3");

searchBtnEl.addEventListener("click", () => {});

const fetchData = async (movieName) => {
  const fetchingData = await fetch(
    `https://www.omdbapi.com/?apikey=579127a9&t=${movieName}`
  );
};
