import { NewCardComponent } from './../new-card/new-card.component';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VisitorCardService } from '../services/visitor-card.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CardElem } from '../Utils/CardElem';
import { DatePipe } from '@angular/common';
import { Router, NavigationStart, Event } from '@angular/router';

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
    private router: Router,
    public dialog: MatDialog
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.cards = new MatTableDataSource(this.visitorCardsService.getCards());
        this.cards.sort = this.sort;
      }
    });
  }

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

  // newCard() {
  //   const card = new CardElem();
  //   const dialogRef = this.dialog.open(NewCardComponent, { data: card });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if (result !== undefined) {
  //       this.visitorCardsService.addCard(result);
  //       this.cards = new MatTableDataSource(this.visitorCardsService.getCards());
  //       this.cards.sort = this.sort;
  //     }
  //   });
  // }

  returnBook(cardId: number) {
    const curDate = new Date();
    const curDateToString = `${curDate.getMonth() + 1}/${curDate.getDate()}/${curDate.getFullYear()}`;
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });

    const curDatePipe = new DatePipe('en-US');

    this.dialogRef.componentInstance.confirmMessage = `Return book by '${curDatePipe.transform(curDate, 'EEE dd/MMM/yyyy')}'?`;

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.visitorCardsService.closeCard(cardId, curDateToString);
        this.cards = new MatTableDataSource(this.visitorCardsService.getCards());
        this.cards.sort = this.sort;
      }
      this.dialogRef = null;
    });
  }

}
