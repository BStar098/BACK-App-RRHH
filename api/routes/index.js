const express = require("express");
const routesNovedades = require("./novedades");
const router = express.Router();
const routesUsuarios = require("./usuarios");

router.use("/usuarios", routesUsuarios);
router.use("/novedades", routesNovedades);

module.exports = router;
