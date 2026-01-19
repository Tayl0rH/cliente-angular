import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { FormsModule } from "@angular/forms";
import { TitleFilterPipe } from '../pipes/title-filter-pipe';

@Component({
  selector: 'app-event-list',
  imports: [ FormsModule, TitleFilterPipe],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})

// CLASS
export class EventList {

  filterSearch: string = ''

  events: IEvent[] = [
      {
        id: 1,
        title: 'Evento 1',
        image: 'img.png',
        date: '2025-12-23',
        description: 'Descripción 1',
        price: 23,
      },
      {
        id: 2,
        title: 'Evento 2',
        image: 'img2.png',
        date: '2025-02-10',
        description: 'Descripción 2',
        price: 5.99,
      }
    ]

}
