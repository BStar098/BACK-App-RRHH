const { generadorToken, validacionToken } = require("../config/token");
const { Usuarios, DatosLaborales, Equipo, Oficina } = require("../models");
const { perfilCompleto, perfil } = require("../utils/filtros");

const registroUsuario = async (req, res) => {
  try {
    const { eMail } = req.body;
    const concidenciaUsuario = await Usuarios.findOne({ where: { eMail } });
    if (concidenciaUsuario) throw "Usuario ya registrado";

    const usuario = await Usuarios.create(req.body);

    res.status(201).send(perfil(usuario));
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
      tipo: usuario.tipo,
      idEquipo: usuario.equipoId,
      idOficina: usuario.equipoId,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
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

const usuarioParticular = async (req, res) => {
  try {
    const id = req.params.IdUsuario;
    const usuarioYDatosLaborales = await Usuarios.findByPk(id, {
      include: [
        { model: DatosLaborales },
        { model: Equipo },
        { model: Oficina },
      ],
    });
    if (!usuarioYDatosLaborales) throw "Usuario no registrado";

    res.send(perfilCompleto(usuarioYDatosLaborales));
  } catch (error) {
    res.status(400).send(error);
  }
};

const actualizarPerfil = async (req, res) => {
  try {
    const id = req.params.idUsuario;
    const validacionUsuario = await Usuarios.findByPk(id);
    if (!validacionUsuario) throw "Usuario no existe";

    const perfilActualizado = await Usuarios.update(req.body, {
      where: { id },
      returning: true,
    });

    res.send(perfil(perfilActualizado[1][0]));
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  inicioSesion,
  registroUsuario,
  PersistenciaSesion,
  cierreSesion,
  actualizarPerfil,
  usuarioParticular,
};
