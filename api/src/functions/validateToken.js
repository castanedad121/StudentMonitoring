const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../functions/paramsEnv");

const validateToken = (req, res, next) => {
  const accessToken =
    req.headers["authorization"] || req.query.token || req.body.token;
  if (!accessToken)
    res.status(401).json({ message: "Access denied, required token" });
  jwt.verify(accessToken, SECRET_KEY, (err, user) => {
    if (err) {
      res
        .status(401)
        .json({ message: "Access denied, token expired or incorrect" });
    } else {
      next();
    }
  });
};

module.exports = { validateToken };
