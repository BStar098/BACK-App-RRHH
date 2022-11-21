const express = require("express");
const routesUsuarios = express();
const {
  inicioSesion,
  registroUsuario,
  PersistenciaSesion,
  cierreSesion,
  usuarioParticular,
  TraerUsuarios,
} = require("../controllers/usuariosControllers");
const {
  validacionRegistro,
  validacionInicioSesion,
} = require("../validator/users");

//Registrar un nuevo usuario
routesUsuarios.post("/registro", validacionRegistro, registroUsuario);

//Inicio de sesion de un usuario
routesUsuarios.post("/iniciosesion", validacionInicioSesion, inicioSesion);

//Persistencia de sesion
routesUsuarios.get("/me", PersistenciaSesion);

//Cerrar Sesion
routesUsuarios.get("/cierresesion", cierreSesion);

// Traer Usuarios
routesUsuarios.get("/", TraerUsuarios);

//Traer Usuario Particular
routesUsuarios.get("/:id", usuarioParticular);

module.exports = routesUsuarios;
