const perfilUsuario = (obj) => {
  return {
    perfil: {
      nombreYapellido: `${obj.nombre} ${obj.apellido}`,
      domicilio: obj.domicilio,
      documento: obj.documento,
      telefono: obj.telefono,
      fechaDeNacimiento: obj.fechaDeNacimiento,
      eMail: obj.eMail,
    },
    datosLaborales: {
      fechaDeIngreso: obj.datosLaborale.fechaDeIngreso,
      puesto: obj.datosLaborale.puesto,
      equipo: obj.equipo.nombre,
      turno: obj.datosLaborale.turno,
      oficina: obj.oficina.pais,
      diasLaborales: obj.datosLaborale.diasLaborales,
      horarioLaboral: obj.datosLaborale.horarioLaboral,
      observaciones: obj.datosLaborale.observaciones,
    },
  };
};

module.exports = { perfilUsuario };
