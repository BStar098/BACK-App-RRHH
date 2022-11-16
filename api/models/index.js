const DatosLaborales = require("../models/DatosLaborales");
const Equipos = require("../models/Equipos");
const Novedades = require("../models/Novedades");
const Oficinas = require("../models/Oficinas");
const Usuarios = require("../models/Usuarios");

Usuarios.belongsTo(DatosLaborales);
DatosLaborales.hasMany(Usuarios);

Usuarios.belongsToMany(Novedades, { through: "historial" });
Novedades.belongsToMany(Usuarios, { through: "historial" });

Usuarios.belongsTo(Equipos);
Equipos.hasMany(Usuarios);

Equipos.belongsTo(Oficinas);
Oficinas.hasMany(Equipos);

module.exports = { DatosLaborales, Equipos, Novedades, Oficinas, Usuarios };
