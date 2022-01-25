const movies = [
  {
    id: 1643102154540,
    name: "The Matrix",
  },
  {
    id: 1643102154541,
    name: "Ironman",
  },
  {
    id: 1643102154542,
    name: "The Dark Knight",
  },
];

const addMovie = (payload) => {
  const movie = {
    id: new Date().getTime(),
    name: payload.name,
  };
  movies.push(movie);
  return movie;
};

const getMovies = () => movies;

const getOneMovie = (movieId) => {
  const movie = movies.find((m) => m.id == movieId);
  return movie;
};

const deleteMovie = (movieId) => {
  const index = movies.findIndex((m) => m.id == movieId);
  if (index != -1) {
    movies.splice(index, 1);
  }
  return;
};

const updateMovie = (movieId, payload) => {
  const index = movies.findIndex((m) => m.id == movieId);
  if (index != -1) {
    movies[index]["name"] = payload.name;
  }
  return movies[index];
};

module.exports = {
  movies,
  addMovie,
  getMovies,
  getOneMovie,
  deleteMovie,
  updateMovie,
};
