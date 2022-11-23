const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionCreacionOficina = [
  check("pais")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
  check("cuidad")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
  (req, res, next) => {
    validacionResultado(req, res, next);
  },
];

module.exports = { validacionCreacionOficina };
