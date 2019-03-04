import { Visitor } from './../models/visitor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  visitors: Visitor[] = [
    new Visitor(1, 'Colette Kelley', '012 435 45 67'),
    new Visitor(2, 'Ruby-Rose Lennon', '012 647 34 24'),
    new Visitor(3, 'Leanne Gibbons', '012 879 78 45'),
    new Visitor(4, 'Rumaisa Peel', '012 456 64 67'),
    new Visitor(5, 'Gene Medrano', '012 245 47 89'),
    new Visitor(6, 'Sheridan Tucker', '012 345 85 90'),
    new Visitor(7, 'Christina Mack', '012 123 36 46'),
    new Visitor(8, 'Everly Moses', '012 678 99 74'),
    new Visitor(9, 'Kara Feeney', '012 456 96 53'),
    new Visitor(10, 'Cameron Rennie', '012 967 47 85')
  ];

  constructor() { }

  getVisitors() {
    return this.visitors;
  }

  getVisitor(visitorId: number) {
    return this.visitors.find(v => v.id === visitorId);
  }

  addVisitor(visitor: Visitor) {
    visitor.id = this.visitors[this.visitors.length - 1].id + 1;
    this.visitors.push(visitor);
  }

  removeVisitor(visitorId: number) {
    this.visitors.splice(this.visitors.findIndex(v => v.id === visitorId), 1);
  }

  getVisNameById (visitorId: number) {
    return this.visitors.find(v => v.id === visitorId).fullName;
  }
}
