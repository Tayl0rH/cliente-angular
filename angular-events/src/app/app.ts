import { Component, signal } from '@angular/core';
import { EventsShow } from "./events-show/events-show";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,EventsShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-events');

  deleting = true;

  delete(){

    this.deleting = !this.deleting;
    console.log(this.deleting);

  }
}
