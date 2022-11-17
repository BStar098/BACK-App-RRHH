const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionRegistro = [
  check("nombre")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
  check("apellido")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
  check("domicilio")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido"),
  check("documento")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isNumeric()
    .withMessage("El campo debe ser numerico"),
  check("telefono")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isNumeric()
    .withMessage("El campo debe ser numerico"),
  check("fechaDeNacimiento")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isDate({format: 'YYYY-MM-DD'})
    .withMessage("El campo debe ser una fecha YYYY-MM-DD"),
  check("tipo"),
  check("residencia")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
  check("eMail")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isEmail()
    .withMessage("El email no es valido"),
  check("contrasena")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isLength({ min: 8 })
    .withMessage("El campo debe tener minimo 8 caracteres")
    .isStrongPassword()
    .withMessage("El campo debe tener 1 letra en mayuscual, 1 letra en minuscula, 1 numero, 1 simbolo"),
  (req, res, next) => {
    validacionResultado(req, res, next)
  }
];

const validacionInicioSesion = [
  check("eMail")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isEmail()
    .withMessage("El email no es valido"),
  check("contrasena")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isLength({ min: 8 })
    .withMessage("El campo debe tener minimo 8 caracteres")
    .isStrongPassword()
    .withMessage("El campo debe tener 1 letra en mayuscual, 1 letra en minuscula, 1 numero, 1 simbolo"),
  (req, res, next) => {
    validacionResultado(req, res, next)
  }
];

module.exports = { validacionRegistro, validacionInicioSesion };
