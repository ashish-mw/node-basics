const http = require("http");
const port = 8080;

function logger(req) {
  console.log(`${new Date()} - ${req.url} : ${req.method}`);
}

function getMovies(req, res) {
  const json = {
    message: "Movies",
  };
  return json;
}

function getSports(req, res) {
  const json = {
    message: "Sports",
  };
  return json;
}

const server = http.createServer(function (req, res) {
  logger(req);
  const html = "<h1>Hello world!</h1>";
  const json = {
    message: "Hello world!",
  };
  res.setHeader("Content-type", "application/json");
  // res.setHeader("Content-type", "text/html");
  let result = {};
  if (req.url == "/sports") {
    result = getSports();
  } else if (req.url == "/movies") {
    result = getMovies();
  }
  res.write(JSON.stringify(result));
  res.end();
});

console.log(`Server running on ${port}`);
server.listen(port);
