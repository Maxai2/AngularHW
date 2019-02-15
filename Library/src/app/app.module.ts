import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { CardsComponent } from './cards/cards.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EditNewBookComponent } from './edit-new-book/edit-new-book.component';
import { EditNewVisitorComponent } from './edit-new-visitor/edit-new-visitor.component';
import { NewCardComponent } from './new-card/new-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    VisitorsComponent,
    CardsComponent,
    StatisticsComponent,
    EditNewBookComponent,
    EditNewVisitorComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
