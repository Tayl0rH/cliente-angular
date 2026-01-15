import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  imports: [NgClass, FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
})
export class SearchBox {
  searchText: string  = '';

  user = {
    name: '',
    email: '',
  }
}
