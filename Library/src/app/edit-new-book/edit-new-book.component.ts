import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { CustomErrorStateMatcher } from '../edit-new-visitor/edit-new-visitor.component';

@Component({
  selector: 'app-edit-new-book',
  templateUrl: './edit-new-book.component.html',
  styleUrls: ['./edit-new-book.component.less']
})

export class EditNewBookComponent implements OnInit {

  bookForm: FormGroup;
  matcher = new CustomErrorStateMatcher();
  curYear: number;
  // get publishYear() { return this.bookForm.get('publishYear'); }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditNewBookComponent>,
    private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) private data: Book
  ) { }

  ngOnInit() {
    this.curYear = this.bookService.curYear;

    this.bookForm = this.fb.group({
      title: [this.data.title, Validators.required],
      author: [this.data.author, Validators.required],
      publishYear: [this.data.publishYear, [Validators.required, Validators.min(1900), Validators.max(this.curYear)]],
      publishPlace: [this.data.publishPlace, Validators.required],
      pageCount: [this.data.pageCount, [Validators.required, Validators.min(5)]],
      countInLibrary: [this.data.countInLibrary, [Validators.required, Validators.min(1)]]
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
