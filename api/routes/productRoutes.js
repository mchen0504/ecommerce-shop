const router = require("express").Router();
const {
  addProduct,
  updateProduct,
  getProductById,
  getAllProducts,
} = require("../controllers/productController");

// CREATE PRODUCT
// to be deleted later`````````````````````````````````
router.post("/", addProduct);

// UPDATE PRODUCT
// to be deleted later`````````````````````````````````
router.put("/:id", updateProduct);

// GET PRODUCT
router.get("/:id", getProductById);

// GET ALL PRODUCTS or PRODUCTS OF A CATEGORY
router.get("/", getAllProducts);

module.exports = router;
