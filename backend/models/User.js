const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  orders:[ {
    type: ObjectId,
    ref: "order",
  }],
});

module.exports = User = mongoose.model("user", userSchema);
