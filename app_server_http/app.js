const http = require("http");
const port = 8080;

function logger(req) {
  console.log(`${new Date().toISOString()} - ${req.url} : ${req.method}`);
}

const server = http.createServer(function (req, res) {
  logger(req);
  const html = "<h1>Hello world!</h1>";
  const json = {
    message: "Hello world!",
  };
  res.setHeader("Content-type", "application/json");
  // res.setHeader("Content-type", "text/html");
  res.write(JSON.stringify(json));
  res.end();
});

console.log(`Server running on ${port}`);
server.listen(port);
