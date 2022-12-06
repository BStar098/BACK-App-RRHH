const express = require("express");
const {
  crearDatosLaborales,
  actualizarDatosLaborales,
} = require("../controllers/datosLaboralesController");
const {
  validacionCreacionYActualizacionDatosLaborales,
} = require("../validator/datosLaborales");
const routesDatosLaborales = express();

//Crear Datos Laborales
routesDatosLaborales.post(
  "/",
  validacionCreacionYActualizacionDatosLaborales,
  crearDatosLaborales
);

//actualizar Datos Laborales de Un Usuario
routesDatosLaborales.put("/:idDatosLaborales", actualizarDatosLaborales);

module.exports = routesDatosLaborales;
