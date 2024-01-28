const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/html/test.html"));
});

app.get("/json", (req, res) => {
  res.json({
    result: "My name is Vignesh Babu Rajendran!"
  });
});

app.get("/text", (req, res) => {
  res.send('{"result": "My name is Vignesh Babu Rajendran!"}');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});