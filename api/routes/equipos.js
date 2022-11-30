const express = require("express");
const { crearEquipo, actualizarEquipo, traerEquipos, integrantesEquipo } = require("../controllers/equiposController");
const { validacionCreacionYActualizacionEquipo } = require("../validator/equipos");
const routesEqipos = express();

//Crear un equipo
routesEqipos.post("/",validacionCreacionYActualizacionEquipo, crearEquipo);

//Actualizar equipo
routesEqipos.put("/:idEquipo",validacionCreacionYActualizacionEquipo, actualizarEquipo);

//Traer equipos
routesEqipos.get("/", traerEquipos);

//Traer integrantes de un equipo
routesEqipos.get("/:idEquipo", integrantesEquipo);


module.exports = routesEqipos;