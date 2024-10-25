// Generated by https://quicktype.io

export interface EtapasPorProyectoResponse {
    data:          EtapasPorProyectoData;
    success:       boolean;
    message:       null;
    transactionId: null;
}

export interface EtapasPorProyectoData {
    numProyecto: number;
    fechaIni:    string;
    fechaFin:    string;
    etapas:      Etapa[];
}

export interface Etapa {
    idFase:    number;
    orden:     number;
    fase:      string;
    fechaIni:  string;
    fechaFin:  string;
    empleados: Empleado[];
}

export interface Empleado {
    id:                 number;
    idFase:             number;
    numempleadoRrHh:    string;
    empleado:           string;
    fechas:             Fecha[];
    aplicaTodosMeses:   boolean;
    fee:                number;
    cantidad:           number;
    Puesto:             string;
    reembolsable:       boolean;
}

export interface Fecha {
    id:         number;
    mes:        number;
    anio:       number;
    porcentaje: number;
    mesTranscurrido: number;
}

export interface ProyectoPorIDResponse {
    data:          Proyecto[];
    success:       boolean;
    message:       null;
    transactionId: null;
}

export interface Proyecto {
    nunum_proyecto:                   number;
    chproyecto:                       string;
    chalcance:                        string;
    chcp:                             string;
    chciudad:                         string;
    nukidpais:                        number;
    chpais:                           string;
    nukidestatus:                     number;
    chestatus:                        string;
    nukidsector:                      number;
    chsector:                         string;
    nukidtipo_proyecto:               number;
    chtipo_proyecto:                  string;
    nukidresponsable_preconstruccion: number | null;
    chresponsable_preconstruccion:    string | null;
    nukidresponsable_construccion:    number | null;
    chresponsable_construccion:       string | null;
    nukidresponsable_ehs:             number | null;
    chresponsable_ehs:                string | null;
    nukidresponsable_supervisor:      number | null;
    chresponsable_supervisor:         string | null;
    nukidcliente:                     number;
    chcliente:                        string;
    nukidempresa:                     number;
    chempresa:                        string;
    nukiddirector_ejecutivo:          number;
    chdirector_ejecutivo:             string;
    nucosto_promedio_m2:              number;
    dtfecha_ini:                      string;
    dtfecha_fin:                      string | null;
    nunum_empleado_rr_hh:             null;
    empleado:                         null;
    nuporcantaje_participacion:       null;
    chalias_puesto:                   null;
    chgrupo_proyecto:                 null;
    chcontacto_nombre?:               string;
    chcontacto_posicion?:             string;
    chcontacto_telefono?:             string;
    chcontacto_correo?:               string;
    clientes:                         ClientePcs[];
    impuesto_nomina:                  number;
    nukidunidadnegocio:               string;
    chunidadnegocio:                  string;
}

export interface ClientePcs {
    idCliente:  number,
    cliente:    string,
    rfc:        string
}

export interface GastosIngresosSeccionesResponse {
    data:          GastosIngresosSeccionesData;
    success:       boolean;
    message:       null;
    transactionId: null;
}

export interface GastosIngresosSeccionesData {
    numProyecto: number;
    fechaIni:    string;
    fechaFin:    string;
    secciones:   GastosIngresosSecciones[];
    totales:   GastosIngresosTotales[];
}

export interface GastosIngresosSecciones {
    idSeccion: number;
    codigo:    string;
    seccion:   string;
    rubros:    Rubro[];
    sumaFechas:    SumaFecha[];
    
}

export interface GastosIngresosTotales {
    reembolsable:     boolean;
    mes:        number;
    anio:       number;
    totalPorcentaje: number;
    
}

export interface Rubro {
    idRubro:          number;
    rubro:            string;
    unidad:           string;
    cantidad:         number;
    reembolsable:     boolean;
    aplicaTodosMeses: boolean;
    fechas:           Fecha[];
    numEmpleadoRrHh:    string;
    numProyecto:      number;
    costoMensual:         number;
}

export interface SumaFecha {
    mes:        number;
    anio:       number;
    sumaPorcentaje: number;
}



export interface GastosIngresosControlResponse {
    data:          GastosIngresosControlData;
    success:       boolean;
    message:       null;
    transactionId: null;
}

export interface GastosIngresosControlData {
    salarios: Salarios;
    viaticos: Salarios;
    gastos:   Gastos;
}

