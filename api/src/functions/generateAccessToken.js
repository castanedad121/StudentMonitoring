const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../functions/paramsEnv");

const generateAccessToken = (user) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
};

module.exports = { generateAccessToken };
