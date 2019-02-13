import { CurWeather } from '../models/cur-weather';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherBy5Days } from '../models/weather-by-5-days';
import { WeatherByDay } from '../models/weather-by-day';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.apixu.com/v1/';

  constructor(private http: HttpClient) { }

  currentWeather(): Observable<CurWeather> {
    return this.http.get<CurWeather>(`${this.url}current.json?`).pipe(map((data) => {

      localStorage.clear();

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
    return this.http.get<WeatherBy5Days>(`${this.url}forecast.json?`).pipe(map((data) => {

      localStorage.setItem('days', '5');

      const res = new WeatherBy5Days(
          data['location']['region'],
          data['location']['country'],
          data['current']['condition']['icon'],
          data['current']['condition']['text'],
          data['current']['wind_mph'],
          data['current']['precip_mm'],
          data['current']['pressure_mb'],
          data['current']['temp_c'],
          new Array<WeatherByDay>(...[
            new WeatherByDay(
              data['forecast']['forecastday'][0]['date'],
              data['forecast']['forecastday'][0]['day']['condition']['icon'],
              data['forecast']['forecastday'][0]['day']['avgtemp_c']),
            new WeatherByDay(
              data['forecast']['forecastday'][1]['date'],
              data['forecast']['forecastday'][1]['day']['condition']['icon'],
              data['forecast']['forecastday'][1]['day']['avgtemp_c']),
            new WeatherByDay(
              data['forecast']['forecastday'][2]['date'],
              data['forecast']['forecastday'][2]['day']['condition']['icon'],
              data['forecast']['forecastday'][2]['day']['avgtemp_c']),
            new WeatherByDay(
              data['forecast']['forecastday'][3]['date'],
              data['forecast']['forecastday'][3]['day']['condition']['icon'],
              data['forecast']['forecastday'][3]['day']['avgtemp_c']),
            new WeatherByDay(
              data['forecast']['forecastday'][4]['date'],
              data['forecast']['forecastday'][4]['day']['condition']['icon'],
              data['forecast']['forecastday'][4]['day']['avgtemp_c'])
            ]
          )
      );

      return res;
    }));
  }
}
