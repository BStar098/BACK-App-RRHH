const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionCreacionDatosLaborales = [
  check("fechaDeIngreso")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage("El campo debe ser una fecha YYYY-MM-DD"),
  check("puesto")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isIn([
      "empleado",
      "coordinador regional",
      "jefe pais",
      "jefe regional ",
      "gerente pais",
      "_rrhh pais ",
      "gerente regional",
      "gerente general",
    ])
    .withMessage("Puesto no existente"),
  check("diasLaborales")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
  check("horarioLaboral")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido"),
  check("observaciones")
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

module.exports = { validacionCreacionDatosLaborales };
