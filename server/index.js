const dotenv = require("dotenv");
var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/sentiment", (request, response) => {
  console.log("rewuest body: ", request.body.name);
  response.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
