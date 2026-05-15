const express = require("express");
const connectDB = require("../connection/database");
const User = require("../models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Siggned in successfully");
  } catch {
    res.status(400).send("Error saving the user");
  }
});

connectDB()
  .then(() => {
    console.log("Connected successfully yeah!!");
    app.listen(3000, () => {
      console.log("The Server is Listerning to the port 3000...");
    });
  })
  .catch((err) => console.log(err));
