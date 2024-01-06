const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    reuired: true,
    min: 0,
  },
  description: {
    type: String,
    reuired: true,
  },
  stock: {
    type: Number,
    default: 0,
    min: 0,
  },
  timestamps: true,
});

const Product = mongoose.mmodel('Product', productSchema);

module.exports = Product;
