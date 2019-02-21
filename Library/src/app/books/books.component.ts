import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})

export class BooksComponent implements OnInit, AfterViewInit {

  sortFilter: string[] = [
    'author', 'count', 'P. Count', 'Pub. Place', 'Pub. Year', 'title'
  ];
  books = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'title', 'author', 'publishYear', 'publishPlace', 'pageCount', 'countInLibrary'];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = new MatTableDataSource(this.bookService.getBooks());
  }

  ngAfterViewInit(): void {
    this.books.sort = this.sort;
  }

  sortValue(value: string) {
    console.log(value);
  }

  applyFilter(filterValue: string) {
    this.books.filter = filterValue.trim().toLowerCase();
  }
}
