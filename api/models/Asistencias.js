const S = require("sequelize");
const db = require("../config/db");

class Asistencia extends S.Model {}

Asistencia.init(
  {
    check: { type: S.BOOLEAN },
    fecha: { type: S.DATEONLY },
    horaDeIngreso: { type: S.STRING },
    horaDeSalida: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "asistencias",
  }
);

module.exports = Asistencia;
