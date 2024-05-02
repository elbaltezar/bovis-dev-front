// Generated by https://quicktype.io

export interface CostosEmpleadoResponse {
  data:          CostoEmpleado[];
  success:       boolean;
  message:       null;
  transactionId: null;
}

export interface CostoEmpleado {
  idCosto:                        number;
  numEmpleadoRrHh:                string;
  nuAnno:                         number;
  nuMes:                          number;
  numEmpleadoNoi:                 number;
  idpersona:                      number;
  nombrePersona:                  number;
  reubicacion:                    string;
  idpuesto:                       number;
  puesto:                         string;
  numProyecto:                    number;
  proyecto:                       string;
  idUnidadNegocio:                number;
  unidadNegocio:                  string;
  idEmpresa:                      number;
  Empresa:                        string;
  timesheet:                      string;
  idEmpleadoJefe:                 string;
  nombreJefe:                     string;
  fechaIngreso:                   string;
  antiguedad:                     number;
  avgDescuentoEmpleado:           number;
  montoDescuentoMensual:          number;
  sueldoNetoPercibidoMensual:     number;
  retencionImss:                  number;
  ispt:                           number;
  sueldoBrutoInflacion:           number;
  anual:                          number;
  aguinaldoCantMeses:             number;
  aguinaldoMontoProvisionMensual: number;
  pvDiasVacasAnuales:             number;
  pvProvisionMensual:             number;
  indemProvisionMensual:          number;
  avgBonoAnualEstimado:           number;
  bonoAnualProvisionMensual:      number;
  sgmmCostoTotalAnual:            number;
  sgmmCostoMensual:               number;
  svCostoTotalAnual:              number;
  svCostoMensual:                 number;
  vaidCostoMensual:               number;
  vaidComisionCostoMensual:       number;
  ptuProvision:                   number;
  beneficios:                     null;
  impuesto3sNomina:               number;
  imss:                           number;
  retiro2:                        number;
  cesantesVejez:                  number;
  infonavit:                      number;
  cargasSociales:                 number;
  costoMensualEmpleado:           number;
  costoMensualProyecto:           number;
  costoAnualEmpleado:             number;
  indiceCostoLaboral:             number;
  indiceCargaLaboral:             number;
  fechaActualizacion:             string;
  regHistorico:                   boolean;
  ciudad:                         string;
  costoSalarioBruto:              number;
  costoSalarioNeto:               number;
  empresa:                        string;
  aguinaldoCantidadMeses:         number;
  nombreCompletoEmpleado:         string;
  salarioDiarioIntegrado:         number;
  
}

export const encabezados = Object.freeze([
  // {id: 'id', label: 'Id'},
  {id: 'numEmpleadoRrHh', label: 'Número de empleado RRHH'},
  {id: 'numEmpleadoNoi', label: 'Número de empleado NOI'},
  {id: 'nombreCompletoEmpleado', label: 'Nombre'},
  {id: 'ciudad', label: 'Ciudad base de trabajo'},
  {id: 'puesto', label: 'Puesto'},
  {id: 'numProyecto', label: 'Proyecto'},
  {id: 'sueldoBruto', label: 'Sueldo bruto (inflación %)'},
  {id: 'cargasSociales', label: 'Cargas Sociales'},
  {id: 'costoMensualEmpleado', label: 'Costo Mensual Empleado'},
  {id: 'unidadNegocio', label: 'Unidad de negocio'},
  {id: 'empresa', label: 'Empresa'},
  {id: 'nombreJefe', label: 'Nombre del Jefe'},
  {id: 'fechaIngreso', label: 'Fecha de ingreso'},
  {id: 'antiguedad', label: 'Antiguedad'},
  {id: 'avgDescuentoEmpleado', label: 'Descuento empleado'},
  {id: 'montoDescuentoMensual', label: 'Descuento Mensual'},
  {id: 'sueldoNetoPercibidoMensual', label: 'Sueldo neto mensual'},
  {id: 'retencionImss', label: 'Retencion IMMS'},
  {id: 'ispt', label: 'ispt'},
  {id: 'sueldoBrutoInflacion', label: 'sueldo Bruto Inflacion'},
  {id: 'anual', label: 'anual'},
  {id: 'aguinaldoCantidadMeses', label: 'aguinaldo Cantidad Meses'},
  {id: 'aguinaldoMontoProvisionMensual', label: 'aguinaldo Monto Provision Mensual'},
  {id: 'pvDiasVacasAnuales', label: 'pvDiasVacasAnuales'},
  {id: 'pvProvisionMensual', label: 'pvProvisionMensual'},
  {id: 'indemProvisionMensual', label: 'indemProvisionMensual'},
  {id: 'avgBonoAnualEstimado', label: 'avgBonoAnualEstimado'},
  {id: 'bonoAnualProvisionMensual', label: 'bonoAnualProvisionMensual'},
  {id: 'sgmmCostoTotalAnual', label: 'sgmmCostoTotalAnual'},
  {id: 'sgmmCostoMensual', label: 'sgmmCostoMensual'},
  {id: 'svCostoTotalAnual', label: 'svCostoTotalAnual'},
  {id: 'svCostoMensual', label: 'svCostoMensual'},
  {id: 'vaidCostoMensual', label: 'vaidCostoMensual'},
  {id: 'vaidComisionCostoMensual', label: 'vaidComisionCostoMensual'},
  {id: 'ptuProvision', label: 'ptuProvision'},
  {id: 'impuesto3sNomina', label: 'impuesto3sNomina'},
  {id: 'imss', label: 'imss'},
  {id: 'retiro2', label: 'retiro2'},
  {id: 'cesantesVejez', label: 'cesantesVejez'},
  {id: 'infonavit', label: 'infonavit'},
  {id: 'cargasSociales', label: 'cargasSociales'},
  {id: 'costoMensualEmpleado', label: 'costoMensualEmpleado'},
  {id: 'costoMensualProyecto', label: 'costoMensualProyecto'},
  {id: 'costoAnualEmpleado', label: 'costoAnualEmpleado'},
  {id: 'costoSalarioBruto', label: 'costoSalarioBruto'},
  {id: 'costoSalarioNeto', label: 'costoSalarioNeto'},
  {id: 'nuAnno', label: 'nuAnno'},
  {id: 'nuMes', label: 'nuMes'},
  {id: 'salarioDiarioIntegrado', label: 'salarioDiarioIntegrado'}
  
])

