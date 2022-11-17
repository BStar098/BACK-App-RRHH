const express = require("express");
const routesUsuarios = express();
const {
  iniciarSesion,
  registrarUsuario,
} = require("../controllers/usuariosControllers");
const { validacionDeCreacion } = require("../validator/users");

//Inicio de sesion de un usuario
routesUsuarios.get("/:id", iniciarSesion);

//Registrar un nuevo usuario
routesUsuarios.post("/", registrarUsuario);

module.exports = routesUsuarios;
