const router = require("express").Router();

const verifyToken = require("./verifyToken");
const {
  createCart,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

// CREATE CART
router.post("/", createCart);

// UPDATE CART
router.put("/:id", updateCart);

// DELETE CART
router.delete("/:id", deleteCart);

module.exports = router;
