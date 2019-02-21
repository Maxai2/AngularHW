import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})

export class BooksComponent implements OnInit {

  tests: string[] = [
    'qwertyu', 'asdfgh', 'zxcvvb'
  ];

  constructor() { }

  ngOnInit() {
  }

}
