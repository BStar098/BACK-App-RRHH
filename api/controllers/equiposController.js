const { Equipo, Usuarios } = require("../models");

const crearEquipo = async (req, res) => {
  try {
    const { nombre } = req.body;
    const validacionEquipo = await Equipo.findOne({ where: { nombre } });
    if (validacionEquipo) throw "Equipo ya registrada";

    const equipo = await Equipo.create(req.body);
    
    res.status(201).send(equipo);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarEquipo = async (req, res) => {
  try {
    const id = req.params.idEquipo;
    const equipoActualizada = await Equipo.update(req.body, { where: { id }, returning: true });
    if (!equipoActualizada[1][0]) throw "El equipo no existe";

    res.send(equipoActualizada[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

const traerEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.findAll();
    if (!equipos) throw "No existen equipos";

    res.send(equipos);
  } catch (error) {
    res.status(400).send(error);
  }
};

const traerEquipo = async (req, res) => {
  try {
    const id = req.params.idEquipo;
    const equipoYusuarios = await Equipo.findOne({ where: { id }, include: { model: Usuarios }});
    if (!equipoYusuarios) throw "Equipo no registrado";

    res.send(equipoYusuarios);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearEquipo, actualizarEquipo, traerEquipos, traerEquipo };
