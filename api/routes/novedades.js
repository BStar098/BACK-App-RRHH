const express = require("express");
const routesNovedades = express();
const { crearNovedades, traerNovedades, actualizarNovedad, historialNovedadesUsuario } = require("../controllers/novedadesControllers");

//Crear una novedad
routesNovedades.post("/", crearNovedades);

//Traer Todas Las Novedades
routesNovedades.get("/", traerNovedades);

//Traer EL Historial de Novedades de un Usuario
routesNovedades.get("/:idUsuario", historialNovedadesUsuario);

//Actualizar Novedad
routesNovedades.put("/:idNovedad", actualizarNovedad);

module.exports = routesNovedades;
