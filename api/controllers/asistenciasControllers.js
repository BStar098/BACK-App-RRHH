const { Asistencia, Usuarios } = require("../models");

const crearAsistencia = async (req, res) => {
  const { usuarioId, datosAsistencia } = req.body;
  try {
      const asistencia = await Asistencia.create(datosAsistencia);
      asistencia.setUsuario(usuarioId);
      res.send(asistencia);
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

const validarIngreso = async (req, res) => {
  const { fecha } = req.body;
  const { usuarioId } = req.body;
  const { limite } = req.body;

  try {
    const asistenciasDiarias = await Asistencia.findAll({
      where: { fecha: fecha, usuarioId: usuarioId },
    });
    if (asistenciasDiarias.length >= limite) {
      res.sendStatus(400);
    } else res.sendStatus(200);
  } catch (error) {
    throw new Error("La cantidad máxima de fichajes diarios es de 2(dos)");
  }
};

module.exports = { crearAsistencia, historialDeAsistencias, validarIngreso };
