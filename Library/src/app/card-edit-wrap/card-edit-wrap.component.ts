import { VisitorCard } from './../models/visitor-card';
import { NewCardComponent } from './../new-card/new-card.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { VisitorCardService } from '../services/visitor-card.service';

@Component({
  selector: 'app-card-edit-wrap',
  template: '',
  styles: ['']
})
export class CardEditWrapComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private visitorCardService: VisitorCardService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const card = new VisitorCard();

    setTimeout(() => {
      const dialogRef = this.dialog.open(NewCardComponent, {data: card});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.visitorCardService.addCard(result);
        }

        this.router.navigate(['/cards']);
      });
    });
  }
}
