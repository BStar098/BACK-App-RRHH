const { Usuarios, Novedad } = require("../models");

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
    const usuarioYNovedades = await Usuarios.findOne({ where: { id }, include: { model: Novedad }});
    if (!usuarioYNovedades) throw "Usuario no registrado";

    res.send(usuarioYNovedades);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarNovedad = async (req, res) => {
  try {
    const id = req.params.idNovedad;
    const novedadActualizada = await Novedad.update(req.body, { where: { id }, returning: true });
    if (!novedadActualizada[1][0]) throw "La novedad no existe";

    res.send(novedadActualizada[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearNovedades, traerNovedad, historialNovedadesUsuario, actualizarNovedad };
