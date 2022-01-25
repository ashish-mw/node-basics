const fs = require("fs");

fs.readFile("content.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Error in reading file");
    console.log(error);
  } else {
    console.log("===== Content =======");
    console.log(data);
  }
});
