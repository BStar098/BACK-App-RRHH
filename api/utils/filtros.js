const perfilCompleto = (obj) => {
  return {
    perfil: {
      id: obj.id,
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

const perfil = (obj) => ({
  id: obj.id,
  tipo: obj.tipo,
  activo: obj.activo,
  nombre: obj.nombre,
  apellido: obj.apellido,
  domicilio: obj.domicilio,
  documento: obj.documento,
  telefono: obj.telefono,
  fechaDeNacimiento: obj.fechaDeNacimiento,
  eMail: obj.eMail,
});

const filtroUsuarios = (array) =>{
  return array.map((obj) => ({
    id: obj.id,
    tipo: obj.tipo,
    activo: obj.activo,
    nombre: obj.nombre,
    apellido: obj.apellido,
    domicilio: obj.domicilio,
    documento: obj.documento,
    telefono: obj.telefono,
    fechaDeNacimiento: obj.fechaDeNacimiento,
    eMail: obj.eMail,
    equipo: obj.equipo,
    oficina: obj.oficina,
    datosLaborale: obj.datosLaborale,
    novedades: obj.novedades,
  }))
}

const filtroNovedad = (array) =>{
  return array.map((obj) => ({
    id: obj.id,
    tipoDeNovedad: obj.tipoDeNovedad,
    fecha: obj.fecha,
    fechaDeInicio: obj.fechaDeInicio,
    fechaDeFin: obj.fechaDeFin,
    cantidadDias: obj.cantidadDias,
    cantidadHoras: obj.cantidadHoras,
    observacion: obj.observacion,
    certificado: obj.certificado,
    autorizadoPor: obj.autorizadoPor,
    usuario: perfil(obj.usuario),
  }))
}

module.exports = { perfilCompleto, perfil, filtroUsuarios, filtroNovedad };
