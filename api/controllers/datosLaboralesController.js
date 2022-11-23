const { DatosLaborales, Usuarios } = require("../models");

const crearDatosLaborales = async (req, res) => {
  try {
    const { eMail } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });
    if (!usuario) throw "Usuario no registrado";
    
    const datos = await DatosLaborales.create(req.body);
    if (!datos) throw "Datos laborales no existen";
    
    datos.setUsuario(usuario);
    res.status(201).send(datos);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarDatosLaborales = async (req, res) => {
  try {
    const id = req.params.idDatosLaborales;
    const datoLaboral = await DatosLaborales.findByPk(id);
    if (!datoLaboral) throw "Dato Laboral no existente";

    const datosActualizados = await DatosLaborales.update(req.body, { where: { id }, returning: true });
    res.send(datosActualizados[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearDatosLaborales, actualizarDatosLaborales };
