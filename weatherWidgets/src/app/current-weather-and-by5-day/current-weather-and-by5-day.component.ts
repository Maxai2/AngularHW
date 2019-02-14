import { Component, OnInit } from '@angular/core';
import { WeatherBy5Days } from '../models/weather-by-5-days';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather-and-by5-day',
  templateUrl: './current-weather-and-by5-day.component.html',
  styleUrls: ['./current-weather-and-by5-day.component.less']
})
export class CurrentWeatherAndBy5DayComponent implements OnInit {

  weather: WeatherBy5Days;
  iNumber = [0, 1, 2, 3, 4];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.weatherBy5Days().subscribe(
      (result: WeatherBy5Days) => {
        this.weather = result;
      }
    );
  }

}
