const { Usuarios } = require("../models");

const iniciarSesion = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuarios.findOne({ where: { id } });
    res.send(usuario);
  } catch (error) {
    res.sendStatus(401)
  }
};

const registrarUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.send(usuario);
  } catch (error) {
    res.resStatus(401)
  }
};

module.exports = { iniciarSesion, registrarUsuario };
