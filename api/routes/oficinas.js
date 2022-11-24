const express = require("express");
const { crearOficina, actualizarOficina, traerOficinas } = require("../controllers/oficinasController");
const { validacionCreacionOficina } = require("../validator/oficinas");
const routesOficinas = express();

//crear Oficina
routesOficinas.post("/", crearOficina);

//Actualizar oficina
routesOficinas.put("/:idOficina", actualizarOficina);

//Traer oficinas
routesOficinas.get("/", traerOficinas);

module.exports = routesOficinas;
