const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum:["detergent","papier","coucheE", "coucheF", "coucheA"]
  },
  price: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  orders:{
    type:ObjectId,
    ref:'order'
  }
});

module.exports = Product = mongoose.model("product", productSchema);
