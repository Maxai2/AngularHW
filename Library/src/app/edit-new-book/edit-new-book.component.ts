import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-new-book',
  templateUrl: './edit-new-book.component.html',
  styleUrls: ['./edit-new-book.component.less']
})
export class EditNewBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditNewBookComponent>,
    private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) private data: Book
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [this.data.title, Validators.required],
      author: [this.data.author, Validators.required],
      publishYear: [this.data.publishYear, Validators],
      publishPlace: [this.data.publishPlace, Validators.required],
      pageCount: [this.data.pageCount, Validators.required],
      countInLibrary: [this.data.countInLibrary, Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      if (this.data.id === 0) {
        const id = this.bookService.getNewLastId();
        const book = new Book(
          id,
          this.bookForm.value.title,
          this.bookForm.value.author,
          this.bookForm.value.publishYear,
          this.bookForm.value.publishPlace,
          this.bookForm.value.pageCount,
          this.bookForm.value.countInLibrary
        );

        this.dialogRef.close(book);
      } else {
        this.data.author = this.bookForm.value.author;
        this.data.countInLibrary = this.bookForm.value.countInLibrary;
        this.data.pageCount = this.bookForm.value.pageCount;
        this.data.publishPlace = this.bookForm.value.publishPlace;
        this.data.publishYear = this.bookForm.value.publishYear;
        this.data.title = this.bookForm.value.title;

        this.dialogRef.close(this.data);
      }
    }
  }

}
