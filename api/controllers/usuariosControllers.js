const { generadorToken, validacionToken } = require("../config/token");
const { Usuarios, DatosLaborales, Novedades } = require("../models");

const registroUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.status(201).send(usuario);
  } catch (error) {
    res.status(400).send(error);
  }
};

const inicioSesion = async (req, res) => {
  try {
    const { eMail, contrasena } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });

    if (!usuario) throw "Usuario no registrado";

    const validacionConstrasena = await usuario.validacionConstrasena(
      contrasena
    );

    if (!validacionConstrasena) throw "Contraseña incorrecta";

    const payload = {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      domicilio: usuario.domicilio,
      documento: usuario.documento,
      telefono: usuario.telefono,
      fechaDeNacimiento: usuario.fechaDeNacimiento,
      telefono: usuario.telefono,
      eMail: usuario.eMail,
    };

    const token = generadorToken(payload);
    res.cookie("token", token);
    res.send(payload);
  } catch (error) {
    res.status(400).send(error);
  }
};

const PersistenciaSesion = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { usuario } = validacionToken(token);
  if (!usuario) return res.sendStatus(401);
  res.send(usuario);
};

const cierreSesion = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

const TraerUsuarios = async (req, res) => {
  try {
    const totalUsuarios = await Usuarios.findAll({
      include: { model: DatosLaborales },
      returning: true,
    });
    res.send(totalUsuarios);
  } catch (error) {
    res.status(400).send(error);
  }
};
const usuarioParticular = async (req, res) => {
  try {
    const id = req.params.id;
    const usuarioYDatosLaborales = await Usuarios.findOne({
      where: { id },
      include: { model: DatosLaborales },
      returning: true,
    });
    res.send(usuarioYDatosLaborales);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
  inicioSesion,
  registroUsuario,
  PersistenciaSesion,
  cierreSesion,
  TraerUsuarios,
  usuarioParticular,
};
