import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {

  books: Book[] = [ new Book(1, 'Hobbit', 2000, 'J.Rowling'), new Book(2, 'Harry Potter', 2002, 'J.Rowling'), new Book(3, 'Hobbit', 2005, 'J.Rowling') ];

  constructor() { }

  ngOnInit() {
  }

}
