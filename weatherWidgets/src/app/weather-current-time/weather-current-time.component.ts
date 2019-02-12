import { CurWeather } from './../models/cur-weather';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-current-time',
  templateUrl: './weather-current-time.component.html',
  styleUrls: ['./weather-current-time.component.less']
})
export class WeatherCurrentTimeComponent implements OnInit {

  weather: CurWeather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.currentWeather().subscribe(
      (result: CurWeather) => {
        this.weather = result;
        console.log(result);
      }
    );
  }

}
