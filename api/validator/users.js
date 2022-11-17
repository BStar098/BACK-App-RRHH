const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionDeCreacion = [
  check("nombre")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio"),
  check("apellido")
    .exists(),
  check("domicilio")
    .exists(),
  check("documento")
    .exists(),
  check("telefono")
    .exists()
    .withMessage("El campo debe existir")
    .isNumeric()
    .withMessage("El campo debe ser numerico"),
  check("fechaDeNacimiento")
    .exists(),
  check("tipo")
    .exists(),
  check("residencia")
    .exists(),
  check("eMail")
    .exists()
    .withMessage("El campo debe existir")
    .isEmail()
    .withMessage("El email no es valido"),
  (req, res, next) => {
    validacionResultado(req, res, next)
  }
];

module.exports = { validacionDeCreacion };
