const express = require("express");
const routesAsistencias = express();
const { crearAsistencia, historialDeAsistencias } = require("../controllers/asistenciasControllers");

//Crear Asistencia
routesAsistencias.post("/", crearAsistencia);

//Traer traer historial asistencias
routesAsistencias.post("/historial", historialDeAsistencias);

module.exports = routesAsistencias;
