const express = require("express");

const app = express();

app.get("/user", (req, res, next) => {
  console.log("Response 2 is Working...");
  res.send("Response 2");
  next();
});

app.get("/user", (req, res, next) => {
  console.log("Response 1 is Working...");
  res.send("Response 1");
  next();
});

app.listen(3000, () => {
  console.log("The Server is Listerning to the port 3000...");
})
