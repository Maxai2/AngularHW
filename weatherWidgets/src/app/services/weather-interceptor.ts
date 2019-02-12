import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

  apiKey = 'e5df272ebb7b4d239f3212259190802';

  constructor(private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const locName = localStorage.getItem('locationName');

    console.log(locName);
    const p = new HttpParams().set('key', this.apiKey).set('q', locName);
    req = req.clone({ params: p });

    return next.handle(req);
  }
}
