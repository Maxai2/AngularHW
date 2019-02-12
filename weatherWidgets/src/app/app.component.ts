import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public locName: string;

  constructor(
    private router: Router) {}

    search() {
      localStorage.setItem('locationName', this.locName);
      this.router.navigate(['curTime']);
      window.location.reload();
    }
}
