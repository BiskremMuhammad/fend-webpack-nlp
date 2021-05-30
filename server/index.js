const dotenv = require("dotenv");
var path = require("path");
const express = require("express");
const axios = require("axios");
dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/sentiment", async (req, res) => {
  const requestOptions = {
    method: "post",
    url: `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${req.body.name}&lang=en`,
    headers: { "Content-Type": "multipart/form-data" },
  };

  try {
    const result = await axios(requestOptions);
    const { agreement, subjectivity, confidence, irony } = result.data;
    const message = `Analysis results: Agreement: ${agreement}, Subjectivity: ${subjectivity}, Confidence: ${confidence}, Irony: ${irony}`;
    res.send({
      success: true,
      message,
    });
  } catch (err) {
    console.log("meaning cloud have some trouble: ", err);
    res.status(500).send({ error: true });
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
