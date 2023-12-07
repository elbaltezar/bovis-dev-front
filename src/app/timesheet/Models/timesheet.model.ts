// Generated by https://quicktype.io

export interface CatEmpleadoResponse {
  data:          Empleado[];
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface Empleado {
  nunum_empleado_rr_hh:     number;
  nukidpersona:             number;
  nombre_persona:           string;
  nukidtipo_empleado:       number;
  nukidcategoria:           number;
  nukidtipo_contrato:       number;
  chcve_puesto:             number;
  nukidempresa:             number;
  nukidciudad:              number;
  nukidnivel_estudios:      number;
  nukidforma_pago:          number;
  nukidjornada:             number;
  nukiddepartamento:        number;
  nukidclasificacion:       number;
  nukidjefe_directo:        number;
  nukidunidad_negocio:      number;
  nukidtipo_contrato_sat:   number;
  nunum_empleado:           number;
  dtfecha_ingreso:          string;
  dtfecha_salida:           string;
  dtfecha_ultimo_reingreso: string;
  chnss:                    number;
  chemail_bovis:            string;
  chexperiencias:           null | string;
  chhabilidades:            null | string;
  churl_repositorio:        null | string;
  nusalario:                number;
  chprofesion:              string;
  nuantiguedad:             number;
  chturno:                  string;
  nuunidad_medica:          number;
  chregistro_patronal:      string;
  chcotizacion:             null | string;
  nuduracion:               number;
  boactivo:                 boolean;
  bodescuento_pension:      boolean;
  nuporcentaje_pension:     number;
  nufondo_fijo:             number;
  nucredito_infonavit:      number;
  chtipo_descuento:         null | string;
  nuvalor_descuento:        number;
  nuno_empleado_noi:        number;
  chrol:                    null;
}

export interface DiasHabilesResponse {
  data:          DiasHabiles;
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface DiasHabiles {
  id:           number;
  mes:          number;
  dias:         number;
  feriados:     number;
  sabados:      number;
  anio:         number;
  dias_habiles: number;
}

export interface EmpleadoProyectoResponse {
  data:          EmpleadoProyecto[];
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface EmpleadoProyecto {
  nunum_proyecto:                   number;
  chproyecto:                       string;
  chalcance:                        string;
  chcp:                             string;
  chciudad:                         string;
  nukidestatus:                     number;
  nukidsector:                      number;
  nukidtipo_proyecto:               number;
  nukidresponsable_preconstruccion: number;
  nukidresponsable_construiccion:   number;
  nukidresponsable_ehs:             number;
  nukidresponsable_supervisor:      number;
  nukidcliente:                     number;
  nukidempresa:                     number;
  nukidpais:                        number;
  nukiddirector_ejecutivo:          number;
  nucosto_promedio_m2:              number;
  dtfecha_ini:                      string;
  dtfecha_fin:                      string;
  nunum_empleado_rr_hh:             number;
  nuporcantaje_participacion:       number;
  chalias_puesto:                   string;
  chgrupo_proyecto:                 string;
}

export interface CargarHorasResponse {
  data:          null;
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface EmpleadoInfoResponse {
  data:          EmpleadoResumido;
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface EmpleadoResumido {
  nukid_empleado: number;
  chnombre:       string;
  chap_paterno:   string;
  chap_materno:   string;
}

export type SabadosOpciones = 'SI' | 'NO'

export interface TimesheetsPorEmpleadoResponse {
  data:          Timesheet[];
  success:       boolean;
  message:       null;
  transactionId: null;
}

// Generated by https://quicktype.io

export interface TimesheetsPorFechaResponse {
  data:          Timesheet[];
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface TimesheetPorIdResponse {
  data:          Timesheet;
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface Timesheet {
  id:             number;
  id_empleado:    number;
  mes:            number;
  anio:           number;
  id_responsable: number;
  sabados:        boolean;
  dias_trabajo:   number;
  empleado?:      string;
  responsable?:   string;
  coi_empresa?:   number,
  noi_empresa?:   number,
  noi_empleado?:  number,
  num_empleado?:  number,
  otros:          Otro[];
  proyectos:      Proyecto[];
}

export interface Otro {
  idTimesheet_Otro: number;
  idTimeSheet:      number;
  descripcion:      otroOpciones;
  dias:             number;
  tDedicacion:      number;
  activo:           boolean;
}

export interface Proyecto {
  idTimesheet_Proyecto: number;
  idTimesheet:          number;
  idProyecto:           number;
  descripcion:          string;
  dias:                 number;
  tDedicacion:          number;
  costo:                number;
  activo:               boolean;
}

// Generated by https://quicktype.io

export interface TsProyectosResponse {
  data:          TSProyecto[];
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface TSProyecto {
  numProyecto:                  number;
  nombre:                       string;
  alcance:                      string;
  cp:                           string;
  ciudad:                       string;
  idEstatus:                    number;
  idSector:                     number;
  idTipoProyecto:               number;
  idResponsablePreconstruccion: number;
  idResponsableConstruccion:    number;
  idResponsableEhs:             number;
  idResponsableSupervisor:      number;
  idCliente:                    number;
  idEmpresa:                    number;
  idPais:                       number;
  idDirectorEjecutivo:          number;
  costoPromedioM2:              number;
  fechaIni:                     string;
  fechaFin:                     string;
}


export type otroOpciones = 'feriado' | 'vacaciones' | 'permiso' | 'incapacidad' | 'inasistencia' | 'capacitación'