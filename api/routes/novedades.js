const express = require("express");
const routesNovedades = express();
const {
  crearNovedades,
  traerNovedades,
  actualizarNovedad,
  historialNovedadesUsuario,
} = require("../controllers/novedadesControllers");
const {
  validacionCreacionNovedades,
  validacionActualizacionNovedad,
} = require("../validator/novedades");

//Crear una novedad
routesNovedades.post("/", validacionCreacionNovedades, crearNovedades);

//Traer Todas Las Novedades
routesNovedades.get("/", traerNovedades);

//Traer EL Historial de Novedades de un Usuario
routesNovedades.get("/:idUsuario", historialNovedadesUsuario);

//Actualizar Novedad
routesNovedades.put(
  "/:idNovedad",
  validacionActualizacionNovedad,
  actualizarNovedad
);

module.exports = routesNovedades;
