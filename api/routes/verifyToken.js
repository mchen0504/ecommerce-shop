const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // bearer xxxxx
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (error, user) => {
      if (error) {
        res.status(403).json("Invalid token!");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

module.exports = verifyToken;
