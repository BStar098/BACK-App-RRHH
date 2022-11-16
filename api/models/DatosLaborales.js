const S = require("sequelize");
const db = require("../conf/db");

class DatosLaborales extends S.Model {}

DatosLaborales.init(
  {
    fechaDeIngreso: { type: S.DATEONLY },
    puesto: { type: S.STRING },
    diasLaborales: { type: S.INTEGER },
    horariosLaborales: { type: S.STRING },
    observaciones: { type: S.TEXT },
  },
  {
    sequelize: db,
    modelName: "datosLaborales",
  }
);

module.exports = DatosLaborales;
