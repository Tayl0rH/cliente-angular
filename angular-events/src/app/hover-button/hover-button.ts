import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-button',
  imports: [],
  templateUrl: './hover-button.html',
  styleUrl: './hover-button.css',
})
export class HoverButton {

  count=0;

  showMessage(){
    console.log('Ratón sobre el botón');
    this.count++;
  }

}
