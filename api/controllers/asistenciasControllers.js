const { Asistencia, Usuarios } = require("../models");

const crearAsistencia = async (req, res) => {
  const { usuarioId, datosAsistencia } = req.body;
  try {
    const usuario = await Usuarios.findOne({ where: { id: usuarioId } });
    if (!usuario) throw "Usuario no registrado";

    const asistencia = await Asistencia.create(datosAsistencia);

    asistencia.setUsuario(usuarioId);
    res.send(asistencia);
  } catch (error) {
    res.status(400).send(error);
  }
};

const historialDeAsistencias = async (req, res) => {
  try {
    const historial = await Asistencia.findAll({ where: req.body });
    res.send(historial);
  } catch (error) {
    throw new Error("No se ha podido retornar el historial de asistencias");
  }
};

module.exports = { crearAsistencia, historialDeAsistencias };
