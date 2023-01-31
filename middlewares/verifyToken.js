const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // verify token
  jwt.verify(token, JWT_SECRET, function(err, decoded) {
    if (err) {
      return res.status(403).json({
        status: "error",
        message: err.message,
      });
    }

    // if token is valid, save user data to req.user
    req.user = decoded;
    return next();
  });
};
