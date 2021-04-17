import { CardEditWrapComponent } from './card-edit-wrap/card-edit-wrap.component';
import { VisitorEditWrapComponent } from './visitor-edit-wrap/visitor-edit-wrap.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { EditNewBookComponent } from './edit-new-book/edit-new-book.component';
import { BookEditWrapComponent } from './book-edit-wrap/book-edit-wrap.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { EditNewVisitorComponent } from './edit-new-visitor/edit-new-visitor.component';
import { CardsComponent } from './cards/cards.component';
import { NewCardComponent } from './new-card/new-card.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent, children: [
    { path: 'edit/:id', component: BookEditWrapComponent },
    { path: 'new', component: BookEditWrapComponent }
    // { path: 'new', component: EditNewBookComponent },
    // { path: 'edit/:id', component: EditNewBookComponent }
  ]},
  { path: 'visitors', component: VisitorsComponent, children: [
    // { path: 'edit/:id', component: EditNewVisitorComponent },
    // { path: 'new', component: EditNewVisitorComponent },
    { path: 'edit/:id', component: VisitorEditWrapComponent },
    { path: 'new', component: VisitorEditWrapComponent }
  ]},
  { path: 'cards', component: CardsComponent, children: [
    // { path: 'new', component: NewCardComponent}
    { path: 'new', component: CardEditWrapComponent}
  ]},
  { path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
