const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionCreacionYActualizacionDatosLaborales = [
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
    .toLowerCase()
    .isIn([
      "empleado",
      "coordinador regional",
      "jefe pais",
      "jefe regional ",
      "gerente pais",
      "rrhh pais ",
      "gerente regional",
      "gerente general",
      "coordinador pais",
    ])
    .withMessage("Puesto no existente"),
  check("diasLaborales")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido"),
  check("horarioLaboral")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido"),
  check("turno")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha()
    .withMessage("El campo debe tener solo letras"),
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

module.exports = { validacionCreacionYActualizacionDatosLaborales };
