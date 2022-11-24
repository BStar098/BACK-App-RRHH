const express = require("express");
const { crearEquipo, actualizarEquipo, traerEquipos, traerEquipo } = require("../controllers/equiposController");
const routesEqipos = express();

//Crear un equipo
routesEqipos.post("/", crearEquipo);

//Actualizar equipo
routesEqipos.put("/:idEquipo", actualizarEquipo);

//Traer equipos
routesEqipos.get("/", traerEquipos);

//Traer equipo y sus integrantes del equipo
routesEqipos.get("/:idEquipo", traerEquipo);


module.exports = routesEqipos;