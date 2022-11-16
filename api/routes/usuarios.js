const express = require("express");
const routesUsuarios = express();
const usuarioController = require("../controllers/usuariosControllers");

routesUsuarios.get("/iniciarsesion", usuarioController.iniciarSesion);
routesUsuarios.post("/registrarse", usuarioController.registrarUsuario);

module.exports = routesUsuarios;
