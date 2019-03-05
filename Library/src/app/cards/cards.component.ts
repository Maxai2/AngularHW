import { NewCardComponent } from './../new-card/new-card.component';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VisitorCardService } from '../services/visitor-card.service';
import { VisitorCard } from '../models/visitor-card';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit, AfterViewInit {

  sortFilter: string[] = [
    'visitor', 'book', 'date out', 'return book'
  ];

  cards = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  displayedColumns: string[] = ['id', 'visName', 'bookName', 'dateTookBook', 'dateReturnBook'];

  constructor(
    private visitorCardsService: VisitorCardService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cards = new MatTableDataSource(this.visitorCardsService.getCards());
  }

  ngAfterViewInit(): void {
    this.cards.sort = this.sort;
  }

  sortValue(value: string) {
    console.log(value);
    // this.books.sortData();
  }

  applyFilter(filterValue: string) {
    this.cards.filter = filterValue.trim().toLowerCase();
  }

  newCard() {
    const card = new VisitorCard();
    const dialogRef = this.dialog.open(NewCardComponent, { data: card });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.visitorCardsService.addCard(result);
        this.cards = new MatTableDataSource(this.visitorCardsService.getCards());
      }
    });
  }

  returnBook(cardId: number) {
    const curDate = new Date();
    const curDateToString = `${curDate.getMonth()}/${curDate.getDate()}/${curDate.getFullYear()}`;
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });

    this.dialogRef.componentInstance.confirmMessage = `Return book by ${curDateToString}?`;

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.visitorCardsService.closeCard(cardId, curDateToString);
        this.cards = new MatTableDataSource(this.visitorCardsService.getCards());
      }
      this.dialogRef = null;
    });
  }

}
