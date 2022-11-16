require("dotenv").config();

const S = require("sequelize");

const db = new S(
  process.env.DB_NAME,
  JSON.parse(process.env.DB_USER),
  JSON.parse(process.env.DB_PASS),
  {
    host: process.env.SERVIDOR,
    dialect: process.env.DB,
    logging: false,
  }
);

module.exports = db;
