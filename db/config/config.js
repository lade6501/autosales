const mongoose = require("mongoose");
require("dotenv").config();

const conn = mongoose.connect(
  process.env.DBURI,
  () => {
    console.log("Database connected ");
    return true;
  },
  {
    useCreateIndes: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = conn;
