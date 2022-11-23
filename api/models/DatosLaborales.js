const S = require("sequelize");
const db = require("../config/db");

class DatosLaborales extends S.Model {}

DatosLaborales.init(
  {
    fechaDeIngreso: { type: S.DATEONLY },
    puesto: {
      type: S.STRING,
      get() {
        const data = this.getDataValue("puesto");
        return data.toLowerCase();
      },
    },
    diasLaborales: { type: S.STRING },
    horarioLaboral: { type: S.STRING },
    observaciones: { type: S.TEXT },
    jerarquia: { type: S.INTEGER },
  },
  {
    sequelize: db,
    modelName: "datosLaborales",
  }
);
//HOOKS
DatosLaborales.addHook("beforeCreate", (datosLaborales, options) => {
  const JERARQUIA = {
    "gerente general": 1,
    "gerente regional": 2,
    "rrhh pais": 3,
    "gerente pais": 4,
    "jefe regional": 5,
    "jefe pais": 6,
    "coordinador regional": 7,
    empleado: 8,
  };
  const asignarNumero = JERARQUIA[datosLaborales.puesto];
  return (datosLaborales.jerarquia = asignarNumero);
});

module.exports = DatosLaborales;
