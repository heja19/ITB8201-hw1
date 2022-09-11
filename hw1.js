const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

app.post("/", jsonParser, function (req, res) {
  res.send("Tere, " + req.body.name);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
