const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionDeNovedades = [
  check("tipoDeNovedad")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio"),
  check("fechaDeInicio")
    .exists()
    .isDate()
    .withMessage("El campo debe ser una fecha"),
  check("fechaDeFin")
    .exists()
    .isDate()
    .withMessage("El campo debe ser una fecha"),
  check("observacion")
    .exists()
    .not()
    .isEmpty()
    .withMessage("El campo debe existir"),
  check("certificado"),
  check("estado")
    .exists()
    .not()
    .isEmpty()
    .not()
    .isEmpty()
    .withMessage("El campo debe existir"),
  (req, res, next) => {
    validacionResultado(req, res, next);
  },
];

module.exports = { validacionDeNovedades };
