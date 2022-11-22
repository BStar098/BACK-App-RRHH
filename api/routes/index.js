const express = require("express");
const routesNovedades = require("./novedades");
const router = express.Router();
const routesUsuarios = require("./usuarios");
const routesDatosLaborales = require("./datosLaborales");
const routesEqipos = require("./equipos");
const routesOficinas = require("./oficinas");

router.use("/usuarios", routesUsuarios);
router.use("/novedades", routesNovedades);
router.use("/datosLaborales", routesDatosLaborales);
router.use("/equipos", routesEqipos);
router.use("/oficinas", routesOficinas);

module.exports = router;
