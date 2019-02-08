import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.less']
})
export class WelcomePageComponent implements OnInit {

  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  StartGame() {
    this.router.navigate([
      'question', {name: this.name}
    ]);
  }
}