export interface Gastos {
    previstos: Previsto[];
    reales:    Previsto[];
}

export interface Previsto {
    subTotal:   number;
    sumaFechas: SumaFechas[];
}

export interface SumaFechas {
    rubro:          string;
    mes:            number;
    anio:           number;
    sumaPorcentaje: number;
}

export enum Rubross {
    BonoDeProyecto = "Bono de proyecto",
    Combustibles = "Combustibles",
    Comidas = "Comidas",
    Contingencias = "Contingencias",
    Hospedaje = "Hospedaje",
    LeasingDeAutos = "Leasing de autos",
    MantenimientoAutomoviles = "Mantenimiento automoviles",
    MesInicioEfectoDeInflaciónAnual = "(<Mes inicio) Efecto de inflación anual",
    Otros = "Otros",
    Peajes = "Peajes",
    ProvisionSalarios = "Provision Salarios",
    RentaDeAutosProvision = "Renta de autos (provision)",
    ReversiónProvisiónDeBonos = "Reversión provisión de bonos",
    TransportacionForaneaAutobusVuelos = "Transportacion Foranea (Autobus, Vuelos)",
    TransportacionLocalTaxisUber = "Transportacion Local (Taxis, Uber)",
    UsoAutomovilEmpleado = "Uso automovil empleado",
}

export interface Salarios {
    rubro:    null;
    previsto: Previsto;
    real:     Previsto;
}

export const encabezadosEmpleado = Object.freeze([
    // {id: 'id', label: 'Id'},
    {id: 'numEmpleadoRrHh', label: 'Número de empleado RRHH'},
    {id: 'nombreCompletoEmpleado', label: 'Empleado'},
    {id: 'costoMensualEmpleado', label: 'Costo Mensual'},
  ])

  export interface OpcionEmpleado {
    name: string,
    code: string
  }

  export const encabezadosStaffing = Object.freeze([
    // {id: 'id', label: 'Id'},
    //{id: 'numProyecto', label: 'Numero de proyecto'},
    //{id: 'proyecto', label: 'Proyecto'},
    {id: 'bandera', label: 'Bandera'},
    {id: 'fases', label: 'Fases'},
    {id: 'fechaIni', label: 'Fecha Inicial'},
    {id: 'fechaFin', label: 'Fecha Final'},    
    {id: 'numempleado', label: 'Numero Empleado'},
    {id: 'empleado', label: 'Empleado'},
    {id: 'costo', label: 'Costo'},
    {id: 'costoVenta', label: 'Costo de Venta'},
  ])


  export const encabezadosGastos = Object.freeze([
    // {id: 'id', label: 'Id'},
    //{id: 'numProyecto', label: 'Numero de proyecto'},
    //{id: 'proyecto', label: 'Proyecto'},
    {id: 'idseccion', label: 'Id Seccion'},
    {id: 'seccion', label: 'Seccion'},
    {id: 'unidad', label: 'unidad'}, 
    {id: 'cantidad', label: 'Cantidad'}, 
    {id: 'rembolsable', label: 'Rembolsable'}, 
  ])

  export interface puesto {
    nukid_puesto: number;
    nukidnivel: number;
    chpuesto:       string;
    nusalario_min:   string;
    nusalario_max:   string;
    nusalario_prom:   string;
    boactivo:    boolean;
}

export interface SeccionOpcion {
    titulo: string;
    slug:   string;
}

export interface SeccionRespuesta {
    data:          SeccionData;
    success:       boolean;
    message:       null;
    transactionId: null;
}

export interface SeccionData {
    seccion:            string;
    hasChildren:        boolean;
    previsto?:          SeccionRegistro;
    real?:              SeccionRegistro;
    subsecciones?:      SeccionSubseccion[];
}

export interface SeccionSubseccion {
    hasChildren?:   boolean;
    slug:           string;
    seccion:        string;
    previsto:       SeccionRegistro;
    real:           SeccionRegistro;
}

export interface SeccionRegistro {
    seccion?:   string;
    slug?:      string;
    subTotal:   number;
    fechas:     SeccionFecha[];
}

export interface SeccionFecha {
    mes:        number;
    anio:       number;
    porcentaje: number;
}

export interface SeccionFormateada {
    hasChildren:    boolean;
    seccion:        string;
    encabezados:    string[]; 
    registros:      string[]
}