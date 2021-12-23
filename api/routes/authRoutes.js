const router = require("express").Router();
const { userSignUp, userLogin } = require("../controllers/authController");

// SIGN UP
router.post("/signup", userSignUp);

// LOGIN
router.post("/login", userLogin);

module.exports = router;
