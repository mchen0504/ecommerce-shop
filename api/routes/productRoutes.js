const router = require("express").Router();
const {
  getProductById,
  getAllProducts,
} = require("../controllers/productController");

// GET PRODUCT
router.get("/:id", getProductById);

// GET ALL PRODUCTS or PRODUCTS OF A CATEGORY
router.get("/", getAllProducts);

module.exports = router;
