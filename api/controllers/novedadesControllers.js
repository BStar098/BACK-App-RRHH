const { Usuarios, Novedad } = require("../models");

const crearNovedades = async (req, res) => {
  try {
    const { eMail } = req.body;
    const novedad = await Novedad.create(req.body);
    const usuario = await Usuarios.findOne({ where: { eMail } });

    if (!usuario) throw "Usuario no registrado";

    usuario.addNovedades(novedad);
    res.status(201).send(novedad);
  } catch (error) {
    res.status(400).send(error);
  }
};

const traerNovedades = async (req, res) => {
  try {
    const totalNovedades = await Novedad.findAll();
    res.send(totalNovedades);
  } catch (error) {
    res.status(400).send(error);
  }
};

const historialNovedadesUsuario = async (req, res) => {
  try {
    const id = req.params.idUsuario;
    const usuarioYNovedades = await Usuarios.findOne({
      where: { id },
      include: { model: Novedad },
    });
    res.send(usuarioYNovedades);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarNovedad = async (req, res) => {
  try {
    const id = req.params.idNovedad;
    const novedadActualizada = await Novedad.update(req.body, {
      where: { id },
      returning: true,
    });

    if (!novedadActualizada[1][0]) throw "La novedad no existe";

    res.send(novedadActualizada[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  crearNovedades,
  traerNovedades,
  historialNovedadesUsuario,
  actualizarNovedad,
};
