const { DatosLaborales, Usuarios, Oficina, Equipo } = require("../models");

const crearDatosLaborales = async (req, res) => {
  try {
    const { eMail, pais, nombre } = req.body;

    const usuario = await Usuarios.findOne({ where: { eMail } });
    if (!usuario) throw "Usuario no registrado";

    const oficina = await Oficina.findOne({ where: { pais } });
    if (!oficina) throw "Oficina no registrada";

    const equipo = await Equipo.findOne({ where: { nombre } });
    if (!equipo) throw "Equipo no registrado";

    // Promise.all([usuario, oficina, equipo])
    // if (!usuario && !oficina && !equipo) throw "Usuario, Oficina o Equipo no registrado";
    
    const datos = await DatosLaborales.create(req.body);
    
    datos.setUsuario(usuario);
    oficina.addUsuario(usuario);
    equipo.addUsuario(usuario);
    res.status(201).send(datos);
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarDatosLaborales = async (req, res) => {
  try {
    const id = req.params.idDatosLaborales;
    const validacionDatos = await DatosLaborales.findByPk(id)
    if(!validacionDatos) throw "Dato laboral no existe"

    const datosActualizados = await DatosLaborales.update(req.body, { where: { id }, returning: true });

    res.send(datosActualizados[1][0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { crearDatosLaborales, actualizarDatosLaborales };
