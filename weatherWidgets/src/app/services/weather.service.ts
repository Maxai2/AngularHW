import { CurWeather } from './../models/cur-weather';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.apixu.com/v1/';

  constructor(private http: HttpClient) { }

  currentWeather() {
    return this.http.get<CurWeather>(`${this.url}current.json?`)
  }
}
