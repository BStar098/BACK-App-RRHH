const jwt = require("jsonwebtoken");

const generadorToken = function (payload) {
  const token = jwt.sign({usuario: payload}, process.env.SECRET, { expiresIn: "1d" });
  return token;
};

const validacionToken = function (token) {
  const payload = jwt.verify(token, process.env.SECRE);
  return payload;
};

module.exports = { generadorToken, validacionToken };