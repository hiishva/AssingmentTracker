var http = require("http");

const app = require("./app");

http.createServer(app).listen(3001, function () {
  console.log(`App running on port 3001...`);
});
