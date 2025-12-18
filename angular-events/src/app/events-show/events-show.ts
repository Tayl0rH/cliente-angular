import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {


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
