const { Usuarios, Novedades } = require("../models");

const crearNovedades = async (req, res) => {
  try {
    const { eMail } = req.body;
    const novedadUsuario = await Novedades.create(req.body);
    const usuario = await Usuarios.findOne({ where: { eMail } });
    usuario.addNovedades(novedadUsuario);
    res.status(201).send(novedadUsuario);
  } catch (error) {
    res.status(500).send(error);
  }
};

const traerNovedades = async (req, res) => {
  try {
    const totalNovedades = await Novedades.findAll(req.body);
    res.send(totalNovedades);
  } catch (error) {
    res.status(500).send(error);
  }
};

const historialNovedadesUsuario = async (req, res) => {
  try {
    const id = req.params.idUsuario;
    const usuarioYNovedades = await Usuarios.findOne({
      where: { id },
      include: { model: Novedades },
    });
    res.send(usuarioYNovedades);
  } catch (error) {
    res.status(500).send(error);
  }
};

const actualizarNovedad = async (req, res) => {
  try {
    const id = req.params.id;
    const novedadActualizada = await Novedades.update(req.body, {
      where: { id },
      returning: true,
    });
    if (!novedadActualizada[1][0]) throw "La novedad no existe";
    res.send(novedadActualizada[1][0]);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  crearNovedades,
  traerNovedades,
  historialNovedadesUsuario,
  actualizarNovedad,
};
