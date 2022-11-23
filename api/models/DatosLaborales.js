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
    "gerente general": (datosLaborales.jerarquia = 1),
    "gerente regional": (datosLaborales.jerarquia = 2),
    "rrhh pais": (datosLaborales.jerarquia = 3),
    "gerente pais": (datosLaborales.jerarquia = 4),
    "jefe regional": (datosLaborales.jerarquia = 5),
    "jefe pais": (datosLaborales.jerarquia = 6),
    "coordinador regional": (datosLaborales.jerarquia = 7),
    empleado: (datosLaborales.jerarquia = 8),
  };
  const asignarNumero = JERARQUIA[datosLaborales.puesto];
  return (datosLaborales.jerarquia = asignarNumero);
});

module.exports = DatosLaborales;
