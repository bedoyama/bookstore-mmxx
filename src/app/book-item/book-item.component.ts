import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.less']
})

export class BookItemComponent implements OnInit {
  book: Book = {
    id: 1,
    name: 'En Busca del Tiempo Perdido'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
