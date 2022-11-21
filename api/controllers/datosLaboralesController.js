const { DatosLaborales, Usuarios } = require("../models");

const crearDatosLaborales = async (req, res) => {
  try {
    const { eMail } = req.body;
    const datos = await DatosLaborales.create(req.body);
    const usuario = await Usuarios.findOne({ where: { eMail } });
    datos.addUsuarios(usuario);
    res.status(201).send(datos);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarDatosLaborales = async (req, res) => {
  try {
    const id = req.params.idDatosLaborales;
    const datosActualizados = await DatosLaborales.update(req.body, {
      where: { id },
      returning: true,
    });
    res.send(datosActualizados);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  crearDatosLaborales,
  actualizarDatosLaborales,
};
