const express = require("express");
const { crearOficina } = require("../controllers/oficinasController");
const routesOficinas = express();

//Crear una oficina
routesOficinas.post("/", crearOficina);


module.exports = routesOficinas;