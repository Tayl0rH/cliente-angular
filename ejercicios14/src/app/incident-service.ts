import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {

  incidents = [
    {tipo: 'Tipo 1', descripcion: 'descripción 1', estado: 'estado 1'},
    {tipo: 'Tipo 2', descripcion: 'descripción 2', estado: 'estado 2'},
    {tipo: 'Tipo 3', descripcion: 'descripción 3', estado: 'estado 3'},
  ]

  getIncidents(){
    return this.incidents;
  }
}
