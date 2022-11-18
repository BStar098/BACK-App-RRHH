const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt")

class Usuario extends S.Model {}

Usuario.init(
  {
    tipo: { type: S.BOOLEAN, defaultValue: false },
    nombre: { type: S.STRING },
    apellido: { type: S.STRING },
    domicilio: { type: S.STRING },
    documento: { type: S.BIGINT },
    telefono: { type: S.BIGINT },
    fechaDeNacimiento: { type: S.DATEONLY },
    nacionalidad: { type: S.STRING },
    eMail: { type: S.TEXT },
    contrasena: { type: S.STRING },
    salt: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "usuarios",
  }
);

//METODOS DE INSTANCIA
Usuario.prototype.hash = function (contrasena, salt) {
  return bcrypt.hash(contrasena, salt);
};

Usuario.prototype.validacionConstrasena = function (contrasena) {
  return this.hash(contrasena, this.salt).then((hash) => hash === this.contrasena);
};

//HOOKS
Usuario.addHook("beforeCreate", (usuario, options) => {
  const salt = bcrypt.genSaltSync(8);
  usuario.salt = salt;

  return usuario.hash(usuario.contrasena, salt)
  .then((hast) => usuario.contrasena = hast);
});

module.exports = Usuario;
