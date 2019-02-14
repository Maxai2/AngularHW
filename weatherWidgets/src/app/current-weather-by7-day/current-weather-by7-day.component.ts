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
  dayDetail: WeatherByDayFrom7;
  maxTemp: string;
  minTemp: string;
  avgTemp: string;
  totalprecip: string;
  maxwind: string;
  iNumber = [0, 1, 2, 3, 4, 5, 6];
  dayNumTemp: number;

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.weatherBy7Days().subscribe((result: WeatherBy7Days) => {
      this.weather = result;

      const dayNum = localStorage.getItem('dayNum');
      this.dayNumTemp = +dayNum;
      if (dayNum !== null) {
        this.weatherDay(+dayNum);
      }
    });

  }

  weatherDay(dayNum: number) {
    // document.getElementById(localStorage.getItem('dayNum')).style.backgroundColor = 'white';
    localStorage.setItem('dayNum', dayNum.toString());
    this.dayNumTemp = +dayNum;
    this.dayDetail = this.weather.weatherBy7DaysList[dayNum];

    this.maxTemp = this.getColorTemp(this.dayDetail.maxtemp_c);
    this.minTemp = this.getColorTemp(this.dayDetail.mintemp_c);
    this.avgTemp = this.getColorTemp(this.dayDetail.avgtemp_c);
    this.totalprecip = this.getColorPrec(this.dayDetail.totalprecip_mm);
    this.maxwind = this.getColorWind(this.dayDetail.maxwind_kph);

    // document.getElementById(dayNum.toString()).style.backgroundColor = '#339900';
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
    } else if (value >= 1 && 5 > value) {
      wind = '#c4adfb';
    } else if (value >= 5 && 11 > value) {
      wind = '#44c2fc';
    } else if (value >= 11 && 19 > value) {
      wind = '#0446e3';
    } else if (value >= 19 && 28 > value) {
      wind = '#8efc5d';
    } else if (value >= 28 && 38 > value) {
      wind = '#04c224';
    } else if (value >= 38 && 49 > value) {
      wind = '#fcfe03';
    } else if (value >= 49 && 61 > value) {
      wind = '#fbba0d';
    } else if (value >= 61 && 74 > value) {
      wind = '#fe696e';
    } else if (value >= 74 && 88 > value) {
      wind = '#fc0204';
    } else if (value >= 88 && 102 > value) {
      wind = '#844205';
    } else if (value >= 102 && 117 > value) {
      wind = '#730104';
    } else if (value >= 117 && 118 >= value) {
      wind = '#161616';
    }

    return wind;
  }

  getColorPrec(value: number): string {
    let prec: string;

    if (value < 0.1) {
      prec = '#ffffff';
    } else if (value >= 0.1 && 1 > value) {
      prec = '#b7c8fe';
    } else if (value >= 1 && 2 > value) {
      prec = '#7f96fe';
    } else if (value >= 2 && 5 > value) {
      prec = '#0063ff';
    } else if (value >= 5 && 10 > value) {
      prec = '#63fe00';
    } else if (value >= 10 && 25 > value) {
      prec = '#ffff00';
    } else if (value >= 25 && 40 > value) {
      prec = '#ff9f00';
    } else if (value >= 40) {
      prec = '#ff1700';
    }

    return prec;
  }
}
