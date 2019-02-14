import { CurWeather } from '../models/cur-weather';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherBy5Days, WeatherByDay } from '../models/weather-by-5-days';
import { WeatherBy7Days, WeatherByDayFrom7 } from '../models/weather-by7-days';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.apixu.com/v1/';

  constructor(private http: HttpClient) { }

  currentWeather(): Observable<CurWeather> {
    return this.http.get<CurWeather>(`${this.url}current.json?`).pipe(map((data) => {

      localStorage.removeItem('days');

      const res = new CurWeather(
        data['location']['name'],
        data['location']['region'],
        data['location']['country'],
        data['location']['tz_id'],
        data['current']['condition']['icon'],
        data['current']['temp_c'],
        data['current']['temp_f']
        );

      return res;
    }));
  }

  weatherBy5Days(): Observable<WeatherBy5Days> {
    return this.http.get<WeatherBy5Days>(`${this.url}forecast.json?days=5`).pipe(map((data) => {

      // localStorage.setItem('days', '5');

      const weathList = Array<WeatherByDay>();

      data['forecast']['forecastday'].forEach(w => {
        weathList.push(new WeatherByDay(
            w['date'],
            w['day']['condition']['icon'],
            w['day']['avgtemp_c']));
        });

      // for (let i = 0; i < 5; i++) {
      // weathList.push(new WeatherByDay(
      //   data['forecast']['forecastday'][i]['date'],
      //   data['forecast']['forecastday'][i]['day']['condition']['icon'],
      //   data['forecast']['forecastday'][i]['day']['avgtemp_c']));
      // }

      const res = new WeatherBy5Days(
          data['location']['region'],
          data['location']['country'],
          data['current']['condition']['icon'],
          data['current']['condition']['text'],
          data['current']['wind_mph'],
          data['current']['precip_mm'],
          data['current']['pressure_mb'],
          data['current']['temp_c'],
          weathList
      );

      return res;
    }));
  }

  weatherBy7Days(): Observable<WeatherBy7Days> {
    return this.http.get<WeatherBy7Days>(`${this.url}forecast.json?days=7`).pipe(map((data) => {

      // localStorage.setItem('days', '7');

      const weathList = Array<WeatherByDayFrom7>();

      data['forecast']['forecastday'].forEach(w => {
        weathList.push(new WeatherByDayFrom7(
            w['date'],
            w['astro']['sunrise'],
            w['astro']['sunset'],
            w['astro']['moonrise'],
            w['astro']['moonset'],
            w['day']['maxtemp_c'],
            w['day']['mintemp_c'],
            w['day']['avgtemp_c'],
            w['day']['totalprecip_mm'],
            w['day']['maxwind_kph']
            ));
        });

      const res = new WeatherBy7Days(
          data['location']['name'],
          data['location']['region'],
          data['location']['country'],
          weathList
      );

      return res;
    }));
  }
}
