const { generadorToken, validacionToken } = require("../config/token");
const { Usuarios } = require("../models");

const registroUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.status(201).send(usuario);
  } catch (error) {
    res.status(400).send(error)
  }
};

const inicioSesion = async (req, res) => {
  try {
    const { eMail, contrasena } = req.body;
    const usuario = await Usuarios.findOne({ where: { eMail } });

    if(!usuario) throw "Usuario no registrado"

    const validacionConstrasena = await usuario.validacionConstrasena(contrasena)
    
    if (!validacionConstrasena) throw "Contraseña incorrecta"

    const payload = {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      eMail: usuario.eMail,
    };
        
    const token = generadorToken(payload)
    res.cookie("token", token);
    res.send(payload)

  } catch (error) {
    res.status(400).send(error)
  }
};


const PersistenciaSesion = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { usuario } = validacionToken(token)
  if(!usuario) return res.sendStatus(401)
  res.send(usuario)
}

const cierreSesion = (req, res) => {
  res.clearCookie("token")
  res.sendStatus(204)
}

module.exports = { inicioSesion, registroUsuario, PersistenciaSesion, cierreSesion };
