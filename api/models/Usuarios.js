const S = require("sequelize");
const db = require("../config/db");

class Usuario extends S.Model {}

Usuario.init(
  {
    nombre: { type: S.STRING },
    apellido: { type: S.STRING },
    domicilio: { type: S.STRING },
    documento: { type: S.INTEGER },
    telefono: { type: S.INTEGER },
    fechaDeNacimiento: { type: S.DATEONLY },
    tipo: { type: S.BOOLEAN },
    residencia: { type: S.STRING },
    eMail: { type: S.STRING },
    contrasena: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "usuarios",
  }
);

module.exports = Usuario;
