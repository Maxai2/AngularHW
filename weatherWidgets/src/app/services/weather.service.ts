import { CurWeather } from './../models/cur-weather';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.apixu.com/v1/';

  constructor(private http: HttpClient) { }


  currentWeather(): Observable<CurWeather> {
    return this.http.get<CurWeather>(`${this.url}current.json?`).pipe(map((data) => {

      const res = new CurWeather(
        data.location['name'],
        data.location['region'],
        data.location['country'],
        data.location['tz_id'],
        data.current.condition['icon'],
        data.current['temp_c'],
        data.current['temp_f']
        // data.name,
        // data.region,
        // data.country,
        // data.tz_id,
        // data.icon,
        // data.temp_c,
        // data.temp_f
        );

      return res;
    }));
  }
}
