import { StatElem } from './../models/stat-elem';
import { Injectable } from '@angular/core';
import { VisitorCardService } from './visitor-card.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  booksStatistics: StatElem[] = [];
  visitorsStatistics: StatElem[] = [];

  constructor(
    private cardService: VisitorCardService
  ) { }

  getBooksStat() {
    const cards = this.cardService.getCards();

    this.booksStatistics = [];
    let count: number;
    let idNum = 1;

    cards.forEach(c => {
      cards.forEach(tc => {
        if (c.bookName === tc.bookName) {
          count++;
        }
      });

      if (count > 1) {
        if (this.booksStatistics.findIndex(b => b.name === c.bookName) === -1 && this.booksStatistics.length <= 5) {
          this.booksStatistics.push(
            new StatElem(idNum++, c.bookName, count)
          );
        }
        count = 0;
      } else {
        count = 0;
      }
    });

    if (this.booksStatistics.length !== 5) {
      let cardId = 0;
      for (let i = idNum; i < 6; i++, cardId++) {
        while (this.booksStatistics.findIndex(b => b.name === cards[cardId].bookName) !== -1) {
          cardId++;
        }
        this.booksStatistics.push(
          new StatElem(i, cards[cardId].bookName, 1)
        );
      }
    }

    return this.booksStatistics;
  }

  getVisitorsStat() {
    const cards = this.cardService.getCards();

    this.visitorsStatistics = [];
    let count: number;
    let idNum = 1;

    cards.forEach(c => {
      cards.forEach(tc => {
        if (c.visName === tc.visName) {
          count++;
        }
      });

      if (count > 1) {
        if (this.visitorsStatistics.findIndex(v => v.name === c.visName) === -1 && this.visitorsStatistics.length <= 5) {
          this.visitorsStatistics.push(
            new StatElem(idNum++, c.visName, count)
          );
        }
        count = 0;
      } else {
        count = 0;
      }
    });

    if (this.visitorsStatistics.length !== 5) {
      let cardId = 0;
      for (let i = idNum; i < 6; i++, cardId++) {
        while (this.visitorsStatistics.findIndex(b => b.name === cards[cardId].visName) !== -1) {
          cardId++;
        }

        this.visitorsStatistics.push(
          new StatElem(i, cards[cardId].visName, 1)
        );
      }
    }
    return this.visitorsStatistics;
  }
}
