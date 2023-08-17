const addMovieButton = document.getElementById("add-movie-btn");
const movies = [];
const addMovieButtonHandler = () => {
  getUserInput();
};

const getUserInput = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  const newMovie = {
    info: {
      title,
      [extraName]: [extraValue],
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log("movies:", movies);
  renderMovie();
};

const renderMovie = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.style.display = "none";
  } else if (movies.length !== 0) {
    movieList.style.display = "block";
  }

  movies.forEach((movie) => {
    const newMovieLi = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text += `${key}:${movie.info[key]}`;
      }
    }
    movieList.textContent = text;
    movieList.append(newMovieLi);
  });
};

addMovieButton.addEventListener("click", addMovieButtonHandler);
