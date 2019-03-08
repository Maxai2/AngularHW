import { VisitorCard } from './../models/visitor-card';
import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { VisitorService } from './visitor.service';
import { CardElem } from '../Utils/CardElem';

class CardVisVal {
  constructor(
    public id: number,
    public visName: string,
    public bookName: string,
    public dateTookBook: Date,
    public dateReturnBook: Date
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class VisitorCardService {

  cardVisValArr: CardVisVal[] = [];

  cards: VisitorCard[] = [
    new VisitorCard(1, 1, 1, new Date('01/12/2019'), new Date('03/12/2019')),
    new VisitorCard(2, 2, 2, new Date('01/12/2019'), null),
    new VisitorCard(3, 3, 3, new Date('01/12/2019'), null),
    new VisitorCard(4, 4, 4, new Date('01/12/2019'), new Date('03/12/2019')),
    new VisitorCard(5, 5, 5, new Date('01/12/2019'), new Date('03/12/2019')),
    new VisitorCard(6, 6, 6, new Date('01/12/2019'), new Date('03/12/2019')),
    new VisitorCard(7, 7, 7, new Date('01/12/2019'), new Date('03/12/2019')),
    new VisitorCard(8, 8, 8, new Date('01/12/2019'), null),
    new VisitorCard(9, 9, 9, new Date('01/12/2019'), null),
    new VisitorCard(10, 10, 10, new Date('01/12/2019'), null),
  ];

  constructor(
    private bookService: BookService,
    private visitorService: VisitorService
  ) {
    const ls = localStorage.getItem('cards');

    if (ls === null) {
      localStorage.setItem('cards', JSON.stringify(this.cards));
    } else {
      this.cards = JSON.parse(ls);
    }
  }

  getCards(): CardVisVal[] {
    this.cardVisValArr = [];

    this.cards.forEach(c => {
      this.cardVisValArr.push(new CardVisVal(
        c.id,
        this.visitorService.getVisNameById(c.visitorId),
        this.bookService.getBookNameById(c.bookId),
        c.dateTookBook,
        c.dateReturnBook
        ));
    });
    return this.cardVisValArr;
  }

  addCard(card: CardElem) {
    const id = this.cards[this.cards.length - 1].id + 1;
    const curDate = new Date();
    const curDateToString = `${curDate.getMonth() + 1}/${curDate.getDate()}/${curDate.getFullYear()}`;
    const visCard = new VisitorCard(id, card.visitorId, card.bookId, new Date(curDateToString), null);
    this.cards.push(visCard);
    this.bookService.getBook(card.bookId).countInLibrary--;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  closeCard(cardId: number, curDate: string) {
    this.cards.find(c => c.id === cardId).dateReturnBook = new Date(curDate);
    this.bookService.getBook(this.cards.find(c => c.id === cardId).bookId).countInLibrary++;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }
}
