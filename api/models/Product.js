const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    categories: { type: Array },
    price: { type: mongoose.Types.Decimal128, required: true },
    quantity: { type: Number, required: true },
    src: { type: String, required: true },
    sizes: { type: Array },
    colors: { type: Array },
    detail: { type: String },
    composition: { type: String },
    care: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
