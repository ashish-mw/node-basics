const express = require("express");
const app = express();

const port = 8080;
const db = require("./db");

app.use(express.json());

// get all movies
app.get("/movies", (req, res) => {
  const movies = db.getMovies();
  return res.send(movies);
});

// get one movie
app.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = db.getOneMovie(movieId);
  if (!movie) {
    return res.status(404).send({
      message: `Movie ${movieId} not found`,
    });
  }
  return res.send(movie);
});

// adding a movie
app.post("/movies", (req, res) => {
  const movie = db.addMovie(req.body);
  return res.send(movie);
});

// deleting a movie
app.delete("/movies/:id", (req, res) => {
  db.deleteMovie(req.params.id);
  return res.send({
    message: "Movie deleted",
  });
});

// updating a movie
app.put("/movies/:id", (req, res) => {
  const movie = db.updateMovie(req.params.id, req.body);
  return res.send(movie);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    console.log(`Cannot running on ${port}`);
    process.exit(1);
  }
  console.log(`Server running on ${port}`);
});
