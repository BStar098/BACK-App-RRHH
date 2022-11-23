const express = require("express");
const { crearOficina } = require("../controllers/oficinasController");
const { validacionCreacionOficina } = require("../validator/oficinas");
const routesOficinas = express();

//Crear una oficina
routesOficinas.post("/", validacionCreacionOficina, crearOficina);

module.exports = routesOficinas;
