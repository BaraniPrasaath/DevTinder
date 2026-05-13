const express = require("express");

const app = express();

const { adminAuth } = require("../middlewares/adminAuth");
const { userAuth } = require("../middlewares/userAuth");

app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("User Logged in successfully");
});

app.get("/user/feed", userAuth, (req, res) => {
  res.send("Feed is sent");
});

app.get("/user/porfile", userAuth, (req, res) => {
  res.send("User profile is sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data is sent");
});

app.get("/admin/update", (req, res) => {
  res.send("User updated");
});

app.get("/admin/deleteData", (req, res) => {
  res.send("User is deleted");
});

app.get("/admin/porfile", (req, res) => {
  res.send("Admin Profile is sent");
});

app.listen(3000, () => {
  console.log("The Server is Listerning to the port 3000...");
});
