const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://imbarani2306_db_user:Csm4zPV56BNQMwmN@learningnode.llg7yoc.mongodb.net/";

const connectDB = async () => {
  await mongoose.connect(connectionString);
};

module.exports = connectDB ;
