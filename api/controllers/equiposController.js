const { Equipo, Usuarios, Oficina, DatosLaborales } = require("../models");
const { filtroUsuarios } = require("../utils/filtros");

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

    const validacionEquipo = await Equipo.findByPk(id)
    if(!validacionEquipo) throw "Equipo no existe"

    const equipoActualizada = await Equipo.update(req.body, { where: { id }, returning: true });

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

const integrantesEquipo = async (req, res) => {
  try {
    const id = req.params.idEquipo;
    const equipo = await Equipo.findByPk(id);
    if (!equipo) throw "No existe esa equipo";

    const usuarios = await Usuarios.findAll({ where: { equipoId:id }, include: [{ model: Oficina }, {model: DatosLaborales}]});

    res.send(filtroUsuarios(usuarios));
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearEquipo, actualizarEquipo, traerEquipos, integrantesEquipo };
