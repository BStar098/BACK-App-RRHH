const express = require("express");
const { crearOficina } = require("../controllers/oficinasController");
const routesOficinas = express();

//Crear un equipo
routesOficinas.post("/", crearOficina);                    //ESTA RUTA ESTA BIEN 



module.exports = routesOficinas;