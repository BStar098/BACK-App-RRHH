const { Usuarios, Novedad, Equipo } = require("../models");
const { filtroNovedad } = require("../utils/filtros");

const crearNovedades = async (req, res) => {
  try {
    const { eMail } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });
    if (!usuario) throw "Usuario no registrado";

    const novedad = await Novedad.create(req.body);

    usuario.addNovedades(novedad);
    res.status(201).send(novedad);
  } catch (error) {
    res.status(400).send(error);
  }
};

const traerNovedad = async (req, res) => {
  try {
    const id = req.params.idNovedad;
    const novedad = await Novedad.findByPk(id);
    if (!novedad) throw "Novedad no existente";

    res.send(novedad);
  } catch (error) {
    res.status(400).send(error);
  }
};

const historialNovedadesUsuario = async (req, res) => {
  try {
    const id = req.params.idUsuario;
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) throw "Usuario no existente";

    const usuarioYNovedades = await Usuarios.findOne({ where: { id }, include: {model: Novedad}});

    res.send(usuarioYNovedades);
  } catch (error) {
    res.status(400).send(error);
  }
};

const todasLasNovedades = async (req, res) => {
  try {
    const allNovedades = await Novedad.findAll({include: {model: Usuarios, include: {model: Equipo}}});

    res.send(filtroNovedad(allNovedades));
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarNovedad = async (req, res) => {
  try {
    const id = req.params.idNovedad;
    const validacionNovedad = await Novedad.findByPk(id)
    if(!validacionNovedad) throw "Novedad no existe"


    const novedadActualizada = await Novedad.update(req.body, { where: { id }, returning: true });

    res.send(novedadActualizada[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearNovedades, traerNovedad, historialNovedadesUsuario, actualizarNovedad, todasLasNovedades };
