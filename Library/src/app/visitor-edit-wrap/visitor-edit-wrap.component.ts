import { EditNewVisitorComponent } from './../edit-new-visitor/edit-new-visitor.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VisitorService } from '../services/visitor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Visitor } from '../models/visitor';

@Component({
  selector: 'app-visitor-edit-wrap',
  template: '',
  styles: ['']
})
export class VisitorEditWrapComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private visitorService: VisitorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let visitor = new Visitor();

    this.route.params.forEach((params) => {
      const visitorId = +params['id'];
      if (!isNaN(visitorId)) {
        visitor = this.visitorService.getVisitor(visitorId);
      }
    });

    setTimeout(() => {
      const dialogRef = this.dialog.open(EditNewVisitorComponent, {data: visitor});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (visitor.id === 0) {
            this.visitorService.addVisitor(result);
          } else {
            this.visitorService.updateVisitor();
          }
        }

        this.router.navigate(['/visitors']);
      });
    });
  }

}
