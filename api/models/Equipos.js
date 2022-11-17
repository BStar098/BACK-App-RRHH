const S = require("sequelize");
const db = require("../config/db");

class Equipo extends S.Model {}

Equipo.init(
  {
    dependencia: { type: S.STRING },
    turno: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "equipos",
  }
);

module.exports = Equipo;
