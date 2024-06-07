import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CostosEmpleadoResponse,UpPersonasResponse,PuestosResponse } from '../models/costos.model';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  baseUrl = environment.urlApiBovis;

  http = inject(HttpClient)

  constructor() { }

  getCostosEmpleado() {
    return this.http.get<CostosEmpleadoResponse>(`${ this.baseUrl }api/Costo/costos/0`)
  }

  getCostoID(id: string) {
    return this.http.get<CostosEmpleadoResponse>(`${this.baseUrl}api/Costo/Empleado/${id}`)
  }

  getPersonas() {
    return this.http.get<UpPersonasResponse>(`${this.baseUrl}api/Persona/Personas/true`);
  }

  getPuestos() {
    return this.http.get<PuestosResponse>(`${this.baseUrl}api/Catalogo/Puesto/true`)
  }
}
