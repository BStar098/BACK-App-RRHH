const { Asistencia } = require("../models");

const crearAsistencia = async (req, res) => {
  const { usuarioId, datosAsistencia } = req.body;
  try {
    const asistencia = await Asistencia.create(datosAsistencia);
    asistencia.setUsuario(usuarioId);
    res.send(asistencia)
  } catch (error) {
    throw new Error("No se ha podido crear la asistencia");
  }
};

const historialDeAsistencias = async (req, res) => {
  try {
    const historial = await Asistencia.findAll({ where: req.body });
    console.log(historial)
    res.send(historial)
  } catch (error) {
    throw new Error("No se ha podido retornar el historial de asistencias");
  }
};

module.exports = { crearAsistencia, historialDeAsistencias };
