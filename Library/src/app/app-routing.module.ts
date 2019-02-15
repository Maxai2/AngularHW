import { StatisticsComponent } from './statistics/statistics.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CardsComponent } from './cards/cards.component';
import { EditNewVisitorComponent } from './edit-new-visitor/edit-new-visitor.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { EditNewBookComponent } from './edit-new-book/edit-new-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent, children: [
    { path: 'new', component: EditNewBookComponent },
    { path: 'edit/:id', component: EditNewBookComponent }
  ]},
  { path: 'visitors', component: VisitorsComponent, children: [
    { path: 'new', component: EditNewVisitorComponent },
    { path: 'edit/:id', component: EditNewBookComponent }
  ]},
  { path: 'cards', component: CardsComponent, children: [
    { path: 'new', component: NewCardComponent}
  ]},
  { path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
