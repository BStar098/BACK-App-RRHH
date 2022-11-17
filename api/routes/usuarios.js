const express = require("express");
const routesUsuarios = express();
const { inicioSesion, registroUsuario, PersistenciaSesion, cierreSesion } = require("../controllers/usuariosControllers");
const { validacionDeCreacionUsuario } = require("../validator/users");

//Inicio de sesion de un usuario
routesUsuarios.post("/iniciosesion", inicioSesion);

//Registrar un nuevo usuario
routesUsuarios.post("/registro", registroUsuario);

//Persistencia de sesion
routesUsuarios.get("/me", PersistenciaSesion)

//Cerrar Sesion
routesUsuarios.get("/cierresesion", cierreSesion)

module.exports = routesUsuarios;
