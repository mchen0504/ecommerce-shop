const router = require("express").Router();
const User = require("../models/User");
// password encryption
const CryptoJS = require("crypto-js");
// login web token
const jwt = require("jsonwebtoken");

// SIGN UP
router.post("/signup", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    // saving to db
    const savedUser = await newUser.save();
    // successfully added
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("User does not exist!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const storedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    storedPassword != req.body.password &&
      res.status(401).json("Incorrect password!");

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    // send everything but password to the client
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
