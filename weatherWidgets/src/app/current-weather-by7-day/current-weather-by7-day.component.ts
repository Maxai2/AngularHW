import { WeatherService } from './../services/weather.service';
import { WeatherBy7Days, WeatherByDayFrom7 } from './../models/weather-by7-days';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather-by7-day',
  templateUrl: './current-weather-by7-day.component.html',
  styleUrls: ['./current-weather-by7-day.component.less']
})
export class CurrentWeatherBy7DayComponent implements OnInit {
  weather: WeatherBy7Days;
  isActive = true;
  dayDetail: WeatherByDayFrom7;
  maxTemp: string;
  minTemp: string;
  avgTemp: string;
  totalprecip: string;
  maxwind: string

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.weatherBy7Days().subscribe((result: WeatherBy7Days) => {
      this.weather = result;
      const dayNum = localStorage.getItem('dayNum');

      if (dayNum !== null) {
        this.weatherDay(+dayNum);
      }
    });

  }

  weatherDay(dayNum: number) {
    localStorage.setItem('dayNum', dayNum.toString());
    this.dayDetail = this.weather.weatherBy7DaysList[dayNum];

    this.maxTemp = this.getColorTemp(this.dayDetail.maxtemp_c);
    this.minTemp = this.getColorTemp(this.dayDetail.mintemp_c);
    this.avgTemp = this.getColorTemp(this.dayDetail.avgtemp_c);
    this.totalprecip = this.getColor(this.dayDetail.totalprecip_mm);
    this.maxwind = this.getColor(this.dayDetail.maxwind_kph);
  }

  getColorTemp(value: number): string {
    let col: string;

    if (value >= -20 && -10 > value) {
      col = '#2e5593';
    } else if (value >= -10 && 0 > value) {
      col = '#9dc3e7';
    } else if (value >= 0 && 5 > value) {
      col = '#d2ddef';
    } else if (value >= 5 && 10 > value) {
      col = '#fbe5d7';
    } else if (value >= 10 && 15 > value) {
      col = '#ff9a66';
    } else if (value >= 15 && 20 > value) {
      col = '#f1a011';
    } else if (value >= 20 && 25 > value) {
      col = '#ffc000';
    } else if (value >= 25 && 30 > value) {
      col = '#f4d80b';
    } else if (value >= 30 && 35 > value) {
      col = '#f3c555';
    } else if (value >= 35 && 40 > value) {
      col = '#f28571';
    } else if (value >= 40 && 45 > value) {
      col = '#de4446';
    } else if (value >= 45) {
      col = '#fe0000';
    }

    return col;
  }

  getColorWind(value: number): string {
    let wind: string;

    if (value < 1) {
      wind = '#ecd7c4';
    } else if (value <= 1 && 5 < value) {
      wind = '#c4adfb';
    } else if (value <= 5 && 11 < value) {
      wind = '#d2ddef';
    } else if (value <= 11 && 19 < value) {
      wind = '#fbe5d7';
    } else if (value <= 19 && 28 < value) {
      wind = '#ff9a66';
    } else if (value <= 28 && 38 < value) {
      wind = '#f1a011';
    } else if (value <= 38 && 49 < value) {
      wind = '#ffc000';
    } else if (value <= 49 && 61 < value) {
      wind = '#f4d80b';
    } else if (value <= 61 && 74 < value) {
      wind = '#f3c555';
    } else if (value <= 74 && 88 < value) {
      wind = '#f28571';
    } else if (value <= 88 && 102 < value) {
      wind = '#de4446';
    } else if (value <= 102 && 117 < value) {
      wind = '#fe0000';
    } else if (value <= 117 && 118 < value) {
      wind = '#fe0000';
    }

    return wind;
  }
}
