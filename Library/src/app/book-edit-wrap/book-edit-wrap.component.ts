import { EditNewBookComponent } from './../edit-new-book/edit-new-book.component';
import { BookService } from './../services/book.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-edit-wrap',
  template: '',
  styles: ['']
})
export class BookEditWrapComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let book = new Book();

    this.route.params.forEach((params) => {
      const bookId = +params['id'];
      if (!isNaN(bookId)) {
        book = this.bookService.getBook(bookId);
      }
    });

    setTimeout(() => {
      const dialogRef = this.dialog.open(EditNewBookComponent, {data: book});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (book.id === 0) {
            this.bookService.addBook(result);
          } else {
            this.bookService.updateBook();
          }
        }

        this.router.navigate(['/books']);
      });
    });
  }

}
