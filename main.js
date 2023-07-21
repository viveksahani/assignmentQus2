const express = require("express");
const app = express();

app.get("/page1", (req, res) => {
  res.redirect(301, "/page2");
});

app.get("/page2", (req, res) => {
  res.send("Welcome to page2 !!!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
