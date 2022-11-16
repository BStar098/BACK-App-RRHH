const { Usuarios } = require("../models");

const iniciarSesion = async (req, res) => {
  try {
    const { eMail } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });
    res.send(usuario);
  } catch (error) {
    console.error(error);
  }
};

const registrarUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.send(usuario);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { iniciarSesion, registrarUsuario };
