const express = require("express");
const { crearEquipo } = require("../controllers/equiposController");
const routesEqipos = express();

//Crear un equipo
routesEqipos.post("/", crearEquipo);                         //ESTA RUTA ESTA BIEN 



module.exports = routesEqipos;