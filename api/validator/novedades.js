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
  (req, res, next) => {
    validacionResultado(req, res, next);
  },
];

const validacionActualizacionNovedad = [
  check("estado")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isIn(["aprobado", "rechazado", 'pendiente'])
    .withMessage("Estado no determinado"),
  (req, res, next) => {
    validacionResultado(req, res, next);
  },
];

module.exports = {validacionCreacionNovedades, validacionActualizacionNovedad};
