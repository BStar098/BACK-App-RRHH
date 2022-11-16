const S = require("sequelize");
const db = require("../conf/db");

class Novedad extends S.Model {}

Novedad.init(
  {
    tipoDeNovedad: { type: S.STRING },
    fechaDeInicio: { type: S.DATEONLY },
    fechaDeFin: { type: S.DATEONLY },
    observacion: { type: S.TEXT },
    certificado: { type: S.TEXT },
    estado: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "novedades",
  }
);

module.exports = Novedad;
