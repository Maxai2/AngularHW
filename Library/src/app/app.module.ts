import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { CardsComponent } from './cards/cards.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EditNewBookComponent } from './edit-new-book/edit-new-book.component';
import { EditNewVisitorComponent } from './edit-new-visitor/edit-new-visitor.component';
import { NewCardComponent } from './new-card/new-card.component';
import { MaterialAppModule } from './ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    VisitorsComponent,
    CardsComponent,
    StatisticsComponent,
    EditNewBookComponent,
    EditNewVisitorComponent,
    NewCardComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialAppModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
