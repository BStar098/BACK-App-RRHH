const DatosLaborales = require("./DatosLaborales");
const Equipo = require("./Equipos");
const Novedad = require("./Novedades");
const Oficina = require("./Oficinas");
const Usuarios = require("./Usuarios");
const Asistencia = require("./Asistencias");

Usuarios.hasOne(DatosLaborales);
DatosLaborales.belongsTo(Usuarios);

Usuarios.hasMany(Novedad);
Novedad.belongsTo(Usuarios);

Equipo.hasMany(Usuarios);
Usuarios.belongsTo(Equipo);

Oficina.hasMany(Usuarios); 
Usuarios.belongsTo(Oficina);

Usuarios.hasMany(Asistencia);
Asistencia.belongsTo(Usuarios);

module.exports = { DatosLaborales, Equipo, Novedad, Oficina, Usuarios, Asistencia };
