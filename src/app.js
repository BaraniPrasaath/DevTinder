const express = require("express");
const connectDB = require("../connection/database");

const app = express();

connectDB()
  .then(() => {
    console.log("Connected successfully yeah!!");
    app.listen(3000, () => {
      console.log("The Server is Listerning to the port 3000...");
    });
  })
  .catch((err) => console.log(err));
