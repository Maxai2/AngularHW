import { StatisticsService } from './../services/statistics.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  booksStat = new MatTableDataSource;
  visitorsStat = new MatTableDataSource;

  @ViewChild('bookSort') bookSort: MatSort;
  @ViewChild('visitSort') visitSort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'count'];

  constructor(
  private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.booksStat = new MatTableDataSource(this.statisticsService.getBooksStat());
    this.visitorsStat = new MatTableDataSource(this.statisticsService.getVisitorsStat());
  }

  ngAfterViewInit() {
    this.booksStat.sort = this.bookSort;
    this.visitorsStat.sort = this.visitSort;
  }
}
