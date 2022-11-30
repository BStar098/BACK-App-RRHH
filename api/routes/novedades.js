const express = require("express");
const routesNovedades = express();
const { crearNovedades, traerNovedad, actualizarNovedad, historialNovedadesUsuario } = require("../controllers/novedadesControllers");
const { validacionCreacionNovedades, validacionActualizacionNovedad } = require("../validator/novedades");

//Crear una novedad
routesNovedades.post("/",validacionCreacionNovedades, crearNovedades);

//Traer una novedad en especifico
routesNovedades.get("/una/:idNovedad", traerNovedad);

//Traer historial de novedades de usuario
routesNovedades.get("/:idUsuario", historialNovedadesUsuario);

//Actualizar el estado de la novedad
routesNovedades.put("/:idNovedad",validacionActualizacionNovedad, actualizarNovedad);

module.exports = routesNovedades;
