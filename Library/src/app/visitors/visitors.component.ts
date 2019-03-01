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
    'name', 'phone'
  ];

  visitors = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  displayedColumns: string[] = ['id', 'name', 'phone'];

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
    console.log(value);
    // this.books.sortData();
  }

  applyFilter(filterValue: string) {
    this.visitors.filter = filterValue.trim().toLowerCase();
  }

  editBook(bookId: number) {
    const book = this.visitorService.getVisitor(bookId);
    const dialogRef = this.dialog.open(EditNewVisitorComponent, { data: book });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  newBook() {
    const book = new Visitor();
    const dialogRef = this.dialog.open(EditNewVisitorComponent, { data: book });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.visitorService.addVisitor(result);
      this.visitors = new MatTableDataSource(this.visitorService.getVisitors());
    });
  }

  onContextMenu(event: MouseEvent, bookId: number) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': bookId };
    this.contextMenu.openMenu();
  }

}
