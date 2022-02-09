const mongoose = require("mongoose");

const conn = mongoose.connect(
  "mongodb://127.0.0.1:27017/automobiles",
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
