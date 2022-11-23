const express = require("express");
const { crearEquipo, trearEquipoPais } = require("../controllers/equiposController");
const routesEqipos = express();

//Crear un equipo
routesEqipos.post("/", crearEquipo);

//Traer todo el equipo de un pais
routesEqipos.get("/", trearEquipoPais);


module.exports = routesEqipos;