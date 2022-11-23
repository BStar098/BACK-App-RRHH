const express = require("express");
const routesAsistencias = express();
const {
  crearAsistencia,
  historialDeAsistencias,
} = require("../controllers/asistenciasControllers");

routesAsistencias.post("/", crearAsistencia);
routesAsistencias.post("/historial", historialDeAsistencias);

module.exports = routesAsistencias;
