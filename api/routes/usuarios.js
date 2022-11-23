const express = require("express");
const routesUsuarios = express();
const { inicioSesion, registroUsuario, PersistenciaSesion, cierreSesion, usuarioParticular, actualizarPerfil } = require("../controllers/usuariosControllers");

//Registrar un nuevo usuario
routesUsuarios.post("/registro", registroUsuario);

//Inicio de sesion de un usuario
routesUsuarios.post("/iniciosesion", inicioSesion);

//Persistencia de sesion
routesUsuarios.get("/me", PersistenciaSesion);

//Cerrar Sesion
routesUsuarios.get("/cierresesion", cierreSesion);

//Traer Perfil completo usuario
routesUsuarios.get("/uno", usuarioParticular);

// Actualizar Perfil usuario
routesUsuarios.put("/:idUsuario", actualizarPerfil);


module.exports = routesUsuarios;
