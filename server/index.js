const express = require("express");

const server = new express();

server.get("/", function (req, res) {
  res.send("Hello World!");
});

server.listen(8080, () => {
  console.log("server is running at: http://localhost:8080");
});
