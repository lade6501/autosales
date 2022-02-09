const mongoose = require("mongoose");

const Sales = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name should be atleast 3 character long"],
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^([6-9]){1}([0-9]){9}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: true,
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Sales", Sales);
