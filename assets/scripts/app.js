const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

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
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  console.log("movies:", movies);
  renderMovies();
};

const renderMovies = (filterValue = "") => {
  const listRoot = document.getElementById("movie-list");

  if (movies.length === 0) {
    listRoot.style.display = "none";
  } else if (movies.length !== 0) {
    listRoot.style.display = "block";
  }

  // Eliminate duplicates when adding a new movie, placeholder quickfix
  listRoot.innerHTML = "";

  const filteredMovie = !filterValue
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filterValue);
      });

  filteredMovie.forEach((movie) => {
    const newMovieLi = document.createElement("li");

    let { getFormattedTitle } = movie;
    let text = getFormattedTitle.call(movie) + " - ";

    const { info } = movie;
    for (const key in info) {
      if (key !== "title") {
        text += `${key} : ${info[key]}`;
      }
    }
    newMovieLi.textContent = text;
    listRoot.append(newMovieLi);
  });
};

const searchMovieHandler = () => {
  const filterTitle = document.getElementById("filter-title").value;
  renderMovies(filterTitle);
};

addMovieButton.addEventListener("click", addMovieButtonHandler);
searchButton.addEventListener("click", searchMovieHandler);
