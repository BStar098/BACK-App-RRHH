const { Usuarios } = require("../models");

const inicioSesion = async (req, res) => {
  try {
    const { eMail } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });

    if(!usuario) throw "Usuario no registrado"

    res.send(usuario);

  } catch (error) {
    res.status(401).send(error)
  }
};

const registroUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.status(201).send(usuario);
  } catch (error) {
    res.sendStatus(501)
  }
};

const PersistenciaSesion = (req, res) => {

}

const cierreSesion = (req, res) => {

}

module.exports = { inicioSesion, registroUsuario, PersistenciaSesion, cierreSesion };
