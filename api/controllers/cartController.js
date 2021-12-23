const Cart = require("../models/Cart");

const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCart = async (req, res) => {
  try {
    const savedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been successfully deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

// const getCart = async (req, res) => {
//     try {
//       const product = await Product.findById(req.params.id);
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };

module.exports = { createCart, updateCart, deleteCart };
