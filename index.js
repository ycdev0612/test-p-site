const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "template"));

app.get("/", (req, res) => {
  let photos = fs.readdirSync(path.join(__dirname, "assets/images"));

  photos = photos.map((item) => `images/${item}`);

  res.render("index", {
    photos,
  });
});

app.listen(5000, () => {
  console.log(`App start at PORT 5000`);
});
