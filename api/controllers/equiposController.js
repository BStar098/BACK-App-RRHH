const { Equipo, Usuarios } = require("../models");

const crearEquipo = async (req, res) => {
  try {
    const { eMail } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });
    if (!usuario) throw "Usuario no registrado";

    const equipo = await Equipo.create(req.body);
    if (!equipo) throw "Datos equipo no existen";

    equipo.addUsuario(usuario);
    res.status(201).send(equipo);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearEquipo };
