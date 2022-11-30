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
    perfilBasico: {
      Nombre: `${obj.nombre} ${obj.apellido}`,
      Puesto: obj.datosLaborale.puesto,
      Oficina: obj.oficina.pais,
      Turno: obj.datosLaborale.turno,
      Estado: obj.activo,
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

const filtroUsuarios = (array) => {
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

  }));
};


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
    estado: obj.estado,
    usuario: {
      perfil: perfil(obj.usuario),
      equipo: obj.usuario.equipo
    },
  }))
}

module.exports = { perfilCompleto, perfil, filtroUsuarios, filtroNovedad };
