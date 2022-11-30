const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionCreacionYActualizacionEquipo = [
  check("nombre")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido"),
  (req, res, next) => {
    validacionResultado(req, res, next);
  },
];

module.exports = { validacionCreacionYActualizacionEquipo };