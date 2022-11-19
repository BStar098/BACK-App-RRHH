const { check } = require("express-validator");
const { validacionResultado } = require("../middleware/validacionResultado");

const validacionCreacionNovedades = [
  check("tipoDeNovedad")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isIn([
      "Licencia no justificada",
      "Licencia Vacaciones",
      "Retiro Fuera de Horario",
      "Ingreso Fuera de Horario",
      "Llegada Tarde",
      "Ausencia con Aviso",
      "Ausencia sin Aviso",
      "Hora Extra",
      "Home Office",
      "Otros",
      "Feriados",
      "Licencia justificada",
      "Licencia por enfermedad",
      "Guardia",
      "Licencia Estudio",
      "Horas Nocturnidad",
    ])
    .withMessage("Novedad no existente"),
  check("fecha")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage("El campo debe ser una fecha YYYY-MM-DD"),
  check("cantidadDias")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isNumeric()
    .withMessage("El campo debe ser numerico"),
  check("observacion")
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

module.exports = { validacionCreacionNovedades };
