import { Component } from '@angular/core';
import { IncidentService } from '../incident-service';
import { IncidentItem } from '../incident-item/incident-item';

@Component({
  selector: 'app-incident-list',
  imports: [IncidentItem],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {

  headers = ['Tipo', 'Descripción', 'Estado']
  incidents: any[]=[];

  constructor(private incidentService: IncidentService){}

  ngOnInit(): void{
    this.incidents = this.incidentService.getIncidents();
  }

}
