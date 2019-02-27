import { EditNewBookComponent } from './../edit-new-book/edit-new-book.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { MatTableDataSource, MatSort, MatDialog, MatMenuTrigger } from '@angular/material';

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

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  displayedColumns: string[] = ['id', 'title', 'author', 'publishYear', 'publishPlace', 'pageCount', 'countInLibrary'];

  constructor(
    private bookService: BookService,
    public dialog: MatDialog) { }

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

  editBook(bookId: number) {
    const book = this.bookService.getBook(bookId);
    const dialogRef = this.dialog.open(EditNewBookComponent, { data: book });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  deleteBook(bookId: number) {

  }

  onContextMenu(event: MouseEvent, bookId: number) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': bookId };
    this.contextMenu.openMenu();
  }
}
