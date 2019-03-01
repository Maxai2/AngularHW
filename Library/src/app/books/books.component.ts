import { EditNewBookComponent } from './../edit-new-book/edit-new-book.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ConfirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';
import { Book } from '../models/book';
import { MatTableDataSource, MatSort, MatDialog, MatMenuTrigger, MatDialogRef } from '@angular/material';

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
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

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
    // this.books.sortData();
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

  newBook() {
    const book = new Book();
    const dialogRef = this.dialog.open(EditNewBookComponent, { data: book });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.bookService.addBook(result);
        this.books = new MatTableDataSource(this.bookService.getBooks());
      }
    });
  }

  deleteBook(bookId: number) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });

    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }

      this.dialogRef = null;
    });


    // console.log(confirm('R I sure in delete this book?'));
    // this.bookService.removeBook(bookId);
    // this.books = new MatTableDataSource(this.bookService.getBooks());
  }

  onContextMenu(event: MouseEvent, bookId: number) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': bookId };
    this.contextMenu.openMenu();
  }
}
