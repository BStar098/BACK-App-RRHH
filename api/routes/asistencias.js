const express = require("express");
const routesAsistencias = express();
const { crearAsistencia, historialDeAsistencias, validarIngreso } = require("../controllers/asistenciasControllers");

//Crear Asistencia
routesAsistencias.post("/", crearAsistencia);

//Traer traer historial asistencias
routesAsistencias.post("/historial", historialDeAsistencias);

routesAsistencias.post('/validaringreso/:idUsuario', validarIngreso)

module.exports = routesAsistencias;
