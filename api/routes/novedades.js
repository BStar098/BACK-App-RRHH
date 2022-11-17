const express = require("express");
const {
  crearNovedades,
  traerNovedades,
  actualizarNovedad,
  historialNovedadesUsuario,
} = require("../controllers/novedadesControllers");
const routesNovedades = express();
const { validacionDeNovedades } = require("../validator/novedades");

//Crear una novedad
routesNovedades.post("/", crearNovedades);

//Traer Todas Las Novedades
routesNovedades.get("/", traerNovedades);

//Traer EL Historial de Novedades de un Usuario
routesNovedades.get("/:idUsuario", historialNovedadesUsuario);

//Actualizar Novedad
routesNovedades.put("/:id", actualizarNovedad);

module.exports = routesNovedades;
