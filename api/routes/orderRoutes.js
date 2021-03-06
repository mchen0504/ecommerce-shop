const router = require("express").Router();
const verifyToken = require("../controllers/verifyToken");
const { createOrder } = require("../controllers/orderController");

router.post("/", verifyToken, createOrder);

module.exports = router;
