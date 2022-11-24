const S = require("sequelize");
const db = require("../config/db");

class Novedad extends S.Model {}

Novedad.init(
  {
    tipoDeNovedad: { type: S.STRING },
    fecha: { type: S.DATEONLY },
    fechaDeInicio: { type: S.DATEONLY },
    fechaDeFin: { type: S.DATEONLY },
    cantidadDias: { type: S.INTEGER },
    cantidadHoras: { type: S.INTEGER },
    observacion: { type: S.TEXT },
    certificado: { type: S.TEXT },
    estado: { type: S.STRING, defaultValue: "Pendiente" },
  },
  {
    sequelize: db,
    modelName: "novedades",
  }
);

module.exports = Novedad;
