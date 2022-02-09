const mongoose = require("mongoose");

const Vehicle = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", Vehicle);
