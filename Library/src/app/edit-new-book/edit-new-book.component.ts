import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../models/book';

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

  }

}
