const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    categories: { type: Array },
    price: { type: Decimal128, required: true },
    quantity: { type: Number, required: true },
    src: { type: String, required: true },
    sizes: { type: Array },
    colors: { type: Array },
    detail: { type: String, required: true },
    composition: { type: String, required: true },
    care: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
