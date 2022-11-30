const { Oficina, Usuarios, DatosLaborales, Equipo } = require("../models");
const { filtroUsuarios } = require("../utils/filtros");

const crearOficina = async (req, res) => {
  try {
    const { pais } = req.body;
    const validacionOficina = await Oficina.findOne({ where: { pais } });
    if (validacionOficina) throw "Oficina ya registrada";

    const oficina = await Oficina.create(req.body);

    res.status(201).send(oficina);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarOficina = async (req, res) => {
  try {
    const id = req.params.idOficina;
    const validacionOficina = await Oficina.findByPk(id);
    if (!validacionOficina) throw "Oficina no existe";

    const oficnaActualizada = await Oficina.update(req.body, {
      where: { id },
      returning: true,
    });

    res.send(oficnaActualizada[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

const traerOficinas = async (req, res) => {
  try {
    const oficinas = await Oficina.findAll();
    if (!oficinas) throw "No existen oficinas";

    res.send(oficinas);
  } catch (error) {
    res.status(400).send(error);
  }
};

const integrantesOficina = async (req, res) => {
  try {
    const id = req.params.idOficina;
    const oficinas = await Oficina.findByPk(id);
    if (!oficinas) throw "No existe esa oficina";

    const usuarios = await Usuarios.findAll({ where: { oficinaId: id },
      include: [
        { model: Equipo }, 
        { model: DatosLaborales }
      ],
    });

    res.send(filtroUsuarios(usuarios));
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearOficina, actualizarOficina, traerOficinas, integrantesOficina };
