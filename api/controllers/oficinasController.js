const { Oficina, Usuarios, Equipo } = require("../models");

const crearOficina = async (req, res) => {
  try {
    const { eMail } = req.body;
    const equipo = await Usuarios.findOne({ where: { eMail }, include: {model: Equipo } });
    if (!equipo) throw "Usuario no registrado";

    const oficina = await Oficina.create(req.body);
    if (!oficina) throw "Dataos oficina no existe";

    oficina.addEquipo(equipo.equipo);
    res.status(201).send(oficina);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearOficina };
