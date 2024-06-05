import { Component, OnInit, inject } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ICatalogo, ICatalogoCliente, ICatalogoCombos, IEmpleado, IEmpleadoNew } from '../../models/ip';
import { CatalogosService } from '../../services/catalogos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PcsService } from '../../services/pcs.service';
import { TITLES, errorsArray } from 'src/utils/constants';
import { SharedService } from 'src/app/shared/services/shared.service';
import { finalize } from 'rxjs';
import { differenceInMonths, format } from 'date-fns';
import { Proyecto } from '../../models/pcs.model';
import { Opcion } from 'src/models/general.model';
import { CieService } from 'src/app/cie/services/cie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers: [MessageService]
})
export class IpComponent implements OnInit {

  isConsulta: boolean = false;

  catSectores: ICatalogoCombos[] = [];
  catPaises: ICatalogoCombos[] = [];
  catClientes: ICatalogoCombos[] = [];
  catEstatusProyecto: ICatalogoCombos[] = [];
  catEmpleados: Opcion[] = []

  listCatSectores: Array<ICatalogo> = [];
  listCatPaises: Array<ICatalogo> = [];
  listCatClientes: Array<ICatalogoCliente> = [];
  listCatEstatusProyecto: Array<ICatalogo> = [];
  listEmpleados: Array<IEmpleadoNew> = [];
  empresas: Opcion[] = []

  proyecto: Proyecto = null
  cargando: boolean = true
  mostrarFormulario: boolean = false
  idproyecto: number;

  form = this.fb.group({
    num_proyecto: ['', [Validators.required]],
    nombre_proyecto: ['', [Validators.required]],
    alcance: [null],
    codigo_postal: [null],
    ciudad: [null],
    id_pais: [null],
    id_estatus: [null],
    id_sector: [null],
    id_tipo_proyecto: [null],
    id_responsable_preconstruccion: [null],
    id_responsable_construccion: [null],
    id_responsable_ehs: [null],
    id_responsable_supervisor: [null],
    ids_clientes: [[''], [Validators.required]],
    id_empresa: ['', [Validators.required]],
    id_director_ejecutivo: ['', [Validators.required]],
    costo_promedio_m2: [null],
    fecha_inicio: [null],
    fecha_fin: [null],
    total_meses: [0],
    nombre_contacto: [null],
    posicion_contacto: [null],
    telefono_contacto: [null],
    correo_contacto: [null],
    impuesto_nomina: [0, [Validators.required]]
  })
  
