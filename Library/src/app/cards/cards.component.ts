import { NewCardComponent } from './../new-card/new-card.component';
import { VisitorCard } from './../models/visitor-card';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VisitorCardService } from '../services/visitor-card.service';

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
}
