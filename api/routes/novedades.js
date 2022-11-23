const express = require("express");
const routesNovedades = express();
const { crearNovedades, traerNovedad, actualizarNovedad, historialNovedadesUsuario } = require("../controllers/novedadesControllers");

//Crear una novedad
routesNovedades.post("/", crearNovedades);

//Traer una novedad en especifico
routesNovedades.get("/una/:idNovedad", traerNovedad);

//Traer usuario y sus novedades
routesNovedades.get("/:idUsuario", historialNovedadesUsuario);

//Actualizar el estado de la novedad
routesNovedades.put("/:idNovedad", actualizarNovedad);

module.exports = routesNovedades;
