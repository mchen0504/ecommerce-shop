const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    UserId: { type: String, required: true },
    products: [
      {
        ProductId: { type: Number },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Decimal128, required: true },
    address: { type: object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
