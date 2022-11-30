const express = require("express");
const { crearOficina, actualizarOficina, traerOficinas, integrantesOficina } = require("../controllers/oficinasController");
const { validacionCreacionYActualizacionOficina } = require("../validator/oficinas");
const routesOficinas = express();

//crear Oficina
routesOficinas.post("/",validacionCreacionYActualizacionOficina, crearOficina);

//Actualizar oficina
routesOficinas.put("/:idOficina",validacionCreacionYActualizacionOficina, actualizarOficina);

//Traer oficinas
routesOficinas.get("/", traerOficinas);

//Traer integrantes de una oficina
routesOficinas.get("/:idOficina", integrantesOficina);

module.exports = routesOficinas;
