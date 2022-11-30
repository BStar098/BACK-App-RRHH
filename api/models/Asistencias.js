const S = require("sequelize");
const db = require("../config/db");

class Asistencia extends S.Model {
  static async verificarAsistencia(usuarioId, fecha) {
    const asistencias = await Asistencia.findAll({ where: { usuarioId } });
    let fichajesDeSalida = 0;
    asistencias.map((asistencia) => {
      if (asistencia.fecha.startsWith(fecha)) {
        fichajesDeSalida++;
        console.log(fichajesDeSalida)
      }
    });
    return fichajesDeSalida >= 2;
  }
}

Asistencia.init(
  {
    check: { type: S.BOOLEAN },
    fecha: { type: S.STRING },
    horaDeIngreso: { type: S.STRING },
    horaDeSalida: { type: S.STRING },
  },
  {
    sequelize: db,
    modelName: "asistencias",
  }
);

module.exports = Asistencia;
