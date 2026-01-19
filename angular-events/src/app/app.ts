import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsShow } from "./events-show/events-show";
import { UserProfile } from "./user-profile/user-profile";
import { TextStyle } from "./text-style/text-style";
import { StatusRow } from "./status-row/status-row";
import { HoverButton } from "./hover-button/hover-button";
import { SearchBox } from "./search-box/search-box";
import { PriceView } from "./price-view/price-view";
import { EventList } from "./event-list/event-list";
import { LifecycleTest } from "./lifecycle-test/lifecycle-test";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,EventsShow, UserProfile, TextStyle, StatusRow, HoverButton, SearchBox, PriceView, EventList, LifecycleTest],
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
