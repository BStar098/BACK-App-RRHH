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
  const datos = datosLaborales.puesto;
  switch (datos) {
    case "empleado":
      datosLaborales.jerarquia = 8;
      break;
    case "coordinador regional":
      datosLaborales.jerarquia = 7;
      break;
    case "jefe pais":
      datosLaborales.jerarquia = 6;
      break;
    case "jefe regional":
      datosLaborales.jerarquia = 5;
      break;
    case "gerente pais":
      datosLaborales.jerarquia = 4;
      break;
    case "rrhh pais":
      datosLaborales.jerarquia = 3;
      break;
    case "gerente regioanal":
      datosLaborales.jerarquia = 2;
      break;
    case "gerente general":
      datosLaborales.jerarquia = 1;
      break;
    default:
      datosLaborales.jerarquia = 0;
      break;
  }
});

module.exports = DatosLaborales;
