const express = require("express");
const app = express();
const port = 3000;
let users = require("./users.json");

//view engine
app.set("view engine", "ejs");

//asset&css
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/halaman-game", (req, res) => {
  res.render("halaman-game");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((e) => e.id === +req.params.id);
  res.json(user);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
