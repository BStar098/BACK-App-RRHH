const S = require("sequelize");
const db = require("../config/db");

class Equipo extends S.Model {}

Equipo.init(
  {
    nombre: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "equipos",
  }
);

module.exports = Equipo;
