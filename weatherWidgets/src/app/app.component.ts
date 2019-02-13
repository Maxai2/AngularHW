import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public locName: string;
  
  constructor() {}
    
    ngOnInit(): void {
      const locStorName = localStorage.getItem('locationName');
      if (locStorName) {
        this.locName = locStorName; 
      }
    }

    search() {
      localStorage.setItem('locationName', this.locName);
      window.location.reload();
    }
}
