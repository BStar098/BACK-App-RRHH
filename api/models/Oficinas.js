const S = require("sequelize");
const db = require("../config/db");

class Oficina extends S.Model {}

Oficina.init(
  {
    pais: { type: S.STRING },
    ciudad: { type: S.STRING },
    direccion: {type: S.STRING}
  },
  {
    sequelize: db,
    modelName: "oficinas",
  }
);

module.exports = Oficina;
