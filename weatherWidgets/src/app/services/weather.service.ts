import { CurWeather } from './../models/cur-weather';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.apixu.com/v1/';

  constructor(private http: HttpClient) { }

  currentWeather(): Observable<CurWeather> {
    return this.http.get<CurWeather>(`${this.url}current.json?`).pipe(tap((result) => {
      localStorage.setItem('name', result.name);
    }));
  }
}
