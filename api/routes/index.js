const express = require("express");
const router = express.Router();
const routesUsuarios = require("./usuarios");

router.use("/usuarios", routesUsuarios);

module.exports = router;