  constructor(private config: PrimeNGConfig, private catServ: CatalogosService, private fb: FormBuilder, private pcsService: PcsService, private messageService: MessageService, private sharedService: SharedService, private cieService: CieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  catalogosService = inject(CatalogosService)

  ngOnInit(): void {
    this.poblarCombos();
    this.getConfigCalendar();
    this.pcsService.cambiarEstadoBotonNuevo(true)
    this.catalogosService.obtenerParametros()
      .subscribe(params => {

        if (!params.proyecto) {
          this.proyecto = null
          this.cargando = false
          this.form.reset()

          console.log("params.proyecto:" + params.proyecto)
        }else{
          this.idproyecto = params.proyecto
          console.log("else params.proyecto:" + params.proyecto)

          this.mostrarFormulario = true
      // this.sharedService.cambiarEstado(true)
      // this.cargando = true
      this.pcsService.obtenerProyectoPorId(this.idproyecto)
        .pipe(finalize(() => {
          // this.sharedService.cambiarEstado(false)
          this.cargando = false
        }))
        .subscribe({
          next: ({ data }) => {
            //console.log(data)
            if (data.length >= 0) {
              const [proyectoData] = data
              const ids_clientes = proyectoData.clientes.map(cliente => cliente.idCliente.toString())
              this.form.patchValue({
                num_proyecto: proyectoData.nunum_proyecto.toString(),
                nombre_proyecto: proyectoData.chproyecto.toString(),
                alcance: proyectoData.chalcance.toString(),
                codigo_postal: proyectoData.chcp,
                ciudad: proyectoData.chciudad,
                id_pais: proyectoData.nukidpais,
                id_estatus: proyectoData.nukidestatus,
                id_sector: proyectoData.nukidsector,
                id_tipo_proyecto: proyectoData.nukidtipo_proyecto,
                id_responsable_preconstruccion: proyectoData.nukidresponsable_preconstruccion,
                id_responsable_construccion: proyectoData.nukidresponsable_construccion,
                id_responsable_ehs: proyectoData.nukidresponsable_ehs,
                id_responsable_supervisor: proyectoData.nukidresponsable_supervisor,
                ids_clientes,
                id_empresa: proyectoData.nukidempresa.toString(),
                id_director_ejecutivo: proyectoData.nukiddirector_ejecutivo.toString(),
                costo_promedio_m2: proyectoData.nucosto_promedio_m2,
                fecha_inicio: proyectoData.dtfecha_ini != '' ? new Date(proyectoData.dtfecha_ini) as any : null,
                fecha_fin: proyectoData.dtfecha_fin != '' ? new Date(proyectoData.dtfecha_fin) as any : null,
                nombre_contacto: proyectoData.chcontacto_nombre,
                posicion_contacto: proyectoData.chcontacto_posicion,
                telefono_contacto: proyectoData.chcontacto_telefono,
                correo_contacto: proyectoData.chcontacto_correo,
                impuesto_nomina: proyectoData.impuesto_nomina
                
              })
              this.actualizarTotalMeses()
            }
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: TITLES.error, detail: err.error })
        })
        }
      })

     if (this.idproyecto){
      console.log("Entro al this.idproyecto " + this.idproyecto)
      this.mostrarFormulario = true
      // this.sharedService.cambiarEstado(true)
      // this.cargando = true
      this.pcsService.obtenerProyectoPorId(this.idproyecto)
        .pipe(finalize(() => {
          // this.sharedService.cambiarEstado(false)
          this.cargando = false
        }))
        .subscribe({
          next: ({ data }) => {
            //console.log(data)
            if (data.length >= 0) {
              const [proyectoData] = data
              const ids_clientes = proyectoData.clientes.map(cliente => cliente.idCliente.toString())
              this.form.patchValue({
                num_proyecto: proyectoData.nunum_proyecto.toString(),
                nombre_proyecto: proyectoData.chproyecto.toString(),
                alcance: proyectoData.chalcance.toString(),
                codigo_postal: proyectoData.chcp,
                ciudad: proyectoData.chciudad,
                id_pais: proyectoData.nukidpais,
                id_estatus: proyectoData.nukidestatus,
                id_sector: proyectoData.nukidsector,
                id_tipo_proyecto: proyectoData.nukidtipo_proyecto,
                id_responsable_preconstruccion: proyectoData.nukidresponsable_preconstruccion,
                id_responsable_construccion: proyectoData.nukidresponsable_construccion,
                id_responsable_ehs: proyectoData.nukidresponsable_ehs,
                id_responsable_supervisor: proyectoData.nukidresponsable_supervisor,
                ids_clientes,
                id_empresa: proyectoData.nukidempresa.toString(),
                id_director_ejecutivo: proyectoData.nukiddirector_ejecutivo.toString(),
                costo_promedio_m2: proyectoData.nucosto_promedio_m2,
                fecha_inicio: proyectoData.dtfecha_ini != '' ? new Date(proyectoData.dtfecha_ini) as any : null,
                fecha_fin: proyectoData.dtfecha_fin != '' ? new Date(proyectoData.dtfecha_fin) as any : null,
                nombre_contacto: proyectoData.chcontacto_nombre,
                posicion_contacto: proyectoData.chcontacto_posicion,
                telefono_contacto: proyectoData.chcontacto_telefono,
                correo_contacto: proyectoData.chcontacto_correo,
                impuesto_nomina: proyectoData.impuesto_nomina
                
              })
              this.actualizarTotalMeses()
            }
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: TITLES.error, detail: err.error })
        })
    
     }else{

      this.pcsService.obtenerIdProyecto()
      .subscribe(numProyecto => {
        // this.proyectoSeleccionado = true
        // this.form.reset()
        // this.etapas.clear()
        if (numProyecto) {
          console.log("Entro al numero de proyecto " + numProyecto)
          this.mostrarFormulario = true
          // this.sharedService.cambiarEstado(true)
          // this.cargando = true
          this.pcsService.obtenerProyectoPorId(numProyecto)
            .pipe(finalize(() => {
              // this.sharedService.cambiarEstado(false)
              this.cargando = false
            }))
            .subscribe({
              next: ({ data }) => {
                //console.log(data)
                if (data.length >= 0) {
                  const [proyectoData] = data
                  const ids_clientes = proyectoData.clientes.map(cliente => cliente.idCliente.toString())
                  this.form.patchValue({
                    num_proyecto: proyectoData.nunum_proyecto.toString(),
                    nombre_proyecto: proyectoData.chproyecto.toString(),
                    alcance: proyectoData.chalcance.toString(),
                    codigo_postal: proyectoData.chcp,
                    ciudad: proyectoData.chciudad,
                    id_pais: proyectoData.nukidpais,
                    id_estatus: proyectoData.nukidestatus,
                    id_sector: proyectoData.nukidsector,
                    id_tipo_proyecto: proyectoData.nukidtipo_proyecto,
                    id_responsable_preconstruccion: proyectoData.nukidresponsable_preconstruccion,
                    id_responsable_construccion: proyectoData.nukidresponsable_construccion,
                    id_responsable_ehs: proyectoData.nukidresponsable_ehs,
                    id_responsable_supervisor: proyectoData.nukidresponsable_supervisor,
                    ids_clientes,
                    id_empresa: proyectoData.nukidempresa.toString(),
                    id_director_ejecutivo: proyectoData.nukiddirector_ejecutivo.toString(),
                    costo_promedio_m2: proyectoData.nucosto_promedio_m2,
                    fecha_inicio: proyectoData.dtfecha_ini != '' ? new Date(proyectoData.dtfecha_ini) as any : null,
                    fecha_fin: proyectoData.dtfecha_fin != '' ? new Date(proyectoData.dtfecha_fin) as any : null,
                    nombre_contacto: proyectoData.chcontacto_nombre,
                    posicion_contacto: proyectoData.chcontacto_posicion,
                    telefono_contacto: proyectoData.chcontacto_telefono,
                    correo_contacto: proyectoData.chcontacto_correo,
                    impuesto_nomina: proyectoData.impuesto_nomina
                    
                  })
                  this.actualizarTotalMeses()
                }
              },
              error: (err) => this.messageService.add({ severity: 'error', summary: TITLES.error, detail: err.error })
            })
        } else  {
            console.log('No hay proyecto');
          }
        
      })

     }

    

