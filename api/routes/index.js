const express = require("express");
const routesNovedades = require("./novedades");
const router = express.Router();
const routesUsuarios = require("./usuarios");
const routesDatosLaborales = require("./datosLaborales");

router.use("/usuarios", routesUsuarios);
router.use("/novedades", routesNovedades);
router.use("/datosLaborales", routesDatosLaborales);

module.exports = router;
