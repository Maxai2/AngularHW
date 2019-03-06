import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatMenuTrigger, MatDialog } from '@angular/material';
import { VisitorService } from '../services/visitor.service';
import { EditNewVisitorComponent } from '../edit-new-visitor/edit-new-visitor.component';
import { Visitor } from '../models/visitor';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.less']
})
export class VisitorsComponent implements OnInit, AfterViewInit {

  sortFilter: string[] = [
    'fullName', 'phone'
  ];

  visitors = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  displayedColumns: string[] = ['id', 'fullName', 'phone'];

  constructor(
    private visitorService: VisitorService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.visitors = new MatTableDataSource(this.visitorService.getVisitors());
  }

  ngAfterViewInit(): void {
    this.visitors.sort = this.sort;
  }

  sortValue(value: string) {
    this.sort.sort({
      id: value,
      start: 'asc',
      disableClear: true
    });
  }

  applyFilter(filterValue: string) {
    this.visitors.filter = filterValue.trim().toLowerCase();
  }

  editVisitor(visitorId: number) {
    const visitor = this.visitorService.getVisitor(visitorId);
    console.log(visitor);
    const dialogRef = this.dialog.open(EditNewVisitorComponent, { data: visitor });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  newVisitor() {
    const visitor = new Visitor();
    const dialogRef = this.dialog.open(EditNewVisitorComponent, { data: visitor });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.visitorService.addVisitor(result);
        this.visitors = new MatTableDataSource(this.visitorService.getVisitors());
        this.visitors.sort = this.sort;
      }
    });
  }

  onContextMenu(event: MouseEvent, visitorId: number) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': visitorId };
    this.contextMenu.openMenu();
  }

}
