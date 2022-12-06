const express = require("express");
const routesUsuarios = express();
const {
  inicioSesion,
  registroUsuario,
  PersistenciaSesion,
  cierreSesion,
  usuarioParticular,
  actualizarPerfil,
  actualizarEstado,
  usuarioPorEmail,
  todosLosUsuarios,
} = require("../controllers/usuariosControllers");
const { nombreYemail } = require("../utils/filtros");
const {
  validacionRegistro,
  validacionInicioSesion,
  validacionActualizacion,
} = require("../validator/users");

//Registrar un nuevo usuario
routesUsuarios.post("/registro", validacionRegistro, registroUsuario);

//Inicio de sesion de un usuario
routesUsuarios.post("/iniciosesion", validacionInicioSesion, inicioSesion);

//Persistencia de sesion
routesUsuarios.get("/me", PersistenciaSesion);

//Cerrar Sesion
routesUsuarios.get("/cierresesion", cierreSesion);

//Traer Perfil completo usuario
routesUsuarios.get("/uno/:IdUsuario", usuarioParticular);

//Traer Perfil por Mail
routesUsuarios.get("/:eMail", usuarioPorEmail);

// Actualizar Perfil usuario

// Validar que la cantidad de fichajes del día sea menor a 3.
routesUsuarios.post("/activo/:idUsuario", actualizarEstado);

routesUsuarios.put("/:idUsuario", actualizarPerfil);

//todos los usuarios
routesUsuarios.get("/", todosLosUsuarios);

module.exports = routesUsuarios;
