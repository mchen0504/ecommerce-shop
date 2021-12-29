const router = require("express").Router();
const { makeStripePayment } = require("../controllers/stripeController");

router.post("/payment", makeStripePayment);

module.exports = router;
