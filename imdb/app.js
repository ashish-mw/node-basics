const movies = require("./movies");

// crud
// ----------
// create
const movie = {
  id: 104,
  name: "Spiderman",
};
movies.push(movie);
console.log("Added ", movie.name);
console.log("Movies");
console.log(movies);

console.log("========================");
// read
const id = 101;
const movieFound = movies.find(function (m) {
  return m.id === id;
});
if (!movieFound) {
  console.log(`Movie ${id} not found`);
} else {
  console.log("Movie found ", movieFound);
}

// update
const updateId = 110;
const movieName = "The Dark Knight returns";
const movieIndex = movies.findIndex((m) => m.id === updateId);
if (movieIndex == -1) {
  console.log(`Movie ${updateId} not found`);
} else {
  movies[movieIndex]["name"] = movieName;
}
console.log(movies);

// delete
const deleteId = 102;
const movieIndexToDel = movies.findIndex((m) => m.id === deleteId);
movies.splice(movieIndexToDel, 1);
console.log(movies);
