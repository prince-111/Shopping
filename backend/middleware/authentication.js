const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (authenticated) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};
