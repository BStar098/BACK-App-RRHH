const express = require("express");
const routesUsuarios = express();
const { inicioSesion, registroUsuario, PersistenciaSesion, cierreSesion, usuarioParticular, actualizarPerfil } = require("../controllers/usuariosControllers");
const { validacionRegistro,validacionInicioSesion, validacionActualizacion } = require("../validator/users");

//Registrar un nuevo usuario
routesUsuarios.post("/registro",validacionRegistro, registroUsuario);

//Inicio de sesion de un usuario
routesUsuarios.post("/iniciosesion",validacionInicioSesion, inicioSesion);

//Persistencia de sesion
routesUsuarios.get("/me", PersistenciaSesion);

//Cerrar Sesion
routesUsuarios.get("/cierresesion", cierreSesion);

//Traer Perfil completo usuario
routesUsuarios.get("/uno/:IdUsuario", usuarioParticular);

// Actualizar Perfil usuario
routesUsuarios.put("/:idUsuario", validacionActualizacion, actualizarPerfil);


module.exports = routesUsuarios;
