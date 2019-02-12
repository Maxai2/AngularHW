import { WeatherInterceptor } from './services/weather-interceptor';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCurrentTimeComponent } from './weather-current-time/weather-current-time.component';
import { CurrentWeatherAndBy5DayComponent } from './current-weather-and-by5-day/current-weather-and-by5-day.component';
import { CurrentWeatherBy7DayComponent } from './current-weather-by7-day/current-weather-by7-day.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCurrentTimeComponent,
    CurrentWeatherAndBy5DayComponent,
    CurrentWeatherBy7DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: WeatherInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