    this.activatedRoute.queryParams.subscribe(params => {
      const nuevo = params['nuevo']
      if (nuevo) {
        this.mostrarFormulario = true
      }
    });
  }

  getConfigCalendar() {
    this.config.setTranslation({
      firstDayOfWeek: 1,
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
      ],
      today: 'Hoy',
      clear: 'Limpiar',
    });
  }

  actualizarTotalMeses() {
    console.log('first')
    let total_meses = 0

    if (this.form.value.fecha_inicio && this.form.value.fecha_fin) {
      total_meses = differenceInMonths(this.form.value.fecha_fin, this.form.value.fecha_inicio)
    }

    this.form.patchValue({ total_meses })
  }

  poblarCombos() {
    this.getCatCategorias();
    this.getPaises();
    this.getClientes();
    this.getEstatusProyecto();
    this.getEmpleados();
    this.getCatEmpresas();
  }

  getCatEmpresas() {
    this.empresas = []
    this.cieService.getCieEmpresas()
      .subscribe({
        next: ({ data }) => {
          this.empresas = data.map(registro => ({ name: registro.chempresa, code: registro.nukidempresa.toString() }))
        },
        error: (err) => this.empresas = []
      })
  }

  getCatCategorias() {
    this.listCatSectores = [];
    this.catServ.getSectores().subscribe((data) => {
      if (data.success) {
        this.listCatSectores = <ICatalogo[]>data['data'];
        this.listCatSectores.forEach((element) => {
          this.catSectores.push({
            name: String(element.descripcion),
            value: String(element.id),
          });
        });
      }
    });
  }

  getPaises() {
    this.listCatPaises = [];
    this.catServ.getPais().subscribe((data) => {
      if (data.success) {
        this.listCatPaises = <ICatalogo[]>data['data'];
        this.listCatPaises.forEach((element) => {
          this.catPaises.push({
            name: String(element.descripcion),
            value: String(element.id),
          });
        });
      }
    });
  }

  getClientes() {
    this.listCatClientes = [];
    this.catServ.getClientes().subscribe((data) => {
      if (data.success) {
        this.listCatClientes = <ICatalogoCliente[]>data['data'];
        this.listCatClientes.forEach((element) => {
          this.catClientes.push({
            name: String(element.cliente),
            value: String(element.idCliente),
          });
        });
      }
    });
  }

  getEstatusProyecto() {
    this.listCatEstatusProyecto = [];
    this.catServ.getEstatusProyecto().subscribe((data) => {
      if (data.success) {
        this.listCatEstatusProyecto = <ICatalogo[]>data['data'];
        this.listCatEstatusProyecto.forEach((element) => {
          this.catEstatusProyecto.push({
            name: String(element.descripcion),
            value: String(element.id),
          });
        });
      }
    });
  }

  /*getEmpleados() {
    this.listEmpleados = [];
    this.catServ.getDirectores().subscribe((data) => {
      if (data.success) {
        this.listEmpleados = <IEmpleadoNew[]>data['data'];
        this.listEmpleados.forEach((element) => {
          this.catEmpleados.push({
            name: String(`${element.chnombre} ${element.chap_paterno} ${element.chap_materno} / ${element.chpuesto}`),
          });
        });
      }
    });
  }*/

  getEmpleados() {
    this.catServ.getDirectores().subscribe((directoresR) => {
      this.catEmpleados = directoresR.data.map(catEmpleados => ({ name: catEmpleados.nombre_persona, code: catEmpleados.nunum_empleado_rr_hh.toString() }))
    });

  }

  guardar() {

    console.log(this.form.value)

    if (!this.form.valid) {
      this.form.markAllAsTouched()
      return
    }

    this.sharedService.cambiarEstado(true)

    this.form.patchValue({
      fecha_inicio: this.form.value.fecha_inicio ? format(new Date(this.form.value.fecha_inicio), 'Y-MM-dd') as any : null,
      fecha_fin: this.form.value.fecha_fin ? format(new Date(this.form.value.fecha_fin), 'Y-MM-dd') as any : null
    })

    this.pcsService.guardar(this.catalogosService.esEdicion, this.form.value)
      .pipe(finalize(() => this.sharedService.cambiarEstado(false)))
      .subscribe({
        next: (data) => {
          this.messageService.add({ severity: 'success', summary: TITLES.success, detail: 'El proyecto ha sido guardado.' })
          if (!this.catalogosService.esEdicion) {

            this.pcsService.enviarNuevoProyecto({
              id: +this.form.value.num_proyecto,
              nombre: this.form.value.nombre_proyecto
            })

            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                proyecto: this.form.value.num_proyecto,
                esEdicion: 1,
                nuevo: false
              },
              queryParamsHandling: 'merge'
            })
          }
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: TITLES.error, detail: err.error })
        }
      })
  }

  esInvalido(campo: string): boolean {
    return this.form.get(campo).invalid &&
      (this.form.get(campo).dirty || this.form.get(campo).touched)
  }

  obtenerMensajeError(campo: string): string {
    let mensaje = ''

    errorsArray.forEach((error) => {
      if (this.form.get(campo).hasError(error.tipo))
        mensaje = error.mensaje.toString()
    })

    return mensaje
  }

}
