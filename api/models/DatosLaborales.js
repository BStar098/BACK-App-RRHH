const S = require("sequelize");
const db = require("../config/db");

class DatosLaborales extends S.Model {}

DatosLaborales.init(
  {
    fechaDeIngreso: { type: S.DATEONLY },
    puesto: { type: S.STRING },
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
  const datos = datosLaborales;

  if (datos.puesto === "empleado" || "Empleado") return datos.jerarquia = 8

  if (datos.puesto === "coordinador regional") return datos.jerarquia = 7;

  if (datos.puesto === "jefe pais" || "Jefe Pais") return datos.jerarquia = 6;

  if (datos.puesto === "jefe regional" || "Jefe Regional") return datos.jerarquia = 5;

  if (datos.puesto === "gerente pais" || "Gerente Pais") return datos.jerarquia = 4;

  if (datos.puesto === "rrhh pais" || "RRHH Pais") return datos.jerarquia = 3;

  if (datos.puesto === "gerente regional" || "Gerente Regional") return datos.jerarquia = 2;

  if (datos.puesto === "gerente general" || "Gerente General") return datos.jerarquia = 1;
});

module.exports = DatosLaborales;
