const express = require("express");
const routesNovedades = express();
const { crearNovedades, traerNovedad, actualizarNovedad, historialNovedadesUsuario, todasLasNovedades } = require("../controllers/novedadesControllers");
const { validacionCreacionNovedades, validacionActualizacionNovedad } = require("../validator/novedades");

//Crear una novedad
routesNovedades.post("/",validacionCreacionNovedades, crearNovedades);

//Traer una novedad en especifico
routesNovedades.get("/una/:idNovedad", traerNovedad);

//Traer historial de novedades de usuario
routesNovedades.get("/:idUsuario", historialNovedadesUsuario);

//Traer todas las novedades
routesNovedades.get("/all/admin", todasLasNovedades);

//Actualizar el estado de la novedad
routesNovedades.put("/:idNovedad",validacionActualizacionNovedad, actualizarNovedad);

module.exports = routesNovedades;
