const express = require("express");
const connectDB = require("../connection/database");
const User = require("../models/user");

const app = express();

app.use(express.json());

app.get("/profile", async (req, res) => {
  const userMailId = req.body.emailId;
  try {
    const users = await User.find({ emailId: userMailId });
    if (users.length) {
      res.send(users);
    } else {
      res.status(404).send("User Not Found");
    }
  } catch (err) {
    res.send(err);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

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
