import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[app-incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {

  @Input() incident: any;
  @Output() estadoChange = new EventEmitter<any>();

  changeEstado(){
    this.estadoChange.emit(this.incident.estado='Cambio');
  }
}
