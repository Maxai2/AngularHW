import { VisitorCard } from './../models/visitor-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorCardService {

  cards: VisitorCard[] = [
    new VisitorCard(1, 1, 1, new Date('12/01/2019'), new Date('12/03/2019')),
    new VisitorCard(2, 2, 2, new Date('12/01/2019'), null),
    new VisitorCard(3, 3, 3, new Date('12/01/2019'), null),
    new VisitorCard(4, 4, 4, new Date('12/01/2019'), new Date('12/03/2019')),
    new VisitorCard(5, 5, 5, new Date('12/01/2019'), new Date('12/03/2019')),
    new VisitorCard(6, 6, 6, new Date('12/01/2019'), new Date('12/03/2019')),
    new VisitorCard(7, 7, 7, new Date('12/01/2019'), new Date('12/03/2019')),
    new VisitorCard(8, 8, 8, new Date('12/01/2019'), null),
    new VisitorCard(9, 9, 9, new Date('12/01/2019'), null),
    new VisitorCard(10, 10, 10, new Date('12/01/2019'), null),
  ];

  constructor() { }

  getCards() {
    return this.cards;
  }

  addCard(card: VisitorCard) {
    card.id = this.cards[this.cards.length - 1].id + 1;
    this.cards.push(card);
  }
}
