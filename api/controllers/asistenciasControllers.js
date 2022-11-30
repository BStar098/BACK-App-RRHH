const { Asistencia, Usuarios } = require("../models");

const crearAsistencia = async (req, res) => {
  const { usuarioId, datosAsistencia } = req.body;
  console.log(datosAsistencia);
  try {
    if (
      await Asistencia.verificarAsistencia(usuarioId, datosAsistencia.fecha)
    ) {
      res.sendStatus(401);
    } else {
      const asistencia = await Asistencia.create(datosAsistencia);
      asistencia.setUsuario(usuarioId);
      res.send(asistencia);
    }
  } catch (error) {
    throw "No se ha podido crear la asistencia";

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
