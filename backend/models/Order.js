const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const orderSchema = mongoose.Schema(
  {
    orderedBy: {
      type: ObjectId,
      ref: "user",
    },
    orderItems: [
      {
        qty: { type: Number, required: true },
        product: {
          type: ObjectId,
          required: true,
          ref: "product",
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = Order = mongoose.model("order", orderSchema);
