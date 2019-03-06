import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../Utils/CustomErrorStateMatcher';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookService } from '../services/book.service';
import { VisitorService } from '../services/visitor.service';
import { CardElem } from '../Utils/CardElem';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.less']
})
export class NewCardComponent implements OnInit {

  cardForm: FormGroup;
  matcher = new CustomErrorStateMatcher();

  visitors: string[];
  books: string[];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewCardComponent>,
    private visitorService: VisitorService,
    private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) private data: CardElem
  ) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      visitor: [this.data.visitorId, Validators.required],
      book: [this.data.bookId, Validators.required]
    });

    this.visitors = this.visitorService.getVisitorsName();
    this.books = this.bookService.getBooksTitle();
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.data.visitorId = this.visitors.findIndex(v => v === this.cardForm.value.visitor) + 1;
      this.data.bookId = this.books.findIndex(b => b === this.cardForm.value.book) + 1;

      this.dialogRef.close(this.data);
    }
  }

}
