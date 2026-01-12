
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-text-style',
  imports: [NgStyle],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {
  fontSize = 20;
  isError = true;
  selected = true;

  cardStyles = {
    'border': this.selected ? '2px solid blue' : '2px solid gray'
  }

}
