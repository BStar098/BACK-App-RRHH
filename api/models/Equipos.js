const S = require("sequelize");
const db = require("../conf/db");

class Equipo extends S.Model {}

Equipo.init(
  {
    equipo: { type: S.STRING },
    turno: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "equipos",
  }
);

module.exports = Equipo;
