const express = require("express");
const routesUsuarios = express();
const { inicioSesion, registroUsuario, PersistenciaSesion, cierreSesion, usuarioParticular, TraerUsuarios } = require("../controllers/usuariosControllers");

//Registrar un nuevo usuario
routesUsuarios.post("/registro", registroUsuario);                               //SALIO BIEN

//Inicio de sesion de un usuario
routesUsuarios.post("/iniciosesion", inicioSesion);

//Persistencia de sesion
routesUsuarios.get("/me", PersistenciaSesion);

//Cerrar Sesion
routesUsuarios.get("/cierresesion", cierreSesion);

//Traer Usuario-DatosLaborales-Equipo-Oficinas Particular
routesUsuarios.get("/:id", usuarioParticular);

// Traer Usuarios
routesUsuarios.get("/", TraerUsuarios);


module.exports = routesUsuarios;
